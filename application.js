// ORIGINAL CODE TO REFACTOR TO OOJS
// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     console.log("WAT")
//     $('.dice').append('<div class="die">0</div>');
//   });

//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });


$(document).ready(function() {
  var dice = new DieContainer();

  $('.add').click(function() {
    var die = new Die();
    dice.addDie(die);
  });

  $('.roll').click(function() {
    dice.rollDice();
  });
});

function randNumber(){
  return Math.floor((Math.random()*6)+1);
}

///////////////
// DIE METHODS
///////////////
function Die(){
  this.value = 0;
}

Die.prototype.getValue = function(){
  return this.value;
}

Die.prototype.setValue = function(value){
  this.value = value;
}

//////////////////////////
// DICE CONTAINER METHODS
//////////////////////////
function DieContainer(){
  this.allDice = [];
}

DieContainer.prototype.addDie = function(die){
  this.allDice.push(die);
  this.renderDice();
}

DieContainer.prototype.rollDice = function(){
  for(var i=0; i<this.allDice.length; i++){
    this.allDice[i].setValue(randNumber());
  }
  this.renderDice();
}

DieContainer.prototype.renderDice = function(){
  $('.dice').empty();
  for(var i=0; i<this.allDice.length; i++){
    $('.dice').append("<div class='die'>"+ this.allDice[i].getValue() +"</div>");
  }
}
