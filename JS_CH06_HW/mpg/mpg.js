"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);

let processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) 
    {
        $("#miles").nextElementSibling.firstChild.nodeValue = "Must Be A Valid Number Greater Than Zero!";
        focusAndSelect("#miles");

    } else if (isNaN(gallons) || gallons <= 0) 
    {
        $("#gallons").nextElementSibling.firstChild.nodeValue = "Must Be A Valid Number Greater Than Zero!";
        focusAndSelect("#gallons");

    } else {
        $("#mpg").value = calculateMPG(miles, gallons);
        $("#miles").nextElementSibling.firstChild.nodeValue = "";
        $("#gallons").nextElementSibling.firstChild.nodeValue = "";
    }
};

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
    $("#miles").nextElementSibling.firstChild.nodeValue = "*";
        $("#gallons").nextElementSibling.firstChild.nodeValue = "*";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();
});