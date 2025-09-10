import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/about-page/about-page.component').then((m) => m.AboutPageComponent),
  },
  {
    path: 'journals',
    loadComponent: () =>
      import('./components/journals-page/journals-page.component').then(
        (m) => m.JournalsPageComponent,
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'defense-enterprise',
      },
      {
        path: 'defense-enterprise',
        loadComponent: () =>
          import('./components/defense-enterprise/defense-enterprise.component').then(
            (m) => m.DefenseEnterpriseComponent,
          ),
      },
      {
        path: 'composite-materials',
        loadComponent: () =>
          import('./components/composite-materials/composite-materials.component').then(
            (m) => m.CompositeMaterialsComponent,
          ),
      },
      {
        path: 'information-technology',
        loadComponent: () =>
          import('./components/information-technology/information-technology.component').then(
            (m) => m.InformationTechnologyComponent,
          ),
      },
      {
        path: 'data-protection',
        loadComponent: () =>
          import('./components/data-protection/data-protection').then(
            (m) => m.DataProtectionComponent,
          ),
      },
      {
        path: 'ecology',
        loadComponent: () => import('./components/ecology/ecology').then((m) => m.EcologyComponent),
      },
    ],
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('./components/analytics-page/analytics-page.component').then(
        (m) => m.AnalyticsPageComponent,
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'robotics-analitics',
      },
      {
        path: 'robotics-analitics',
        loadComponent: () =>
          import('./components/robotics-analitics/robotics-analitics.component').then(
            (m) => m.RoboticsAnaliticsComponent,
          ),
      },
      {
        path: 'artificial-intelligence',
        loadComponent: () =>
          import('./components/artificial-intelligence/artificial-intelligence').then(
            (m) => m.ArtificialIntelligenceComponent,
          ),
      },
      {
        path: 'radio-electronics',
        loadComponent: () =>
          import('./components/radio-electronics/radio-electronics').then(
            (m) => m.RadioElectronicsComponent,
          ),
      },
    ],
  },
  {
    path: 'digests',
    loadComponent: () =>
      import('./components/digests-page/digests-page.component').then(
        (m) => m.DigestsPageComponent,
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'naval-forces',
      },
      {
        path: 'ground-troops',
        loadComponent: () =>
          import('./components/ground-troops/ground-troops.component').then(
            (m) => m.GroundTroopsComponent,
          ),
      },
      {
        path: 'naval-forces',
        loadComponent: () =>
          import('./components/naval-forces/naval-forces.component').then(
            (m) => m.NavalForcesComponent,
          ),
      },
      {
        path: 'robotics',
        loadComponent: () =>
          import('./components/robotics/robotics.component').then((m) => m.RoboticsComponent),
      },
      {
        path: 'aviation',
        loadComponent: () =>
          import('./components/aviation/aviation.component').then((m) => m.AviationComponent),
      },
      {
        path: 'space-forces',
        loadComponent: () =>
          import('./components/space-forces/space-forces.component').then(
            (m) => m.SpaceForcesComponent,
          ),
      },
    ],
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./components/services-page/services-page.component').then(
        (m) => m.ServicesPageComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
