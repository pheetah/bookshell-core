import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import {ToolbarModule} from 'primeng/toolbar';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    ListboxModule,
    ToolbarModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
