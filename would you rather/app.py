from flask import Flask, render_template
import json

app = Flask(__name__, template_folder='template', static_folder='static')

filename =  'answers.json'

@app.route('/')
def home():
    return render_template('index.html', render=0, total1=0, total2=0,)

@app.route('/answer/<question>/<int:answer>')
def pushanswer(question, answer):
    with open(filename, "r") as file:
        data = json.load(file)
    key = f"question{question}"
    if answer == 1:
        data[key]["1"] += 1
    elif answer == 2:
        data[key]["2"] += 1

    with open(filename, "w") as file:
        json.dump(data, file, indent=2)

        



    return display(key)


def display(question):
    with open(filename, "r") as file:
        data = json.load(file)
    
    total1 = data[question]["1"]
    total2 = data[question]["2"]


    return render_template('index.html', total1=total1, total2=total2, render=1)

    

if __name__ == '__main__':
    app.run(debug=True)