import { Component, OnInit } from '@angular/core';
import "jquery";
import { NodesinfoService } from '../nodesinfo.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

nodes = [];
filterdata=[];

  constructor(private _nodesInfo: NodesinfoService) { }

  ngOnInit() {

    this._nodesInfo.getNodesInfo().subscribe((data) => {
      this.nodes = data;
      console.log('nodec : ',this.nodes)
    });

    this.openNav();
    this.closeNav();
  }

   openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  checkboxDisplay(){
    var nodenamecheck = document.getElementById("nodename") as HTMLInputElement;
    var statuscheck = document.getElementById("status") as HTMLInputElement;
    var ipcheck = document.getElementById("ip") as HTMLInputElement;

   var nodeNameText = document.getElementById("nodenametext");
   var statustext = document.getElementById("statustext");
   var iptext = document.getElementById("iptext");

   if (nodenamecheck.checked == true){
     this.filterdata.push("name");
     nodeNameText.style.display = "block";
   } else {
      nodeNameText.style.display = "none";
   }

   if (statuscheck.checked == true){
     this.filterdata.push("status");
     statustext.style.display = "block";
   } else {
      statustext.style.display = "none";
   }

   if (ipcheck.checked == true){
     this.filterdata.push("ip");
    iptext.style.display = "block";
  } else {
     iptext.style.display = "none";
  }
  console.log("filterdata : ",this.filterdata);
  }
}
