import { Component, OnInit } from '@angular/core';
import { FamilyTreeService } from 'src/app/service/family-tree.service';
import { Role } from 'src/app/model/role.interface'
@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  roles: Array<Role> = [];

  constructor(
    private familyTreeService: FamilyTreeService
  ) { }

  ngOnInit() {
    this.familyTreeService.getAllRoles().subscribe((response: any) => {
      this.roles = response;
    });
  }

}
