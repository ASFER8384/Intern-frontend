import React, { useState } from 'react';


const Dashboard = () => {
  const [salesData, setSalesData] = useState('');
  const [shareMethod, setShareMethod] = useState('');
  const [shareMessage, setShareMessage] = useState('');



  const handleSalesDataChange = (e) => {
    setSalesData(e.target.value);
  };

  const handleShareMethodChange = (e) => {
    setShareMethod(e.target.value);
  };

  const handleShare = () => {
    if (shareMethod === 'email') {
      // Share via email
      const emailLink = `mailto:boss@example.com?subject=Sales Data&body=The sales data for this month is $${salesData}`;
      window.location.href = emailLink;
    } else if (shareMethod === 'whatsapp') {
      // Share via WhatsApp
      const whatsappLink = `https://wa.me/?text=The sales data for this month is $${salesData}`;
      window.location.href = whatsappLink;
    }
  };


  return (
    <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
  <h1 style={{ color: 'blue' }}>Dashboard</h1>
  <form>
    <label>
      Enter the latest sales data for this month:
      <input
        type="number"
        value={salesData}
        onChange={handleSalesDataChange}
        style={{ margin: '10px 0' }}
      />
    </label>
  </form>
  <div>
    <h3 style={{ color: 'green' }}>Share Sales Data:</h3>
    <label>
      Share via:
      <select
        value={shareMethod}
        onChange={handleShareMethodChange}
        style={{ margin: '10px 0' }}
      >
        <option value="">Select</option>
        <option value="email">Email</option>
        <option value="whatsapp">WhatsApp</option>
      </select>
    </label>
    <button
      disabled={!shareMethod}
      onClick={handleShare}
      style={{ marginTop: '10px' }}
    >
      Share
    </button>
  </div>
</div>

  );
};

export default Dashboard;
