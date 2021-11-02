"use strict";

let calculateDays = function(date) 
{
    if(date == undefined)
    {
        throw new Error("The calculateDays Function Requires a Date Parameter.");
    }
    let today = new Date();
        let msFromToday = (date.getTime() - today.getTime())/ msForOneDay;
        let msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        return Math.ceil(msFromToday);            
};

$(document).ready( () => 
{ 
    $("#countdown").click( () => 
    {
        let eventName = $("#event").val();
        let eventDate = $("#date").val();  
        let message = $("#message"); 
        
        // make sure user entered task and event date 
        if (eventName.length == 0 || eventDate.length == 0) 
        {
            message.text("Please enter both a name and a date.");
            return;
        }  
      
        // make sure event date string has two slashes 
        let dateParts = eventDate.split("/");
        if (dateParts.length != 3) 
        {   
            message.text("Please enter the date in MM/DD/YYYY format.");
            return;
        } 
        // make sure event date string has a 4-digit year
        let year = eventDate.substring(eventDate.length - 4); 
        if (isNaN(year)) 
        {
            message.text("Please enter the date in MM/DD/YYYY format.");
            return;
        }     
        // convert event date string to Date object and check for validity
        let date = new Date(eventDate);
        if (date == "Invalid Date") 
        {
            message.text("Please enter the date in MM/DD/YYYY format.");
            return;
        }

        // capitalize each word of event name
        let formattedName = "";
        let words = eventName.split(" ");
        for (let i in words) {
            let firstLetter = words[i].substring(0,1).toUpperCase();
            let word = firstLetter + words[i].substring(1).toLowerCase();
            formattedName += word.padEnd(word.length + 1);
        } 
        formattedName = formattedName.trimEnd();     

        // calculate days
        //let daysToDate = calculateDays(date);
        
        // create and display message 
        if (message.text() == "")
        {
            try
            {
                let daysToDate = calculateDays(date);
    
                if (daysToDate == 0) 
                {
                    message.text(`Hooray! Today is ${formattedName}! (${date})`);  
                }
                else if (daysToDate > 0) 
                {
                    message.text(`${daysToDate} day(s) until ${formattedName}! (${date})`);
                }
                else if (daysToDate < 0) 
                {
                    daysToDate = Math.abs(daysToDate);
                    message.text(`${formattedName} happened ${daysToDate} day(s) ago. 
                    (${date})`);
                }
            }
            catch(error)
            {
                message.text(error.name + ": " + error.message);
            }
        }
       
    });
    
    $("#event").focus();
});