import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input('title') data:string="default";
  @Input() items:string[]=[];
  @Output('send')  dataSender:EventEmitter<String>=new EventEmitter<String>();
  theme:string="box1";
  theme2:object={backgroundColor: "rgb(24, 145, 145)", color: "lightblue"};
  theme1:object={backgroundColor: "rgb(213, 230, 230)", color: "darkblue"};
  
  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(data):void{
  
    this.dataSender.emit(data);
  }

  themeChange(type):void
  {
    if(type=="t1")
       this.theme="box1"; 
    else if(type=="t2")
       this.theme="box2";
  }

}
