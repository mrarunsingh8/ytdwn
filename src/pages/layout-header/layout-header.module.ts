import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LayoutHeaderPage } from './layout-header';

@NgModule({
  declarations: [
    LayoutHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(LayoutHeaderPage),
  ],
})
export class LayoutHeaderPageModule {}
