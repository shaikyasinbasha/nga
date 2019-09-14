import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild("navs",{static:false}) navsview: ElementRef;
  @ViewChild("menuicon",{static:false}) menuicon: ElementRef;
  onNavHandleEvent(){
    const menuDisp = this.menuicon.nativeElement.style.display;
    const navDisp = this.navsview.nativeElement.style.display;
    if(navDisp === 'block'){
      this.navsview.nativeElement.style.display = 'none';
    }
  }
  handleMenuClick(){
    let navDisplay = this.navsview.nativeElement.style.display
    navDisplay = navDisplay == 'block' ? 'none' : 'block';
    this.navsview.nativeElement.style.display = navDisplay;
  }
}
