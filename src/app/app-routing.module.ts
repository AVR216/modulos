import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: ()=>import('./blog/blog.module').then( m => m.BlogModule)
  },
  {
    path: 'courses',
    loadChildren: ()=> import('./courses/courses.module').then(m=>m.CoursesModule)
  },
  {
    path: 'welcome',
    loadChildren: ()=> import('./welcome/welcome.module').then( m => m.WelcomeModule)
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
