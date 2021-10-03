import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GraphviewComponent } from './knowledge/graphview/graphview.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { RawviewComponent } from './knowledge/rawview/rawview.component';

const routes: Routes = [
 // {   path: '', component: AppComponent },
   { path: '', component:KnowledgeComponent},
  // { path:'topicloud', component:MetaknowledgeComponent},
  //  { path:'rawview',component:RawviewComponent},
  //  { path:'graphview', component:GraphviewComponent},
  //  { path: 'traindata', component:TraindataComponent}
         /* children: [
            { path:'rawview',component:ConceptComponent},
            { path: 'graphview', component:ConceptValueComponent}
  ]},*/
   

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
