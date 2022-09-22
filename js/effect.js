window.onload = () => {
if(window.localStorage.getItem("theme")){


  if (window.localStorage.getItem("theme") === "lite") {
    liteMode();
    document.getElementById("theme").checked=false

  } else {
    document.getElementById("theme").checked=true
    darkMode();
  }
}else{
  darkMode();
  document.getElementById("theme").checked=true
}

};

document.getElementById("theme").addEventListener("change", (e) => {
  if (document.getElementById("theme").checked) {
    window.localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    window.localStorage.setItem("theme", "lite");
    liteMode();
  }
});

document.getElementById("theme2").addEventListener("change", (e) => {
  if (document.getElementById("theme2").checked) {
    window.localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    window.localStorage.setItem("theme", "lite");
    liteMode();
  }
});

const liteMode = () => {
  document
    .getElementById("about")
    .classList.replace("about-dark", "about-lite");

  document.getElementById("home").classList.replace("home-dark", "home-lite");

  document
    .getElementsByClassName("title-home")[0]
    .classList.replace("title-home-dark", "title-home-lite");

  document
    .getElementsByClassName("text-area-home")[0]
    .classList.replace("text-title-home-dark", "text-title-home-lite");

  document
    .getElementsByClassName("button-about")[0]
    .classList.replace("button-about-dark", "button-about-lite");

  document
    .getElementById("contact")
    .classList.replace("contact-dark", "contact-lite");

  document
    .getElementsByClassName("contact-left")[0]
    .classList.replace("contact-left-dark", "contact-left-lite");

  document
    .getElementsByClassName("contact-right")[0]
    .classList.replace("contact-right-dark", "contact-right-lite");

  document
    .getElementsByClassName("contact-right")[0]
    .classList.replace(
      "contact-right-dark-mobile",
      "contact-right-lite-mobile"
    );

  document
    .getElementsByClassName("menu-lateral")[0]
    .classList.replace("menu-lateral-dark", "menu-lateral-lite");

  document
    .getElementsByClassName("icon-menu")[0]
    .classList.replace("icon-menu-dark", "icon-menu-lite");

  const line = [...document.getElementsByClassName("line-size")];
  line.map((item) => {
    item.classList.replace("bck-dark", "bck-lite");
  });

  const itensMenu = [...document.getElementsByClassName("iten-menu")];
  itensMenu.map((element) => {
    element.classList.replace("iten-menu-dark", "iten-menu-lite");
  });

  const iconP = [...document.getElementsByClassName("icon-path")];
  iconP.map((element) => {
    element.classList.replace("icon-dark", "icon-lite");
  });

};

const darkMode = () => {
  document
    .getElementById("about")
    .classList.replace("about-lite", "about-dark");
  document.getElementById("home").classList.replace("home-lite", "home-dark");
  document
    .getElementsByClassName("title-home")[0]
    .classList.replace("title-home-lite", "title-home-dark");
  document
    .getElementsByClassName("text-area-home")[0]
    .classList.replace("text-title-home-lite", "text-title-home-dark");
  document
    .getElementsByClassName("button-about")[0]
    .classList.replace("button-about-lite", "button-about-dark");

  document
    .getElementById("contact")
    .classList.replace("contact-lite", "contact-dark");

  document
    .getElementsByClassName("contact-left")[0]
    .classList.replace("contact-left-lite", "contact-left-dark");

  document
    .getElementsByClassName("contact-right")[0]
    .classList.replace("contact-right-lite", "contact-right-dark");
  document
    .getElementsByClassName("contact-right")[0]
    .classList.replace(
      "contact-right-lite-mobile",
      "contact-right-dark-mobile"
    );

 

  const line = [...document.getElementsByClassName("line-size")];
  line.map((item) => {
    item.classList.replace("bck-lite", "bck-dark");
  });

  const itensMenu = [...document.getElementsByClassName("iten-menu")];
  itensMenu.map((element) => {
    element.classList.replace("iten-menu-lite", "iten-menu-dark");
  });

  const iconP = [...document.getElementsByClassName("icon-path")];

  iconP.map((element) => {
    element.classList.replace("icon-lite", "icon-dark");
  });

  document
    .getElementsByClassName("menu-lateral")[0]
    .classList.replace("menu-lateral-lite", "menu-lateral-dark");

    document
    .getElementsByClassName("icon-menu")[0]
    .classList.replace("icon-menu-lite", "icon-menu-dark");
}; 

  
let isOpen = false;
document
  .getElementsByClassName("icon-menu-svg")[0]
  .addEventListener("click", () => {
    if (!isOpen) {
      document 
        .getElementsByClassName("menu-ul-lateral")[0]
        .classList.replace("menu-close", "menu-open");
      isOpen = true;
    } else {
      document
        .getElementsByClassName("menu-ul-lateral")[0]
        .classList.replace("menu-open", "menu-close");
      isOpen = false;
    }
  });
