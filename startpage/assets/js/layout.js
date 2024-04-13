// ┬  ┌─┐┬ ┬┌─┐┬ ┬┌┬┐
// │  ├─┤└┬┘│ ││ │ │
// ┴─┘┴ ┴ ┴ └─┘└─┘ ┴
// Generate Layout.

const generateLayout = () => {
  let firstButtonsContainer = `
    <div class="buttonsContainer" id="buttons_1"></div>
  `;
  let secondButtonsContainer = `
    <div class="buttonsContainer" id="buttons_2"></div>
  `;
  let firstListsContainer = `
    <div class="listsContainer" id="lists_1"></div>
  `;

  let secondListsContainer = `
    <div class="listsContainer" id="lists_2"></div>
  `;

  let quoteBlockContainer = `
  	<div class="card quoteBlock">
  		<span id="quoteText"></span>
  		<span id="quoteAutor"></span>
	  </div>
  `;

  const position = 'beforeend';

  switch (CONFIG.bentoLayout) {
    case 'bento':
      linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
      linksBlockRight.insertAdjacentHTML(position, firstListsContainer);
      linksBlock.classList.remove('reduceGap');
      linksBlock.classList.remove('removeGap');
      break;
    case 'lists':
      linksBlockLeft.insertAdjacentHTML(position, firstListsContainer);
      linksBlockRight.insertAdjacentHTML(position, secondListsContainer);
      linksBlock.classList.add('reduceGap');
      break;
    case 'buttons':
      linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
      linksBlockRight.insertAdjacentHTML(position, secondButtonsContainer);
      linksBlock.classList.add('removeGap');
      break;
    case 'quote':
      linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
      linksBlockRight.insertAdjacentHTML(position, quoteBlockContainer);
      linksBlock.classList.add('removeGap');
      break;
    default:
      break;
  }
};

generateLayout();
