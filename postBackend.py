from flask import Flask
from flask_cors import CORS
from flask import request
from flask import jsonify
from model_mongodb import Post

app = Flask(__name__)

CORS(app)

@app.route('/')
def flask_mongodb_atlas():
    return 'flask mongodb atlas!'

@app.route('/posts', methods=['GET', 'POST'])
def get_posts():
    if request.method == 'GET':
        posts = Post().find_all()
        return {"posts_list": posts}
    elif request.method == 'POST':
        postToAdd = request.get_json()
        newPost = Post(postToAdd)
        newPost.save()
        resp = jsonify(newPost), 201
        return resp

if __name__ == '__main__':
    app.run(port=5000)
