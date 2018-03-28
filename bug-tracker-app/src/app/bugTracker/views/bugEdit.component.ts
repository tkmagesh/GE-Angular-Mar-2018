import { Component, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugServerService } from '../services/bugServer.service';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create New" (click)="onCreateNewClick()">
		</section>
	`
})
export class BugEditComponent{

	@Output()
	create : EventEmitter<Bug> = new EventEmitter<Bug>();

	newBugName : string = '';

	constructor(private bugServer : BugServerService){
		
	}

	onCreateNewClick(){
		this.bugServer
			.addNew(this.newBugName)
			.subscribe(newBug => this.create.emit(newBug));
	}

}
