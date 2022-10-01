from textwrap import indent
import requests
import json

def extractData():
    listQuestions = []
    invalid = 20
    while invalid != 0:
        request = requests.get("https://the-trivia-api.com/api/questions?limit=20&region=US")
        data = request.json()
        dailyIDs = getDailyQuestionID()
        for i in range(invalid):
            dict = {}
            if data[i].get("id") not in dailyIDs:
                currAnswer = data[i].get("correctAnswer")
                currIncorrect = data[i].get("incorrectAnswers")
                currQuestion = data[i].get("question")
                dict["Question"] = currQuestion
                dict["correctAnswer"] = currAnswer
                dict["IncorrectAnswers"] = currIncorrect
                listQuestions.append(dict)
                invalid -= 1
    jsonObj = json.dumps(listQuestions, indent= '\t')
    return jsonObj

def getDailyQuestionID():
    IDs = []
    dailyQuestion = open('dailyQuestions.json')
    data = json.load(dailyQuestion)
    for i in data:
        IDs.append(i.get('id'))
    return IDs



def main():
    obj = extractData()
    with open('questions.json', 'w') as outfile:
        json.dump(obj, outfile, indent='\t')
 

if __name__ == "__main__":
    main()