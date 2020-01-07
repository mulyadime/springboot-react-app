package com.eresha.tugas.kelompoktigabelas.demobackend.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
	
	private static final String DISPLAY_DATE_TIME_FORMAT = "dd/MM/yyyy HH:mm:ss";

	public static String formatDateTime(Date date) {
		if (date != null) {
			DateFormat df = new SimpleDateFormat(DISPLAY_DATE_TIME_FORMAT);
			return df.format(date);
		}
		
		return null;
	}

}
