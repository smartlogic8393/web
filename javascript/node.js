/* 
This below Javascript code is only for index.html page
other pages contain javascript inside the pages
*/

// The code is run when the page is reload//


window.onload = function() {
    var name = localStorage.getItem("firstname");
    var last = localStorage.getItem("last");
    console.log(last);
    if (name === 'true') {
        document.getElementById("login").style.display = 'none';
        document.getElementById("profile").style.display = 'inline-block';
        document.getElementById("signout").style.display = 'inline-block';
        document.getElementById("ssss").style.display = 'none';
    } else if (last === 'basit') {
        document.getElementById("login").style.display = 'none';
        document.getElementById("ssss").style.display = 'none';
        document.getElementById("profile").style.display = 'inline-block';
        document.getElementById("signout").style.display = 'inline-block';
    } else if (name === 'true' && last === 'basit') {
        document.getElementById("login").style.display = 'none';
        document.getElementById("ssss").style.display = 'none';
        document.getElementById("profile").style.display = 'inline-block';
        document.getElementById("signout").style.display = 'inline-block';
    } else {
        document.getElementById("login").style.display = 'inline-block';
        document.getElementById("ssss").style.display = 'inline-block';
        document.getElementById("profile").style.display = 'none';
    }
}

// When upgrade to pro button is click//
function signup() {
    document.getElementById("popup-head").style.display = "flex";
    document.getElementById("second").style.visibility = "hidden";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

// When close button in the form is click//
function signupclose() {
    document.getElementById("popup-head").style.display = "none";
    document.getElementById("second").style.visibility = "visible";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}

// when sign up button is click inside the form ///

function onsubmittvalue() {
    var val = document.forms['bas'];
    var email = val[0].value;
    var pass = val[2].value;
    if (email === 'smartlogic8393@gmail.com' && pass === '8393') {
        localStorage.setItem("last", "basit");
    }
    if (email != "" && pass != "") {
        location.reload();
    }

    document.getElementsByTagName("body")[0].style.overflow = "auto";

}

// when couse button are click //

function select_course() {

    var name = localStorage.getItem("firstname");
    var last = localStorage.getItem("last");

    if (name === 'true' || last === 'basit') {
        document.getElementById("course1").setAttribute("href", "couses.html");
        document.getElementById("course2").setAttribute("href", "couses.html");
        document.getElementById("course3").setAttribute("href", "couses.html");
    } else {
        signup();

    }
}

// when signout button is click

function signout_click() {
    localStorage.clear();
    location.reload();
}

function calculations() {

    var a = parseInt(window.prompt("Enter First"));
    var b = parseInt(window.prompt("Enter Second"));

    document.getElementById("result").innerHTML = "The Sum = " + (a + b);
}

function onaccesspages(value) {
    var name = localStorage.getItem("firstname");
    var last = localStorage.getItem("last");

    if (name === 'true' || last === 'basit') {

        if (value === 1 && name === 'true' || last === 'basit') {
            document.getElementById("val1").setAttribute("href", "download.html");
        }
        if (value === 2) {
            document.getElementById("val2").setAttribute("href", "prices.html");
        }

    } else {
        signup();

    }
}