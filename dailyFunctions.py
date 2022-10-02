import requests
import json
import time
from datetime import datetime
from textwrap import indent


# Used in selectDaily, for getting day of year out of 365 days
global Year
Year = 2022

# changes the daily question based on the day the user opens the app
def selectDaily():
    janFirst = datetime(Year, 1, 1)
    now = datetime.now()

    # gets the days apart jan 1 is from the current day
    today = now - janFirst

    # puts changes the daily question 
    getDailyQuestion = open('dailyQuestions.json')
    daily = json.load(getDailyQuestion)
    with open('QOTD.json', 'w') as outfile:
        json.dump(daily[today], outfile, indent='\t')
    
 