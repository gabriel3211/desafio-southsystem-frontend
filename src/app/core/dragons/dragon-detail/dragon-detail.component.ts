import { Component, OnInit, Input } from '@angular/core';
import {EventEmitterService} from "@shared/services/event-emitter.service";
import {IDragon} from "@shared/interfaces/dragon-service.interface";

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.scss']
})
export class DragonDetailComponent implements OnInit {

  isShowDetailedDragon: boolean = false;
  detailedDragon: IDragon = {
    name: '',
    type: '',
    id: 0,
  };

  constructor() { }

  ngOnInit(): void {

    EventEmitterService.get('detailedDragonEvent').subscribe((dragon: IDragon) => {

      this.detailedDragon = dragon;
      this.isShowDetailedDragon = true;

    });

  }

  closeModalDetailedDragon() {

    this.isShowDetailedDragon = false;

  }

}
