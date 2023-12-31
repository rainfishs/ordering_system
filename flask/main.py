from flask import Flask,request,render_template,jsonify,json,send_file
from flask_socketio import SocketIO
import os
app = Flask(__name__)
socketio = SocketIO(app)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/admin")
def helloadmin():
    if request.headers.environ['REMOTE_ADDR'] == '127.0.0.1':
        return render_template('admin.html')
    return '404',404

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

@app.route('/GetMeals', methods=['POST'])
def getmeals():
    with open(r'today\Meals.json','r',encoding='UTF-8') as f:
        data = json.load(f)
        socketio.emit('received',data)
    return {}

@app.route('/Meal', methods=['POST'])
def setter():
    with open(r'today\Meals.json','r+',encoding='UTF-8') as f:
        data = json.load(f)
        if(not isinstance(data,list)):
            data = []
        data.append(request.json)
        print(data)
        f.seek(0)
        json.dump(data,f) 
        socketio.emit('received',data)
    return {}


if __name__ == '__main__':
    socketio.run(app,'0.0.0.0',debug=True,port=8080)