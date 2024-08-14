const burguerMenu = document.getElementById("menu-hamburguer");

document.getElementById("toggle").addEventListener("click", () => {
	burguerMenu.classList.toggle("show");
});

function hideMenu() {
	burguerMenu.classList.remove("show");
}
