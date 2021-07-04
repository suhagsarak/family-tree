import { Component, OnInit } from '@angular/core';
import { FamilyTreeService } from 'src/app/service/family-tree.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  roles: any;

  constructor(
    private familyTreeService: FamilyTreeService
  ) { }

  ngOnInit() {
    this.familyTreeService.getAllRoles().subscribe((response) => {
      this.roles = response;
    });
  }

}
