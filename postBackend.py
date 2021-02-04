from flask import Flask
from flask_cors import CORS
import db

app = Flask(__name__)

CORS(app)

@app.route('/')
def flask_mongodb_atlas():
    return 'flask mongodb atlas!'

@app.route("/test")
def test():
   return "Connected to the data base!" 
