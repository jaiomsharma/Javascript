var testString = "How many spaces are there in this sentence?";

var expression = /\s+/g;  // Change this line


var spaceCount = testString.match(expression).length;
