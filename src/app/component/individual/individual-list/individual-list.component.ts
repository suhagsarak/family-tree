import { Component, OnInit } from '@angular/core';
import { Individual } from 'src/app/model/individual.interface';
import { FamilyTreeService } from 'src/app/service/family-tree.service';

@Component({
  selector: 'app-individual-list',
  templateUrl: './individual-list.component.html',
  styleUrls: ['./individual-list.component.scss']
})
export class IndividualListComponent implements OnInit {

  individuals: Array<Individual> = [];

  constructor(
    private familyTreeService: FamilyTreeService
  ) { }

  ngOnInit() {
    this.familyTreeService.getAllIndividuals().subscribe((response: any) => {
      this.individuals = response;
    });
  }

}
