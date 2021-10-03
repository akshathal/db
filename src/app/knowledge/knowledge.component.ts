import { Component, OnInit, Input } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
// import { KbService } from '../kb.service';

import { dataLoader, Label } from '@amcharts/amcharts4/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XYChart } from '@amcharts/amcharts4/charts';
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 


@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  @Input() multiple: boolean = false;

  fileNames=["test"];
  //fileName: string | undefined;
  fileInformation: any=[];
  selectedFile:any
  unigram: any;
  fileResult: any;
  chartDetails: any;
  rawviewDetails: any=false;
  graphDetails: any=false;
  cdata: any;
  cdata2: string[] | undefined;
  cdata3: string[] | undefined;
  cdata1: string[] | undefined;
  datagram: any;
  data: any;
  rawview: any;
  graphview: any;
  rawSentences: any;
  topiDetails: boolean=false;
  uniqueLabel: any;
  displayConcept:any=[];
  concept="";
  displayValue:any=[];
  value="";
  secNode: any;
  relation: any;
  primNode: any;
  graphsubmit: boolean=false;
  selectedValue: any;
  removable = true;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.displayConcept=['test1', 'test2','test3','test4','test5','test6','test7','test8','test9','test1', 'test2','test3','test4','test5','test6','test7','test8','test9','test1', 'test2','test3','test4','test5','test6','test7','test8','test9','test1', 'test2','test3','test4','test5','test6','test7','test8','test9']
    this.displayValue = ['test1', 'test2','test3','test4','test5','test6','test7','test8','test9'];
  }

  getDocId(filename:any){
    console.log("inside getDocId for filename: ", filename);
    let documentId;
    for(let item of this.fileInformation){
      let dname = item.DatasetName.split('.');
      if(filename == dname[0]){
        documentId=item.Document_id;
      }
    }
    console.log(documentId);
    return documentId;
  }
  //knowledgeextaction : start
  getAllDocument(){
    console.log("In getAllDocument")
  }

  removeDocument(filename:any){
    console.log("In removeDocument")
    let docId=this.getDocId(filename);
    //let dict={"dataset_id":"61263a2303d247d25675cad9"};
   // let docId="61263a2303d247d25675cad9";
    // this.kbService.RemoveDocument(docId).subscribe((data:any)=>{
    //   console.log("inside api remove doc");
    //   console.log(data);
    // });
    this.fileNames.pop();
  }


  addfile(event:any){
    const file:File = event.target.files[0];
    const fileExt = event.target.files[0].name.split('.')//.pop();
    let fm = fileExt[0];
    this.fileNames.push(fm)
    console.log("this.fileNames: ", this.fileNames)
    //this.fileName = file.name;
    const formData = new FormData();
    formData.append("", file);
    console.log("formData for dataextraction :", formData)
   // this.http.post("https://dataextractorrevised-yajn7tgvmq-el.a.run.app", formData).
    //this.http.post("http://192.168.43.107:8080/", formData).
    // this.http.post("https://dataextractor-v1-yajn7tgvmq-uc.a.run.app", formData).     
    //   subscribe((data: any) => {
    //   console.log("daaddda", data);
    //   this.fileInformation.push(data);
    //   console.log("All fileInformation :", this.fileInformation)
    //  let docid=data.Document_id;
    //   let datasetname=data.DatasetName;
    //   console.log("docId", docid);
    // })

  }

  fileChange(event:any) {
    const file:File = event.target.files[0];
    var docid;
    var datasetname;
    var datadict={};
    var datadict1={};
    var datasets: any[]=[];
    var finaldata={};
    let headers =  new HttpHeaders({
      'Content-Type':  'application/json'
    })
    const fileExt = event.target.files[0].name.split('.')//.pop();
    let fm = fileExt[0];
    
    this.fileNames.push(fm)
    console.log("this.fileNames: ", this.fileNames)
    //{DatasetName: "ChickCare.pdf", Document_id: "61263a2303d247d25675cad9", TrainData: "Yes"}
   // this.fileName = file.name;
    const formData = new FormData();
    formData.append("", file);
    //this.http.post("https://dataextractorrevised-yajn7tgvmq-el.a.run.app", formData).
    this.http.post("http://192.168.43.107:8080/", formData).
    subscribe((data: any) => {
      console.log("daaddda", data);
      docid=data.Document_id;
      datasetname=data.DatasetName;
     // datadict.datasetname=docid;
      datasets.push(docid);
      console.log("datadict : ",datadict);   
      console.log("datasets : ", datasets)
      
      if(docid){
         datasets.push("61263a2303d247d25675cad9");
      datadict1={"dataset_id":datasets,"attribute_type":""};
      datadict1=JSON.stringify(datadict1);
        this.http.post("https://us-central1-db-inspiredstylist.cloudfunctions.net/fetch_data-1", datadict1, {headers}).
        subscribe((data1: any) => {
          console.log("2 api: " ,data1)
          this.fileResult=data1.Result;
         
        // get graph data
        let graphresult=[];
        let label=[];
        let keydata: string[]=[];
        let valdata: any[]=[];
     
      this.graphview=this.fileResult.Sentences;
      for(var i in this.graphview){
        graphresult.push([i, this.graphview[i]]);
       }
       for(var j in graphresult){
        label.push([graphresult[j][1].Labels]);
        var b= JSON.stringify([graphresult[j][1].Labels]);
        var c = b.substring(1,b.length-1);
        console.log("cccccc: ", c)
        JSON.parse(c);
        console.log("proinrc ", c)
    
        let abc = graphresult[j][1].Labels;
        Object.keys(abc).forEach(key => {
          console.log('key', key);  
          keydata.push(key)
          console.log('value', abc[key]); 
          valdata.push(abc[key])    
        });
      }
      console.log("result: " ,graphresult);
      console.log("sent: ", label);
      console.log("keydata: ", keydata);
      console.log("valdata: ", valdata);
      this.uniqueLabel = [...new Set(keydata)];
      console.log("uniquqe, ", this.uniqueLabel);
      this.displayConcept= this.uniqueLabel


      });
    }  
  });  //working code 
}
//knowledgeextaction : end

