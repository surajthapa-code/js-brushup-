// 1. wait function
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

// 2. getUsers function
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    data.forEach((user) => {
      console.log(`user name: ${user.name}`, `|| user email: ${user.email}`);
    });
  } catch (error) {
    console.log("user not found got error:", error);
  }
}

// 3. getUser function
async function getUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    if (!data.id) {
      console.log("user not found~~");
      return;
    }
    console.log(data.name);
  } catch (err) {
    console.log(`can't get user data: ${err}`);
  }
}
getUser(2);
