const RADIOS_CHECKED = 3;

function resetQuiz() {
  resetForm();
  disableSubmit();
  $("#quiz").show();
  $(".results, .result-box").hide();
}

function resetForm() {
  document.getElementById("quiz").reset();
  disableSubmit();
}

function disableSubmit() {
  $("#submit").prop("disabled", "true");
}

function validateInput() {
  if (countRadioBoxes() === RADIOS_CHECKED) enableSubmit();
}

function countRadioBoxes() {
  var count = 0;
  $("input:radio").each(function(index, item) {
    if ($(item).is(':checked')) count++;
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
    $("#glenn").show();
  } else if (value <= 6 && value >= 5) {
    $("#carl").show();
  } else if (value >= 7) {
    $("#gov").show();
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
    var totalScore = answer1 + answer2 + answer3;
    runCharacterMatch(totalScore);
  });

  $("#try-again").click(function() {
    resetQuiz();
  });
});
