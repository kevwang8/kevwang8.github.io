// Function to verify that the phone number is correct.
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([0-9][0-9][0-9]+)\)?-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// Function to verify that the credit card number is correct.
function validateCredit(creditNum) {
    var a = document.getElementById(creditNum).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\d{4}[\s-]\d{4}[\s-]\d{4}[\s-]\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// Function to verify that the cvv number is correct.
function validateCVV(cvv) {
    var a = document.getElementById(cvv).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\d{3}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateExpert(expert) {
  var a = document.getElementById(expert).value;

  if (a.localeCompare("default") === 0){
    return false;
  }
  else {
    return true;
  }
}

// Function to verify that the text fields are not empty
function validateTextField(id) {
  var a = document.getElementById(id).value;
  return a.length != 0;
}


//checks all validation when user tyring to submit
function validateAll() {
  var flag = true;

  var element = document.getElementById("fname");
  if (validateTextField("fname")){
    element.classList.add("correct");
  }
  else{
    element.classList.add("error");
    flag = false;
  }

  var element = document.getElementById("lname");
  if (validateTextField("lname")){
    element.classList.add("correct");
  }
  else{
    element.classList.add("error");
    flag = false;
  }

  var element = document.getElementById("email");
  if (validateTextField("email")){
    element.classList.add("correct");
  }
  else{
    element.classList.add("error");
    flag = false;
  }

  var element = document.getElementById("creditName");
  if (validateTextField("creditName")){
    element.classList.add("correct");
  }
  else{
    element.classList.add("error");
    flag = false;
  }

  var element = document.getElementById("phone");
  if (validatePhone("phone")){
    element.classList.add("correct");
  }
  else{
    element.classList.add("error");
    flag = false;
  }

  var element = document.getElementById("doctorSelect");
  if (validateExpert("doctorSelect")){
    element.classList.add("correct");
  }
  else{
    element.classList.add("error");
    flag = false;
  }

  var element = document.getElementById("creditNum");
  if (validateCredit("creditNum")){
    element.classList.add("correct");
  }
  else{
    element.classList.add("error");
    flag = false;
  }

  var element = document.getElementById("cvv");
  if (validateCVV("cvv")){
    element.classList.add("correct");
  }
  else{
    element.classList.add("error");
    flag = false;
  }
  return flag;
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
const setDateFormat = "mm/dd/yy";
var unavailableDates = [];
var bethUnavailable = [5];
var johnUnavailable = [1, 2];
var allenUnavailable = [4, 5];

function disableDates(date) {
    // Disable all Sundays and saturdays
    if (date.getDay() === 0)
        return [false];
    if (date.getDay() === 6)
        return [false];
    //disable days according to doctor schedule
    if (unavailableDates.includes(date.getDay())){
      return [false];
    } else {
      return [true];
    }
}

function errorMessagePhone() {
  document.getElementById('phone_error').textContent = "Phone Number must be in (###)-###-#### format";
}

function errorMessageCredit() {
  document.getElementById('card_error').textContent = "Credit Card Number must be in #### #### #### #### format";
}

function errorMessageCVV() {
  document.getElementById('cvv_error').textContent = "CVV must be in ### format";
}

function errorMessageExpert() {
  document.getElementById('expert_error').textContent = "Please select an expert";
}

function errorMessageBlanks(id) {
  document.getElementById(id).textContent = "Please enter an input";
}

function successModal(date){
  var sel = document.getElementById("doctorSelect");
  var text = sel.options[sel.selectedIndex].text;
  document.getElementById('bookSuccess').textContent = "Your appointment has been booked for "+date+" with "+text+". We will email you a confirmation shortly. Thank you!";
}

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    $("#doctorSelect").on("change", function(){
      var selected = $("#doctorSelect option:selected").text();

      if(selected.localeCompare("Dr. Beth Wright") === 0){
        unavailableDates = bethUnavailable;
      }
      else if (selected.localeCompare("Dr. John McKenzie") === 0){
        unavailableDates = johnUnavailable;
      }
      else if (selected.localeCompare("Dr. Allen Greenwood") === 0){
        unavailableDates = allenUnavailable;
      }
      else {
        unavailableDates = [];
      }
    });

    //datepicker
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/28/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: disableDates
        }
    );

    //validates field when focusing out of the field
    $("#phone").on("focusout", function(){

        if (!validatePhone("phone")){
            //alert("Phone Number must be in (###)-###-#### format");
            errorMessagePhone();
            $("#phone_error").css('color', 'red');
            $("#phone_error").css('font-size', '13.5px');
            $("#phone_error").show();
            $("#phone").addClass("error");
            $("#phone").removeClass("correct");
        }
        else {
            $("#phone").removeClass("error");
            $("#phone").addClass("correct");
            $("#phone_error").hide();
        }
    });

    $("#creditNum").on("focusout", function(){
        if (!validateCredit("creditNum")){
            //alert("Wrong format for credit card number Must be in #### #### #### #### format");
            errorMessageCredit();
            $("#card_error").css('color', 'red');
            $("#card_error").css('font-size', '13.5px');
            $("#card_error").show();
            $("#creditNum").addClass("error");
            $("#creditNum").removeClass("correct");
        }
        else {
            $("#creditNum").removeClass("error");
            $("#creditNum").addClass("correct");
            $("#card_error").hide();
        }
    });

    $("#cvv").on("focusout", function(){
        if (!validateCVV("cvv")){
            //alert("Wrong format for CVV Must be in ### format");
            errorMessageCVV();
            $("#cvv_error").css('color', 'red');
            $("#cvv_error").css('font-size', '13.5px');
            $("#cvv_error").show();
            $("#cvv").addClass("error");
            $("#cvv").removeClass("correct");
        }
        else {
            $("#cvv").removeClass("error");
            $("#cvv").addClass("correct");
            $("#cvv_error").hide();
        }
    });

    $("#fname").on("focusout", function(){
        if (validateTextField("fname")){
            $("#fname").removeClass("error");
            $("#fname").addClass("correct");
            $("#fname_error").hide();
        }
        else {
          $("#fname").removeClass("correct");
          $("#fname").addClass("error");
          errorMessageBlanks("fname_error");
          $("#fname_error").css('color', 'red');
          $("#fname_error").css('font-size', '13.5px');
          $("#fname_error").show();
        }
    });
    $("#lname").on("focusout", function(){
        if (validateTextField("lname")){
          $("#lname").removeClass("error");
            $("#lname").addClass("correct");
            $("#lname_error").hide();
        }
        else {
          $("#lname").removeClass("correct");
          $("#lname").addClass("error");
          errorMessageBlanks("lname_error");
          $("#lname_error").css('color', 'red');
          $("#lname_error").css('font-size', '13.5px');
          $("#lname_error").show();
        }
    });
    $("#email").on("focusout", function(){
        if (validateTextField("email")){
            $("#email").removeClass("error");
            $("#email").addClass("correct");
            $("#email_error").hide();
        }
        else {
          $("#email").removeClass("correct");
          $("#email").addClass("error");
          errorMessageBlanks("email_error");
          $("#email_error").css('color', 'red');
          $("#email_error").css('font-size', '13.5px');
          $("#email_error").show();
        }
    });
    $("#doctorSelect").on("focusout", function(){
        if (validateExpert("doctorSelect")){
            $("#doctorSelect").removeClass("error");
            $("#doctorSelect").addClass("correct");
            $("#expert_error").hide();
        }
        else {
          $("#doctorSelect").removeClass("correct");
          $("#doctorSelect").addClass("error");
          errorMessageExpert();
          $("#expert_error").css('color', 'red');
          $("#expert_error").css('font-size', '13.5px');
          $("#expert_error").show();
        }
    });
    $("#creditName").on("focusout", function(){
        if (validateTextField("creditName")){
            $("#creditName").removeClass("error");
            $("#creditName").addClass("correct");
            $("#cname_error").hide();
        }
        else {
          $("#creditName").removeClass("correct");
          $("#creditName").addClass("error");
          errorMessageBlanks("cname_error");
          $("#cname_error").css('color', 'red');
          $("#cname_error").css('font-size', '13.5px');
          $("#cname_error").show();
        }
    });

    $("#bookBtn").click(function(){
      if(validateAll()) {
        var date = $("#dateInput").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();

        successModal(date);
        $("#bookedModal").modal("show");

        $("#phone").removeClass("correct");
        $("#doctorSelect").removeClass("correct");
        $("#creditNum").removeClass("correct");
        $("#cvv").removeClass("correct");
        $("#fname").removeClass("correct");
        $("#lname").removeClass("correct");
        $("#email").removeClass("correct");
        $("#creditName").removeClass("correct");
      }
      else {
        //alert("Please Enter all Fields in Correct Format!");
        $("#errorModal").modal("show");
      }
    });



    //adds some highlighting when hovering over a input field
    $("#fname").on("mouseenter", function(){
        $("#fname").addClass("showInput");
    });

    $("#fname").on("mouseleave", function(){
        $("#fname").removeClass("showInput");
    });

    $("#lname").on("mouseenter", function(){
      $("#lname").addClass("showInput");
    });
    $("#lname").on("mouseleave", function(){
      $("#lname").removeClass("showInput");
    });

    $("#email").on("mouseenter", function(){
      $("#email").addClass("showInput");
    });
    $("#email").on("mouseleave", function(){
      $("#email").removeClass("showInput");
    });

    $("#phone").on("mouseenter", function(){
      $("#phone").addClass("showInput");
    });
    $("#phone").on("mouseleave", function(){
      $("#phone").removeClass("showInput");
    });

    $("#petSelect").on("mouseenter", function(){
      $("#petSelect").addClass("showInput");
    });
    $("#petSelect").on("mouseleave", function(){
      $("#petSelect").removeClass("showInput");
    });

    $("#serviceSelect").on("mouseenter", function(){
      $("#serviceSelect").addClass("showInput");
    });
    $("#serviceSelect").on("mouseleave", function(){
      $("#serviceSelect").removeClass("showInput");
    });

    $("#doctorSelect").on("mouseenter", function(){
      $("#doctorSelect").addClass("showInput");
    });
    $("#doctorSelect").on("mouseleave", function(){
      $("#doctorSelect").removeClass("showInput");
    });

    $("#dateInput").on("mouseenter", function(){
      $("#dateInput").addClass("showInput");
    });
    $("#dateInput").on("mouseleave", function(){
      $("#dateInput").removeClass("showInput");
    });

    $("#timeInput").on("mouseenter", function(){
      $("#timeInput").addClass("showInput");
    });
    $("#timeInput").on("mouseleave", function(){
      $("#timeInput").removeClass("showInput");
    });

    $("#creditName").on("mouseenter", function(){
      $("#creditName").addClass("showInput");
    });
    $("#creditName").on("mouseleave", function(){
      $("#creditName").removeClass("showInput");
    });

    $("#creditNum").on("mouseenter", function(){
      $("#creditNum").addClass("showInput");
    });
    $("#creditNum").on("mouseleave", function(){
      $("#creditNum").removeClass("showInput");
    });

    $("#ccmonth").on("mouseenter", function(){
      $("#ccmonth").addClass("showInput");
    });
    $("#ccmonth").on("mouseleave", function(){
      $("#ccmonth").removeClass("showInput");
    });

    $("#ccyear").on("mouseenter", function(){
      $("#ccyear").addClass("showInput");
    });
    $("#ccyear").on("mouseleave", function(){
      $("#ccyear").removeClass("showInput");
    });

    $("#cvv").on("mouseenter", function(){
      $("#cvv").addClass("showInput");
    });
    $("#cvv").on("mouseleave", function(){
      $("#cvv").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#credit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#dateToolTip").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
});
