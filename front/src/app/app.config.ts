import type { ApplicationConfig } from '@angular/core';
import type { Routes } from '@angular/router';

import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { currentPuzzleGameParametersResolver } from './resolvers/current-puzzle-game-parameters.resolver';

const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/puzzle-form/puzzle-form.component').then((m) => m.PuzzleFormComponent),
  },
  {
    path: 'play',
    loadComponent: () => import('./components/puzzle-game/puzzle-game.component').then((m) => m.PuzzleGameComponent),
    resolve: {
      puzzleGameParameters: currentPuzzleGameParametersResolver,
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(APP_ROUTES, withComponentInputBinding()),
  ],
};
