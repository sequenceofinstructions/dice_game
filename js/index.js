// this function will return a number between [1 and 6]
function getRandomNumber() {
    // returns a number between [0 and 6)
    var randomNumber = Math.random() * 6;

    // range is [0 to 5]
    var roundedDown = Math.floor(randomNumber);

    // we shift our range by 1 and return
    return roundedDown + 1;
}

// this function returns the class name associated with the side of dice represented by number
function getDiceClass(number) {
    return 'dice_' + number;
}

// wait for the page to be loaded
$(document).ready(function(){

    // select our button
    var $button = $('#roll-dice');

    // select our dice container
    var $dice = $('#dice');

    // bind a click handler to our button element
    $button.click(function(){
        // get a random number representing side of dice
        var number = getRandomNumber();

        // transalte that number into one of our dice classes
        var diceClass = getDiceClass(number);

        // remove any class lingering from the last dice roll
        $dice.removeClass();

        // add our new dice class to the dice container
        $dice.addClass(diceClass);
    });
});