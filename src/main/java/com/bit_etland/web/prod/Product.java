package com.bit_etland.web.prod;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Product {
	private String productId, 
					productName, 
					supplierId, 
					unit, 
					price, 
					categoryId,
					photo,
					color,
					comment;
	private List<String> freebies; //사은품 같은 경우 DB로 넘어가는 값이 2개이상이라서 list로 받아준다.
}
