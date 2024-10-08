import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from '../../home/home.page';

import { HeaderModule } from '../header/header.module';
import { HomePageRoutingModule } from 'src/app/home/home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
