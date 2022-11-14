import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/model/pass';
import { PassService } from 'src/app/services/pass.service';

@Component({
  selector: 'app-passengerdashboard',
  templateUrl: './passengerdashboard.component.html',
  styleUrls: ['./passengerdashboard.component.scss']
})
export class PassengerdashboardComponent implements OnInit {
  public passArray: Ipass[] = [];
  public checkInpass !: number;
  constructor(private passService: PassService) { }

  ngOnInit(): void {
    this.passArray = this.passService.getAllPassengers();
    this.checkInpass = this.passArray.filter(pass => pass.checkedIn).length;

  }
  updatePassdata(pass: { Ipass: Ipass; action: string; }) {
    console.log(pass);
    if (pass.action === 'update') {
      this.passArray.forEach(passObj => {
        if (passObj.id === pass.Ipass.id) {
          passObj.fullname = pass.Ipass.fullname
        }
      })
    } else if (pass.action === 'remove') {
      // console.log(pass.Ipass);
      let getIndex = this.passArray.findIndex(obj => obj.id === pass.Ipass.id);
      console.log(getIndex);
      this.passArray.splice(getIndex, 1)
    }
  }
}
