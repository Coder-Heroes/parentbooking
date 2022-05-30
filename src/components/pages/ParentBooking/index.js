import { Layout } from 'antd';

import ParentBookingContainer from './ParentBookingContainer';

function ParentBooking(props) {

  const { parentDummyData } = props;
  const { bookings } = parentDummyData;  

    const { Content } = Layout;
  
    return (
      <Layout>        
        <Content>  
          <ParentBookingContainer bookings = { bookings } />
        </Content>
      </Layout>
    );
  }
  
  export default ParentBooking;
  