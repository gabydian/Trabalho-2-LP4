import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tab1/tab1.page',
    pathMatch: 'full',
  },
  
  {
    path: 'formulario/:email',
    loadComponent: () => import('../tab1/tab1.page').then((m) => m.Tab1Page),
  },
  {
    path: 'tabs',
    loadComponent: () => import('../tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
    ],
  },
];
export default routes;