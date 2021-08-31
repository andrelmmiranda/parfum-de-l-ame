const nav = document.createElement('nav');
const navH1 = document.createElement('h1');
const navA = document.createElement('a');
const navButton = document.createElement('button');
const navSpan = document.createElement('span');
const navImg = document.createElement('img');


$(nav).attr({
  class: "navbar navbar-expand-lg navbar-light",
  id: 'navId',
})

$(navA).attr({
    class: "navbar-brand",
    href: "./index.html",
});

$(navImg).attr({
  src: "./img/logo1.png",
  alt: "Parfum de L'ame",
  class: 'logo',
})

$(navButton).attr({
    class: "navbar-toggler",
    type: "button", 
    'data-toggle': "collapse",
    'data-target': "#navbarSupportedContent",
    'aria-controls': "navbarSupportedContent",
    'aria-expanded': "false",
    'aria-label': "Toggle navigation",
});

$(navSpan).addClass("navbar-toggler-icon");

const divUl = 
`
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav" id="menu">
      <li class="nav-item">
        <a class="nav-link" href="./index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./sobre.html">Sobre</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./servicos.html">Parceiros</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./contato.html">Contato</a>
      </li>
    </ul>
</div>
`


$(nav).append($(navH1).append($(navA).append(navImg))).append($(navButton).append(navSpan)).append(divUl);