"use strict";

let trips = 
{
    destination: "",
    miles: 0,
    gallons: 0,
    get isValid() 
    {              
        if (this.destination == "" || isNaN(this.miles) || isNaN(this.gallons)) 
        {
            return false;
        } 
        else if (this.miles <= 0 || this.gallons <= 0)
        {
            return false;
        } 
        else 
        {
            return true;
        }
    },
    
};