import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '@core/core.component';
import { DragonsComponent } from '@core/dragons/dragons.component';
import { DragonRegisterComponent } from '@core/dragon-register/dragon-register.component';



const routes: Routes = [
  { path: '',   redirectTo: '/dragons/all', pathMatch: 'full' },
  {
    path: 'dragons', component: CoreComponent,
    children: [
      { path: 'all', component: DragonsComponent  },
      { path: 'new', component: DragonRegisterComponent },
      { path: 'update/:id', component: DragonRegisterComponent },
    ]
  }
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
