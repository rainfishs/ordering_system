from flask import Flask,request,render_template,jsonify,json


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


if __name__ == '__main__':
    app.run('0.0.0.0',debug=True,port=80)