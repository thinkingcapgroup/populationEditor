//sortable table


//making all the score presets
var groupList = ["Socialite", "Athlete", "Researcher", "Media Lover", "Reader"];
var majorList = ["Business", "Engineering", "Tech", "Fine Arts", "Liberal Arts"];
var stuEconomic = ["Poverty", "Low", "Lower Middle", "Upper Middle", "High"];
var playerScore= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var score = [0,0,0,0,0];
var sample = [];
var counter = 0;

//scores go Socialite/Athlete/MediaLover/Researcher/Reader
//the score goes tuition, tuition var, athletic, athletic var, research, research var, events, events var, medical, medicalvar
var positions = [
  "Lowering Tuition",
  "Increase Athletic Budget",
  "Increase Research Budget",
  "More School Events",
  "Improve Medical Services"  
];

var positionsLower = [
  "tuition",
  "athletic",
  "research",
  "events",
  "medical" 
];

var gender = ["Male", "Female", "NB"]
var race = ["Human", "Android", "Martian"]
var bodyType = ["Slim", "Average", "Large"]

var groupIssues = [
  [3.0,2.0,2.0,1.0,0.0,3.0,1.0,1.0,-1.0,2.0],
  [0,2,3,1,0,3,1,1,-1,2],
  [1,1,-1,2,1,2,3,1,-2,3],
  [-1,1,-1,1,2,2,3,1,0,4],
  [0,3,-2,2,0,2,1,3,3,1]
];
//goes Poverty/Low/MediumLow/MediumHigh/High
var classIssues = [
  [2,2,0,1,2,1,-2,2,3,1],
  [0,2,-1,1,1,3,1,2,2,1],
  [3,1,1,3,2,2,-1,1,1,1],
  [-2,1,2,1,-1,3,1,2,2,1],
  [-1,1,-2,3,2,-1,3,1,0,4]
];
//goes Business/Engineering/Technology/FineArts/LiberalArts
var majorIssues = [
  [-2,1,3,1,1,1,0,3,2,1],
  [-1,2,1,1,1,3,-2,1,3,1],
  [3,1,-1,1,3,1,0,4,0,2],
  [2,2,0,3,-2,2,2,2,2,1],
  [0,3,0,4,-3,1,3,1,-2,1]
];




