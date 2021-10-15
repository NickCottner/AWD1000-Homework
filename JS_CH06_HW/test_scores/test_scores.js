"use strict"

let names = ["Ben", "Joel", "Judy", "Anne"];
let scores = [88, 98, 77, 88];

const $ = (id) => document.getElementById(id);

let addScore = () => {
	// get user entries
	let name = $("name").value;
	let score  = parseInt( $("score").value );
	let isValid = true;
    
    // check entries for validity
    if (name == "") {
		$("name").nextElementSibling.textContent = "This field is required.";
		isValid = false;
	} 
	else {
		$("name").nextElementSibling.textContent = "";
	}
	
	if (isNaN(score) || score < 0 || score > 100) {
		$("score").nextElementSibling.textContent = "You must enter a valid score.";
		isValid = false;
	} 
	else {
		$("score").nextElementSibling.textContent = "";
	}
	
	if (isValid) {
		names[names.length] = name;
		scores[scores.length] = score;
	    $("name").value = "";
		$("score").value = "";
		$("scores_display").value = "";
	}
    $("name").focus();
};

const displayScores = () =>
{
	let score;
	let i;
	for(i = 0; i<names.length; i++)
	{
		score += names[i] + " = " + scores[i] + "\n";
	}
	$("scores_display").value = score;
	
}
window.onload = () =>
{
    $("add").onclick = addScore;
    $("display_scores").onclick = displayScores;
    $("name").focus();
};