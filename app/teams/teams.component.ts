import { Component } from '@angular/core';

import { Team } from '../_models/index';
import { TeamsService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'teams.component.html'
})

export class TeamsComponent {

    teams: Team[] = [];
    username: string = "";

    constructor(private teamsService: TeamsService) {
        this.username = "Ian McCallum";
        this.teams = [];
    };

    ngOnInit() {
        this.username = "Ian McCallum";
    	this.teamsService.getAll().subscribe(
    		teams => {
    			this.teams = teams;
    		});
    };
}