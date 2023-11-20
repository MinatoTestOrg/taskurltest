package com.minatoorgtestcase.taskurltest.base.model;
import com.vs.rappit.base.model.BaseModel;
import com.vs.rappit.base.annotations.Table;
import com.vs.rappit.base.annotations.Searchable;


@Table(name="TaskUrlTestTable1", keys={"sid"})
public class TaskUrlTestTable1Base extends BaseModel {

	@Searchable(index = true)
	private String taskurltesttable1field1;
	@Searchable(index = true)
	private String taskurltesttable1field2;

	public void setTaskurltesttable1field1(String taskurltesttable1field1) {
		this.taskurltesttable1field1 = taskurltesttable1field1;
	}

	public String getTaskurltesttable1field1() {
		return taskurltesttable1field1;
	}

	public void setTaskurltesttable1field2(String taskurltesttable1field2) {
		this.taskurltesttable1field2 = taskurltesttable1field2;
	}

	public String getTaskurltesttable1field2() {
		return taskurltesttable1field2;
	}



}