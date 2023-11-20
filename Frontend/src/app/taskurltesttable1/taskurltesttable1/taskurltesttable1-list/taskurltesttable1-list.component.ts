import { Component, OnInit,inject } from '@angular/core';
import { Taskurltesttable1ListBaseComponent } from '@baseapp/taskurltesttable1/taskurltesttable1/taskurltesttable1-list/taskurltesttable1-list.base.component';
import { Taskurltesttable1Service } from '@baseapp/taskurltesttable1/taskurltesttable1/taskurltesttable1.service';


@Component({
  selector: 'app-taskurltesttable1-list',
  templateUrl: '../../../../../base/app/taskurltesttable1/taskurltesttable1/taskurltesttable1-list/taskurltesttable1-list.component.html',
  styleUrls: ['./taskurltesttable1-list.scss']
})
export class Taskurltesttable1ListComponent extends Taskurltesttable1ListBaseComponent implements OnInit {
 
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 
}
