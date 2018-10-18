$(function () {
  var number = $("#cc-number"),
  expDate = $("#cc-expiration-date"),
  cvv = $("#cc-cvv"),
  payementButton = $("#submit-payment"),
  ccInputs = $(".cc-input"),
  timerInterval = 1000,
  timer;

  //Set the mask
  number.inputmask("9999 9999 9999 9[999] [999]",{"placeholder":""});
  expDate.inputmask("mm/yyyy");
  cvv.inputmask("999[9]",{"placeholder":""});
  number.focus();


  ccInputs.keyup(function(e) {
    if (e.keyCode !== "9" && e.keyCode !== "16") {
      clearTimeout(timer);
      timer = setTimeout(finishTyping, timerInterval,$(this).attr("id"),$(this).val());

    }

  } );

  ccInputs.keydown(function(){
    clearTimeout(timer);
  });

// On feild blur we remove the active class form all items
ccInputs.blur(function () {
  $("#title-" + $(this).attr("id") ).addClass("active");
});

// On feild blur we remove the active class from all items

ccInputs.blur(function () {
  $("h2 span ").removeClass("active");
});


// Make sure the submit button isn't allowed to do anything if disabled

  payementButton.click(function (event) {
    event.preventDefault();

    if ($(this).hasClass ("disabled")) {
      return false;
    }
    $("#card-form").submit()
  });



  function finishTyping(id,value) {
    switch (id) {
      case "cc-number":

        break;
      case "cc-expiration-date":

          break;
      case "cc-cvv":

            break;

    }
  }

});
