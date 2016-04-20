//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
function romanize(yourNumber) {
  yourNumber = parseInt(yourNumber);
  var romanNumber = "";
  var placeholder = 0;

  if(yourNumber >3999) {
    romanNumber = "Romans didn't count over 3,999!";
  } else {  // 1000's place 1-3, 4+ not allowed
    if(yourNumber > 999) {
      placeholder=parseInt(yourNumber/1000);
      yourNumber = yourNumber % 1000;
      for(i=1;i<=placeholder;i++) {
        romanNumber+="M";
      }
    } // 100's place: 9, 5-8, 4, 1-3
    if(yourNumber > 99) {
      placeholder=parseInt(yourNumber/100);
      yourNumber = yourNumber % 100;
      if(placeholder>=5) {
        romanNumber+="D";
        placeholder-=5;
      }
      for(i=1;i<=placeholder;i++) {
        romanNumber+="C";
      }
    } // 10's place: 9, 5-8, 4, 1-3
    if(yourNumber > 9) {
      placeholder=parseInt(yourNumber/10);
      yourNumber = yourNumber % 10;
      if(placeholder>=5) {
        romanNumber+="L";
        placeholder-=5;
      }
      for(i=1;i<=placeholder;i++) {
        romanNumber+="X";
      }
    } // 1's place: 9, 5-8, 4, 1-3
    placeholder=parseInt(yourNumber);
    if(placeholder>=5) {
      romanNumber+="V";
      placeholder-=5;
    }
    for(i=1;i<=placeholder;i++) {
      romanNumber+="I";
    }
  }
  return romanNumber;
}

$("#convertNumber").click(function() {

/*

  var romanNumber = "";
  var placeholder = 0;

  if(yourNumber>=1000) {

  }
  if(yourNumber>=500) {
    placeholder=parseInt(yourNumber/500);
    yourNumber = yourNumber % 500;
        alert(placeholder + ": " + yourNumber);
    if((placeholder===4) || (yourNumber >= 400)) {
      romanNumber+="CM";
    } else {
      for(i=1;i<=placeholder;i++) {
        romanNumber+="D";
      }
    }
  }
  if(yourNumber>=100) {
    placeholder=yourNumber/100;
    yourNumber = yourNumber % 100;
    if(placeholder===4) {
      romanNumber+="XC";
    } else {
      for(i=1;i<=placeholder;i++) {
        romanNumber+="C";
      }
    }
  }
  if(yourNumber>=50) {
    placeholder=yourNumber/50;
    yourNumber = yourNumber % 50;
    if(placeholder===4) {
      romanNumber+="XC";
    } else {
      for(i=1;i<=placeholder;i++) {
        romanNumber+="L";
      }
    }
  }
  if(yourNumber>=10) {
    placeholder=yourNumber/10;
    yourNumber = yourNumber % 10;
    if(placeholder===4) {
      romanNumber+="IL";
    } else {
      for(i=1;i<=placeholder;i++) {
        romanNumber+="X";
      }
    }
  }
  if(yourNumber>=5) {
        alert(yourNumber);
    placeholder=yourNumber/5;
    yourNumber = yourNumber % 5;

    if(placeholder===4) {
      romanNumber+="IX";
    } else {
      for(i=1;i<=placeholder;i++) {
        romanNumber+="V";
      }
    }
  }
  if(yourNumber>=1) {
    placeholder=yourNumber/1;
    yourNumber = yourNumber % 1;
    if(placeholder===4) {
      romanNumber+="IV";
    } else {
      for(i=1;i<=placeholder;i++) {
        romanNumber+="I";
      }
    }
  }
  */

  $("#results").text(romanize($("#myNumber").val()));
});
