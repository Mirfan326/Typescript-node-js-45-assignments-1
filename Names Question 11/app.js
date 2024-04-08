// // 11. Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, 
//  one at a time.
// let memberNames:string [] = ['Abdulla','Rheman','Zia','Ali'];
// let ab='Abdulla';
// let re='Rheman';
// let Z='Zia';
// let A='ALi';
// console.log(ab);
// let memberNames:string [] = ['Abdulla','Rheman','Zia','Ali'];
// for(let i=0; i<memberNames.length; i++){
// console.log(memberNames[i]);
// }
// /12. Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them.
//  The text of each messageshould be the same, but 
//  each message should be personalized with the person’s name.
var memberNames = ['Abdulla', 'Rheman', 'Zia', 'Ali'];
var message = 'who is birthday tommorrow:';
for (var i = 0; i < memberNames.length; i++) {
    console.log(message + memberNames[i]);
}
