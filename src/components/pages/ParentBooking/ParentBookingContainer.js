import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';

import ParentBookingCard from './ParentBookingCard';

const ParentBookingContainer = props => {
  
  const { bookings, isFetching, error } = props.bookings;
  const [currentTab, setCurrentTab] = useState(bookings);  
  const { TabPane } = Tabs;

  console.log("currentTab: ",currentTab);

  const onChange = (key) => {
    console.log(key);
  };

  const tabs = [{ title: 'All' }, { title: 'Today' }, { title: 'This Week' }];
  
  useEffect(() => {    
    setCurrentTab(bookings);
  }, []); // eslint-disable-line

  return (     
    <Tabs defaultActiveKey="0" onChange={onChange} centered>
      {tabs.map((item, index) => (
        <TabPane tab={item.title} key={index}>
          {currentTab && currentTab.map((item, idx) =>
              <ParentBookingCard key={idx} booking={item} />              
          )},      
        </TabPane>
      ))}      
      <TabPane tab="My Courses" key="3">
        Content of My Courses
      </TabPane>
    </Tabs>  
  );
}

export default ParentBookingContainer;