/*
    This is a JavaScript comment. You can type anything you like in this area, and it will be ignored. Enter your name and the date you completed this assignment in the space provided below. Be sure to push your work to Bitbucket/Git Hub and submit the commit URL in the Canvas assignment.
    
    Name: Bryan Liem
    Date Complete: 4/13/2024

*/

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

var canvas = document.querySelector('canvas');
var surface = canvas.getContext('2d');
var superStar = document.getElementById('star');
var x = getRandomInt(0, canvas.width);
var y = getRandomInt(0, canvas.height);
var speedX = getRandomInt(1, 8);
var speedY = getRandomInt(1, 8);
var color = 255;
var colorChange = 1;

function moveIt() {
    //function definition
    surface.fillStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
    surface.fillRect(0, 0, canvas.width, canvas.height);
    surface.drawImage(superStar, x, y);
    
    if(x > canvas.width || x < 0) {
        speedX = -speedX;
    }
    if(y > canvas.height || y < 0) {
        speedY = -speedY;
    }
    
    if (color < 0 || color > 255) {
        colorChange = -colorChange;
    }
    x = x + speedX;
    y = y + speedY;
    
    color = color + colorChange;
    
    requestAnimationFrame(moveIt);
}

moveIt(); //function call