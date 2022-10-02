import {getDatabase} from "firebase/database";
import {getUserScore as getScore} from "./math";
import {setScoreUser as setScore} from "./match";
import {getScoreRank as setRankScore} from "./match";


function updateScoreFirst(username, right, time){
    var score = 0
    if(right){
        score = 100;
        if(time > 2000 && time <=12000){
            score -= (time-2000)/15000;
        }
        else if(time > 12000){
            score = 20;
        }
        score += getScore(username);
        setScore(username, score);
        setRankScore(username, score);
    }
}

function updateScoreDaily(username, right, time){
    var score = 0
    if(right){
        score = 100;
        if(time > 2000 && time <=12000){
            score -= (time-2000)/15000;
        }
        else if(time > 12000){
            score = 20;
        }
        score += getScore(username);
        setScore(username, score);
        setRankScore(username, score);
    }
    else{
        score = -30;
    }
    score += getScore(username);
    setScore(username, score);
    setRankScore(username, score);
}