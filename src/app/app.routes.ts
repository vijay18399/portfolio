import { Routes } from '@angular/router';
import { HomeComponent } from './home-page.component';

export const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  { path: 'whiteboard', loadChildren: () => import('./whiteboard/whiteboard.module').then(m => m.WhiteboardModule) },
  { path: 'pronunciation', loadChildren: () => import('./pronunciation/pronunciation.module').then(m => m.PronunciationModule) },
  { path: 'spell-bee', loadChildren: () => import('./spell-bee/spell-bee.module').then(m => m.SpellBeeModule) },
  { path: 'dictionary', loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];


