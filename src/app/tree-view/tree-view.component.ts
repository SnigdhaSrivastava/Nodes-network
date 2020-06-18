import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
     (<any> $('#jstree')).jstree();
     $('#jstree').on("changed.jstree", function (e, data) {
      console.log(data.selected);
    });
    // 8 interact with the tree - either way is OK
    $('button').on('click', function () {
      $('#jstree').jstree(true).select_node('child_node_1');
      $('#jstree').jstree('select_node', 'child_node_1');
      $.jstree.reference('#jstree').select_node('child_node_1');
    });
    });
  }
  // demo(){

  //     // 6 create an instance when the DOM is ready


  //     // 8 interact with the tree - either way is OK

  //       $('#jstree').jstree(true).select_node('child_node_1');
  //       $('#jstree').jstree('select_node', 'child_node_1');
  //       $.jstree.reference('#jstree').select_node('child_node_1');



  // }

}
