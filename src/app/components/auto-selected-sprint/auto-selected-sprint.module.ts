import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AutoSelectedSprintComponent } from './auto-selected-sprint.component';

@NgModule({
  declarations: [
    AutoSelectedSprintComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AutoSelectedSprintComponent
  ]
})
export class AutoSelectedSprintModule {}