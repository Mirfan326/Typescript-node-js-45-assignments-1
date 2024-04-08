"use strict";
// 14. Guest List: If you could invite anyone, 
// living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_List = void 0;
var guest_List = ['M.ALi', 'sir,Zia Khan', 'Danyal', 'Kamran Tessory'];
exports.guest_List = guest_List;
for (var i = 0; i < guest_List.length; i++) {
    // console.log('I invite at the dinner Mr. ' + guest_List[i]);
    console.log('Respect sir/Madm ' + guest_List[i] + ',\nWe shall invite thiers on the dinner tommorrow.\n\n Thanks you\n');
}
var not_present = 'Danyal';
var new_guest = 'Mr.Imran Khan';
guest_List[3] = new_guest;
for (var i = 0; i < guest_List.length; i++) {
    console.log('Respt Sir/Madm ' + guest_List[i] + ',\n we shall invited theirs on dinner tommorrow.\n Thanks you\n');
}
