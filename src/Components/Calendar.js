import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // Import calendar styles

const OrderCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const orders = [
    { id:1, date: '2024-03-10', status: 'Delivered' },
    { id:1, date: '2024-03-12', status: 'Shipped' },
    { id:1, date: '2024-03-13', status: 'Pedning' },
    
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getOrdersForDate = (date) => {
    return orders.filter((order) => order.date === date);
  };

  const renderOrdersForDate = () => {
    if (!selectedDate) {
      return 'Select a date to view orders.';
    }

    const ordersForDate = getOrdersForDate(selectedDate.toISOString().split('T')[0]);
    if (ordersForDate.length === 0) {
      return `No orders for ${selectedDate.toDateString()} are delivered.`;
    }

    return ordersForDate.map((order) => (
      <div key={order.id}>{`Order ${order.id}: ${order.status}`}</div>
    ));
  };

  return (
     <div className="order-calendar">
      <div className="calendar-content">
        <h2 className="calendar-heading">Orders Calendar</h2>
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
        <div className="orders-list">
          {renderOrdersForDate()}
        </div>
      </div>
    </div>
  );
};

export default OrderCalendar;



