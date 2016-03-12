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

function Manada(){
	this.animais = [];
}

Manada.prototype = {
	adicionar: function(animal){
		this.animais.push(animal);
	}
}

function ManadaVirgula(){
	Manada.call(this);

	this.barulhos = function(){
		var final = '';
		for(var x = 0; x < animais.length; x++){
			final+=animais[x].fazerBarulho();
		if (x != animais.length-1)
			final+=', '
		}

		return final;

	}
}
	

ManadaVirgula.prototype = new Manada();


function ManadaSustenido(){
	Manada.call(this);

	this.barulhos = function(){
		var final = '';
		for(var x = 0; x < animais.length; x++){
			if(x!=animais.length-1){
			final += animais[x].fazerBarulho()+"# "+animais[x].fazerBarulho()+"# ";
			}
			else{
				final += animais[x].fazerBarulho()+"# "+animais[x].fazerBarulho();
			}
		}
		return final;
}
	}

ManadaSustenido.prototype = new Manada();



var	manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});


//Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());

