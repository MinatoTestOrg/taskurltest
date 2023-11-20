package com.minatoorgtestcase.taskurltest.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import com.vs.rappit.base.logger.Logger;
import com.vs.rappit.base.logger.LoggerFactory;
import org.springframework.http.ResponseEntity;
import com.vs.rappit.base.factory.InstanceFactory;
import com.minatoorgtestcase.taskurltest.base.controller.TaskUrlTestTable1BaseController;
import com.minatoorgtestcase.taskurltest.service.ITaskUrlTestTable1Service;
import com.minatoorgtestcase.taskurltest.service.TaskUrlTestTable1Service;
import com.minatoorgtestcase.taskurltest.model.TaskUrlTestTable1;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "rest/taskurltesttable1s/", produces = "application/json")
public class TaskUrlTestTable1Controller extends TaskUrlTestTable1BaseController<ITaskUrlTestTable1Service<TaskUrlTestTable1>, TaskUrlTestTable1> {
	private static final Logger LOGGER = LoggerFactory.getLogger(TaskUrlTestTable1Controller.class.getName());
	public TaskUrlTestTable1Controller(TaskUrlTestTable1Service taskurltesttable1Service) {
		super(taskurltesttable1Service);
	}
}
