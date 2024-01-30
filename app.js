
function WelcomeMessage() 
{
alert('Welcome Dear Visitor, I am doing some JavaScript Experients.');
}

function intro() 
{
alert('Hi! I am Aun Abbas, a student of Web Developement Course, at Bano Qabil 2.0.');
}

function courses() 
{
alert('We are learning three things; First is HTML, which is a front end language. It creates a basic structure.');
alert('Secondly, we learnt CSS. It helps in styling our website.');
alert('And third is the most important, JavaScript. It makes my site interactive as you can see.');
}

function outName() 
{
var userName = prompt("What's your name?");
var message;
message = "Hi dear " + userName + "! nice to meet you. Please see some more examples.";
alert(message);
}

function add() 
{
var num1 = +prompt("Enter 1st number:");
var num2 = +prompt("Enter 2nd number:");
var answer = num1 + num2;
message = num1 + " + " + num2 + " = " + answer;
alert(message);
}

function subtract() 
{
var num1 = +prompt("Enter 1st number:");
var num2 = +prompt("Enter 2nd number:");
var answer = num1 - num2;
message = num1 + " - " + num2 + " = " + answer;
alert(message);
}

function multiply() 
{
var num1 = +prompt("Enter 1st number:");
var num2 = +prompt("Enter 2nd number:");
var answer = num1 * num2;
message = num1 + " x " + num2 + " = " + answer;
alert(message);
}

function divide() 
{
var num1 = +prompt("Enter 1st number:");
var num2 = +prompt("Enter 2nd number:");
var answer = num1 / num2;
message = num1 + " / " + num2 + " = " + answer;
alert(message);
}

function calculate() 
{
var num1 = +prompt("Enter 1st number:");
var op = prompt("Enter operator (+ - * /):");
var num2 = +prompt("Enter 2nd number:");
if(op === "+")
  {
  var answer = num1 + num2;
  message = num1 + " + " + num2 + " = " + answer;
  }
else if(op === "-")
  {
  var answer = num1 - num2;
  message = num1 + " - " + num2 + " = " + answer;
  }
else if(op === "*")
  {
  var answer = num1 * num2;
  message = num1 + " x " + num2 + " = " + answer;
  }
else if(op === "/")
  {
  var answer = num1 / num2;
  message = num1 + " / " + num2 + " = " + answer;
  }
else
  {
  message = "Incorrect operator entered! please try again.";
  }
alert(message);
}

function quadratic() 
{
var a = +prompt("Enter co-efficient of x2:");
var b = +prompt("Enter co-efficient of x:");
var c = +prompt("Enter constant:");
var real = (-b) / (2*a);
var discriminate = (b*b)-(4*a*c);
if(discriminate >= 0)
  {
  var imaginary = Math.sqrt(discriminate) / (2*a);
  var x1 = real + imaginary;
  var x2 = real - imaginary;
  }
else
  {
  var imaginary = Math.sqrt(-discriminate) / (2*a);
  var x1 = real + "+" + imaginary + "i";
  var x2 = real + "-" + imaginary + "i";
  }
var answer = "x = " + x1 + " and x = " + x2;
alert(answer);
}

function timesTable()
{
var num = prompt("Enter a number to design it's table");
var head1 = "Times Table of " + num + "<br><br>";
document.write(head1);
for(var i=1; i<=10; i++)
  {
  var answer = i * num;
  var line1 = num + " X " + i + " = " + answer + "<br>";
  document.write(line1);
  }
var line2 = "<br> Refresh page to go back.";
document.write(line2);
}