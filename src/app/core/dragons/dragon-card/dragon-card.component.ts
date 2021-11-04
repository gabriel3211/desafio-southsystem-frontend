import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDragon } from "@shared/interfaces/dragon-service.interface";

@Component({
  selector: 'app-dragon-card',
  templateUrl: './dragon-card.component.html',
  styleUrls: ['./dragon-card.component.scss']
})
export class DragonCardComponent implements OnInit {

  @Input() dragon: IDragon | undefined;
  @Output() dragonDetails = new EventEmitter<IDragon['id']>();

  isLoadedImage = false;

  constructor() { }

  ngOnInit(): void {

  }

  public loadedImage() {

    this.isLoadedImage = true;

  }

  public dragonDetailsEvent(id: IDragon['id']) {

    this.dragonDetails.emit(id);

  }

}
