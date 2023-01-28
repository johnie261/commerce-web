const SideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
  SideBar.classList.toggle('active');
};

document.querySelector('#close-side-bar').onclick = () => {
  SideBar.classList.remove('active');
};

const Search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  Search.classList.toggle('active');
};

window.onscroll = () => {
  SideBar.classList.remove('active');
  Search.classList.remove('active');
};
