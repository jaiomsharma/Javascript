
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){

 var msg = 'No such contact';

  for (var p in contacts) {
    if (contacts[p].firstName === firstName && contacts[p].hasOwnProperty(prop)) {
      msg = contacts[p][prop];
    } else if (!contacts[p].hasOwnProperty(prop)) {
      msg = 'No such property';
    }
  }

  return msg;

}


lookUpProfile("Akira", "likes");
