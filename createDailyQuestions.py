import requests
import json
import time
from textwrap import indent


def createDailyQuestions():
    Questions = []
    for i in range(73):
        request = requests.get("https://the-trivia-api.com/api/questions?limit=5&region=US")
        data = request.json()
        for i in data:
            dict = {}
            currAnswer = i.get("correctAnswer")
            currIncorrect = i.get("incorrectAnswers")
            currQuestion = i.get("question")
            currID = i.get("id")
            dict["Question"] = currQuestion
            dict["correctAnswer"] = currAnswer
            dict["IncorrectAnswers"] = currIncorrect
            dict["id"] = currID
            Questions.append(dict)
        time.sleep(.5)
    jsonDaily = json.dumps(Questions, indent= '\t')
    with open('dailyQuestions.json', 'w') as outfile:
        json.dump(jsonDaily, outfile, indent='\t')

if(__name__ == "__main__"):
    createDailyQuestions()