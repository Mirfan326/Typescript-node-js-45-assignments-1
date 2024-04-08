// 15. Changing Guest List: You just heard that one of your
// guests can’t make the dinner, so you need to send out a new set of 
// invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement 
// at the end of your program stating the name of the guest who can’t 
// make it.
// • Modify your list, replacing the name of the guest who can’t make it
//  with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who
//  is still in your list.
// let guest_List:string[]=['M.ALi','sir,Zia Khan','Danyal','Kamran Tessory'];
// for(let i=0; i<guest_List.length; i++){
//     // console.log('I invite at the dinner Mr. ' + guest_List[i]);
//     console.log('Respect sir/Madm '+ guest_List[i] + ',\nWe shall invite thiers on the dinner tommorrow.\n\n Thanks you\n');
// }
// let not_present:string='Danyal';
// let new_guest:string='Mr.Imran Khan';
// guest_List[3]=new_guest;
// for (let i=0; i<guest_List.length; i++){
//     console.log('Respt Sir/Madm ' + guest_List[i] + ',\n we shall invited theirs on dinner tommorrow.\n Thanks you\n')
// }
// console.log(`Mr.${not_present} shall not coming tommorrow dinner`);
// Create a list of guests (array of strings)
var guestList = ["Albert Einstein", "Marie Curie", "APJ Abdul Kalam"];
// Guest who can't make it
var absentGuest = "APJ Abdul Kalam";
// Print message about absent guest
console.log("".concat(absentGuest, " unfortunately won't be able to make it to dinner."));
// Replace absent guest with a new guest
guestList[2] = "Stephen Hawking";
// Loop through the updated guest list
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    // Create a personalized message using string interpolation
    var message = "Dear ".concat(guest, ", I would be honored if you would join me for dinner. It would be a great opportunity to discuss your work and insights.");
    // Print the invitation message for each remaining guest
    console.log(message);
}
