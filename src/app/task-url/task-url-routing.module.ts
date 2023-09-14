import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewLogicComponent } from './Components/new-logic/new-logic.component';
import { EditConditionComponent } from './Components/edit-condition/edit-condition.component';
import { EditLogicComponent } from './Components/edit-logic/edit-logic.component';
import { NewConditionComponent } from './Components/new-condition/new-condition.component';
import { urlRedirectGuard } from './shared/Guard/url-redirect.guard';

const routes: Routes = [
  { path : '' , component:NewLogicComponent },
  { path : 'new-logic' , component:NewLogicComponent, canActivate: [urlRedirectGuard] },
  { path : 'edit-logic' , component: EditLogicComponent, canActivate: [urlRedirectGuard]},
  { path : 'new-condition' , component:NewConditionComponent , canActivate: [urlRedirectGuard]},
  { path : 'edit-condition' , component:EditConditionComponent, canActivate: [urlRedirectGuard] },
  { path : ':index.html' , component:NewLogicComponent , canActivate: [urlRedirectGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskUrlRoutingModule { }
