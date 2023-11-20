import { Component, OnInit,inject } from '@angular/core';
import { Taskurltesttable1DetailBaseComponent } from '@baseapp/taskurltesttable1/taskurltesttable1/taskurltesttable1-detail/taskurltesttable1-detail.base.component';
import { Taskurltesttable1Service } from '@baseapp/taskurltesttable1/taskurltesttable1/taskurltesttable1.service';


@Component({
  selector: 'app-taskurltesttable1-detail',
  templateUrl: '../../../../../base/app/taskurltesttable1/taskurltesttable1/taskurltesttable1-detail/taskurltesttable1-detail.component.html',
  styleUrls: ['./taskurltesttable1-detail.scss']
})
export class Taskurltesttable1DetailComponent extends Taskurltesttable1DetailBaseComponent implements OnInit {
 
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 
}