function addSample(sampleSize){

    document.getElementById("sampleText").innerHTML = "Sample Size: " + sampleSize;  
    var table = document.getElementById("sampleTable");
    var tableLength = table.rows.length;

  //if there
  if(tableLength > 1){
    for(var x = 1; x < tableLength; x++){
      document.getElementById("sampleTable").deleteRow(1);
    } 
  }
    sample = [];
  
  for(var y = 0 ; y < sampleSize; y++){
      var tbody = document.getElementById('tbody');
      var row = tbody.insertRow();
      var groupRandom = Math.floor(Math.random()* 5);
      var majorRandom = Math.floor(Math.random()* 5);
      var ecoClassRandom = Math.floor(Math.random()* 5);



      var ath =0;
      var res = 0;
      var tuit = 0;
      var med = 0;
      var event = 0;



  //SCORE calculated by (group issue + variable) + (major issue + variable)  + (class issue + variable) 
      tuit = (((groupIssues[groupRandom][0]) + (Math.floor(Math.random() * (groupIssues[groupRandom][1]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((majorIssues[majorRandom][0]) + (Math.floor(Math.random() * (groupIssues[majorRandom][1]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((classIssues[ecoClassRandom][0]) + (Math.floor(Math.random() * (classIssues[ecoClassRandom][1]) ) )) * ( Math.random() < 0.5 ? -1 : 1));
      ath =  (((groupIssues[groupRandom][2]) + (Math.floor(Math.random() * (groupIssues[groupRandom][3]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((majorIssues[majorRandom][2]) + (Math.floor(Math.random() * (groupIssues[majorRandom][3]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((classIssues[ecoClassRandom][2]) + (Math.floor(Math.random() * (classIssues[ecoClassRandom][3]) ) )) * ( Math.random() < 0.5 ? -1 : 1));
      res =  (((groupIssues[groupRandom][4]) + (Math.floor(Math.random() * (groupIssues[groupRandom][5]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((majorIssues[majorRandom][4]) + (Math.floor(Math.random() * (groupIssues[majorRandom][5]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((classIssues[ecoClassRandom][4]) + (Math.floor(Math.random() * (classIssues[ecoClassRandom][5]) ) )) * ( Math.random() < 0.5 ? -1 : 1));
      event =  (((groupIssues[groupRandom][6]) + (Math.floor(Math.random() * (groupIssues[groupRandom][7]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((majorIssues[majorRandom][6]) + (Math.floor(Math.random() * (groupIssues[majorRandom][7]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((classIssues[ecoClassRandom][6]) + (Math.floor(Math.random() * (classIssues[ecoClassRandom][7]) ) )) * ( Math.random() < 0.5 ? -1 : 1));
      med =  (((groupIssues[groupRandom][8]) + (Math.floor(Math.random() * (groupIssues[groupRandom][9]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((majorIssues[majorRandom][8]) + (Math.floor(Math.random() * (groupIssues[majorRandom][9]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((classIssues[ecoClassRandom][8]) + (Math.floor(Math.random() * (classIssues[ecoClassRandom][9]) ) )) * ( Math.random() < 0.5 ? -1 : 1));

      tuit = tuit/3;
      ath = ath/3;
      res =  res/3;
      event = event/3;
      med = med/3;

      tuit = tuit.toFixed(2);  
       ath = ath.toFixed(2);  
      res =  res.toFixed(2);  
      event = event.toFixed(2);  
      med = med.toFixed(2);  

      //random group #s

      var cell1 = row.insertCell(0);
      var text1 = y + 1;
      cell1.innerHTML = text1
      var cell2 = row.insertCell(1);
      var text2 = gender[(Math.floor(Math.random() * 3))];
      cell2.innerHTML = text2;
      
     
      var cell3 = row.insertCell(2);
      cell3.innerHTML = race[(Math.floor(Math.random() * 3))];
      var cell4 = row.insertCell(3);
      cell4.innerHTML = bodyType[(Math.floor(Math.random() * 3))];
      var cell5 = row.insertCell(4);
      cell5.innerHTML = groupList[groupRandom];
      var cell6 = row.insertCell(5);
      cell6.innerHTML = majorList[majorRandom];
      var cell7 = row.insertCell(6);
      cell7.innerHTML = stuEconomic[ecoClassRandom];
       var cell8 = row.insertCell(7);
      cell8.innerHTML = tuit;
       var cell9 = row.insertCell(8);
      cell9.innerHTML = ath;
       var cell10 = row.insertCell(9);
      cell10.innerHTML = res;
       var cell11 = row.insertCell(10);
      cell11.innerHTML = event;
       var cell12 = row.insertCell(11);
      cell12.innerHTML = med;
      var sampleStudent = [cell1.innerHTML, cell2.innerHTML, cell3.innerHTML, cell4.innerHTML, cell5.innerHTML, cell6.innerHTML, cell7.innerHTML, cell8.innerHTML, cell9.innerHTML, cell10.innerHTML, cell11.innerHTML, cell12.innerHTML];
      sample.push(sampleStudent);
  
  }

  //lets calculate the averages of the scores
  var tfoot = document.getElementById("tfoot");
  var thing = tfoot.rows.length;


 if(thing > 1){
         document.getElementById("tfoot").deleteRow(1);
    
    
  }

  row = tfoot.insertRow();
  cell = row.insertCell(0);
  cell.innerHTML = "Score Averages"; 

for (u = 0; u < 5; u++){
  //go through the sample scores
  var scoreAverage = 0.0;
  for (w = 0; w < sample.length; w++){
    count = u + 7;
    studentScore = sample[w][count];
    scoreAverage += parseFloat(studentScore);
    
  }
  scoreAverage = (scoreAverage / sample.length);
  scoreAverage = scoreAverage.toFixed(2);
  cell = row.insertCell(1+u);
  cell.innerHTML = scoreAverage;

}

  calculateScores();
}

function addSample2(sampleSize){

  document.getElementById("sampleText").innerHTML = "Sample Size: " + sampleSize;  
  var table = document.getElementById("sampleTable");
  var tableLength = table.rows.length;

  //if there
  if(tableLength > 1){
    for(var x = 1; x < tableLength; x++){
      document.getElementById("sampleTable").deleteRow(1);
    } 
  }
    sample = [];

  //change GroupIssuesChange w/ new averages
  
  //add the player score to groupissuechange
  for(var c = 0; c < 5; c++){
      for(var a = 0; a < 10; a++){
        q = a*2;
      groupIssues[c][q] += (playerScore[c] + playerScore[c+5]);
      classIssues[c][q] += (playerScore[c] + playerScore[c+10]);
      majorIssues[c][q] += (playerScore[c] + playerScore[c+15]);
    }
  }   
  
  for(var y = 0 ; y < sampleSize; y++){
      var tbody = document.getElementById('tbody');
      var row = tbody.insertRow();
      var groupRandom = Math.floor(Math.random()* 5);
      var majorRandom = Math.floor(Math.random()* 5);
      var ecoClassRandom = Math.floor(Math.random()* 5);



      var ath =0;
      var res = 0;
      var tuit = 0;
      var med = 0;
      var event = 0;



  //SCORE calculated by (group issue + variable) + (major issue + variable)  + (class issue + variable) 
      tuit = (((groupIssues[groupRandom][0]) + (Math.floor(Math.random() * (groupIssues[groupRandom][1]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((majorIssues[majorRandom][0]) + (Math.floor(Math.random() * (groupIssues[majorRandom][1]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((classIssues[ecoClassRandom][0]) + (Math.floor(Math.random() * (classIssues[ecoClassRandom][1]) ) )) * ( Math.random() < 0.5 ? -1 : 1));
      ath =  (((groupIssues[groupRandom][2]) + (Math.floor(Math.random() * (groupIssues[groupRandom][3]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((majorIssues[majorRandom][2]) + (Math.floor(Math.random() * (groupIssues[majorRandom][3]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((classIssues[ecoClassRandom][2]) + (Math.floor(Math.random() * (classIssues[ecoClassRandom][3]) ) )) * ( Math.random() < 0.5 ? -1 : 1));
      res =  (((groupIssues[groupRandom][4]) + (Math.floor(Math.random() * (groupIssues[groupRandom][5]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((majorIssues[majorRandom][4]) + (Math.floor(Math.random() * (groupIssues[majorRandom][5]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((classIssues[ecoClassRandom][4]) + (Math.floor(Math.random() * (classIssues[ecoClassRandom][5]) ) )) * ( Math.random() < 0.5 ? -1 : 1));
      event =  (((groupIssues[groupRandom][6]) + (Math.floor(Math.random() * (groupIssues[groupRandom][7]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((majorIssues[majorRandom][6]) + (Math.floor(Math.random() * (groupIssues[majorRandom][7]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((classIssues[ecoClassRandom][6]) + (Math.floor(Math.random() * (classIssues[ecoClassRandom][7]) ) )) * ( Math.random() < 0.5 ? -1 : 1));
      med =  (((groupIssues[groupRandom][8]) + (Math.floor(Math.random() * (groupIssues[groupRandom][9]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((majorIssues[majorRandom][8]) + (Math.floor(Math.random() * (groupIssues[majorRandom][9]) ) )) * ( Math.random() < 0.5 ? -1 : 1)) + (((classIssues[ecoClassRandom][8]) + (Math.floor(Math.random() * (classIssues[ecoClassRandom][9]) ) )) * ( Math.random() < 0.5 ? -1 : 1));

      tuit = tuit/3;
      ath = ath/3;
      res =  res/3;
      event = event/3;
      med = med/3;

      tuit = tuit.toFixed(2);  
       ath = ath.toFixed(2);  
      res =  res.toFixed(2);  
      event = event.toFixed(2);  
      med = med.toFixed(2);  

      //random group #s

      var cell1 = row.insertCell(0);
      var text1 = y + 1;
      cell1.innerHTML = text1
      var cell2 = row.insertCell(1);
      var text2 = gender[(Math.floor(Math.random() * 3))];
      cell2.innerHTML = text2;
      
     
      var cell3 = row.insertCell(2);
      cell3.innerHTML = race[(Math.floor(Math.random() * 3))];
      var cell4 = row.insertCell(3);
      cell4.innerHTML = bodyType[(Math.floor(Math.random() * 3))];
      var cell5 = row.insertCell(4);
      cell5.innerHTML = groupList[groupRandom];
      var cell6 = row.insertCell(5);
      cell6.innerHTML = majorList[majorRandom];
      var cell7 = row.insertCell(6);
      cell7.innerHTML = stuEconomic[ecoClassRandom];
       var cell8 = row.insertCell(7);
      cell8.innerHTML = tuit;
       var cell9 = row.insertCell(8);
      cell9.innerHTML = ath;
       var cell10 = row.insertCell(9);
      cell10.innerHTML = res;
       var cell11 = row.insertCell(10);
      cell11.innerHTML = event;
       var cell12 = row.insertCell(11);
      cell12.innerHTML = med;
      var sampleStudent = [cell1.innerHTML, cell2.innerHTML, cell3.innerHTML, cell4.innerHTML, cell5.innerHTML, cell6.innerHTML, cell7.innerHTML, cell8.innerHTML, cell9.innerHTML, cell10.innerHTML, cell11.innerHTML, cell12.innerHTML];
      sample.push(sampleStudent);
  
  }
  calculateScores();
}




function calculateScores(){


var tbody = document.getElementById('scoreTbody');
//find the group average + player score


  var tableLength = tbody.rows.length;

  if(tableLength >= 1){
    for(var x = 0; x < tableLength; x++){
      document.getElementById("scoreTable").deleteRow(1);
    } 
  }

var row = tbody.insertRow();
var cell = row.insertCell(0);
cell.innerHTML = "# of Students Favoring Position"

scoreHolder = [0,0,0,0,0];

//Find the how many people who are for something
for(var x = 0; x < sample.length; x++){

  counter = 7;
  group = sample[x][4]
  groupIndex = groupList.indexOf(group)
  groupIndex = groupIndex + 5;
  major = sample[x][5]
  majorIndex = majorList.indexOf(major)
  majorIndex = majorIndex + 10
  ecoClass = sample[x][6];
  ecoClassIndex = stuEconomic.indexOf(ecoClass);
  ecoClassIndex = ecoClassIndex + 15;

  for(var y = 0; y < 5; y++){
    actualScore = 0;
    counter = y + 7;

    check = parseFloat(sample[x][counter]);
    check2 = parseFloat(playerScore[y]);
    check3 = parseFloat(playerScore[groupIndex]);
    check4 = parseFloat(playerScore[majorIndex]);
    check5 = parseFloat(playerScore[ecoClassIndex]);

    actualScore = check + check2 + check3 + check4 + check5;

    if(actualScore >= 2){
      scoreHolder[y]++;
    }
    


  }
}
  //now put it in a table
  for(var y = 0; y < 5; y++){
    cell = row.insertCell(y+1);
    cell.innerHTML = scoreHolder[y] + "/100";
  }
  
  //now make a row for all the group averages
for(var z =0; z < 5; z++){  

  row = tbody.insertRow();
  cell = row.insertCell(0);
  cell.innerHTML = positions[z] + " Average"; 
  cell = row.insertCell(1);
  cell = row.insertCell(2);
  cell = row.insertCell(3);
  cell = row.insertCell(4);
    cell = row.insertCell(5);
  var counter = 0;

  //groups
  var flag = false

  for (var y =6; y < 11; y ++){
    
    cell = row.insertCell(y);
    number = parseFloat(groupIssues[z][counter]) + parseFloat(playerScore[y-1])
    if(number > 4){
      number = 4
    }
    if(number < -4){
      number = -4
    }
    number = number.toFixed(2)
    varNumber = groupIssues[z][counter+1]
   
    cell.innerHTML = number + "V" + varNumber;
    counter = counter + 2;
    
  }
  counter = 0;
  for (var y =11; y < 16; y ++){
    
    cell = row.insertCell(y);
    number = parseFloat(classIssues[z][counter]) + parseFloat(playerScore[y-1])
    if(number > 4){
      number = 4
    }
    if(number < -4){
      number = -4
    }
    number = number.toFixed(2)
    varNumber = groupIssues[z][counter+1]
    cell.innerHTML = number + "V" + varNumber;
    counter = counter + 2;
    
  }

  counter = 0;
  for (var y =16; y < 21; y ++){
    
    cell = row.insertCell(y);
    number = parseFloat(majorIssues[z][counter]) + parseFloat(playerScore[y-1])
if(number > 4){
      number = 4
    }
    if(number < -4){
      number = -4
    }
     number = number.toFixed(2)
    varNumber = groupIssues[z][counter+1]
    cell.innerHTML = number + "V" + varNumber;
    counter = counter + 2;
    
  }
}



}

window.onload = function(){
  document.getElementById("soAve").value = groupIssues[0][0];
  document.getElementById("atAve").value = groupIssues[0][2];
  document.getElementById("reAve").value = groupIssues[0][4];
  document.getElementById("mlAve").value = groupIssues[0][6];
  document.getElementById("rdAve").value = groupIssues[0][8];
  document.getElementById("soVar").value = groupIssues[0][1];
  document.getElementById("atVar").value = groupIssues[0][3];
  document.getElementById("reVar").value = groupIssues[0][5];
  document.getElementById("mlVar").value = groupIssues[0][7];
  document.getElementById("rdVar").value = groupIssues[0][9];


  document.getElementById("poAve").value = classIssues[0][0];
  document.getElementById("loAve").value = classIssues[0][2];
  document.getElementById("mloAve").value = classIssues[0][4];
  document.getElementById("mhAve").value = classIssues[0][6];
  document.getElementById("hiAve").value = classIssues[0][8];
  document.getElementById("poVar").value = classIssues[0][1];
  document.getElementById("loVar").value = classIssues[0][3];
  document.getElementById("mloVar").value = classIssues[0][5];
  document.getElementById("mhVar").value = classIssues[0][7];
  document.getElementById("hiVar").value = classIssues[0][9];

  document.getElementById("buAve").value = majorIssues[0][0];
  document.getElementById("enAve").value = majorIssues[0][2];
  document.getElementById("teAve").value = majorIssues[0][4];
  document.getElementById("faAve").value = majorIssues[0][6];
  document.getElementById("laAve").value = majorIssues[0][8];
  document.getElementById("buVar").value = majorIssues[0][1];
  document.getElementById("enVar").value = majorIssues[0][3];
  document.getElementById("teVar").value = majorIssues[0][5];
  document.getElementById("faVar").value = majorIssues[0][7];
  document.getElementById("laVar").value = majorIssues[0][9];


}

function clearActions(){
  playerScore= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}

function updateNumbers(){
  var x = document.getElementById("mySelect").value;
  document.getElementById("soAve").value = groupIssues[x][0];
  document.getElementById("atAve").value = groupIssues[x][2];
  document.getElementById("reAve").value = groupIssues[x][4];
  document.getElementById("mlAve").value = groupIssues[x][6];
  document.getElementById("rdAve").value = groupIssues[x][8];
  document.getElementById("soVar").value = groupIssues[x][1];
  document.getElementById("atVar").value = groupIssues[x][3];
  document.getElementById("reVar").value = groupIssues[x][5];
  document.getElementById("mlVar").value = groupIssues[x][7];
  document.getElementById("rdVar").value = groupIssues[x][9];

  console.log("HELLO")

  document.getElementById("poAve").value = classIssues[x][0];
  document.getElementById("loAve").value = classIssues[x][2];
  document.getElementById("mloAve").value = classIssues[x][4];
  document.getElementById("mhAve").value = classIssues[x][6];
  document.getElementById("hiAve").value = classIssues[x][8];
  document.getElementById("poVar").value = classIssues[x][1];
  document.getElementById("loVar").value = classIssues[x][3];
  document.getElementById("mloVar").value = classIssues[x][5];
  document.getElementById("mhVar").value = classIssues[x][7];
  document.getElementById("hiVar").value = classIssues[x][9];

  document.getElementById("buAve").value = majorIssues[x][0];
  document.getElementById("enAve").value = majorIssues[x][2];
  document.getElementById("teAve").value = majorIssues[x][4];
  document.getElementById("faAve").value = majorIssues[x][6];
  document.getElementById("laAve").value = majorIssues[x][8];
  document.getElementById("buVar").value = majorIssues[x][1];
  document.getElementById("enVar").value = majorIssues[x][3];
  document.getElementById("teVar").value = majorIssues[x][5];
  document.getElementById("faVar").value = majorIssues[x][7];
  document.getElementById("laVar").value = majorIssues[x][9];
}

function clearPlayerScore(){
  playerScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}

function myFunction(id, num) {
    var x = document.getElementById("mySelect").value;
    var value = document.getElementById(id).value;
    groupIssues[x][num] = value;
  
}

function actionResult(){
  var effect = document.getElementById("myEffect").value;
  var outcome = document.getElementById("myOutcome").value;
  var amount = document.getElementById("myAmount").value;
  var turn = document.getElementById("turnCounter").innerHTML;
  turn++;
  document.getElementById("turnCounter").innerHTML = turn;

  //change the player's statistics

  playerScore[effect] += (outcome * amount);
  var scoreInDe = outcome * amount;


  calculateScores();
  //find whats being changed
  //is it the general score?
  //is it a group/business/


}



/*
Here's the code for getting the database API
  $.get('http://localhost:3000/data', {}, function(data){
        data.forEach(function(datapoint){
            console.log(datapoint.value);
        });
   });
*/

