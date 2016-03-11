
function Animal(){
	this.barulho = "";
}

Animal.prototype = {
	fazerBarulho : function(){
		return this.barulho;
	}
}

function Gato(){
	Animal.call(this);
	this.barulho = "Miau";	
}

Gato.prototype = new Animal();

function Cachorro(){
	Animal.call(this);
	this.barulho = "Au";	
}
Cachorro.prototype = new Animal();

function Manada(barulhos){
	this.animais = [];
	this.barulhos = barulhos;
}

Manada.prototype = {
	adicionar : function(animal){
		animais.push(animal);
	}
}


function ManadaVirgula(){	
	Manada.call(this, function(){
		var final = "";
		for(var x=0; x < animais.lenght; x++){
		final= final+animais[x]+", ";
	}
	return final;
	});
}

ManadaVirgula.prototype = new Manada();

function ManadaSustenido(){	
	Manada.call(this, function(){
		var final = "";
		for (var i = 0; i < animais.lenght; i++) {
		final = final+animais[i]+"# "+animais[i]+"# ";
	}
	return final;
	});

	
}

ManadaSustenido.prototype = new Manada();


var	manadaVirgula = new ManadaVirgula();
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