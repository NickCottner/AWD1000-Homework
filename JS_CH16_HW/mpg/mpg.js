"use strict";

$(document).ready( () => {
    $("#calculate").click( () => {
        let miles = $("#miles").val();
        let gallons = $("#gallons").val();

        let trip = new Trip(miles, gallons);

        if (trip.isValid) {
            $("#mpg").val(trip.calculateMPG().toFixed(1)); 
            $("#miles").select();
        } 
        else {
            alert("Both entries must be numeric and greater than zero.");
            $("#miles").focus();
        }
    });
    
    $("#clear").click( () => {
        $("#miles").val("");
        $("#gallons").val("");
        $("#mpg").val("");
        
        $("#miles").focus();
    });
    
    $("#miles").focus();
});