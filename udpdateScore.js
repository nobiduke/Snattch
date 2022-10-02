import {getDatabase} from "firebase/database";
import {getUserScore as getScore} from "match.js";
import {setScoreUser as setScore} from "match.js";
import {getScoreRank as setRankScore} from "match.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";


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