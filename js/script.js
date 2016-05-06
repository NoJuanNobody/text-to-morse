

var message={};
message.msg = "this is a test";
message.morse = "";
message.rosetta= {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----',
}
message.toMorse=function(){
  var self = this;

  var morseMsg = this.msg.split("").map(
        function(e){
          return self.rosetta[e.toLowerCase()];
      })
      .join(" ");
      // console.log(morseMsg);
      return morseMsg;

  }

var morseCode = message.toMorse();

var theMessage = document.getElementById("inputfield").innerHTML;
console.log(theMessage);
