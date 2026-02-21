// // fetch with async await
// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUsers();

// // fetch with then,catch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Sneha ki post",
    body: "JS mastery",
    userId: 1
  }),
  headers: {
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log("Error:", err));