import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
       appname:string="First Angular APP";
       programmer:string="John";
       technologies:string[]=["Java","HTML","CSS",
       "Javascript","Typescript","Angular"]

       titles:string[]=["Softwares","System needs","Vendors"];
       information:string[][]=[
         ["Oracle Database","IntelliJ IDE","MY Sql","Chrome"],
         ["16gb RAM","120 GB Disk space"],
         ["Oracle","Google"]
       ];

       item:string="Nothing";

       process(data){
         this.item=data;
       }

}
