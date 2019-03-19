import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-web',
  templateUrl: './layout-web.component.html',
  styleUrls: ['./layout-web.component.css']
})
export class LayoutWebComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  heightSize = 50;
  widthSizeLeft = 400;
  widthSizeRight = 400;
  
  onclickHeader(){
    this.heightSize +=10;
  }
  onclickTru(){
    this.heightSize -=10;
  }

  onclickLeft(){
    this.widthSizeRight -=10;
    this.widthSizeLeft +=10
  }
  onclickLleftTru(){
    this.widthSizeRight +=10;
    this.widthSizeLeft -=10;
  }

  onclickRight(){
    this.widthSizeLeft -=10;
    this.widthSizeRight +=10;
  }
  onclickRightTru(){
    this.widthSizeLeft +=10;
    this.widthSizeRight -=10;
  }

}
