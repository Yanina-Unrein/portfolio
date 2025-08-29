import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Experience } from './features/experience/experience';
import { Projects } from './features/projects/projects';
import { Technologies } from './features/technologies/technologies';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'es', pathMatch: 'full' },
  {
    path: ':lang',
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: Home },
      { path: 'about', component: About },
      { path: 'experience', component: Experience },
      { path: 'projects', component: Projects },
      { path: 'technologies', component: Technologies },
      { path: 'contact', component: Contact },
    ]
  },
  { path: '**', redirectTo: 'es' }
];