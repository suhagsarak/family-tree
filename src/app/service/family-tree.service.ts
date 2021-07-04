import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FamilyTreeService {

  familyTreeServiceUrl = environment.familyService;

  constructor(
    private http: HttpClient,
  ) { }

  public getIndividualById(id: number) {
    return this.callGetAPI(`individuals/find/${id}`);
  }

  public getAllIndividuals() {
    return this.callGetAPI(`individuals/findAll`);
  }

  public createIndividual(individual: any) {
    return this.callPostAPI(`individuals/create`, individual);
  }

  public deleteIndividualById(id: number) {
    return this.callGetAPI(`individuals/delete/${id}`);
  }

  public getRoleById(id: number) {
    return this.callGetAPI(`roles/find/${id}`);
  }

  public getAllRoles() {
    return this.callGetAPI(`roles/findAll`);
  }

  public createRole(role: any) {
    return this.callPostAPI(`roles/create`, role);
  }

  public deleteRoleById(id: number) {
    return this.callGetAPI(`roles/delete/${id}`);
  }

  public getFamilyById(id: number) {
    return this.callGetAPI(`families/find/${id}`);
  }

  public getAllFamilies() {
    return this.callGetAPI(`families/findAll`);
  }

  public createFamily(family: any) {
    return this.callPostAPI(`families/create`, family);
  }

  public deleteFamilyById(id: number) {
    return this.callGetAPI(`families/delete/${id}`);
  }

  public getRelationById(id: number) {
    return this.callGetAPI(`relations/find/${id}`);
  }

  public getAllRelations() {
    return this.callGetAPI(`relations/findAll`);
  }

  public createRelation(relation: any) {
    return this.callPostAPI(`relations/create`, relation);
  }

  public deleteRelationById(id: number) {
    return this.callGetAPI(`relations/delete/${id}`);
  }

  public callGetAPI(path: string) {
    return this.http.get(`${this.familyTreeServiceUrl}/${path}/`);
  }

  public callPostAPI(path: string, request: Object) {
    return this.http.post(`${this.familyTreeServiceUrl}/${path}/`, request);
  }

}
