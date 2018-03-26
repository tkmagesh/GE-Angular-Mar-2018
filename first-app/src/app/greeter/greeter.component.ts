import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html',
	styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
	//userName : string = '';
	greetMessage : string = '[This is the default message]';

	greet(){
		let userName = prompt('Enter the username :');
		this.greetMessage = `Hi ${userName}, Have a nice day!`;
	}
}