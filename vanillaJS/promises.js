const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
};

function createPost(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}


// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// Async / Await

// Function has to be labeled async if we want to use await inside of it
// await it waits for a asynchronouse processor, action to complete
// async function init() {
//   await createPost({title: 'Post Three', body: 'This is post three'});

//   getPosts();
// }
// init();

// Async / Await / fetch //
async function fetchUsers() {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
}
fetchUsers();
// Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// // you need 2 .then()'s first need to format it to JSON and the next .then() will give you the data.
// // this is the first .then() (fomatting it to JSON)
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// // the second .then() (bringing the actual data)
// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));