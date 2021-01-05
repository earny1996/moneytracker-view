import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async onCloseNav(){
    //document.getElementById("visiblecontent").style.marginLeft = "0";
    document.getElementById("sidebar").style.width = "0";

    await this.delay(300);
    document.getElementById("openNavButton").style.visibility = "visible";
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}
