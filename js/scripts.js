//favorite stuff list
$(document).ready(function(){
  $("form#favorite-form").submit(function(event){
    event.preventDefault();

    var favoritesArray = ["color", "animal", "country", "flavor", "food"];
    var newArray = [];

    favoritesArray.forEach(function(favorites){
      var userInput = $("input#"+favorites).val();
      newArray.push(userInput)
    });

    var endArray = []
    endArray.push(newArray[1]);
    endArray.push(newArray[0]);
    endArray.push(newArray[2]);

    endArray.forEach(function(item){
      $("#result").append("<li>" + item + "</li>");
    })

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

    var list = ["one", "two", "three", "four", "five"];
    var newList = []

    list.forEach(function(item){
      var userInput = $("input#" + item).val();
      userInput = userInput.toUpperCase();
      newList.push(userInput);
    });

    newList.sort();

    newList.forEach(function(item){
      $("#shopping-list").append("<li>" + item + "</li>")
    });
  });
});

//---------------------------------------------------------------------

// //card deck
// $(document).ready(function(){
//   $("p.deck").text(cardDeck());
// });
//
// var cardDeck = function(){
//   var numbers = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
//   var suits = ["clubs", "diamonds", "spades", "hearts"];
//
//   suits.forEach(function(suit){
//     numbers.forEach(function(number){
//       // $("ul.deck").append("<li>" + number + " of " + suit + "</li>");
//       return number + " of " + suit;
//     });
//   });
// };

//---------------------------------------------------------------------

//word play
// $(document).ready(function(){
//   $("form#word-play").submit(function(event){
//     event.preventDefault();
//
//     var aSentence = $("#sentence").val()
//
//     $("#result").text(wordPlay(aSentence))
//   })
// });
//
// var wordPlay = function(sentence){
//   var array = sentence.split(" ");
//   var newArray = []
//
//   array.forEach(function(word){
//     if (word.length >= 3){
//       newArray.push(word)
//     }
//   })
//
//   newArray.reverse();
//   return newArray.join();
// };
