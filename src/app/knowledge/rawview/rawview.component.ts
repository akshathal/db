import { Component, Input, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-rawview',
  templateUrl: './rawview.component.html',
  styleUrls: ['./rawview.component.css']
})
export class RawviewComponent implements OnInit {

  @Input() rawviewDts: any;
  sentences: any;
  labels: any;
  sents: any;
  rawview: any;

  constructor() { }

  ngOnInit(): void {
    console.log("inside init of raw view component")
    console.log(this.rawviewDts);

  let result=[];
  let sent=[];
  let sentenceText=[];
  let allLabels=[];
  this.rawview=this.rawviewDts.Sentences;
  for(var i in this.rawview){
    result.push([i, this.rawview[i]]);
  }
  for(var j in result){
    sent.push([j, result[j][1]]);
    sentenceText.push(result[j][1].SentenceText); 
    allLabels.push(result[j][1].Labels)

  }
 
console.log("sentenceText: ", sentenceText);
this.sentences=sentenceText; // list of sentences to display
//console.log("result has ", result)
console.log("All Labels : ",allLabels)
for(let s in this.sentences){
  for(let l in allLabels){
    console.log("sentence : " +s+ " - " + this.sentences[s])
    console.log("Label "+ l+ " - " + JSON.stringify(allLabels[l]))
    
  }
 
  }

  
  }
}