//metadata: start

getgramdata(gram:any){
  this.topiDetails=false;
  this.graphDetails=false;
  this.rawviewDetails=false;
  this.datagram=gram;
  console.log("getgramdata", this.datagram)
  this.chartDetails=this.fileResult;
  this.topiDetails=true;
/*
    
  if(this.datagram=='UNIGRAM'){
    this.data=this.chartDetails.Words_Unigram
    console.log("unigram ", this.data)
   }
   if(this.datagram=='BIGRAM'){
    this.data=this.chartDetails.Words_Bigram
    console.log("bigram ", this.data)
   }
   if(this.datagram=='TRIGRAM'){
    this.data=this.chartDetails.Words_Trigram
    console.log("trigram ", this.data)
   }
   am4core.options.autoDispose = true;
  var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
chart.fontFamily = "Verdana";
series.maxCount = 30;

//series.randomness = 0.1;
series.randomness = 0.2;
series.rotationThreshold = 0
series.labelsContainer.rotation = 0;
//series.data
//this.data=this.chartDetails;
let dataval=[];
let count=5;
for (var i = 0; i < this.data.length; i++) {
        count=count+2;
        dataval.push({"tag":this.data[i], 'count': count});
    }
console.log("data Val: ", dataval)
series.data=dataval;
series.dataFields.word = "tag";
series.dataFields.value = "count";
//series.data = [{'tag': 'MS-EXCEL', 'count': 35}, {'tag': 'PDMS', 'count': 7}, {'tag': 'LEARN.RB.COM', 'count': 56}, {'tag': 'GLOBAL IFCN NETWORKS', 'count': 75}, {'tag': 'PRINTER', 'count': 20}, {'tag': 'MS-OFFICE', 'count': 99}, {'tag': 'GLOBAL IFCN SERVERS', 'count': 129}, {'tag': 'WECHAT', 'count': 3}, {'tag': 'MOBILE', 'count': 68}];
//series.text = "Lorem impsum...";


//series.text = "Though yet of Hamlet our dear brother's death The memory be green, and that it us befitted To bear our hearts in grief and our whole kingdom To be contracted in one brow of woe, Yet so far hath discretion fought with nature That we with wisest sorrow think on him, Together with remembrance of ourselves. Therefore our sometime sister, now our queen, The imperial jointress to this warlike state, Have we, as 'twere with a defeated joy,-- With an auspicious and a dropping eye, With mirth in funeral and with dirge in marriage, In equal scale weighing delight and dole,-- Taken to wife: nor have we herein barr'd Your better wisdoms, which have freely gone With this affair along. For all, our thanks. Now follows, that you know, young Fortinbras, Holding a weak supposal of our worth, Or thinking by our late dear brother's death Our state to be disjoint and out of frame, Colleagued with the dream of his advantage, He hath not fail'd to pester us with message, Importing the surrender of those lands Lost by his father, with all bonds of law, To our most valiant brother. So much for him. Now for ourself and for this time of meeting: Thus much the business is: we have here writ To Norway, uncle of young Fortinbras,-- Who, impotent and bed-rid, scarcely hears Of this his nephew's purpose,--to suppress His further gait herein; in that the levies, The lists and full proportions, are all made Out of his subject: and we here dispatch You, good Cornelius, and you, Voltimand, For bearers of this greeting to old Norway; Giving to you no further personal power To business with the king, more than the scope Of these delated articles allow. Farewell, and let your haste commend your duty. Tis sweet and commendable in your nature, Hamlet,To give these mourning duties to your father: But, you must know, your father lost a father; That father lost, lost his, and the survivor bound In filial obligation for some term To do obsequious sorrow: but to persever In obstinate condolement is a course Of impious stubbornness; 'tis unmanly grief; It shows a will most incorrect to heaven, A heart unfortified, a mind impatient, An understanding simple and unschool'd: For what we know must be and is as common As any the most vulgar thing to sense, Why should we in our peevish opposition Take it to heart? Fie! 'tis a fault to heaven, A fault against the dead, a fault to nature, To reason most absurd: whose common theme Is death of fathers, and who still hath cried, From the first corse till he that died to-day, 'This must be so.' We pray you, throw to earth This unprevailing woe, and think of us As of a father: for let the world take note, You are the most immediate to our throne; And with no less nobility of love Than that which dearest father bears his son, Do I impart toward you. For your intent In going back to school in Wittenberg, It is most retrograde to our desire: And we beseech you, bend you to remain Here, in the cheer and comfort of our eye, Our chiefest courtier, cousin, and our son."; 
series.colors = new am4core.ColorSet();
series.colors.passOptions = {};
series.labels.template.propertyFields.fill = "color";
//series.labels.template.contextMenuDisabled = "True";


 series.heatRules.push({
  "target": series.labels.template,
  "property": "fill",
  "min": am4core.color("#ffaaaa"),
  "max": am4core.color("#ff5555"),
  "dataField": "value"
 });
 series.labels.template.tooltipText = "[bold]{word}";
  */
}

