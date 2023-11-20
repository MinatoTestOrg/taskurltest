import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { Taskurltesttable1DetailComponent } from '@app/taskurltesttable1/taskurltesttable1/taskurltesttable1-detail/taskurltesttable1-detail.component';
import { Taskurltesttable1ListComponent } from '@app/taskurltesttable1/taskurltesttable1/taskurltesttable1-list/taskurltesttable1-list.component';

export const routes: Routes = [

{
     path: 'taskurltesttable1detail',
     component: Taskurltesttable1DetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "TASKURLTESTTABLE1_DETAIL",
        breadcrumb: "TASKURLTESTTABLE1_DETAIL",
        roles : [					"all"
				]
     }
},
{
     path: 'taskurltesttable1list',
     component: Taskurltesttable1ListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "TASKURLTESTTABLE1_LIST",
        breadcrumb: "TASKURLTESTTABLE1_LIST",
        roles : [					"all"
				]
     }
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class Taskurltesttable1BaseRoutingModule
{
}
