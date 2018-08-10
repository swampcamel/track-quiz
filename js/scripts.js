var cTrack = 0;
var jsTrack = 0;
var rubyTrack = 0;

$(function() {
  $("button#begin").click(function() {
    $("#welcome").hide();
    $("#question-1-screen").show();
  });

  $("form#form-1").submit(function(event) {
    event.preventDefault();
    var answer1 = $("input:radio[name=question1]:checked").val();

    if (answer1 === "c") {
      cTrack++;
    } else if (answer1 === "js") {
      jsTrack++;
    } else {
      rubyTrack++;
    }
    console.log("cTrack =" + cTrack);
    console.log("jsTrack =" + jsTrack);
    console.log("rubyTrack =" + rubyTrack);

    $("#question-1-screen").hide();
    $("#question-2-screen").show();
  });

  $("form#form-2").submit(function(event) {
    event.preventDefault();
    var answer2 = $("input:radio[name=question2]:checked").val();

    if (answer2 === "c") {
      cTrack++;
    } else if (answer2 === "js") {
      jsTrack++;
    } else {
      rubyTrack++;
    }
    console.log("cTrack =" + cTrack);
    console.log("jsTrack =" + jsTrack);
    console.log("rubyTrack =" + rubyTrack);

    $("#question-2-screen").hide();
    $("#question-3-screen").show();
  });

  $("form#form-3").submit(function(event) {
    event.preventDefault();
    var answer3 = $("input:radio[name=question3]:checked").val();

    if (answer3 === "c") {
      cTrack++;
    } else if (answer3 === "js") {
      jsTrack++;
    } else {
      rubyTrack++;
    }
    console.log("cTrack =" + cTrack);
    console.log("jsTrack =" + jsTrack);
    console.log("rubyTrack =" + rubyTrack);

    $("#question-3-screen").hide();
    $("#question-4-screen").show();
  });

  $("form#form-4").submit(function(event) {
    event.preventDefault();
    var answer4 = $("input:radio[name=question4]:checked").val();

    if (answer4 === "c") {
      cTrack++;
    } else if (answer4 === "js") {
      jsTrack++;
    } else {
      rubyTrack++;
    }
    console.log("cTrack =" + cTrack);
    console.log("jsTrack =" + jsTrack);
    console.log("rubyTrack =" + rubyTrack);

    $("#question-4-screen").hide();
    $("#question-5-screen").show();
  });

  $("form#form-5").submit(function(event) {
    event.preventDefault();
    var answer5 = $("input:radio[name=question5]:checked").val();

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
    console.log("cTrack =" + cTrack);
    console.log("jsTrack =" + jsTrack);
    console.log("rubyTrack =" + rubyTrack);

    $("#question-5-screen").hide();
    $("#result-screen").show();
  });

});
