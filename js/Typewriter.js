var aText = new Array(
    "hi, i'm bhanu", // add your text
    "a software engineer", // add your text
    "based in San Franciso,USA", // add your text
    "i drink lot of tea", // add your text
    "and build beautiful websites" // add your text
    );
    var iSpeed = 140; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 700);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }