var filter;

window.onload = () => {
  filter = document.getElementById("filters");
};

const hideFilter = () => {
  var value = window.getComputedStyle(filter).getPropertyValue("display");
  if (value === "flex") {
    filter.style.display = "none";
  } else filter.style.display = "flex";
};
