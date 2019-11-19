import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public text = '';
  constructor() {}

  ngOnInit() {}

  public startPodify() {
    console.log(`Podify started with: "${this.text}"`);
  }
}
