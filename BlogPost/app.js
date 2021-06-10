let page = 1;

const getPosts = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5page=${page}`
  );
  return response.json();
};

const addPostsIntoDOM = async () => {
  const posts = await getPosts();
  console.log(posts);
};

addPostsIntoDOM();
