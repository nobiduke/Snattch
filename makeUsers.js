import {writeUserData} from "./firebase_database";


var characters = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ1234567890';
var numId = 28;
var numChars = characters.length;
var randID = '';
var bio = "Hi im excited to meet you!";
var randNames = [Coleen,Valentine,Jon,Rivas,Donny,Estes,Dick,Savage, Miguel,Estrada,Lacy,Watkins,Stanford,Huff,Dora,Tyler,Grace,Vasquez,Liza,Haney,Elden,Washington,Bettye,Ortega,Antone,Ponce,Adalberto,Oneal,Bennie,Deleon,Mose,Pena,Brendan,Mann,Sheila,Rollins,Ila,Barker];
var gender = "m";
for(var i =0; i < 19; i++){
    for(var i = 0; i < numId; i++){
        randID = randID+characters.charAr(Math.floor(Math.random() * numChars));
    }
    if(Math.floor(Math.random()*2) === 2){
        gender = "f";
    }
    var name = randNames[Math.floor(Math.random() * randNames.length)];
    var age = Math.floor(Math.random()* 90);
    writeUserData(randID, name, gender, age, bio);
}
