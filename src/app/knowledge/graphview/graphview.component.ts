import { NONE_TYPE, ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild} from '@angular/core';
import 'anychart';



@Component({
  selector: 'app-graphview',
  templateUrl: './graphview.component.html',
  styleUrls: ['./graphview.component.css']
})
export class GraphviewComponent implements OnInit {

  
 /* @Input() primNode: any;
  @Input() relation: any;
  @Input() secNode: any;
 // @ViewChild('chartContainer') containergraph: any;
 //chart: anychart.charts.Pie | undefined;*/

  @Input() uniqueLabel: any;
  graphsubmit: boolean=false;
  primNode: any;
  relation: any;
  secNode: any;
  data: any;
  fndata: any={"nodes":[],"edges":[]};
  chart: any;
  oldFndata :any ;
  count:number=0;
  //graphList: any = []
  constructor() { }

  ngOnInit(): void {
    console.log("inside init of  GraphviewComponent")
    this.uniqueLabel=["bob","moch", "pk","kaka","athe","mag"];
  }

    // Graph view Code
 getgraphOnSubmit(pNode:any,rel:any,sNode:any){
  console.log("inside getgraphOnSubmit")
  /*let obj = {
    count : this.count
  }
   this.graphList.push(obj);
   console.log("graph list ",this.graphList)
   */
  if(this.count != 0){
    console.log("inside if", this.count)
    this.chart.container('graphcontainer'+this.count).remove();
    //  document.querySelector('graphcontainer'+this.count)?.childNodes
  // document.getElementById('graphcontainer'+this.count)?.style="display:none;";
   this.chart.container('graphcontainer'+this.count).style="display:none;";
 
  }
   
//this.count++;
console.log("outside if ", this.count)

  // console.log(this.chart.container('graphcontainer').get())
   
 this.graphsubmit=true;
 let output1=pNode;
 let output2=rel;
 let output3=sNode;
// let fndata1 :any ={nodes:[],edges:[]};
 this.data = {
       nodes: [
           {id: output1},
           {id: output3}
           ],
   edges: [
           {from: output1, to: output3,relation:output2}
           ]
         };
console.log(this.data);
    this.fndata['nodes'].push({"id": output1});
    this.fndata["nodes"].push({"id": output3});
    this.fndata["edges"].push({from: output1, to: output3,relation:output2});

  this.chart = anychart.graph(this.fndata);
  console.log(this.fndata);
  //this.chart.data(this.fndata);
  
   // add a zoom control panel
  /* var zoomController = anychart.ui.zoom();
   zoomController.target(this.chart);
   zoomController.render();*/
   
   this.chart.nodes().labels().enabled(true);
   this.chart.nodes().labels().position('inside');
   this.chart.nodes().labels().fontSize(12);
   this.chart.nodes().labels().fontWeight(600);
   this.chart.nodes( {height: 35});

 var labels = this.chart.edges().labels();

 labels.enabled(true);
 labels.format('{%relation}');
 labels.fontSize(10);


 this.chart.container('graphcontainer'+this.count).draw();
 this.count++;
 /*
console.log("this.oldFndata before ", this.oldFndata)
console.log("this.this.fndata ", this.fndata)

 if(this.oldFndata != this.fndata){
 
  this.oldFndata=this.fndata;

 }

 console.log("this.oldFndata after ", this.oldFndata)
 
  */
 
}

}


//--------------------------------------
/*

var data = {
        nodes: [
            {"id": output1},
            {"id": output3}
            ],
    edges: [
            {from: output1, to: output3,relation:output2}
            ]

            };console.log(data);

            obj.arrayOne.push(arrayLetters);
            or
            
            obj['arrayOne'].push(arrayLetters);

let arr1=[]
let arr2=[]
let obj1:any={"id": output1}
let obj2={'id': output3}
arr2.push({from: output1, to: output3,relation:output2})
    this.fndata["nodes"].push(obj1);
    this.fndata["nodes"].push({id: output3});
    this.fndata["edges"].push({from: output1, to: output3,relation:output2});
    console.log(this.fndata);
    
    
    var chart = anychart.graph();

    console.log(fndata);
   
    chart.data(fndata);



*/


   //-----------------------------------
 /* var zoomController = anychart.ui.zoom();
 zoomController.target(chart);
 zoomController.render();
 
 chart.nodes().labels().format("{%id}");
 chart.nodes().labels().enabled(true);
 chart.nodes().labels().position('inside');
 chart.nodes().labels().fontSize(12);
 chart.nodes().labels().fontWeight(600);
 chart.nodes( {height: 35});

 var labels = chart.edges().labels();
 labels.enabled(true);
 labels.format('{%relation}');
 labels.fontSize(10);

 chart.nodes().tooltip().titleFormat("{%id}");
 chart.nodes().tooltip().fontFamily("Ubuntu");
 chart.nodes().tooltip().useHtml(true);
 chart.nodes().tooltip().format(
   "<span style='font-weight:bold'>{%id}</span><br>"
   );

 chart.container('graphcontainer').draw()

*/









  /* working code
  ngOnInit(): void {
    const data = [
    ["Chocolate", 5],
    ["Rhubarb compote", 2],
    ["Crêpe Suzette", 2],
    ["American blueberry", 2],
    ["Buttermilk", 1]
]

  this.chart = anychart.pie(data);
 this.chart.title("Top 5 pancake fillings");
  this.chart.container("chartContainer");
    this.chart.draw();
  }
  ngAfterViewInit() { }
} */



