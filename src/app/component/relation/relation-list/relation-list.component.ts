import { Component, OnInit } from '@angular/core';
import { Relation } from 'src/app/model/relation.interface';
import { FamilyTreeService } from 'src/app/service/family-tree.service';

@Component({
  selector: 'app-relation-list',
  templateUrl: './relation-list.component.html',
  styleUrls: ['./relation-list.component.scss']
})
export class RelationListComponent implements OnInit {

  relations: Array<Relation> = [];

  constructor(
    private familyTreeService: FamilyTreeService
  ) { }

  ngOnInit() {
    this.familyTreeService.getAllRelations().subscribe((response: any) => {
      this.relations = response;
    });
  }

}
