import { Component, OnInit } from '@angular/core';
import { FamilyTreeService } from 'src/app/service/family-tree.service';

@Component({
  selector: 'app-individual-list',
  templateUrl: './individual-list.component.html',
  styleUrls: ['./individual-list.component.scss']
})
export class IndividualListComponent implements OnInit {

  individuals: any;

  constructor(
    private familyTreeService: FamilyTreeService
  ) { }

  ngOnInit() {
    this.familyTreeService.getAllIndividuals().subscribe((response) => {
      this.individuals = response;
    });
  }

}
