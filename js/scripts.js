const RADIOS_CHECKED = 3;

function resetQuiz() {
  $(".results").hide();
  disableSubmit();
}

function disableSubmit() {
  $("#submit").prop("disabled", "true");
}

function validateInput() {
  countRadioBoxes() === RADIOS_CHECKED && enableSubmit();
}

function countRadioBoxes() {
  var count = 0;
  $("input:radio").each(function(index, item) {
    $(item).is(':checked') && count++;
  });
  return count;
}

function enableSubmit() {
  $("#submit").removeAttr("disabled");
}

function runCharacterMatch(value) {
  $(".results").show();
  $("#quiz").hide();
  if (value <= 4) {
    $("#glenn").fadeToggle();
  } else if (value <= 6 && value >= 5) {
    $("#carl").fadeToggle();
  } else if (value >= 7) {
    $("#gov").fadeToggle();
  } else {
    alert("You broke it...");
  }
}

$(document).ready(function() {
  resetQuiz();

  $("label").click(function() {
    validateInput();
  })

  $("#submit").click(function(e) {
    e.preventDefault();

    var answer1 = parseInt($("input:radio[name=question1]:checked").val());
    var answer2 = parseInt($("input:radio[name=question2]:checked").val());
    var answer3 = parseInt($("input:radio[name=question3]:checked").val());
    var result = answer1 + answer2 + answer3;
    runCharacterMatch(result);
  });
});