getrawviewdata(){
  //am4core.options.autoDispose = true;
  this.graphDetails=false;
  this.topiDetails=false;
  this.rawviewDetails=true;
  this.rawSentences=this.fileResult;
  console.log("inside getrawviewdata",this.fileNames)
  console.log("this.fileResult.Sentences: ", this.fileResult.Sentences)
  /*let result=[];
  let sent=[];
  let duh=[]
  //let SentenceText=this.fileResult.Sentences.SentenceText
  this.rawview=this.fileResult.Sentences;
  for(var i in this.rawview){
    result.push([i, this.rawview[i]]);
  }
  for(var j in result){
    sent.push([j, result[j][1]]);
    duh.push(result[j][1].SentenceText);
   
  }
 // sent.push([i, this.rawview[i][1].SentenceText]);
//console.log("result: " ,result);
//console.log("sent: ", sent);
console.log("duh: ", duh);
this.rawSentences=duh;*/

 // text high light css
 // take the Label;s remove duplicates - all dropdowns samw data

 // this.sentences = this.fileResult.Sentences
}



getgraphdata(){
  console.log("inside getgraphdata")
  am4core.options.autoDispose = true;
  this.topiDetails=false;
  this.rawviewDetails=false;
  this.graphDetails=true;
  

   /* var x = [{'a':'b'}];
var b= JSON.stringify(x);
var c = b.substring(1,b.length-1);
JSON.parse(c); */

}

