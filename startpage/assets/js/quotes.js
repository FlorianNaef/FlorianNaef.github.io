const containerElement = document.querySelector('.quotesBlock');

displayQuote();

function displayQuote() {
  const url =
    'https://api.allorigins.win/raw?url=https://zenquotes.io/api/today';
  fetch(url)
    .then((r) => r.json())
    .then((r) => {
      console.log(containerElement, r);
      containerElement.innerHTML = '<p>' + r[0].q + ' - ' + r[0].a + '</p>';
    });
}
