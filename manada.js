var barulhos = [];

function Animal(){
	var barulho = {};
}

Animal.prototype = {
	fazerBarulho : function(){
		return this.barulho;
	}
}

function Gato(){
	this.barulho = "Miau";
	Animal.call(this);
}

function Cachorro(){
	this.barulho = "Au";
	Animal.call(this);
}

var ManadaVirgula = new Animal();

ManadaVirgula.adicionar = function(){
	barulhos.push(this.barulho+", ");
}

var ManadaSustenido = new Animal();

ManadaSustenido.adicionar = function(){
	barulhos.push(this.barulho+"# ");
}




//retornos

var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());