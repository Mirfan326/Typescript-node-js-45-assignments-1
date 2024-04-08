// 16. More Guests: You just found a bigger dinner table, 
// so now more space is available. Think of three more guests to 
// invite to dinner.
// • Start with your program from Exercise 15. Add a print statement
// to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person 
// in your list.
var guest_list = ['M. Ali', 'Sir, Zia Khan', 'Danyal', 'Kamran Tessory'];
var not_present = 'Danyal';
var new_guest = 'Mr. Imran Khan';
guest_list[1] = new_guest;
// Printing invitations for the current guest list
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n we shall invite them to dinner tomorrow.\n Thanks you\n');
}
// Adding new guests to the beginning of the guest list
guest_list.unshift('Fahad', 'Sami', 'Javed');
// Printing invitations for the updated guest list
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n we shall invite them to dinner tomorrow.\n Thanks you\n');
}
