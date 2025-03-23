import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { StoryListComponent } from './story-list.component';


@NgModule({
  declarations: [
    StoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component:  StoryListComponent
    }])
  ],
  exports: [
    StoryListComponent
  ]
})
export class StoryListModule {}