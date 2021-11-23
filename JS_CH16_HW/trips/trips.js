"use strict";

$(document).ready( () => {
    $("#add_trip").click( () => {
        trips.destination = $("#destination").val();
        trips.miles = parseFloat($("#miles").val());
        trips.gallons = parseFloat($("#gallons").val())

        if (trips.isValid) 
        {
            Trips.push(trip); 
            $("#trip_list").val(trips.toString());

            $("#destination").val("");
            $("#miles").val("");
            $("#gallons").val("");

            $("#destination").focus();
        } 
        else {
            alert("Please complete all fields.\nMiles and gallons " 
                + "must be numeric and greater than zero.");
            $("#destination").select();
        }
    });
    
    $("#destination").focus();
});