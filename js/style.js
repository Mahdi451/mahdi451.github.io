/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function myFunction() {
    var ul = document.getElementById("myUL");
    var colors = ['red', 'black', 'blue', 'orange', 'yellow'];
    ul.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

$(function() {
    $("widget").button().click(function(event) {
        event.preventDefault();
    });
});