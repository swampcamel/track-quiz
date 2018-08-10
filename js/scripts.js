$(function() {
  $("button#begin").click(function() {
    $("#welcome").hide();
    $("#question-1-screen").show();
  });
  $("button#btn-q1").click(function() {
    $("#question-1-screen").hide();
    $("#question-2-screen").show();
  });
  $("button#btn-q2").click(function() {
    $("#question-2-screen").hide();
    $("#question-3-screen").show();
  });
  $("button#btn-q3").click(function() {
    $("#question-3-screen").hide();
    $("#question-4-screen").show();
  });
  $("button#btn-q4").click(function() {
    $("#question-4-screen").hide();
    $("#question-5-screen").show();
  });

  $("form#form-1").submit(function(event) {
    event.preventDefault();

    var cTrack = 0;
    var jsTrack = 0;
    var rubyTrack = 0;

    var answer1 = $("input:radio[name=question-1]:checked").val();
    var answer2 = $("input:radio[name=question-2]:checked").val();
    var answer3 = $("input:radio[name=question-3]:checked").val();
    var answer4 = $("input:radio[name=question-4]:checked").val();
    var answer5 = $("input:radio[name=question-5]:checked").val();

    if (answer1 === "c") {
      cTrack++;
    } else if (answer1 === "js") {
      jsTrack++;
    } else {
      rubyTrack++;
    }

    if (answer2 === "c") {
      cTrack++;
    } else if (answer2 === "js") {
      jsTrack++;
    } else {
      rubyTrack++;
    }

    if (answer3 === "c") {
      cTrack = cTrack++;
    } else if (answer3 === "js") {
      jsTrack++;
    } else {
      rubyTrack++;
    }

    if (answer4 === "c") {
      cTrack++;
    } else if (answer4 === "js") {
      jsTrack++;
    } else {
      rubyTrack++;
    }

    if (answer5 === "c") {
      cTrack++;
    } else if (answer5 === "js") {
      jsTrack++;
    } else if (answer5 === "js-ruby") {
      jsTrack++;
      rubyTrack++;
    } else if (answer5 === "js-c") {
      cTrack++;
      jsTrack++;
    } else {
      rubyTrack++;
    }

    $("#question-5-screen").hide();
    $("#result-screen").show();

  if (jsTrack > cTrack && jsTrack > rubyTrack) {
    $("#js-result").removeClass('result-hide');
    $("#js-result").addClass('result-show');
  } else if (cTrack > jsTrack && cTrack > rubyTrack) {
    $("#c-result").removeClass('result-hide');
    $("#c-result").addClass('result-show');
  } else if (rubyTrack > jsTrack && rubyTrack > cTrack) {
    $("#ruby-result").removeClass('result-hide');
    $("#ruby-result").addClass('result-show');
  } else if (jsTrack === cTrack && jsTrack > rubyTrack) {
    $("#js-c-result").removeClass('result-hide');
    $("#js-c-result").addClass('result-show');
  } else if (jsTrack === rubyTrack && jsTrack > cTrack) {
    $("#js-ruby-result").removeClass('result-hide');
    $("#js-ruby-result").addClass('result-show');
  } else if (rubyTrack === cTrack && rubyTrack > jsTrack) {
    $("#ruby-c-result").removeClass('result-hide');
    $("#ruby-c-result").addClass('result-show');
  } else if (rubyTrack === cTrack && rubyTrack === jsTrack) {
    $("#any-result").removeClass('result-hide');
    $("#any-result").addClass('result-show');
  }

  });
});
