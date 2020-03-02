// Contact us 

$(document).ready(function() {
  $("form").submit(function() {
    var Name = $("#Name").val();
    var Email = $("#Email").val();
    var Message = $("#Message").val();

    if (Name == "" || Email == "" || Message == "") {
      alert("Please make sure you have filled in the form correctly!");
    } else alert(" Hi " + Name + " We have received your message. Thank you for reaching out to us.");
  });
});



// Order for Delivery


// // declaring variables
var pizzaFlavour = [
  "Berry",
  "Butternut Squash",
  "Chicken",
];
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = [ "Crispy crust", "Gluten-free crust", "Stuffed crust"];
var pizzaTopping = ["Onion", "Mushroom", "bacon"];

// calling functions
function getFlavour() {
  // var flavour = document.getElementById("pizzaflavour").value;
  var flavour = $("#pizzaflavour :selected").val();
  return parseInt(flavour);
}

function getSize() {
  // var size = document.getElementById("pizzasize").value;
  var size = $("#pizzasize :selected").val();
  return parseInt(size);
}

function getCrust() {
  // var crust = document.getElementById("pizzacrust").value;
  var crust = $("#pizzacrust :selected").val();
  return parseInt(crust);
}

function getTopping() {
  // var topping = document.getElementById("pizzatopping").value;
  var topping = $("#pizzatopping :selected").val();
  return parseInt(topping);
}

function getNumber() {
  // var number = document.getElementById("number").value;
  var number = $("#number").val();
  return parseInt(number);
}


function getAmount(flavour, size, crust, topping, number) {
  var results =
    (parseInt(flavour.val()) +
      parseInt(size.val()) +
      parseInt(crust.val()) +
      parseInt(topping.val())) *
    parseInt(number.val());
  alert(
    "You've ordered " + 
      number.val() +  
      " "  +
      "pizza's" + 
      " "  +
      flavour.html() +
      " "  + 
      size.html() +
      " "  +
      crust.html() +
      " "  + 
      topping.html() +
      " "  +
      " which amounts to Ksh. "  +
      results +
      " Thanks for your order,welcome again!"
  );
  prompt("Enter your location");
  prompt("Enter your name");
  prompt("Enter your phone number");
  alert("Your order will be delivered in a while, delivery fee is  Ksh.150/=");
}
function getPick(flavour, size, crust, topping, number) {
  var results =
  (parseInt(flavour.val()) +
  parseInt(size.val()) +
  parseInt(crust.val()) +
  parseInt(topping.val())) *
  parseInt(number.val());
  alert(
    "You've ordered "  +
    number.val() +
    " "  +
    " pizza's, "  +
    flavour.html() +
    " "   + 
    size.html() +
    " "  +
    crust.html() +
    "  "  + 
    topping.html() +
    "  "  +
    " which amounts to Ksh. " +
      results  +
      "  Thanks for shopping with us  "
  );
}
$(document).ready(function() {
  $("#make-delivery").click(function(event) {
    var flavour = $("#pizzaflavour :selected");
    var size = $("#pizzasize :selected");
    var crust = $("#pizzacrust :selected");
    var topping = $("#pizzatopping :selected");
    var number = $("#number");

    getAmount(flavour, size, crust, topping, number);
    event.preventDefault();
  });
});
$(document).ready(function() {
  $("#pick-up").click(function(event) {
    var flavour = $("#pizzaflavour :selected");
    var size = $("#pizzasize :selected");
    var crust = $("#pizzacrust :selected");
    var topping = $("#pizzatopping :selected");
    var number = $("#number");

    getPick(flavour, size, crust, topping, number);
    event.preventDefault();
  });
});