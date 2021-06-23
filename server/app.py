from flask import Flask, jsonify, send_from_directory
#import json
from time import sleep
import os
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash


#include a counter after to make sure that when the same service is called after a prolonged period of time, I should reset the gen
def generate(file_path):
        with open(file_path, "r") as logfile:
            logfile.seek(0, os.SEEK_END)
            while True:
                #gives a generator object that can be called repeatedly using next which resumes the method from where it originally yielded
                yield {"entry": logfile.readlines()}

app = Flask(__name__, static_folder="../dist/skycope-logviewer", static_url_path="")
auth = HTTPBasicAuth()

users = {
    "user1": generate_password_hash("user1"),
    "user2": generate_password_hash("user2")
}

app.config["DEBUG"] = True

log_file_path_1 = "./logs/service1-debug.log"
log_file_path_2 = "./logs/service2-debug.log"

gen_bool = True
gen = generate(log_file_path_1)

@app.route("/", methods=['GET'])
def main():
    return send_from_directory('../dist/skycope-logviewer/', 'index.html')

@auth.verify_password
def verify_password(username, password):
    if username in users and \
        check_password_hash(users.get(username), password):
        return username
    return "WRONG LOGIN CREDENTIALS"

@app.route("/run_service1", methods=['GET'])
def run_service1():
    os.system('python service1.py')
    return "Running Service 1"

@app.route("/run_service2", methods=['GET'])
def run_service2():
    os.system('python service2.py')
    return "Running Service 2"

@app.route("/service1", methods=['GET'])
def service1():
    global gen_bool
    global gen
    if gen_bool == False:
        gen_bool = True
        gen = None
    if gen is None: 
        gen = generate(log_file_path_1)
    return next(gen), {'Access-Control-Allow-Origin': '*'} 

@app.route("/service2", methods=['GET'])
def service2():                            
    global gen_bool
    global gen
    if gen_bool == True:
        gen_bool = False
        gen = None
    if gen is None:
        gen = generate(log_file_path_2)
    return next(gen), {'Access-Control-Allow-Origin': '*'} 

if __name__ == "__main__":
    app.run()
