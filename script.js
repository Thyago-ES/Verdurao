const burguerMenu = document.getElementById("menu-hamburguer");

document.getElementById("toggle").addEventListener("click", () => {
	burguerMenu.classList.toggle("show");
});

function hideMenu() {
	burguerMenu.classList.remove("show");
}

const formContact = document.getElementById("form-contact");
const formFields = {
	name: document.getElementById("nome"),
	lastname: document.getElementById("sobrenome"),
	email: document.getElementById("email"),
	phone: document.getElementById("telefone"),
};

formContact.addEventListener("submit", (e) => {
	e.preventDefault();

	if (validFields()) {
		formContact.submit();
	}
});

function validFields() {
	if (formFields.name.value === "") {
		alert("O campo Nome não pode estar vazio!");
		formFields.name.focus();
		return false;
	}

	if (formFields.lastname.value === "") {
		alert("O campo Sobrenome não pode estar vazio!");
		formFields.lastname.focus();
		return false;
	}

	if (formFields.email.value === "") {
		alert("O campo Email não pode estar vazio!");
		formFields.email.focus();
		return false;
	}
	if (!validEmailRegex(formFields.email.value)) {
		alert("O email está incorreto!");
		formFields.email.focus();
		return false;
	}

	if (formFields.phone.value === "") {
		alert("O campo Telefone não pode estar vazio!");
		formFields.phone.focus();
		return false;
	}

	return true;
}

function validEmailRegex(email) {
	const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
	if (emailRegex.test(email)) {
		return true;
	}
	return false;
}
