import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'story-list', pathMatch: 'full' },
    { path: 'story-list', loadChildren: () => import('./components/story-list/story-list.module').then(m => m.StoryListModule) },
    { path: 'story-form', loadChildren: () => import('./components/story-form/story-form.module').then(m => m.StoryFormModule) },
    { path: 'sprint-calculator', loadChildren: () => import('./components/sprint-calculator/sprint-calculator.module').then(m => m.SprintCalculatorModule) },
    { path: 'auto-selected-sprint', loadChildren: () => import('./components/auto-selected-sprint/auto-selected-sprint.module').then(m => m.AutoSelectedSprintModule) }
];
