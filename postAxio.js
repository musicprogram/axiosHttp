const urlJson = 'https://jsonplaceholder.typicode.com/todos';

const form = document.querySelector("#form");

const name = document.querySelector("#name");

const result = document.querySelector("#result")


form.addEventListener("submit", ejecutarForm)
function ejecutarForm(e){
	e.preventDefault();

	name_value = name.value;

	result.innerHTML = '';

	axios.post(urlJson, {
		userId: '2', // ACÁ ES DONDE SE ALOJA EL OBJETO
    title: name_value,
    completed: false
	})
	.then(function(response){
		result.innerHTML = generateSuccessHTMLOutput(response);
	})
	.catch(function(error){
		result.innerHTML = generateErrorHTMLOutput(error);
	})
	e.preventDefault();

}






function generateSuccessHTMLOutput(response){ //respuesta 
	return `
		<h4>Result: </h4>
		<h5>Status: </h5>
		<pre> ${response.status} ${response.statusText}</pre>
		<h5>Headers: </h5>
		<pre> ${JSON.stringify(response.headers, null, '\t')}</pre>
		<pre> ${JSON.stringify(response.data, null, '\t')}</pre>
	`
}

function generateErrorHTMLOutput(error){ // errores
	return `
		<h4>Result: </h4>
		<h5>message: </h5>
		<pre>${error.message}</pre>

		<h1>estatus ${ error.response.status} ${error.response.statusText}</h1>
		<h5>Headers: </h5>
		<pre> ${JSON.stringify(error.response.headers, null, '\t')}</pre>
		<pre> ${JSON.stringify(error.response.data, null, '\t')}</pre>
	`
}

//////////////////////////////////////////////////////////////////////