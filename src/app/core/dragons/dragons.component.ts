import { Component, OnInit } from '@angular/core';
import { IDragon } from "@shared/interfaces/dragon-service.interface";
import { EventEmitterService } from '@shared/services/event-emitter.service';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {

  title = 'Todos os Dragões';
  orderByZa = false;

  dragonObj: IDragon[] = [
    {
      id: 254556,
      name: 'Banguela',
      avatar: 'https://i1.wp.com/1.bp.blogspot.com/-u2iE6jxNzuU/XDzsgo515mI/AAAAAAAAETI/t2KJgKJWGmgBctjvjnwrjR8WTtqrRKm_wCLcBGAs/s320/dragon_icon_TOOTHLESS.png?resize=320%2C241&ssl=1',
      type: 'Fúria da noite',
      histories : [
        {
          description: 'Da espécie Fúria da noite, Banguela é classificado como Ataque e seu fogo é produzido a partir de cargas de Acetileno e Oxigênio. Possui personalidade extremamente fiel e empática, além da energia de um filhote.'
        }
    ]
  },
    {
      id: 254556,
      name: 'Banguela',
      avatar: 'https://i1.wp.com/1.bp.blogspot.com/-u2iE6jxNzuU/XDzsgo515mI/AAAAAAAAETI/t2KJgKJWGmgBctjvjnwrjR8WTtqrRKm_wCLcBGAs/s320/dragon_icon_TOOTHLESS.png?resize=320%2C241&ssl=1',
      type: 'Fúria da noite',
      histories : [
        {
          description: 'Da espécie Fúria da noite, Banguela é classificado como Ataque e seu fogo é produzido a partir de cargas de Acetileno e Oxigênio. Possui personalidade extremamente fiel e empática, além da energia de um filhote.'
        }
      ]
    },
    {
      id: 254556,
      name: 'Banguela',
      avatar: 'https://i1.wp.com/1.bp.blogspot.com/-u2iE6jxNzuU/XDzsgo515mI/AAAAAAAAETI/t2KJgKJWGmgBctjvjnwrjR8WTtqrRKm_wCLcBGAs/s320/dragon_icon_TOOTHLESS.png?resize=320%2C241&ssl=1',
      type: 'Fúria da noite',
      histories : [
        {
          description: 'Da espécie Fúria da noite, Banguela é classificado como Ataque e seu fogo é produzido a partir de cargas de Acetileno e Oxigênio. Possui personalidade extremamente fiel e empática, além da energia de um filhote.'
        }
      ]
    },
    {
      id: 254556,
      name: 'Banguela',
      avatar: 'https://i1.wp.com/1.bp.blogspot.com/-u2iE6jxNzuU/XDzsgo515mI/AAAAAAAAETI/t2KJgKJWGmgBctjvjnwrjR8WTtqrRKm_wCLcBGAs/s320/dragon_icon_TOOTHLESS.png?resize=320%2C241&ssl=1',
      type: 'Fúria da noite',
      histories : [
        {
          description: 'Da espécie Fúria da noite, Banguela é classificado como Ataque e seu fogo é produzido a partir de cargas de Acetileno e Oxigênio. Possui personalidade extremamente fiel e empática, além da energia de um filhote.'
        }
      ]
    }
  ];


  constructor() { }

  ngOnInit(): void {

  }

  openDragonDetails(id: IDragon['id']) {
    if (typeof id === 'number') {
      EventEmitterService.get('detailedDragonEvent').emit( this.dragonObj[id] );
    }

  }

  changeCardOrder() {
    this.orderByZa = !this.orderByZa;

  }



}
