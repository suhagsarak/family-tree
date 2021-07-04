import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndividualListComponent } from './component/individual/individual-list/individual-list.component';
import { RoleListComponent } from './component/role/role-list/role-list.component';
import { FamilyListComponent } from './component/family/family-list/family-list.component';
import { RelationListComponent } from './component/relation/relation-list/relation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IndividualListComponent,
    RoleListComponent,
    FamilyListComponent,
    RelationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
