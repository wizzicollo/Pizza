$(document).ready(function() {
  $(".myportfolio").hover(
    function() {
      $(this)
        .find(".overlay")
        .show();
    },
    function() {
      $(this)
        .find(".overlay")
        .hide();
    }
  );
});

$(document).ready(function() {
  $("#toggle").click(function() {
    $("#p1").show();
  });
  $("#toggle").click(function() {
    $("#toggle").hide();
  });

  $("#p1").click(function() {
    $("#toggle").show();
  });
  $("#p1").click(function() {
    $("#p1").hide();
  });
  $("#toggle2").click(function() {
    $("#p2").show();
  });
  $("#toggle2").click(function() {
    $("#toggle2").hide();
  });

  $("#p2").click(function() {
    $("#toggle2").show();
  });
  $("#p2").click(function() {
    $("#p2").hide();
  });
  $("#toggle3").click(function() {
    $("#p3").show();
  });
  $("#toggle3").click(function() {
    $("#toggle3").hide();
  });

  $("#p3").click(function() {
    $("#toggle3").show();
  });
  $("#p3").click(function() {
    $("#p3").hide();
  });

  $(".four").hover(function() {
    $("#overlay4").show();
  });
  $(".four").mouseleave(function() {
    $("#overlay4").hide();
  });

  $(".three").hover(function() {
    $("#overlay3").show();
  });
  $(".three").mouseleave(function() {
    $("#overlay3").hide();
  });

  $(".two").hover(function() {
    $("#overlay2").show();
  });
  $(".two").mouseleave(function() {
    $("#overlay2").hide();
  });

  $(".one").hover(function() {
    $("#overlay1").show();
  });
  $(".one").mouseleave(function() {
    $("#overlay1").hide();
  });

  $(".five").hover(function() {
    $("#overlay5").show();
  });
  $(".five").mouseleave(function() {
    $("#overlay5").hide();
  });

  $(".six").hover(function() {
    $("#overlay6").show();
  });
  $(".six").mouseleave(function() {
    $("#overlay6").hide();
  });

  $(".seven").hover(function() {
    $("#overlay7").show();
  });
  $(".seven").mouseleave(function() {
    $("#overlay7").hide();
  });

  $(".eight").hover(function() {
    $("#overlay8").show();
  });
  $(".eight").mouseleave(function() {
    $("#overlay8").hide();
  });

  event.preventDefault();
});

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




// // declaring variables
var pizzaFlavour = [
  "Berry",
  "Butternut Squash",
  "Chicken",
  "Hummus",
  "Turkish Ground"
];
var pizzaSize = ["Regular", "Medium", "Large"];
var pizzaCrust = ["Thin crust", "Thick crust", "Deep crust", "Stuffed crust"];
var pizzaTopping = ["Onion", "Mushroom", "bacon", "black olives"];

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
/* 
function getCrast() {
  // var crast = document.getElementsByName("pizza").name;
  var crast = $("#pizza :selected").val();
  return toString(crast);
} */

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

// function getAmount() {
//   var results =
//     (getFlavour() + getSize() + getCrust() + getTopping()) * getNumber();
//   alert(
//     "You've ordered " +
//       getNumber("") +
//       " pizza's," +
//       " of " +
//       getCrast("") +
//       "which amounts to Ksh. " +
//       results +
//       " Thanks for your order,welcome again!"
//   );
//   prompt("Enter your location");
//   prompt("Enter your name");
//   prompt("Enter your phone number");
//   alert("Your order will be delivered in a while, delivery fee is  Ksh.150/=");
// }
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