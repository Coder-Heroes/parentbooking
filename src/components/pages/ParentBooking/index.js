import { Layout } from 'antd';

import ParentBookingContainer from './ParentBookingContainer';

function ParentBooking() {
    const { Content } = Layout;
  
    return (
      <Layout>        
        <Content>  
          <ParentBookingContainer className="booking-container" />
        </Content>
      </Layout>
    );
  }
  
  export default ParentBooking;
  