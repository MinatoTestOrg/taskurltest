import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Taskurltesttable1RoutingModule } from './taskurltesttable1-routing.module';
import { Taskurltesttable1BaseModule } from '@baseapp/taskurltesttable1/taskurltesttable1.base.module';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    Taskurltesttable1BaseModule,
    Taskurltesttable1RoutingModule
    
  ],
  exports: [
      Taskurltesttable1BaseModule,
  ]

})
export class Taskurltesttable1Module  { }