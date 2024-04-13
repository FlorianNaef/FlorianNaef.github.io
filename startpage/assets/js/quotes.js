function getQuote() {
  const url =
    'https://api.allorigins.win/raw?url=https://zenquotes.io/api/random';
  return fetch(url).then((r) => r.json());
}

function displayQuote() {
  const spanText = document.querySelector('#quoteText');
  const spanAutor = document.querySelector('#quoteAutor');
  getQuote().then((r) => {
    spanText.innerText = r[0].q;
    spanAutor.innerText = r[0].a;
  });
}

displayQuote();
