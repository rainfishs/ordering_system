from flask import Flask,request,render_template,jsonify,json,send_file
from flask_socketio import SocketIO
import os
app = Flask(__name__)
socketio = SocketIO(app)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/disconnect")
def dis():
    socketio.emit('received',{'data': 42})
    return '123'

@app.route("/admin")
def helloadmin():
    return render_template('admin.html')

@app.route('/GetMenu', methods=['GET'])
def getmenu():
    with open(r'today\Menu.json','r',encoding='UTF-8')as f:
        return json.load(f)

@app.route('/GetStuffs', methods=['GET'])
def getstuffs():
    with open(r'data\Stuffs.json','r',encoding='UTF-8')as f:
        return json.load(f)

@app.route('/GetImg', methods=['GET'])
def getimg():
    return send_file(r'today\menu.jpg',mimetype='image/gif')

@app.route('/GetImgb', methods=['GET'])
def getimgb():
    return send_file(r'data\button.png',mimetype='image/gif')

@app.route('/Meal', methods=['POST'])
def setter():
    with open('today/Meals.json','a+',encoding='UTF-8')as f:
        json.dump(request.json,f)
    return jsonify(result='OK')

if __name__ == '__main__':
    os.system('copy.bat')
    app.run('0.0.0.0',debug=True,port=8080)