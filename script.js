// Array of API URLs to fetch data from
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code 
function fetchWithPromiseAll(urls) {
  const start = Date.now();
  return Promise.all(urls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      const time = Date.now() - start;
      const outputAll = document.getElementById('output-all');
      outputAll.innerText = `Promise.all took ${time}ms to fetch data from ${urls.length} APIs`;
      return data;
    })
    .catch(error => console.error(error));
}

function fetchWithPromiseAny(urls) {
  const start = Date.now();
  return Promise.any(urls.map(url => fetch(url)))
    .then(response => response.json())
    .then(data => {
      const time = Date.now() - start;
      const outputAny = document.getElementById('output-any');
      outputAny.innerText = `Promise.any took ${time}ms to fetch data from ${urls.length} APIs`;
      return data;
    })
    .catch(error => console.error(error));
}

Promise.all([
  fetchWithPromiseAll(urls),
  fetchWithPromiseAny(urls)
]).then(results => console.log(results))
  .catch(error => console.error(error));