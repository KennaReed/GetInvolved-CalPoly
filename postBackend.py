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
        search_keyWords = request.args.get('keyWords')
        search_eventDate = request.args.get('DateEvent')
        search_publisher = request.args.get('publisher')
        search_cost = request.args.get('Cost')
        filters = {}
        if (search_keyWords):
            filters["keyWords"] = search_keyWords
        if (search_eventDate):
            filters["DateEvent"] = search_eventDate
        if (search_publisher):
            filters["publisher"] = search_publisher
        if (search_cost):
            filters["Cost"] = search_cost
        
        if (filters == []):
            posts = Post().find_all()
        else: 
            posts = Post().apply_filter(filters)

        return {"posts_list": posts}

    elif request.method == 'POST':
        postToAdd = request.get_json()
        newPost = Post(postToAdd)
        newPost.save()
        resp = jsonify(newPost), 201
        return resp


if __name__ == '__main__':
    app.run(port=5000)
