
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

*/

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0 ; i < names.length ; i++) {

  if (names[i].toLowerCase().charAt(0) == "j") {
    byeSpeaker.speak(names[i])
  } else {
     helloSpeaker.speak(names[i]);
  }
}