//Object.assign({}: any, label: any); // {0:"a", 1:"b", 2:"c"}
//label=Object()
/*for(var key in label) {
  if (label.hasOwnProperty(key)) {
      console.log('key', key);
      console.log('value', label[key]);
  }
}
Object.keys(label).forEach(key => {
  console.log('key', key);     
  console.log('value', label[key]);     
});
console.log()
 }*/


 

// concept- value
//add concept
labelFunction(con:string){
  console.log("inside LabelFunction / add concept Function")
  console.log("before adding concept: ", this.displayConcept)
  console.log("concept:C", con)
//   this.kbService.addConcept(con).subscribe((data:any)=>{
//     console.log("data: ", data)
//   if(data.Status == 'Success' ){
//     this.displayConcept.push(con) 
//     console.log("after adding concept: ", this.displayConcept) 
//   }
//   // Status: 'Success'
// });
  //this.http.post("https://us-central1-db-inspiredstylist.cloudfunctions.net/add-label-value"+"?"+"label="+con,{headers}).
 /* this.kbService.addConcept(con).subscribe((data:any)=> {
    console.log("data: ", data.status)
    console.log("data: ", data.text)
    let data1=JSON.stringify(data);
    console.log("add label/concept 1" ,data1)  
    console.log("add label/concept 2" ,data)  
  });
  this.displayConcept.push(con) 
  console.log("after adding concept: ", this.displayConcept) 
 */ 
}
  
//add value for concept
valueFunction(con: string, val:string){
  console.log("inside valueFunction / add Value");
  console.log("concept: ", con)
  console.log("value to add ", val )
  console.log("before adding value: ", this.displayValue)
  //this.http.post("https://us-central1-db-inspiredstylist.cloudfunctions.net/add-label-value?label="+con+"&&value="+val,{headers})
  // this.kbService.addValueForConcept(con,val).subscribe((data) => {
  //   //console.log(data.status)
  // /* let data1=JSON.stringify(data);
  //   console.log("add value " ,data)*/
  //   console.log("data1", data)

  // });
      
  this.displayValue.push(val);
  console.log("after adding value: ", this.displayValue)
}


getvaluesForSelLabel(con: any){
  console.log("inside getvaluesForSelLabel")
  console.log("selected concept :", con)
  this.concept=con;
  let headers =  new HttpHeaders({
    'Content-Type':  'application/json'
  })
  // this.kbService.getValForSelConcept(this.concept).
  // //this.http.post("https://us-central1-db-inspiredstylist.cloudfunctions.net/GetLabelValues"+"?"+"label="+dc, {headers}).
  //       subscribe((data: any) => {
  //         console.log(" get val from getValForSelConcept api: " ,data)
  //         this.displayValue=data[con]
  //         console.log("this.displayValue for selected label: ",con);
  //         console.log("values", this.displayValue)
  // });
}

removeCon(con: any){
  console.log("inside removeConcept")
  console.log("selected Concept ", con)
  console.log("before deleting concept: ", this.displayConcept)
  const index = this.displayConcept.indexOf(con);

    if (index >= 0) {
      this.displayConcept.splice(index, 1);
    }
  // this.kbService.removeConcept(con).subscribe((data:any)=>{
  //   console.log("inside remove label api: ", data)    
  //   console.log("after deleting concept: ", this.displayConcept)
  //   //TODO: update response body to this.displayConcept
  // })

//  this.http.post("https://us-central1-db-inspiredstylist.cloudfunctions.net/remove-label-value?label="+con, {headers}).  
}

