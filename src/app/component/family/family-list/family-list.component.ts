import { Component, OnInit } from '@angular/core';
import { FamilyTreeService } from 'src/app/service/family-tree.service';
import { Family } from 'src/app/model/family.interface';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {

  families: Array<Family> = [];

  constructor(
    private familyTreeService: FamilyTreeService
  ) { }

  ngOnInit() {
    this.familyTreeService.getAllFamilies().subscribe((response: any) => {
      this.families = response;
    });
  }

}
