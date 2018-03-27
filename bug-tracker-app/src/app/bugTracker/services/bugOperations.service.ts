import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(bugName : string){
		let newBug : Bug = {
			name : bugName,
			isClosed : false
		};

		return newBug;
	}
	toggle(bugToToggle : Bug){
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}
}