removeVal(val:any){
  console.log("inside removeVal", this.concept)
  console.log("value : "+ val)
 console.log("befor deleting value: ", this.displayValue)
//  this.http.post("https://us-central1-db-inspiredstylist.cloudfunctions.net/remove-label-value?label="+this.concept+"&&value="+val, {headers}).subscribe((data:any) => {
  // this.kbService.removeValue(this.concept, val).subscribe((data:any)=>{
  //   console.log(data)
  //   console.log("inside removeValue api ", data)
  //   this.displayValue.pop(val)
  //   console.log("after deleting value: ", this.displayValue) 
    
  // });
 
}

fetchdata(filename:any){
  console.log("inside fetch data")
  this.selectedFile=filename;
  let docId=this.getDocId(this.selectedFile);
  console.log("the selected file and document Id is : " ,this.selectedFile, "docId : ", docId)
  let headers =  new HttpHeaders({
    'Content-Type':  'application/json'
  })
  let datasets=[];
  //datasets.push("6142d4154e3c416a164ab4f4");
  datasets.push(docId);
  let datadict1={"dataset_id":datasets,"attribute_type":""};
  let datadict2=JSON.stringify(datadict1);
  this.http.post("https://us-central1-db-inspiredstylist.cloudfunctions.net/fetch_data-1", datadict2, {headers}).
    subscribe((fetcheddata: any) => {
          console.log("fetched data: " ,fetcheddata)
          this.fileResult=fetcheddata.Result;
          console.log("this.fileResult:", this.fileResult)

  //to get unique values
  let graphresult=[];
  let label=[];
  let keydata: string[]=[];
  //let valdata: any[]=[];

 this.graphview=this.fileResult.Sentences;
  for(let i in this.graphview){
    graphresult.push([i,this.graphview[i]]);
   }
   for(let j in graphresult){
    label.push([graphresult[j][1].Labels]);
    /*let labelString= JSON.stringify([graphresult[j][1].Labels]);
    var labelSubStr = labelString.substring(1,labelString.length-1);
    console.log("cccccc: ", labelSubStr)
    JSON.parse(labelSubStr);
    console.log("proinrc ", labelSubStr)*/
   
    let allLabels = graphresult[j][1].Labels;
    Object.keys(allLabels).forEach(key => {
      console.log('key', key);  
      keydata.push(key)
     // console.log('value', allLabels[key]); 
      //valdata.push(allLabels[key])    
    });
   } 
  
          // get graph data
/*
this.graphview=this.fileResult.Sentences;
for(var i in this.graphview){
 graphresult.push([i, this.graphview[i]]);
}
for(var j in graphresult){
 label.push([graphresult[j][1].Labels]);
 var b= JSON.stringify([graphresult[j][1].Labels]);
 var c = b.substring(1,b.length-1);
 console.log("cccccc: ", c)
 JSON.parse(c);
 console.log("proinrc ", c)

 let abc = graphresult[j][1].Labels;
 Object.keys(abc).forEach(key => {
   console.log('key', key);  
   keydata.push(key)
   console.log('value', abc[key]); 
   valdata.push(abc[key])    
 });
}*/
console.log("result: " ,graphresult);
console.log("sent: ", label);
console.log("keydata: ", keydata);
//console.log("valdata: ", valdata);

this.uniqueLabel = [...new Set(keydata)];
console.log("uniquqe, ", this.uniqueLabel);
this.displayConcept= this.uniqueLabel

});

}

gettopidata(){
  console.log("inside topicloud");
  this.topiDetails=false;
  this.graphDetails=false;
  this.rawviewDetails=false;
 // this.datagram=gram;
 // console.log("getgramdata", this.datagram)
  this.chartDetails=this.fileResult;
  this.topiDetails=true;

}

traindata(){
  console.log("In train data the file selected is : ",this.selectedFile)
  let docId=this.getDocId(this.selectedFile);
  // this.kbService.traindata(docId).subscribe((data:any)=>{
  //   console.log("inside api train data");
  //   console.log(data);
  // }); 
}

}
