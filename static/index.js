(async () => {
  initEventListeners();
  initOnePageScroll();
  const siema = new Siema({
    selector: '.siema',
    // loop: true,
  });
  document.querySelector('span.prev').addEventListener('click', () => siema.prev());
  document.querySelector('span.next').addEventListener('click', () => {
    const thePlayer = document.querySelector('.the-player');
    if (thePlayer.paused) {
      thePlayer.play();
    }
    siema.next();
  });
})();

function initEventListeners() {
  const paAva = document.querySelector('div.tr-ava');
  paAva.addEventListener('click', () => {
    paAva.classList.toggle('changed');
  });
}

function initOnePageScroll() {
  document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => section.scrollIntoView({
      behavior: "smooth",
    }));
  });
}
