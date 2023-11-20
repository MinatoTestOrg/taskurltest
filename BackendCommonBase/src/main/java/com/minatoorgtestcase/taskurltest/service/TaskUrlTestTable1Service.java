package com.minatoorgtestcase.taskurltest.service;

import com.vs.rappit.base.acl.IPerimeterManager;
import com.minatoorgtestcase.taskurltest.base.service.TaskUrlTestTable1BaseService;
import com.minatoorgtestcase.taskurltest.model.TaskUrlTestTable1;
import com.minatoorgtestcase.taskurltest.service.TaskUrlTestTable1PerimeterImpl;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;


@Service("TaskUrlTestTable1")
public class TaskUrlTestTable1Service extends TaskUrlTestTable1BaseService<TaskUrlTestTable1> implements ITaskUrlTestTable1Service<TaskUrlTestTable1>{

		@Autowired
		private  TaskUrlTestTable1PerimeterImpl  taskurltesttable1PerimeterImpl;

		public TaskUrlTestTable1Service(ChangelogService changelogService) {
		super(TaskUrlTestTable1.class);	
		setChangelogService(changelogService); 
		
	}
	
	
	protected IPerimeterManager<TaskUrlTestTable1> getPerimeterManager() {
		return taskurltesttable1PerimeterImpl;
	}
}