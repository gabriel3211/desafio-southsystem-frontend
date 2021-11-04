import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '@core/core.component';
import { DragonsComponent } from '@core/dragons/dragons.component';
import { DragonRegisterComponent } from '@core/dragon-register/dragon-register.component';



const routes: Routes = [
  {
    path: 'dragons', component: CoreComponent,
    children: [
      { path: 'all', component: DragonsComponent  },
      { path: 'new', component: DragonRegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
