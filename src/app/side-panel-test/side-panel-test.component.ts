import { Component, OnInit } from '@angular/core';
import { jsPanel } from 'node_modules/jspanel4/es6module/jspanel.min.js';

@Component({
  selector: 'app-side-panel-test',
  templateUrl: './side-panel-test.component.html',
  styleUrls: ['./side-panel-test.component.css']
})
export class SidePanelTestComponent implements OnInit {

  showmenu : boolean;
  filterdata = [];

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("menu-setting").style.marginLeft = "10px";
    document.getElementById("menu-setting").style.marginRight = "10px";
    this.showmenu = true;
  }
  close(){
    document.getElementById("mySidebar").style.width = "0";
    this.showmenu = false;
  }

  checkboxDisplay(){
    var nodenamecheck = document.getElementById("nodename") as HTMLInputElement;
    var statuscheck = document.getElementById("status") as HTMLInputElement;
    var ipcheck = document.getElementById("ip") as HTMLInputElement;

    console.log("menu : ");
    console.log("node name check : ",nodenamecheck)
    console.log("status check : ",statuscheck)
    console.log("ip check : ",ipcheck)

    if (nodenamecheck.checked == true){
      this.filterdata.push("name");
    //  nodeNameText.style.display = "block";
    } else {
      // nodeNameText.style.display = "none";
    }

    if (statuscheck.checked == true){
      this.filterdata.push("status");
      //statustext.style.display = "block";
    } else {
       //statustext.style.display = "none";
    }

    if (ipcheck.checked == true){
      this.filterdata.push("ip");
     //iptext.style.display = "block";
   } else {
      //iptext.style.display = "none";
   }
   console.log("filterdata : ",this.filterdata);

  }

  // openMenu(){
  //   jsPanel.create({
  //     position: {
  //       my: "left-top",
  //       at: "left-top",
  //       offsetX: 5,
  //       offsetY: 61
  //     },
  //    // offset:   { top: -129, left: 0 },      // moved up by approximately half panel height
  //     size:     { width: 400, height: 222 }, // it should be clear that panel height has to be known
  //     theme:    'autumngreen'

  // });
  // jsPanel.create({
  //   position: {
  //     my: "left-top",
  //     at: "left-top",
  //     offsetX: 5,
  //     offsetY: 90
  //   },
  //    // offset:   { top: 129, left: 0 },       // moved down by approximately half panel height
  //     size:     { width: 400, height: 222 }, // it should be clear that panel height has to be known
  //     theme:    'autumnred'

  // });
  // }


}
