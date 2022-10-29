// const getFakePerson = async () => {
//     let res = await fetch("https://api.randomuser.me/?nat=US&results=1")
//     let { results } = res.json();
//     console.log(results);
// }

// getFakePerson();

// console.log(fetch("https://api.randomuser.me/?nat=US&results=1"))


const url = "https://api.randomuser.me/?nat=US&results=1"
const listData = document.createDocumentFragment();
const ul = document.getElementById('data')


