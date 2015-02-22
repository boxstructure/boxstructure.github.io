//drop in for load purposes//

window.onload = function() {

var textPTitle = "hello, my name is Mike"
var textBio = "Mike is a developing designer with an architecture background. He is currently studying user research and strategy at IIT Institute of Design";
var textSTgoals = "short term goals..."


var profileTitle = document.querySelector('.profileTitle')
profileTitle.innerHTML = textPTitle

var profileBio = document.querySelector('.profileBio')
profileBio.innerHTML = textBio

var shortTermGoals = document.querySelector('.shortTermGoals')
shortTermGoals.innerHTML = textSTgoals



var listSTgoals = [
	"work on pixel art",
	"draw some more",
	"build more projects!",
	"dive for more plays and hit more triples",
	"pimp out my bianchi for next summer",
	"stop-take a breath-appreciate the world around me",
];



var shortTermList = document.querySelector('.shortTermList');


for (var i = 0; i < listSTgoals.length; i++) 
{

    var name = listSTgoals[i];
    var listItem = document.createElement("li");
    var textnode = document.createTextNode(name);
    listItem.appendChild(textnode);
    shortTermList.appendChild(listItem);
}    



};
