import { Component, Input } from '@angular/core';
import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-stats',
	template : `
		<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{data.length}}</span>
		</section>
	`
})
export class BugStatsComponent{

	@Input()
	data : Bug[] = [];

	getClosedCount(){
		let closedCount = 0;
		for(let index = 0, count = this.data.length; index < count; index++){
			if (this.data[index].isClosed)
				++closedCount;
		}
		return closedCount;
	}
}