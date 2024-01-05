function shout(string) {
    return string.toUpperCase();
  }
  
  function whisper(string) {
    return string.toLowerCase();
  }
  
  function logShout(string) {
  //    return string.toUpperCase();
  console.log(string.toUpperCase( ));
  }
  
  function logWhisper(string) {
  //   return string.toLowerCase();
  console.log(string.toLowerCase( ));
   }   
  
   function shout(string) {
    return string.toUpperCase();
  }
  
  function whisper(string) {
    return string.toLowerCase();
  }
  
  function logShout(string) {
    //    return string.toUpperCase();
    console.log(string.toUpperCase());
  }
  
  function logWhisper(string) {
    //   return string.toLowerCase();
    console.log(string.toLowerCase());
  }
  
  function sayHiToHeadphonedRoommate(greet) {
    const hiLower = "I can't hear you!";
    const hiUpper = "YES INDEED!";
    const hiDinner = "I would love to!";
    if (greet.toLowerCase(greet) === greet) {
      console.log(hiLower);
      return hiLower;
    } else if (greet.toUpperCase(greet) === greet) {
      console.log(hiUpper);
      return hiUpper;
    } else if ("Let's have dinner together!" === greet) {
      console.log(hiDinner);
      return hiDinner;
    }
  }