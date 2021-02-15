import pymongo
from bson import ObjectId
from pymongo import MongoClient

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

class Post(Model):
    db_client = MongoClient('mongodb+srv://daSilva:teamDPosts@csc-308-teamd.crp9s.mongodb.net/Posts?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE')
    collection = db_client["Posts"]["websitePosts"]

    def find_all(self):
        posts = list(self.collection.find())
        for post in posts:
            post["_id"] = str(post["_id"]) #converting ObjectId to str
        return posts
