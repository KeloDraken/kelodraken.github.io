const OPEN_SIDEBAR = document.getElementById("openSidebar");
const CLOSE_SIDEBAR = document.getElementById("closeSidebar");
const SIDEBAR = document.getElementById("mySidebar");

const openSidebar = () => {
  SIDEBAR.style.display = "block";
  OPEN_SIDEBAR.style.display = "none";
  CLOSE_SIDEBAR.style.display = "block";
};
const closeSidebar = () => {
  SIDEBAR.style.display = "none";
  OPEN_SIDEBAR.style.display = "block";
  CLOSE_SIDEBAR.style.display = "none";
};

document.addEventListener("DOMContentLoaded", (event) => {
  OPEN_SIDEBAR.addEventListener("click", openSidebar);
  CLOSE_SIDEBAR.addEventListener("click", closeSidebar);
});
