import { Component, OnInit } from '@angular/core';
import { FamilyTreeService } from 'src/app/service/family-tree.service';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {

  families: any;

  constructor(
    private familyTreeService: FamilyTreeService
  ) { }

  ngOnInit() {
    this.familyTreeService.getAllFamilies().subscribe((response) => {
      this.families = response;
    });
  }

}
