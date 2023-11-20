package com.minatoorgtestcase.taskurltest.base.service;

import com.vs.rappit.base.model.IModelTransformer;
import com.minatoorgtestcase.taskurltest.base.model.TaskUrlTestTable1Base;
import com.minatoorgtestcase.taskurltest.base.model.TaskUrlTestTable1AnalyticalBase;
import com.vs.rappit.base.util.Configuration;
import java.util.stream.Collectors;

public class TaskUrlTestTable1AnalyticalTransformer<T extends TaskUrlTestTable1Base, M extends TaskUrlTestTable1AnalyticalBase>
		implements IModelTransformer<T, M> {
	private static final String SEPARATOR = "#@$%!*&";
	@Override
	public M writeTo(T model) {
		TaskUrlTestTable1AnalyticalBase taskUrlTestTable1AnalyticalBase = new TaskUrlTestTable1AnalyticalBase();
		
		taskUrlTestTable1AnalyticalBase.setSid(model.getSid());
		return (M) taskUrlTestTable1AnalyticalBase;
	}

	@Override
	public Object readFrom(M data) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Class<T> getSourceClass() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Class<M> getTargetClass() {
		// TODO Auto-generated method stub
		return null;
	}

}
