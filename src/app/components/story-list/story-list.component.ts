import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {
  stories: any[] = [];
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.loadStories();
  }

  loadStories() {
    this.stories = JSON.parse(localStorage.getItem('stories') || '[]');
    console.log(this.stories);
  }

  navigateToCalculateSprint() {
    this.router.navigate(['/sprint-calculator']);
  }

  navigateToForm() {
    this.router.navigate(['/story-form']);
  }

}
