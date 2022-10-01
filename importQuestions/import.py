from textwrap import indent
import requests
import json


def extractData():
    request = requests.get("https://the-trivia-api.com/api/questions?limit=20&region=US")
    data = request.json()
    listQuestions = []
    for i in data:
        dict = {}
        currAnswer = i.get("correctAnswer")
        currIncorrect = i.get("incorrectAnswers")
        currQuestion = i.get("question")
        dict["Question"] = currQuestion
        dict["correctAnswer"] = currAnswer
        dict["IncorrectAnswers"] = currIncorrect
        listQuestions.append(dict)
    jsonObj = json.dumps(listQuestions, indent=4)
    print(jsonObj)
    return jsonObj


def main():
    obj = extractData()
    with open('questions.json', 'w') as outfile:
        json.dump(obj, outfile, indent='\t')

if __name__ == "__main__":
    main()
