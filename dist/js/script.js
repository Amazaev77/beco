window.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar'),
        header = document.querySelector('.header'),
        searchForm = document.querySelector('.header__search-form'),
        hamburger = document.querySelector('.sidebar__hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('sidebar__hamburger-active');
    hamburger.classList.toggle('sidebar__hamburger-inactive');
    sidebar.classList.remove('sidebar-no-animate')
    sidebar.classList.toggle('sidebar-active');
    sidebar.classList.toggle('sidebar-inactive');
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY > 13 && !header.classList[1]) {
      header.classList.add('header-scrolling');
      searchForm.classList.add('header__search-form-active');
    }
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY < 13 && header.classList[1]) {
      header.classList.remove('header-scrolling');
      searchForm.classList.remove('header__search-form-active');
    }
  })
})