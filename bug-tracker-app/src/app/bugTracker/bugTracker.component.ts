import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugServerService } from './services/bugServer.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];
	sortBugBy : string = 'name';

	constructor(private bugServer : BugServerService){
		
	}

	ngOnInit(){
		//this.bugs = this.bugStorage.getAll();
		this.bugServer
			.getAll()
			.subscribe(data => this.bugs = data);
	}

	onNewBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}
	onBugNameClick(bugToToggle : Bug){
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug =>  bug.id === bugToToggle.id ? toggledBug : bug));
	}
	onRemoveClosedClick(){
		for(let index = this.bugs.length-1; index >=0; index--){
			if (this.bugs[index].isClosed){
				this.bugServer
					.remove(this.bugs[index])
					.subscribe(response => this.bugs.splice(index, 1));
			}
		}
	}

	
}















