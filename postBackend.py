from flask import Flask
from flask_cors import CORS
from flask import request
from flask import jsonify
from model_mongodb import Comment
from model_mongodb import Post, Login

app = Flask(__name__)

CORS(app)

@app.route('/comment', methods=['POST'])
def post_comments():
    commentToAdd = request.get_json()
    newComment = Comment(commentToAdd)
    newComment.save()
    resp = jsonify(newComment), 201
    return resp

@app.route('/getComment', methods=['POST']) 
def get_comments():
    rawData = request.get_json()
    comments = Comment().find_relevant(rawData)
    return {"comments_list": comments}

@app.route('/')
def flask_mongodb_atlas():
    return 'flask mongodb atlas!'

@app.route('/login1', methods=['GET'])
def get_account():
    if request.method == 'GET':
        return {"account_list": Login().find_all()}

@app.route('/login', methods=['GET', 'POST'])
def get_accounts():
    if request.method == 'GET':
        return {"account_list": Login().find_all()}

    elif request.method == 'POST':
        accountToAdd = request.get_json()
        newaccount = Login(accountToAdd)
        newaccount.save()
        return jsonify(token=accountToAdd["username"])


@app.route('/forum', methods=['GET'])
def get_forumPosts():
    if request.method == 'GET':
        posts = Post().find_all()
        return {"posts_list": posts}

@app.route('/home', methods = ['GET'])
def get_posts_searchbar():
    if request.method == 'GET':
        posts = Post().find_all()
        return {"posts_list": posts}

@app.route('/posts', methods=['GET', 'POST'])
def get_posts():
    if request.method == 'GET':
        return {"posts_list": Post().find_all()}

    elif request.method == 'POST':
        postToAdd = request.get_json()
        newPost = Post(postToAdd)
        newPost.save()
        resp = jsonify(newPost), 201
        return resp

@app.route('/filter', methods=['POST'])
def add_filters():
    rawData = request.get_json()
    filters = {}
    posts = []
    for i in range(len(rawData)):
        for key, value in rawData[i].items():
            if value == "Cost":
                filters["Cost"] = key
            if value == "keyWords":
                filters["keyWords"] = key
            posts.append(Post().apply_filter(filters, posts))
            filters = {}
    combined = sum(posts, [])
    retPosts = []
    for i in combined:
        if i not in retPosts:
            retPosts.append(i)

    return {"post_list": retPosts}

    



if __name__ == '__main__':
    app.run(port=5000)
