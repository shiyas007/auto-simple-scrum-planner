import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-auto-selected-sprint',
  templateUrl: './auto-selected-sprint.component.html',
  styleUrls: ['./auto-selected-sprint.component.scss']
})
export class AutoSelectedSprintComponent implements OnChanges {

  @Input() selectedStories: any[] = []; 

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedStories']) {
      console.log("Updated stories", this.selectedStories);
      this.cdRef.detectChanges(); 
    }
  }
}

