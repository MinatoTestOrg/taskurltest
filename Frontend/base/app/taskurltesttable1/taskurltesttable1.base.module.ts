import { NgModule } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedModule } from '@app/shared/shared.module';
import { ExportsModule } from '@app/exports/exports.module';
import { Taskurltesttable1DetailComponent } from '@app/taskurltesttable1/taskurltesttable1/taskurltesttable1-detail/taskurltesttable1-detail.component';
import { Taskurltesttable1ListComponent } from '@app/taskurltesttable1/taskurltesttable1/taskurltesttable1-list/taskurltesttable1-list.component';
import { WidgetsBaseModule } from '@libbase/widgets.base.module';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

@NgModule({
  declarations: [
    Taskurltesttable1DetailComponent,
    Taskurltesttable1ListComponent
  ],
  imports: [
    SharedModule,
    WidgetsBaseModule,
    ExportsModule,
	WidgetsBaseModule,
  ],
  exports: [
    SharedModule,
	WidgetsBaseModule,
    Taskurltesttable1DetailComponent,
    Taskurltesttable1ListComponent
  ],
  providers: [
  	BsModalService,
	CanDeactivateGuard
  ],
  
})
export class Taskurltesttable1BaseModule { }