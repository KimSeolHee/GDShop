package com.shop.goodee.item;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ItemMapper {

	public int setAdd(ItemVO itemVO) throws Exception;
	
	public int setAddFile(ItemFileVO itemFileVO) throws Exception;
	
	public List<ItemVO> getList() throws Exception;
	
	public List<ItemVO> getListHit() throws Exception;
	
	public List<ItemVO> getListVIP() throws Exception;
	
	public List<ItemVO> getList1() throws Exception;
	
	public List<ItemVO> getList2() throws Exception;
	
	public List<ItemVO> getList3() throws Exception;
	
	public List<ItemVO> getList4() throws Exception;

}