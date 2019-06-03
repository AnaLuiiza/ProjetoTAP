import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'wait', loadChildren: './pages/wait/wait.module#WaitPageModule' },
  { path: 'work/:id', loadChildren: './pages/work/work.module#WorkPageModule' },
  { path: 'work', loadChildren: './pages/work/work.module#WorkPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'last', loadChildren: './pages/last/last.module#LastPageModule' },
  { path: 'intro', loadChildren: './pages/intro/intro.module#IntroPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
