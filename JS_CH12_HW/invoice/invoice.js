"use strict";

const calculateDiscount = (customer, subtotal) => 
{
    if (customer == "reg") 
    {
        if (subtotal >= 100 && subtotal < 250) 
        {
            return .1;
        } 
         else if (subtotal >= 250 && subtotal < 500) 
        {
            return  .25;
        } 
        else if (subtotal >= 500) 
        {
            return .3;
        } 
        else 
        {
            return 0;
        }        
    }
    else if (customer == "loyal") 
    {
        return .3;        
    }
    else if (customer == "honored") 
    {
        if (subtotal < 500) 
        {
            return .4;
        }
        else 
        {
            return .5;
        }    
    }
};

$(document).ready( () => 
{
    $("#calculate").click( () => 
    {
        const customerType = $("#type").val();
        let subtotal = $("#subtotal").val();
        subtotal = parseFloat(subtotal);
        if (isNaN(subtotal) || subtotal <= 0) 
        {
            alert("Subtotal must be a number greater than zero.");
            $("#clear").click();
            $("#subtotal").focus();
            return;
        }

        const discountPercent = calculateDiscount(customerType, subtotal);
        const discountAmount = subtotal * discountPercent;
        const invoiceTotal = subtotal - discountAmount;
        
        $("#subtotal").val( subtotal.toFixed(2) );
        $("#percent").val( (discountPercent * 100).toFixed(2) );
        $("#discount").val( discountAmount.toFixed(2) );
        $("#total").val(  invoiceTotal.toFixed(2) );

        // set focus on type drop-down when done  
        $("#type").focus();

    });
    let isValid = (strDate) =>
    {
        if (!isNaN(strDate.getMonth())) 
        {
            return true;
        }
            return false;
        }
        //function to format and check date
        let getDates = () =>
            {
                let getDate = $("#invoice_date").val();
                let day;
                let month;
                let year;
                
                if (getDate == "") 
                {
                    let date = new Date();
                    day = date.getDate();
                    month = date.getMonth() + 1;
                    year = date.getFullYear();
                    let d = month + "/" + day + "/" + year;
                    return d;
                }
                else 
                {
                    let date = new Date(getDate);
                    console.log(isValid(date));
                    if (isValid(date) == false) 
                    {
                        alert("Enter a valid date");
                        $("#clear").click();
                        $("#invoice_date").focus();
                        return;
                    } 
                    else 
                    {
                        day = date.getDate();
                        month = date.getMonth() + 1;
                        year = date.getFullYear();
                        let d = month + "/" + day + "/" + year;
                        return d;
                    }
                }
            }
                //printing the invoice date
                $("#invoice_date").val(getDates());
                let due = new Date(getDates());
                due.setDate(due.getDate() + 30);
                let due_day = due.getDate();
                let due_m = due.getMonth() + 1;
                let due_y = due.getFullYear();
            
                //printing the due date
                $("#due_date").val( due_m + "/" + due_day + "/" + due_y);
                $("#type").focus();

    $("#clear").click( () => 
    {
        $("#type").val("reg");
        $("#subtotal").val("");
        $("#invoice_date").val("");
        $("#percent").val("");
        $("#discount").val("");
        $("#total").val("");
        $("#due_date").val("");

        // set focus on type drop-down when done
        $("#type").focus();
    });
    // set focus on type drop-down on initial load
    $("#type").focus();
});

