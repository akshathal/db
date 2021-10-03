import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';


import { ConceptComponent } from './concept-value/concept/concept.component';
import { ValueComponent } from './concept-value/value/value.component';
import { KnowledgeextractionComponent } from './knowledge-extraction/knowledgeextraction.component';
import { MetaknowledgeComponent } from './meta-knowledge/metaknowledge.component';
import { ConceptValueComponent } from './concept-value/concept-value.component';
import { HttpClientModule } from '@angular/common/http';
import { TraindataComponent } from './meta-knowledge/traindata/traindata.component';
import { TopicloudComponent } from './meta-knowledge/topicloud/topicloud.component';
import { RawviewComponent } from './knowledge/rawview/rawview.component';
import { GraphviewComponent } from './knowledge/graphview/graphview.component';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './knowledge/chart/chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    KnowledgeComponent,

    ConceptComponent,
    ValueComponent,
    KnowledgeextractionComponent,
    MetaknowledgeComponent,
    ConceptValueComponent,
    TraindataComponent,
    TopicloudComponent,
    RawviewComponent,
    GraphviewComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
