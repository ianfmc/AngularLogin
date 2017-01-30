import { Component } from '@angular/core';

import { Team } from '../models/index';
import { TeamsService } from '../services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'teams.component.html'
})

export class TeamsComponent {

    teams: Team[] = [];
    username: string = "";

    constructor() {
        this.username = "Ian McCallum";
        this.teams = [];
    };

    ngOnInit() {
        this.username = "Ian McCallum";
    	// this.teamsService.getAll().subscribe(
    	// 	teams => {
    	// 		this.teams = teams;
    	// 	});
    };
}