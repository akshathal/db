import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  '../../node_modules/anychart/dist/css/anychart-ui.min.css',
  '../../node_modules/anychart/dist/fonts/css/anychart-font.min.css']
})
export class AppComponent {
  title = 'KnowledgeModule';
 /* fileResult: any;
  @Input childToParent();
  childToMaster() :any;

  childToParent(fileResult: any){
    console.log("fileResult: ", fileResult)
   this.fileResult =fileResult;
    }*/
}
