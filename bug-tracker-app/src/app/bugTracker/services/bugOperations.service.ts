import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(bugName : string, id : number = 0){
		let newBug : Bug = {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};

		return newBug;
	}
	toggle(bugToToggle : Bug) : Bug {
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return toggledBug;
	}
}