// we include an import statement for pingpong.js, which holds our business logic, and specify that the method we are importing is called "pingPong" within curly brackets
import { pingPong } from './ping-pong';
// here we import our css file
import './styles.css';

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
