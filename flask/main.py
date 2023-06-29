from flask import Flask,request,render_template,jsonify,json,send_file
import os
app = Flask(__name__)
@app.route("/")
def hello():
    return render_template('index.html')
@app.route('/Get', methods=['GET'])
def getter():
    with open('hi.json','r',encoding='UTF-8')as f:
        return json.load(f)

@app.route('/Set', methods=['POST'])
def setter():
    with open('hi.json','w',encoding='UTF-8')as f:
        json.dump(request.json,f)
    return jsonify(result='OK')

@app.route('/GetImg', methods=['GET'])
def getimg():
    return send_file('menu.jpg',mimetype='image/gif')

@app.route('/GetImgb', methods=['GET'])
def getimgb():
    return send_file('button1.png',mimetype='image/gif')

if __name__ == '__main__':
    os.system('copy.bat')
    app.run('0.0.0.0',debug=True,port=8080)