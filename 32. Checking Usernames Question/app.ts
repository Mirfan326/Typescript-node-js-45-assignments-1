// 32. Checking Usernames: Do the following to create a program that
//  simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure 
// one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has 
// already been used. If it has, print a message that the person will 
// need to enter a new username. If a username has not been used, 
// print a message saying that the username is available.

// • Make sure your comparison is case insensitive. 
// If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ['Abdullah', 'Zia Khan', 'nizam', 'naveed', 'M.ALi', 'Qadri'];
let new_users: string[] = ["Moosa", "Yahya", "farhan", "saleem", "Muhammad"];

new_users.forEach((newuser) => {
  const isAvailable = !current_users.some(currentuser => currentuser.toLowerCase() === newuser.toLowerCase());
  if (isAvailable) {
    console.log(`${newuser} is available.`);
  } else {
    console.log(`${newuser} will need to enter a new username.`);
  }
});
