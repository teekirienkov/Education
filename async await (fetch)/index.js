const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//   return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }
// fetchTodos() 
//   .then(data => console.log(data))

// with async/await

async function fetchAsyncTodos() {    // верхнеуровневая функция должна быть асинхронной
  try {
    await delay(2000);                // пока данная строка не выполнится, js будет ждать
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch(e) {                        // try/catch тут нужен для обработки ошибок
    console.log(`error ${e}`)
  }                                   // так же тут можно использовать finally, часть кода которая выполнится в любом случае
}

fetchAsyncTodos()
// таким образом, async await позволяет писать более красивый и удобный код