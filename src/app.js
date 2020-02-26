//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;



//Write your function here
function createManager(_managerName, _managerAge, _currentTeam, _trophiesWon)
{
 
}
createManager("Alex Ferguson", 78, "Manchester FC", 27);

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(_defender, _midfield, _forward){
  
}
createFormation(4, 4, 3);
// Dont edit the following code

try {
  var formationObject = createFormation();
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year)
{

}
filterByDebut(2020);


//Progression 4 - Filter players that play at the position _______
var mark = [32, 33, 16, 40];

function position(mark) {
  return mark >= 0;
}

function myFunction() {
  document.getElementById("demo").innerHTML = mark.filter(position);
}

//Progression 5 - Filter players that have won ______ award

var wonLoss = [0,1];//0 is lost and 1 is won

function status(wonLoss) {
  return wonLoss = 1;
}

function myFunction() {
  document.getElementById("demo").innerHTML = wonLoss.filter(status);

//Progression 6 - Filter players that won ______ award ____ times

//Progression 7 - Filter players that won ______ award and belong to ______ country

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
