import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'mfe1',
    loadChildren: () =>
        loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            remoteName: 'mfe1',
            exposedModule: './web-components'
        })
        .then(m => m.AppModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
