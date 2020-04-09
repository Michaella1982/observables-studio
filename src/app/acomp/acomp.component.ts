import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { SharedService } from "../shared.service";

import { Router, NavigationStart } from "@angular/router";

import { filter } from "rxjs/operators";

import { Observable } from "rxjs";
@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.scss']
})
export class AcompComponent implements OnInit {

  data: any;

  constructor(private router: Router, private sharedData: SharedService) { }

  ngOnInit() {
    this.sharedData.currentData.subscribe(data => this.data = data); 
  }
    
    changeData() {
      this.sharedData.changeData({name: 'Coder Girl'});
      this.router.navigate(['/bcomp']); }


}
