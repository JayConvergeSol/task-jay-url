import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewLogicComponent } from './Components/new-logic/new-logic.component';
import { EditConditionComponent } from './Components/edit-condition/edit-condition.component';
import { EditLogicComponent } from './Components/edit-logic/edit-logic.component';
import { NewConditionComponent } from './Components/new-condition/new-condition.component';

const routes: Routes = [
  { path : '' , component:NewLogicComponent },
  { path : 'new-logic' , component:NewLogicComponent },
  { path : 'edit-logic' , component: EditLogicComponent},
  { path : 'new-condition' , component:NewConditionComponent },
  { path : 'edit-condition' , component:EditConditionComponent },
  { path : ':index.html' , component:NewLogicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskUrlRoutingModule { }
