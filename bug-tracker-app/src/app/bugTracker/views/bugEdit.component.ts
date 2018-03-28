import { Component, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from '../services/bugStorage.service';

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

	constructor(private bugStorage : BugStorageService){

	}

	onCreateNewClick(){
		let newBug : Bug = this.bugStorage.addNew(this.newBugName);
		//this.bugs = [...this.bugs, newBug];
		this.newBugName = '';
		//let the container know the creation of a new bug
		this.create.emit(newBug);
	}

}
