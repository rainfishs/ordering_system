import pymysql.cursors
from flask import Flask, request, render_template
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World! /'

@app.route("/admin")
def helloadmin():
    return render_template('admin.html')

@app.route("/teacher/<a>")
def helloteacher(a):
    return render_template('teacher.html',parm_value=a)

@app.route("/student/<a>")
def hellostudent(a):
    return render_template('student.html',parm_value=a)

#測試調度Student
@app.route('/GetStudent')
def getstudent():
    connection=pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM Student"
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
    finally:
        connection.close()


@app.route('/AddStudent',methods=['POST'])
def addstudent():
    connection=pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            sql = "INSERT INTO Student (sId, sName) VALUES (%s, %s)"
            cursor.execute(sql,(request.json['sId'],request.json['sName']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()

@app.route('/DeleteStudent',methods=['POST'])
def deletestudent():
    connection=pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            sql = "DELETE FROM Student WHERE sId = %s"
            cursor.execute(sql,(request.json['sId']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()

@app.route('/UpdateStudent',methods=['POST'])
def updatestudent():
    connection=pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            sql = "UPDATE Student SET sName = %s WHERE sId = %s"
            cursor.execute(sql,(request.json['sName'],request.json['sId']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()

@app.route('/GetTeacher')
def getteacher():
    connection=pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM Teacher"
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
            #以tId查詢Department 一個老師能有多個系所 將系所名稱串接成一個字串 以逗號分隔放入dName欄位
            for i in result:
                sql = "SELECT dName FROM Department WHERE tId = %s"
                cursor.execute(sql,(i['tId']))
                dName = cursor.fetchall()
                i['dName'] = ','.join([d['dName'] for d in dName])
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()

@app.route('/AddTeacher',methods=['POST'])
def addteacher():
    connection=pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            #先新增Teacher
            sql = "INSERT INTO Teacher (tId, tName) VALUES (%s, %s)"
            cursor.execute(sql,(request.json['tId'],request.json['tName']))
            #再新增Department
            for i in request.json['dName']:
                sql = "INSERT INTO Department (dName, tId) VALUES (%s, %s)"
                cursor.execute(sql,(i,request.json['tId']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
        
@app.route('/DeleteTeacher',methods=['POST'])
def deleteteacher():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            #刪除Teacher
            sql = "DELETE FROM Teacher WHERE tId = %s"
            cursor.execute(sql,(request.json['tId']))
            #刪除Department
            sql = "DELETE FROM Department WHERE tId = %s"
            cursor.execute(sql,(request.json['tId']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
@app.route('/GetCourse')
def getcourse():
    connection=pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM Course"
            cursor.execute(sql)
            result = cursor.fetchall()
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
@app.route('/AddCourse',methods=['POST'])
def addcourse():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            sql = "INSERT INTO Course (cNo, cName, cCredit) VALUES (%s, %s, %s)"
            cursor.execute(sql,(request.json['cNo'],request.json['cName'],request.json['cCredit']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
@app.route('/DeleteCourse',methods=['POST'])
def deletecourse():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            sql = "DELETE FROM Course WHERE cNo = %s"
            cursor.execute(sql,(request.json['cNo']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()

@app.route('/GetCourseNotTeaches',methods=['POST']) #使用tId查詢老師未教授的課程
def getcourse_not_teaches():
    connection=pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor: 
            sql = "SELECT * FROM Course WHERE cNo NOT IN (SELECT cNo FROM Teaches WHERE tId = %s)"
            cursor.execute(sql,(request.json['tId']))
            result = cursor.fetchall()
            if len(result) == 0:
                return []
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
        
@app.route('/GetCourseTeaches',methods=['POST']) #使用tId查詢老師已教授的課程
def getcourse_teaches():
    connection=pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor: 
            #sql = "SELECT * FROM Course WHERE cNo IN (SELECT cNo FROM Teaches WHERE tId = %s)"
            #改用 natural join
            sql = "SELECT * FROM Course NATURAL JOIN Teaches WHERE tId = %s"
            cursor.execute(sql,(request.json['tId']))
            result = cursor.fetchall()
            if len(result) == 0:
                return []
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()

@app.route('/AddTeachesCourse',methods=['POST']) #新增老師教授的課程
def addteachescourse():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor: 
            sql = "INSERT INTO Teaches (tId, cNo) VALUES (%s, %s)"
            cursor.execute(sql,(request.json['tId'],request.json['cNo']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()

@app.route('/DeleteTeachesCourse',methods=['POST']) #刪除老師教授的課程
def deleteteachescourse():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor: 
            sql = "DELETE FROM Teaches WHERE tId = %s AND cNo = %s"
            cursor.execute(sql,(request.json['tId'],request.json['cNo']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()

@app.route('/GetItem',methods=['POST']) #獲取計分項目 以cNo查詢
def getitem():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try: 
        with connection.cursor() as cursor: 
            sql = "SELECT * FROM Item WHERE cNo = %s"
            cursor.execute(sql,(request.json['cNo'],))
            result = cursor.fetchall()
            if len(result) == 0:
                return []
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
@app.route('/AddItem',methods=['POST']) #新增計分項目
def additem():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try: 
        with connection.cursor() as cursor: 
            sql = "INSERT INTO Item (cNo, iName, scale) VALUES (%s, %s, %s)"
            cursor.execute(sql,(request.json['cNo'],request.json['iName'],request.json['scale']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
@app.route('/DeleteItem',methods=['POST']) #刪除計分項目
def deleteitem():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try: 
        with connection.cursor() as cursor: 
            sql = "DELETE FROM Item WHERE iName = %s"
            cursor.execute(sql,(request.json['iName']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
#GetTakes 靠cNo找takes所有修這門課的學生列出其學號姓名和學期成績(takes.finalScore)
@app.route('/GetTakes',methods=['POST'])
def gettakes():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try: 
        with connection.cursor() as cursor: 
            #sql = "SELECT Student.sId, Student.sName, Takes.finalScore FROM Student, Takes WHERE Student.sId = Takes.sId AND Takes.cNo = %s"
            #改用 natural join
            sql = "SELECT sId, sName, finalScore FROM Student NATURAL JOIN Takes WHERE cNo = %s"
            
            cursor.execute(sql,(request.json['cNo'],))
            result = cursor.fetchall()
            print(result)
            if len(result) == 0:
                return []
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
#UpdateFinalScore 更新學期成績
@app.route('/UpdateFinalScore',methods=['POST'])#傳入 cNo, sId, finalScore
def updatefinalscore():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try: 
        with connection.cursor() as cursor:
            sql = "UPDATE Takes SET finalScore = %s WHERE cNo = %s AND sId = %s"
            cursor.execute(sql,(request.json['finalScore'],request.json['cNo'],request.json['sId']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()        
#AddSubmit 提交 cNo, sId, iName, score
@app.route('/AddSubmit',methods=['POST'])
def addsubmit():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try: 
        with connection.cursor() as cursor:
            sql = "INSERT INTO Submit (cNo, sId, iName, score) VALUES (%s, %s, %s, %s)"
            cursor.execute(sql,(request.json['cNo'],request.json['sId'],request.json['iName'],request.json['score']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
#GetCourseStudent 靠cNo找修這門課的學生
@app.route('/GetCourseStudent',methods=['POST'])
def getcoursestudent():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try: 
        with connection.cursor() as cursor:
            #sql = "SELECT sId, sName FROM Student WHERE sId IN (SELECT sId FROM Takes WHERE cNo = %s)"
            #改用 natural join
            sql = "SELECT sId, sName FROM Student NATURAL JOIN Takes WHERE cNo = %s"
            cursor.execute(sql,(request.json['cNo'],))
            result = cursor.fetchall()
            print(result)
            if len(result) == 0:
                return []
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
#GetSubmit 靠cNo, iName找該學生提交的作業 列出所有修這門課的學生的學號姓名及這個項目成績
@app.route('/GetSubmit',methods=['POST'])
def getsubmit():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try: 
        with connection.cursor() as cursor:
            #查submit表 取出所有符合cNo, iName的資料 外加student表的sName
            #sql = "SELECT * FROM Submit WHERE cNo = %s AND iName = %s"
            #改用 natural join
            sql = "SELECT sId, sName, score FROM Submit NATURAL JOIN Student WHERE cNo = %s AND iName = %s"
            
            cursor.execute(sql,(request.json['cNo'],request.json['iName']))
            result = cursor.fetchall()
            print(result)
            if len(result) == 0:
                return []
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
#UpdateSubmit 更新作業成績
@app.route('/UpdateSubmit',methods=['POST'])
def updatesubmit():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try: 
        with connection.cursor() as cursor:
            sql = "UPDATE Submit SET score = %s WHERE cNo = %s AND sId = %s AND iName = %s"
            cursor.execute(sql,(request.json['score'],request.json['cNo'],request.json['sId'],request.json['iName']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
#GetCourseNotTakes 靠sId找學生未修的課程
@app.route('/GetCourseNotTakes',methods=['POST'])
def getcoursenottakes():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try: 
        with connection.cursor() as cursor:
            #sql = "SELECT * FROM Course NATURAL JOIN Takes NATURAL JOIN Student WHERE sId = %s"
            #這是錯的 要列的是學生未修的課程 不是學生已修的課程
            sql = "SELECT * FROM Course WHERE cNo NOT IN (SELECT cNo FROM Takes WHERE sId = %s)"
            cursor.execute(sql,(request.json['sId'],))
            result = cursor.fetchall()
            print(result)
            if len(result) == 0:
                return []
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
#GetCourseTakes 靠sId找學生已修的課程
@app.route('/GetCourseTakes',methods=['POST'])
def getcoursetakes():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor)
    try: 
        with connection.cursor() as cursor:
            sql = "SELECT * FROM Course NATURAL JOIN Takes NATURAL JOIN Student WHERE sId = %s"
            cursor.execute(sql,(request.json['sId'],))
            result = cursor.fetchall()
            print(result)
            if len(result) == 0:
                return []
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
#AddTakesCourse 新增學生修課
@app.route('/AddTakesCourse',methods=['POST'])
def addtakescourse():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try: 
        with connection.cursor() as cursor:
            sql = "INSERT INTO Takes (sId, cNo) VALUES (%s, %s)"
            cursor.execute(sql,(request.json['sId'],request.json['cNo']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
#DeleteTakesCourse 刪除學生修課
@app.route('/DeleteTakesCourse',methods=['POST'])
def deletetakescourse():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try: 
        with connection.cursor() as cursor:
            sql = "DELETE FROM Takes WHERE sId = %s AND cNo = %s"
            cursor.execute(sql,(request.json['sId'],request.json['cNo']))
            connection.commit()
            return "success"
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()

#GetCourseInformation 靠cNo找課程資訊 列出課程名稱(cName)、學分數(cCredit)、授課老師(Teacher.tName 複數個)、修課學生數(count(Takes.sId))
@app.route('/GetCourseInformation',methods=['POST'])
def getcourseinformation():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try: 
        with connection.cursor() as cursor:
            #回傳資料結構範例 {'cName': '資料庫', 'cCredit': 3, 'tName': '王小明,陳小華', 'sNum': 2}
            
            result = {}
            #先找課程名稱(cName)、學分數(cCredit) + 學生數
            sql = "SELECT cName, cCredit, COUNT(sId) FROM Course NATURAL JOIN Takes WHERE cNo = %s"
            cursor.execute(sql,(request.json['cNo'],))
            res = cursor.fetchall()
            #將結果放入result
            result['cName'] = res[0]['cName']
            result['cCredit'] = res[0]['cCredit']
            result['sNum'] = res[0]['COUNT(sId)']
            print(result)
            #再找授課老師(Teacher.tName 複數個)
            sql = "SELECT tName FROM Teacher NATURAL JOIN Teaches WHERE cNo = %s"
            cursor.execute(sql,(request.json['cNo'],))
            res = cursor.fetchall()
            #將結果放入result
            result['tName'] = ','.join([d['tName'] for d in res])
            print(result)
            
            #回傳result
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
#GetCourseScores cNo, sId 找 iName scale、submit表的score
@app.route('/GetCourseScores',methods=['POST'])
def getcoursescores():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try: 
        with connection.cursor() as cursor:
            sql = "SELECT iName, scale, score FROM Item NATURAL JOIN Submit WHERE cNo = %s AND sId = %s"
            cursor.execute(sql,(request.json['cNo'],request.json['sId']))
            result = cursor.fetchall()
            print(result)
            if len(result) == 0:
                return []
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()

#查該科目總成績
@app.route('/GetCourseFinalScore',methods=['POST'])
def getcoursefinalscore():
    connection = pymysql.connect(host="localhost",user='user',password='password',db='db_020',cursorclass=pymysql.cursors.DictCursor) 
    try:
        with connection.cursor() as cursor:
            #先找該科目的總成績
            sql = "SELECT finalScore FROM Takes WHERE cNo = %s and sId = %s"
            cursor.execute(sql,(request.json['cNo'],request.json['sId']))
            result = cursor.fetchall()
            print(result)
            return result
    except Exception as e:
        print("Exeception occured:{}".format(e))
        return "fail"
    finally:
        connection.close()
app.run(host='0.0.0.0', port=80)