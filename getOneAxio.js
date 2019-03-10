///////////////////////////////////////////////// Get
const urlJson = 'https://jsonplaceholder.typicode.com/todos';



const btn = document.querySelector("#btn");


btn.addEventListener("click", PerformGetRecuest2)

function PerformGetRecuest2(){

	const todoId = document.querySelector('#todoId').value;

	let resultElement = document.querySelector('#getResult1');
	
	resultElement.innerHTML = '';

	axios.get(urlJson,{
		params:{
			id: todoId
		}
	})
		.then(function(response){
			resultElement.innerHTML = generateSuccessHTMLOutput(response);
		})
		.catch(function (error){
			resultElement.innerHTML = generateErrorHTMLOutput(error);
		})
}

function generateSuccessHTMLOutput(response){ //respuesta 
	return `
		<h4>Result: </h4>
		<h5>Status: </h5>
		<pre> ${response.status} -- ${response.statusText}</pre>
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