// Toggle menu icons
const menu = document.querySelector(".menu");
const navContents = document.querySelector("#nav_contents");

menu.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const home = document.querySelector("#home_link");
home.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const about = document.querySelector("#about_link");
about.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const cabins = document.querySelector("#cabins_link");
cabins.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const links = document.querySelector("#links_link");
links.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const contact = document.querySelector("#contact_link");
contact.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

// Scroll to top
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

// Scroll to top
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };

  backToTopButton.addEventListener("click", goToTop)

