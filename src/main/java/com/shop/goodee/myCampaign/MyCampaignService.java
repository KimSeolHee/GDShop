package com.shop.goodee.myCampaign;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shop.goodee.item.ItemVO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MyCampaignService {

	@Autowired
	private MyCampaignMapper myCampaignMapper;
	
	public List<MissionVO> getMyCampaign(MissionVO missionVO) throws Exception{
		
		List<MissionVO> list = myCampaignMapper.getMyCampaign(missionVO);
		return list;
	}
}
