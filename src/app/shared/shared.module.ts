import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from 'src/app/shared/breadcrumbs/breadcrumbs.component';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';

import { MatExpansionModule } from '@angular/material/expansion';

import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,

    // WebcamModule,
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatExpansionModule,
    
    // WebcamModule,
  ]
})
export class SharedModule { }
