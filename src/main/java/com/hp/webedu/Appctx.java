package com.hp.webedu;

import org.springframework.context.ApplicationContext;

public class Appctx {
	public static ApplicationContext ctx = null;

	public static Object getObject(String string) {
		return ctx.getBean(string);
	}
}
