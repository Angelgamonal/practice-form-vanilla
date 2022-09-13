const formResult = document.querySelector('#form-result');

const elementResult = document.querySelector('#result');

// obteniendo los datos del formulario
formResult.addEventListener('submit', (e) => {
	e.preventDefault();

	const formDataName = document.querySelector('#name').value;
	const formDataYears = document.querySelector('#years').value;
	const formDataDegree = document.querySelector('#degree').value;
	const formDataTask1 = document.querySelector('#note-task1').value;
	const formDataTask2 = document.querySelector('#note-task2').value;
	const formDataPartials1 = document.querySelector('#note-partials1').value;
	const formDataPartials2 = document.querySelector('#note-partials2').value;

	elementResult.textContent = `<h2>Hola ${formDataName}</h2>`;
});
