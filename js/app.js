// Input
const elementFormDataName = document.querySelector('#name');
const elementFormDataYears = document.querySelector('#years');
const elementFormDataDegree = document.querySelector('#degree');
const elementFormDataTask1 = document.querySelector('#note-task1');
const elementFormDataTask2 = document.querySelector('#note-task2');
const elementFormDataPartials1 = document.querySelector('#note-partials1');
const elementFormDataPartials2 = document.querySelector('#note-partials2');

//Form

const elementBtnSubmit = document.querySelector('#form-result');

//Mostrar en el html

const elementResultName = document.querySelector('#result-name');
const elementResultYears = document.querySelector('#result-years');
const elementResultDegree = document.querySelector('#result-degree');
const elementResultComment = document.querySelector('#result-comment');
const elementResultProm = document.querySelector('#result-prom');

elementBtnSubmit.addEventListener('submit', (e) => {
	e.preventDefault();

	const requiredFields = [
		elementFormDataName,
		elementFormDataYears,
		elementFormDataDegree,
		elementFormDataTask1,
		elementFormDataTask2,
		elementFormDataPartials1,
		elementFormDataPartials2,
	];

	const requiredFieldsNotes = [
		elementFormDataTask1,
		elementFormDataTask2,
		elementFormDataPartials1,
		elementFormDataPartials2,
	];

	if (requiredFields.some((field) => !field.value.trim())) {
		return alert('Por favor complete todos los campos.');
	}

	if (requiredFieldsNotes.some((field) => +field.value > 20)) {
		return alert('Las notas no deben superar 20.');
	}

	showMessage(
		elementFormDataName.value,
		elementFormDataYears.value,
		elementFormDataDegree.value
	);

	resultFinish();

	cleanInputs(requiredFields);
});

//Funcion para realizar el promedio total

const resultFinish = () => {
	const promTask = (+elementFormDataTask1.value + +elementFormDataTask2.value) / 2;

	const promFinish =
		(promTask + +elementFormDataPartials1.value + +elementFormDataPartials2.value) /
		3;

	elementResultProm.textContent = `Nota Final: ${Math.trunc(promFinish)}`;

	promFinish < 11 && (elementResultComment.textContent = `Alumno desaprobado :(`);

	promFinish >= 11 && (elementResultComment.textContent = `Alumno regular`);

	promFinish >= 15 && (elementResultComment.textContent = `Alumno destacado :)`);

	promFinish > 20 &&
		(elementResultComment.textContent = `Esta nota esta incorrecta vuelva a escribir.`);
};

const cleanInputs = (requiredFields = []) => {
	requiredFields.forEach((field) => (field.value = ''));
};

const showMessage = (name, years, degree) => {
	elementResultName.textContent = `Hola, ${name}.`;
	elementResultYears.textContent = `Tu edad es, ${years} años.`;
	elementResultDegree.textContent = `Tu grado es, ${degree}.`;
};
