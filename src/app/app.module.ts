import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';

import { HttpClientModule } from '@angular/common/http';
import { RawviewComponent } from './knowledge/rawview/rawview.component';
import { GraphviewComponent } from './knowledge/graphview/graphview.component';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './knowledge/chart/chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    KnowledgeComponent,
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
