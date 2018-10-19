// takes the form field value and returns true on valid number
function valid_credit_card(value) {
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm. It's so pretty.
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}

function validExpirationDate(date) {
  var currentDate = new Date(),
      currentMonth = currentDate.getMonth() + 1, //zero based index
      currentYear = currentDate.getFullYear(),
      expirationMonth = Number(date.substr(0,2)),
      expirationYear = Number(date.substr(3,date.length));

  if ((expirationYear < currentYear) || (expirationYear == currentYear && expirationMonth <= currentMonth)) {
    return false;
  }
    return true;



}



$(function () {
  var number = $("#cc-number"),
  expDate = $("#cc-expiration-date"),
  cvv = $("#cc-cvv"),
  payementButton = $("#submit-payment"),
  ccInputs = $(".cc-input"),
  timerInterval = 1000,
  timer,
  numberOK = false , expDateOK, cvvOK;

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
    var  validationValue = value.replace(/ /g,'');
    switch (id) {
      case "cc-number":
          if (validationValue.length > 0) {
            numberOK = valid_credit_card(validationValue);
          }
          if (numberOK) {
            number.removeClass('error');
            expDate.focus();
          }
          else {
            number.addClass('error');
          }
        break;
      case "cc-expiration-date":
          if (validationValue.indexOf("m") == -1 && validationValue.indexOf("y") == -1) {
            expDate = validExpirationDate(validationValue);
            if (expDateOK) {
              expDate.removeClass('error');
              cvv.focus();
            }
            else {
              expDate.addClass('error');
            }
          }
          break;
      case "cc-cvv":

            break;

    }
  }

});