/*
===========================================================================

linkname:any[]"unigram"
function mychart(linkname){
  // Themes begin
  am4core.useTheme(am4themes_animated); 
  var chart = am4core.create("TopicCloud", am4plugins_wordCloud.WordCloud);
  
  //chart.fontFamily = "Courier New";
  chart.fontFamily = "Verdana";
  
  
  var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
  series.maxCount = 30;
  
  //series.randomness = 0.1;
  series.randomness = 0.2;
  series.rotationThreshold = 0
  series.labelsContainer.rotation = [0,0,0];
  //data manipulation
  
  data=[];
  if (linkname=="unigram"){data=finaldata["Result"]["Words_Unigram"]; console.log(data);}
  else if (linkname=="bigram"){data=finaldata["Result"]["Words_Bigram"]}
  else if (linkname=="trigram"){data=finaldata["Result"]["Words_Trigram"]}
  
  dataval=[];
  count=5;
  
  for (var i = 0; i < data.length; i++) {
          count=count+2;
          dataval.push({"tag":data[i], 'count': count});
      }
      
      
      
  //series.data =[{'tag': 'MS-EXCEL', 'count': 35}, {'tag': 'PDMS', 'count': 7}, {'tag': 'LEARN.RB.COM', 'count': 56}, {'tag': 'GLOBAL IFCN NETWORKS', 'count': 75}, {'tag': 'PRINTER', 'count': 20}, {'tag': 'MS-OFFICE', 'count': 99}, {'tag': 'GLOBAL IFCN SERVERS', 'count': 129}, {'tag': 'WECHAT', 'count': 3}, {'tag': 'MOBILE', 'count': 68}, {'tag': 'NOA', 'count': 13}, {'tag': 'OKTA', 'count': 133}, {'tag': 'MFA', 'count': 71}, {'tag': 'OPTIVA', 'count': 15}, {'tag': 'MJN', 'count': 19}, {'tag': 'DESKTOP', 'count': 9}, {'tag': 'COMPUTER', 'count': 91}, {'tag': 'AFRICA', 'count': 5}, {'tag': 'GLOBAL UNIFIED COMMUNICATION', 'count': 7}, {'tag': 'SHAREPOINT', 'count': 46}, {'tag': 'BITLOCKER', 'count': 26}, {'tag': 'ASEAN', 'count': 12}, {'tag': 'ONEDRIVE', 'count': 27}, {'tag': 'RUSSIA & CIS', 'count': 28}, {'tag': 'GLOBAL TELEPRESENCE', 'count': 79}, {'tag': 'MAILBOX', 'count': 20}, {'tag': 'CITRIX', 'count': 24}, {'tag': 'SUNRISE', 'count': 6}, {'tag': 'SAP', 'count': 211}, {'tag': 'LATAM', 'count': 52}, {'tag': 'WIFI', 'count': 11}, {'tag': 'OUTLOOK', 'count': 201}, {'tag': 'VEEVA', 'count': 19}, {'tag': 'JDE', 'count': 107}, {'tag': 'FUSION', 'count': 65}, {'tag': 'INVOICE', 'count': 31}, {'tag': 'ENVIRONMENT=PROD', 'count': 27}, {'tag': 'VPN', 'count': 187}, {'tag': 'LAPTOP', 'count': 137}, {'tag': 'ACCELERATE', 'count': 6}, {'tag': 'CAS', 'count': 2}, {'tag': 'NAC', 'count': 27}, {'tag': 'REMOVE', 'count': 13}, {'tag': 'PDR', 'count': 7}, {'tag': 'ADOBE', 'count': 34}, {'tag': 'KIOSK', 'count': 19}, {'tag': 'SKYPE', 'count': 32}, {'tag': 'PC', 'count': 14}, {'tag': 'GLOBAL IFCN TELEPRESENCE', 'count': 3}, {'tag': 'ICO', 'count': 3}, {'tag': 'AUDIODEVICE', 'count': 15}, {'tag': 'TRACKWISE', 'count': 27}, {'tag': 'GRC', 'count': 27}, {'tag': 'GRN', 'count': 5}, {'tag': 'INTERNET', 'count': 37}, {'tag': 'MYRB', 'count': 61}, {'tag': 'WEB', 'count': 5}, {'tag': 'PLM', 'count': 7}, {'tag': 'OTM', 'count': 33}, {'tag': 'PAS-X', 'count': 4}, {'tag': 'DSS', 'count': 6}, {'tag': 'CEU', 'count': 32}, {'tag': 'RBASSIST', 'count': 26}, {'tag': 'SEU', 'count': 4}, {'tag': 'SOA', 'count': 20}, {'tag': ' OFFICE 365 E3', 'count': 3}, {'tag': 'RBCOM', 'count': 15}, {'tag': 'EBUY', 'count': 12}, {'tag': 'GRAIS', 'count': 5}, {'tag': 'EVENT FLOW', 'count': 57}, {'tag': 'TURBO', 'count': 17}, {'tag': 'SSIS', 'count': 8}, {'tag': 'GL', 'count': 12}, {'tag': 'WEU', 'count': 19}, {'tag': 'SNP', 'count': 25}, {'tag': 'CONCUR', 'count': 12}, {'tag': 'CARA', 'count': 7}, {'tag': 'POWERBI', 'count': 4}, {'tag': 'PDF', 'count': 18}, {'tag': 'SAP VIM', 'count': 3}, {'tag': 'GLOBAL N', 'count': 18}, {'tag': 'CALENDAR', 'count': 7}, {'tag': 'BOBJ', 'count': 15}, {'tag': 'TRADE EDGE', 'count': 8}, {'tag': 'MS-TEAMS', 'count': 14}, {'tag': 'DOCUSIGN', 'count': 15}, {'tag': 'GLOBAL STORAGE', 'count': 60}, {'tag': 'ZSCALER', 'count': 59}, {'tag': 'POWER BI', 'count': 7}, {'tag': 'CHROME', 'count': 15}, {'tag': 'RB PORTAL', 'count': 2}, {'tag': 'SYMANTEC', 'count': 6}, {'tag': 'PT', 'count': 1}, {'tag': 'ANAPLAN', 'count': 3}, {'tag': 'SAP LOGON', 'count': 8}, {'tag': 'SNAGNIT', 'count': 1}, {'tag': 'SNOW', 'count': 8}, {'tag': 'SAP FIORI', 'count': 1}, {'tag': 'NIELSEN', 'count': 12}, {'tag': 'DISK', 'count': 6}, {'tag': 'SILVERLIGHT', 'count': 1}, {'tag': 'TDS', 'count': 26}, {'tag': 'MDG', 'count': 11}, {'tag': 'FASTSKU', 'count': 7}, {'tag': 'VOLTAR', 'count': 1}]; 
  series.data = dataval;
  //series.text = "Lorem impsum...";
  series.dataFields.word = "tag";
  series.dataFields.value = "count";
  
  
  series.colors = new am4core.ColorSet();
  series.colors.passOptions = {};
  series.labels.template.propertyFields.fill = "color";
  series.labels.template.contextMenuDisabled = "True";
  
   //"min": am4core.color("#0000CC"),
   //"max": am4core.color("#ff5555"),
  series.heatRules.push({
   "target": series.labels.template,
   "property": "fill",
   "dataField": "value"
  });
  //series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
  series.labels.template.events.on("hit", function(ev) {
    //alert("Clicked on " + ev.target.dataItem.word );
    console.log(ev.target.dataItem.word);
    var word=ev.target.dataItem.word;
    var value=ev.target.dataItem.value;
  
  });
  series.labels.template.events.on("rightclick", function(ev) {
    alert("Clicked on " + ev.target.dataItem.word );
    
    //console.log(ev.target.dataItem.all);
    var word=ev.target.dataItem.word;
    //console.log(word);
    var value=ev.target.dataItem.value;
    var all=ev.target.dataItem.all;
    j=rightclick(word,value,linkname)
  });
  //series.labels.template.urlTarget = "_blank";
  series.labels.template.tooltipText = "[bold]{word}";
  
  //var subtitle = chart.titles.create();
  //subtitle.text = "(click to open)";
  
  
  }


   // let fndata={"nodes":[],"edges":[]};
  
  //anyChartView.clear();
  //anychart.clear();
 // this.data={};
 /*
 this.primNode=pNode;
 this.relation=rel;
 this.secNode=sNode;
*/

 // to draw graph
 /*let output1=this.primNode;
 let output2=this.relation;
 let output3=this.secNode;*/
  

 /* 
 fndata1.nodes.push({'id': output1});
  this.data.nodes.push({id: output3});
  this.data.edges.push({from: output1, to: output3,relation:output2});
  console.log(this.data);
   
 
  var chart = anychart.graph();
   chart.data(this.data);
   */
  //console.log(this.fndata);