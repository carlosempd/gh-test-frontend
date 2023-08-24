import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitComponent } from './commit.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CommitComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class CommitModule { }
