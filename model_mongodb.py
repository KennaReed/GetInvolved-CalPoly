import os
from flask import Flask
from bson import ObjectId
from pymongo import MongoClient
from dotenv import load_dotenv
from datetime import datetime
APP_ROOT = os.path.join(os.path.dirname(__file__), '..')
dotenv_path = os.path.join(APP_ROOT, '.env')
load_dotenv(dotenv_path)

def create_app():
    app = Flask(__name__)
    return app

class Model(dict):
    """
    A simple model that wraps mongodb document
    """
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    def save(self):
        if not self._id:
            self.collection.insert(self)
        else:
            self._id = ObjectId(self._id)
            self.collection.update(
                { "_id": ObjectId(self._id) }, self)
        self._id = str(self._id)
        

    def reload(self):
        if self._id:
            result = self.collection.find_one({"_id": ObjectId(self._id)})
            if result :
                self.update(result)
                self._id = str(self._id)
                return True
        return False

    def remove(self):
        if self._id:
            resp = self.collection.delete_one({"_id": ObjectId(self._id)})
            return resp.deleted_count

class Model2(dict):
    """
    A simple model that wraps mongodb document
    """
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    def save(self):
        if not self._id:
            self.collection.insert(self)
        else:
            self._id = ObjectId(self._id)
            self.collection.update(
                { "_id": ObjectId(self._id) }, self)
        self._id = str(self._id)
        

    def reload(self):
        if self._id:
            result = self.collection.find_one({"_id": ObjectId(self._id)})
            if result :
                self.update(result)
                self._id = str(self._id)
                return True
        return False

class Post(Model):
    url = os.getenv('DB_LINK')
    db_client = MongoClient(url)
    collection = db_client["Posts"]["websitePosts"]

    def __eq__(self, other):
        return self.DatePosted == other.DatePosted

    def find_all(self):
        posts = list(self.collection.find())
        for post in posts:
            post["_id"] = str(post["_id"]) #converting ObjectId to str
        return posts

    def apply_filter(self, filters, ogPosts):
        posts = list(self.collection.find(filters))
    
        for post in posts:
            post["_id"] = str(post["_id"]) #converting ObjectId to str

        return posts

class Comment(Model):
    url = os.getenv('DB_COMMENTS')
    db_client = MongoClient(url)
    collection = db_client["Comments"]["Comments"]

    def find_all(self):
        comments = list(self.collection.find())
        for comment in comments:
            comment["_id"] = str(comment["_id"]) #converting ObjectId to str
        return comments
class Login(Model2):
    url = os.getenv('DB_LINK')
    db_client = MongoClient(url)
    collection = db_client["Login"]["account"]


    def find_all(self):
        accounts = list(self.collection.find())
        for account in accounts:
            account["_id"] = str(account["_id"])
        return accounts

