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

	const name = elementFormDataName.value;
	const years = elementFormDataYears.value;
	const degree = elementFormDataDegree.value;
	const task1 = elementFormDataTask1.value;
	const task2 = elementFormDataTask2.value;
	const partial1 = elementFormDataPartials1.value;
	const partial2 = elementFormDataPartials2.value;

	if (
		!name ||
		!years ||
		!degree ||
		!task1 ||
		!task2 ||
		!partial1 ||
		!partial2
	) {
		return alert(`Por favor rellene todos los campos`);
	}

	if (+task1 > 20 || +task2 > 20 || +partial1 > 20 || +partial2 > 20) {
		return alert('Las notas no deben de pasar de 20');
	}

	elementResultName.textContent = `Hola, ${name}.`;
	elementResultYears.textContent = `Tu edad es, ${years} años.`;
	elementResultDegree.textContent = `Tu grado es, ${degree}.`;

	resultFinish();

	elementFormDataName.value = '';
	elementFormDataYears.value = '';
	elementFormDataDegree.value = '';
	elementFormDataTask1.value = '';
	elementFormDataTask2.value = '';
	elementFormDataPartials1.value = '';
	elementFormDataPartials2.value = '';
});

//Funcion para realizar el promedio total

const resultFinish = () => {
	const promTask =
		(+elementFormDataTask1.value + +elementFormDataTask2.value) / 2;

	const promFinish =
		(promTask +
			+elementFormDataPartials1.value +
			+elementFormDataPartials2.value) /
		3;

	elementResultProm.textContent = `Nota Final: ${Math.trunc(promFinish)}`;

	promFinish < 11 &&
		(elementResultComment.textContent = `Alumno desaprobado :(`);

	promFinish >= 11 && (elementResultComment.textContent = `Alumno regular`);

	promFinish >= 15 &&
		(elementResultComment.textContent = `Alumno destacado :)`);

	promFinish > 20 &&
		(elementResultComment.textContent = `Esta nota esta incorrecta vuelva a escribir.`);
};
