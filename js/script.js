// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header-wrapper')

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})
