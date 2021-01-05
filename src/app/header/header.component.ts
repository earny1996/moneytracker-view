import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onOpenNav(): void{
    //document.getElementById("visiblecontent").style.marginLeft = "250px";
    document.getElementById("openNavButton").style.visibility = "hidden";
    document.getElementById("sidebar").style.width = "100%";
    
  }

}
