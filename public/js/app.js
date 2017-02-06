(function(){

	"use strict";

	$(document).foundation();

	var arr = new Arreglo();
	var formulario = $("#form-registro");
	var numero = $("#numero");
	var arregloInicial = $("#arreglo");
	var arregloFinal = $("#arregloOrdenado");
	var btnOrdenar = $("#btnOrdenar");
	var btnLimpiar = $("#btnLimpiar")

	formulario.submit(function(e) {
		e.preventDefault();
		arr.addElemento( numero.val() );
		arregloInicial.val(arr.stringDeArreglo());
		numero.val("");
	});
	btnOrdenar.click(function(e) {
		arregloFinal.val(arr.ordenarArreglo());
	});
	btnLimpiar.click(function(e) {
		arregloInicial.val("Vacío");
		arregloFinal.val("Vacío");
	})


	/**
	* Objeto principal donde definiremos todos los 
	* parámetros y funciones
	*/
	function Arreglo(){
		var arreglo = [];

		// metodo que devuelve el arreglo
		function getArreglo(){
			return arreglo;
		}

		// método que agrega un nuevo elemento al arreglo 
		// parseandolo a entero
		function addElemento(numero){
			var _numero = parseInt(numero);
			if ( validarElemento(_numero) ) {
				arreglo.push(_numero);
			}
		}

		// método que valida si el nuevo elemento ya se 
		// encuentra en el arreglo
		function validarElemento(numero){
			var _arreglo = arreglo;
			var _length = arreglo.length;
			for (var i = 0; i < _length; i++) {
				if ( _arreglo[i] === numero ) {
					return false;
				}
			}
			return true;
		}

		// método que crea un atring a partir de los 
		// elementos del arreglo
		function stringDeArreglo(){
			return arreglo.join(", ");
		}

		// método que ordena el arreglo de menor a mayor
		function ordenarArreglo(){
			return stringDeArreglo(arreglo.sort(comparar));
			function comparar(a,b){
				return a-b;
			}
		}

		return {
			getArreglo: getArreglo,
			addElemento: addElemento,
			stringDeArreglo: stringDeArreglo,
			ordenarArreglo: ordenarArreglo
		}
	}

})();

