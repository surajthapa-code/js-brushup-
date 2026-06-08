/*
Your Exercises
Create day3.js.
Exercise 1 — 
Build a Promise manually:
Write a function wait that:

Takes a number ms (milliseconds)
Returns a Promise that resolves after that many ms
Use setTimeout inside

javascript// Expected:
wait(1000).then(() => console.log("1 second passed"))
Hint: setTimeout(callback, ms) runs callback after ms milliseconds.

Exercise 2 — Fetch real data:
Use this free API that needs no key:
https://jsonplaceholder.typicode.com/users
Write an async function called getUsers that:

Fetches from that URL
Parses the JSON
Logs only the name and email of each user
Handles errors with try/catch

Run it with node day3.js — you'll see real API data in your terminal.

Exercise 3 — Error handling:
Write an async function getUser that:

Takes an id
Fetches from https://jsonplaceholder.typicode.com/users/${id}
If id is valid (1-10), logs the user's name
If you pass id 999, the API returns empty — handle that case and log "User not found"
*/

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
wait(1000).then(() => {
  console.log("1 second passed");
});


async function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const dataar = data;
      dataar.forEach((element) => {
        console.log(` user name: ${element.name}`);
        console.log(`user email: ${element.email}`);
      });
    })
    .catch((err) => console.log("erro accoured: ", err));
}
// getUsers();

async function getUser(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (id == data.id) {
        console.log(data.name);
      } else {
        console.log("user not found! check your id..");
      }
    })
    .catch((err) => {
      console.log(`user not found ! ${err}`);
    });
}
getUser(3);
