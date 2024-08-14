document.getElementById("toggle").addEventListener("click", () => {
	document.getElementById("menu-hamburguer").classList.toggle("show");
});

function hideMenu() {
	document.getElementById("menu-hamburguer").classList.remove("show");
}
