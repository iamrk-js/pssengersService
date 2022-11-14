import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipass } from 'src/app/model/pass';

@Component({
  selector: 'app-pass-details',
  templateUrl: './pass-details.component.html',
  styleUrls: ['./pass-details.component.scss']
})
export class PassDetailsComponent implements OnInit {
  @Input() passObj!: Ipass;
  flag: boolean = true;
  @Output() emitPassengerData: EventEmitter<{ Ipass: Ipass, action: string }> = new EventEmitter<{ Ipass: Ipass, action: string }>()
  constructor() { }

  ngOnInit(): void {
  }
  onDoneClick(fullname: string) {
    if (this.flag) {
      console.log(fullname);
      this.passObj.fullname = fullname;
      this.emitPassengerData.emit({ Ipass: this.passObj, action: 'update' })
    }
  }
  onRemove() {
    this.emitPassengerData.emit({ Ipass: this.passObj, action: 'remove' })
  }
}
