import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.scss']
})
export class StoryFormComponent {
  story_name: any;
  story_point: any;
  story_description: any;
  stories: any[] = JSON.parse(localStorage.getItem('stories') || '[]');
  constructor(private router: Router) {

  }

  addStory() {
    if (!this.story_name || this.story_point === null) {
      return; 
    }
  
    const isDuplicate = this.stories.some(story => story.story_name.toLowerCase() === this.story_name.toLowerCase());
    if (isDuplicate) {
      alert('Story with this name already exists!');
      return;
    }
  
    const newStory = {
      story_name: this.story_name,
      story_point: this.story_point,
      story_description: this.story_description || '' // Allow empty description
    };
  
    this.stories.push(newStory);
    localStorage.setItem('stories', JSON.stringify(this.stories));
  
    this.story_name = '';
    this.story_point = null;
    this.story_description = ''; // Reset the optional field
  
    this.router.navigate(['/story-list']); 
  }  

}
