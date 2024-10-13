import { Routes } from '@angular/router';
import { TemplateComponent } from './components/pages/template/template.component';
import { MasterComponent } from './components/pages/master/master.component';
import { StrategyComponent } from './components/pages/strategy/strategy.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CreateTemplateComponent } from './components/template/createTemplate/createTemplate.component';
import { IndexTemplateComponent } from './components/template/index-template/index-template.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'template', component: TemplateComponent, children: [{ path: '', component: IndexTemplateComponent }, { path: 'create', component: CreateTemplateComponent }] },
  { path: 'strategy', component: StrategyComponent }, //TODO add children
  { path: 'master', component: MasterComponent }, //TODO add children
  //{ path: '**', component: ErrorComponent }, //TODO add not found URL
];
