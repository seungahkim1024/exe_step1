package com.bit_etland.web.cate;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


import lombok.Data;

@Data @Component @Lazy
public class Category {
	private String categoryId, categoryName, description;
}
