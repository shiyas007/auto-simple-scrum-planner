import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.scss']
})
export class SprintCalculatorComponent implements OnInit {
  sprint_name: any;
  sprint_point: any;
  stories: any[] = [];
  selectedStories: any[] = [];
  constructor(private router: Router) {
  
  }

  ngOnInit(): void {
    this.loadStories();
  }

  loadStories() {
    this.stories = JSON.parse(localStorage.getItem('stories') || '[]');
  }

  generateSprint() {
    if (!this.sprint_point || this.sprint_point <= 0) {
      alert("Enter a valid sprint capacity.");
      return;
    }
  
    let remainingCapacity = this.sprint_point;
    this.selectedStories = [];
  
    const sortedStories = [...this.stories].sort((a, b) => b.story_point - a.story_point);
  
    let bestCombination: any[] = [];
    let bestTotal = 0;
  
    function findBestSubset(index: number, currentSet: any[], currentTotal: number) {
      if (currentTotal > remainingCapacity) return;
      if (currentTotal > bestTotal) {
        bestTotal = currentTotal;
        bestCombination = [...currentSet];
      }
  
      for (let i = index; i < sortedStories.length; i++) {
        findBestSubset(i + 1, [...currentSet, sortedStories[i]], currentTotal + sortedStories[i].story_point);
      }
    }
  
    findBestSubset(0, [], 0);
  
    this.selectedStories = bestCombination;
  
    if (this.selectedStories.length === 0) {
      alert("No stories fit within the sprint capacity.");
    }
  }  

  clearStories() {
    localStorage.removeItem('stories');
    this.stories = [];
    this.selectedStories = [];
    this.router.navigate(['/sprint-calculator']);
  }

  clearSprints() {
    this.selectedStories = [];
  }

}
