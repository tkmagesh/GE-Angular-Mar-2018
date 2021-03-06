//state & behavior of a calculator

export class CalculatorModel{
	//state
	n1 : number = 0;
	n2 : number = 0;
	result : number = 0;

	//behavior
	add(){
		this.result = this.n1 + this.n2;
	}

	subtract(){
		this.result = this.n1 - this.n2;
	}

	multiply(){
		this.result = this.n1 * this.n2;
	}

	divide(){
		this.result = this.n1 / this.n2;
	}
}