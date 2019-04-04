package com.bit_etland.web.cmm;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Proxy {
	  private int pageNum, pageSize, blockSize,
      startRow,endRow,startPage,endPage,
      prevBlock, nextBlock,rowCount;
	  private String val;
	  private boolean existPrev, existNext;
	  
	  public void carryOut(Map<?,?> paramMap) {
	     String _pageNum = (String) paramMap.get("page_num");
	     pageNum = (_pageNum == null) ? 1 : Integer.parseInt(_pageNum);
	     System.out.println("페이지번호: "+pageNum);
	     
	     String _pageSize = (String) paramMap.get("page_size");
	     pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
	     System.out.println("페이지사이즈: "+pageSize);
	     
	     String _blockSize = (String) paramMap.get("block_size");
	     blockSize = (_blockSize == null) ? 5 : Integer.parseInt(_blockSize);
	     System.out.println("블록사이즈: "+blockSize);
	     
	     rowCount = (int)paramMap.get("rowCount");
	     
	     int nmg = rowCount % pageSize;
	     int pageCount = (nmg == 0)?rowCount / pageSize:rowCount / pageSize+1;
			System.out.println("전체 페이지수: "+pageCount);
			
			startRow = (pageNum -1) *pageSize; 
			System.out.println("스타트로우: "+startRow);
			
			endRow = (rowCount > pageNum * pageSize)? pageNum * pageSize: rowCount;
			System.out.println("엔드로우: "+endRow);
			
			// 김창하의 블록넘버 방식
			int blockNum = (pageNum-1)/blockSize;
			if(existPrev) {
				startPage = blockNum*blockSize+1;
			}else {
				startPage = 1;
			}
			
			endPage = startPage+(blockSize-1);
			startPage = pageNum -((pageNum-1)%blockSize);
			endPage = startPage+(blockSize-1);
			// 위 세조건 모두 공통
			if(endPage>pageCount) {
				endPage = pageCount;
			}

	        existPrev = (startPage - pageSize) > 0;
	        existNext = (startPage + pageSize) <= pageCount;
	        prevBlock = startPage - pageSize;
	        nextBlock = startPage + pageSize;
	        System.out.println("스타트페이지: " + startPage);
	        System.out.println("엔드페이지: " + endPage);
	        System.out.println("프리브블록: " + prevBlock);
	        System.out.println("넥스트블록: " + nextBlock);
		}
}
