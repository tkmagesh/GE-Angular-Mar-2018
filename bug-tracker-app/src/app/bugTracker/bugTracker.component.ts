import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugStorageService } from './services/bugStorage.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}

	onCreateNewClick(bugName : string){
		let newBug : Bug = this.bugStorage.addNew(bugName);
		this.bugs.push(newBug);
	}
	onBugNameClick(bug : Bug){
		this.bugStorage.toggle(bug);
	}
	onRemoveClosedClick(){
		for(let index = this.bugs.length-1; index >=0; index--){
			if (this.bugs[index].isClosed){
				this.bugStorage.remove(this.bugs[index]);
				this.bugs.splice(index, 1);
			}
		}
	}

	
}















