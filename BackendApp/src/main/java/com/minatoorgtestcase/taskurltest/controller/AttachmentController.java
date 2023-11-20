package com.minatoorgtestcase.taskurltest.controller;

import com.vs.rappit.base.factory.InstanceFactory;
import com.minatoorgtestcase.taskurltest.service.AttachmentServiceImpl;
import com.minatoorgtestcase.taskurltest.base.controller.AttachmentBaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
@RestController
@RequestMapping(path = "/rest/attachments/", produces = "application/json")
public class AttachmentController extends AttachmentBaseController<AttachmentServiceImpl> {
	public AttachmentController(AttachmentServiceImpl attachmentService) {
		super(attachmentService);
    }
}
