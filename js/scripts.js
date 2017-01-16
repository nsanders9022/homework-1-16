//favorite stuff list
$(document).ready(function(){
  $("form#favorite-form").submit(function(event){
    event.preventDefault();

    var favoritesArray = [color, animal, country, flavor, food];

    favoritesArray.forEach(function(favorites){
      var userInput = $("input#"+favorites).val();
      $("li." + favorites).text(userInput);
    });
  });

  //flavors
  var flavors = ["vanilla", "cookie-dough", "chocolate"];

  flavors.forEach(function(flavor){
    $("#" + flavor).text (flavor);
  });

});

//---------------------------------------------------------------------
  //Grocery
$(document).ready(function(){
  $("form#groceries").submit(function(event){
    event.preventDefault();

    newList.forEach(function(){
    });
  });
});

var groceryList = function (grocery1, grocery2, grocery3, grocery4, grocery5){
  var list = [one, two, three, four, five];

  list.forEach(function(item){
    var userInput = $("input#" + item).val();
  });
};


//---------------------------------------------------------------------

//card deck
$(document).ready(function(){
  $("ul.deck").append("<li>" + cardDeck() + "</li>");
});

var cardDeck = function(){
  var numbers = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
  var suits = ["clubs", "diamonds", "spades", "hearts"];

  suits.forEach(function(suit){
    numbers.forEach(function(number){
      // $("ul.deck").append("<li>" + number + " of " + suit + "</li>");
      return number + " of " + suit;
    });
  });
};

//---------------------------------------------------------------------

//word play
$(document).ready(function(){
  $("form#word-play").submit(function(event){
    event.preventDefault();

    var aSentence = $("#sentence").val()

    $("#result").text(wordPlay(aSentence))
  })
});

var wordPlay = function(sentence){
  var array = sentence.split(" ");
  var newArray = []

  array.forEach(function(word){
    if (word.length >= 3){
      newArray.push(word)
    }
  })

  newArray.reverse();
  return newArray.join();
};
