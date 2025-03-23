import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { SprintCalculatorComponent } from './sprint-calculator.component';
import { AutoSelectedSprintModule } from '../auto-selected-sprint/auto-selected-sprint.module';


@NgModule({
  declarations: [
    SprintCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AutoSelectedSprintModule,
    RouterModule.forChild([{ path: '', component:  SprintCalculatorComponent
    }])
  ],
  exports: [
    SprintCalculatorComponent
  ]
})
export class SprintCalculatorModule {}