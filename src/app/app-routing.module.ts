import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppInfoComponent } from './components/info/app.info.component';
import { TestLayoutComponent } from './components/test/testconsole.component';


const routes: Routes = [{
  path:'',
  component: AppInfoComponent
},{
  path: 'test',
  component: TestLayoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
