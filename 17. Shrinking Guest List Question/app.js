// 17. Shrinking Guest List: You just found out that your new dinner table
//  won’t arrive in time for the dinner, and you have space for only two
//   guests.
// • Start with your program from Exercise 16. Add a new line that prints
//  a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain
//  in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t 
// invite them to dinner.
// • Print a message to each of the two people still on your list, 
// letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end
// of your program.
var guest_list = ['M. Ali', 'Sir, Zia Khan', 'Danyal', 'Kamran Tessory'];
var not_present = 'Danyal';
var new_guest = 'Mr. Imran Khan';
guest_list[1] = new_guest;
// Printing invitations for the current guest list
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\n we shall invite them to dinner tomorrow.\n Thanks you\n');
// }
// Adding new guests to the beginning of the guest list
guest_list.unshift('Fahad', 'Sami', 'Javed');
// Printing invitations for the updated guest list
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\n we shall invite them to dinner tomorrow.\n Thanks you\n');
// }
console.log('\n unfortunately we can not provide big table , just 2 people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("apologize sir,/Madm, ".concat(remove_guest, " you are not invitd dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n you are still invite them to dinner tomorrow.\n Thanks you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
