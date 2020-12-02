$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    // loop thru global window.dancers array
    // call each dancer's lineUp method?
    // start from a base left px value, increment up
    // var lineUpFunctionName = $(this).data('lineUpName');
    // var lineUpFunction = window[lineUpFunctionName];

    // var line = lineUpFunction(
    var left = 25;
    var blinkyArr = [];
    var bouncyArr = [];
    var explodeArr = [];
    for (var i = 0; i < window.dancers.length; i++) {
      // obtain dancer
      // check dancer type
      // add dancer to appropriate array
      console.log(window.dancers[i].$node[0].className);
      if (window.dancers[i].$node[0].className === 'dancer blinky') {
        blinkyArr.push(window.dancers[i]);
      } else if (window.dancers[i].$node[0].className === 'dancer bouncy') {
        bouncyArr.push(window.dancers[i]);
      } else {
        explodeArr.push(window.dancers[i]);
      }

    }
    // iterate thru dancer arrays
    for (var i = 0; i < blinkyArr.length; i++) {
      blinkyArr[i].lineUp(100, left);
      left += 25;
    }
    left = 50;
    for (var i = 0; i < bouncyArr.length; i++) {
      bouncyArr[i].lineUp(200, left);
      left += 50;
    }
    left = 100;
    for (var i = 0; i < explodeArr.length; i++) {
      explodeArr[i].lineUp(300, left);
      left += 100;
    }



    // call lineUp for each one, with different top, left arguments

  });

});

