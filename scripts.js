// const { parse } = require("path");
// const { inflateRawSync } = require("zlib");

function saveApproval(value) {
    localStorage.setItem('approval', value);
}


function getApproval() {
   var approval = localStorage.getItem('approval');
   return parseInt(approval);
}


function setPlayer(value){
    localStorage.setItem('player', value);
}

function getPlayer() {
    var player = localStorage.getItem('player');
    return (player);
}

function saveGame(value){
    localStorage.setItem('chosenGame', value);
}

function getGame(){
    var chosenGame = localStorage.getItem('chosenGame');
    return (chosenGame);
}

function saveFinishedGame(value){
    localStorage.setItem('finishedGame', value);
}

function getFinishedGame(){
    var finishedGame = localStorage.getItem('finishedGame');
    return (finishedGame);
}

function saveMushrooms(value){
    localStorage.setItem('mushrooms', value);
}

function getMushrooms(){
    var mushrooms = localStorage.getItem('mushrooms');
    return parseInt(mushrooms);
}

function saveGoodMushroom(value){
    localStorage.setItem('goodMushroom', value);
}

function getGoodMushroom(){
    var goodMushroom = localStorage.getItem('goodMushroom');
    return parseInt(goodMushroom); 
}

function saveBadMushroom(value){
    localStorage.setItem('badMushroom', value);
}

function getBadMushroom(){
    var badMushroom = localStorage.getItem('badMushroom');
    return parseInt(badMushroom);
}

function saveDrink(value){
    localStorage.setItem('drink', value);
}

function getDrink(){
    var drink = localStorage.getItem('drink');
    return parseInt(drink);
}

function setDrinkType(value){
    localStorage.setItem('selectedDrink', value);
}

function getDrinkType(){
    var selectedDrink = localStorage.getItem('selectedDrink');
    return (selectedDrink);
}

function saveSolution(value){
    localStorage.setItem('chosenSolution', value);
}

function getSolution(){
    var chosenSolution = localStorage.getItem('chosenSolution');
    return (chosenSolution);
}

function saveDay(value){
    localStorage.setItem('day', value);
}

function getDay(){
    var day = localStorage.getItem('day');
    return (day);
}