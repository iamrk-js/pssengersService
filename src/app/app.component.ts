import { Component, OnInit } from '@angular/core';
import { Ipass } from './model/pass';
import { PassService } from './services/pass.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers:[PassService]
})
export class AppComponent implements OnInit {

  title = 'app';
  passArray: Ipass[] = [];
  // passServInstance !: PassService
  constructor() {
    
  }
  ngOnInit(): void {
  
  }

}
