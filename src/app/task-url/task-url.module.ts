import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskUrlRoutingModule } from './task-url-routing.module';
import { EditLogicComponent } from './Components/edit-logic/edit-logic.component';
import { NewConditionComponent } from './Components/new-condition/new-condition.component';
import { EditConditionComponent } from './Components/edit-condition/edit-condition.component';
import { NewLogicComponent } from './Components/new-logic/new-logic.component';

@NgModule({
  declarations: [
    EditLogicComponent,
    NewConditionComponent,
    EditConditionComponent,
    NewLogicComponent
  ],
  imports: [
    CommonModule,
    TaskUrlRoutingModule
  ]
})
export class TaskUrlModule { }
