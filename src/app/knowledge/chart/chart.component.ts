import { Component, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { XYChart } from '@amcharts/amcharts4/charts';
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
 

  @Input() chartDetails: any;
  @Input() datagram: any;
  
  data: any=[];
  chart: am4plugins_wordCloud.WordCloud | any;
  gram: any;
  rcoptions: boolean=false;
   constructor() {}

   onRightClick(){
     console.log("inside  onRightClick " );
     this.rcoptions=true
   }
   getgram(gram:any){
     console.log("getgram", gram)
     console.log("inside chart ,", this.chartDetails)
     if(gram =='UNIGRAM'){
      this.data=this.chartDetails.Words_Unigram
      console.log("unigram ", this.data)
     }
     if(gram=='BIGRAM'){
      this.data=this.chartDetails.Words_Bigram
      console.log("bigram ", this.data)
     }
     if(gram=='TRIGRAM'){
      this.data=this.chartDetails.Words_Trigram
      console.log("trigram ", this.data)
     }
     am4core.options.autoDispose = true;
    var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    chart.fontFamily = "Verdana";
    series.maxCount = 30;

    series.randomness = 0.2;
    series.rotationThreshold = 0
    series.labelsContainer.rotation = 0;

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

    series.colors = new am4core.ColorSet();
series.colors.passOptions = {};
series.labels.template.propertyFields.fill = "color";
    
  series.heatRules.push({
  "target": series.labels.template,
  "property": "fill",
  "min": am4core.color("#ffaaaa"),
  "max": am4core.color("#ff5555"),
  "dataField": "value"
 });
 series.labels.template.tooltipText = "[bold]{word}";
   
}
ngOnInit(): void {}
   ngOnInitdbsh(): void {
     console.log("gram: ", this.gram);
   // this.chart.dispose();
     console.log("inside chart ,", this.chartDetails)
     console.log("inside datagram ,", this.datagram)
    
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
/*
series.heatRules.push({
  "target": series.labels.template,
  "property": "fill",
  "dataField": "value"
 });*/

 series.heatRules.push({
  "target": series.labels.template,
  "property": "fill",
  "min": am4core.color("#ffaaaa"),
  "max": am4core.color("#ff5555"),
  "dataField": "value"
 });
 series.labels.template.tooltipText = "[bold]{word}";
  /*   
//sample working 

    am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
series.text = "Though yet of Hamlet our dear brother's death The memory be green, and that it us befitted To bear our hearts in grief and our whole kingdom To be contracted in one brow of woe, Yet so far hath discretion fought with nature That we with wisest sorrow think on him, Together with remembrance of ourselves. Therefore our sometime sister, now our queen, The imperial jointress to this warlike state, Have we, as 'twere with a defeated joy,-- With an auspicious and a dropping eye, With mirth in funeral and with dirge in marriage, In equal scale weighing delight and dole,-- Taken to wife: nor have we herein barr'd Your better wisdoms, which have freely gone With this affair along. For all, our thanks. Now follows, that you know, young Fortinbras, Holding a weak supposal of our worth, Or thinking by our late dear brother's death Our state to be disjoint and out of frame, Colleagued with the dream of his advantage, He hath not fail'd to pester us with message, Importing the surrender of those lands Lost by his father, with all bonds of law, To our most valiant brother. So much for him. Now for ourself and for this time of meeting: Thus much the business is: we have here writ To Norway, uncle of young Fortinbras,-- Who, impotent and bed-rid, scarcely hears Of this his nephew's purpose,--to suppress His further gait herein; in that the levies, The lists and full proportions, are all made Out of his subject: and we here dispatch You, good Cornelius, and you, Voltimand, For bearers of this greeting to old Norway; Giving to you no further personal power To business with the king, more than the scope Of these delated articles allow. Farewell, and let your haste commend your duty. Tis sweet and commendable in your nature, Hamlet,To give these mourning duties to your father: But, you must know, your father lost a father; That father lost, lost his, and the survivor bound In filial obligation for some term To do obsequious sorrow: but to persever In obstinate condolement is a course Of impious stubbornness; 'tis unmanly grief; It shows a will most incorrect to heaven, A heart unfortified, a mind impatient, An understanding simple and unschool'd: For what we know must be and is as common As any the most vulgar thing to sense, Why should we in our peevish opposition Take it to heart? Fie! 'tis a fault to heaven, A fault against the dead, a fault to nature, To reason most absurd: whose common theme Is death of fathers, and who still hath cried, From the first corse till he that died to-day, 'This must be so.' We pray you, throw to earth This unprevailing woe, and think of us As of a father: for let the world take note, You are the most immediate to our throne; And with no less nobility of love Than that which dearest father bears his son, Do I impart toward you. For your intent In going back to school in Wittenberg, It is most retrograde to our desire: And we beseech you, bend you to remain Here, in the cheer and comfort of our eye, Our chiefest courtier, cousin, and our son."; 
series.maxCount = 100;
series.minWordLength = 2;
//series.excludeWords = ["the", "an", "to"];
series.labels.template.fill = am4core.color("#9F6BA0");
/*series.colors = new am4core.ColorSet();
series.colors.passOptions = {};
series.colors.reuse = true;*/
/*series.labels.template.propertyFields.fill = "red";
  }
*/


}





}

/*

working for single chart data

/*  let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud); 
  let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
  
  //private chart: am4charts.XYChart = new XYChart;
 */

 
//am4core.useTheme(am4themes_animated); 
/*
this.chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
var series = this.chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
this.chart.fontFamily = "Verdana";
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
/*
series.heatRules.push({
  "target": series.labels.template,
  "property": "fill",
  "dataField": "value"
 });

 series.heatRules.push({
  "target": series.labels.template,
  "property": "fill",
  "min": am4core.color("#ffaaaa"),
  "max": am4core.color("#ff5555"),
  "dataField": "value"
 });
 series.labels.template.tooltipText = "[bold]{word}";

*/

/*
export class ChartComponent {
  
 private chart: am4charts.XYChart = new XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      //valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.tooltipText = "{valueY.value}";

      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
*/