const axios = require('axios');

async function fetchAndSend() {
  try {
    const res = await axios.get('http://fake-events-api:3000/api/get/events?count=5');
    const events = res.data;

    for (const event of events) {
      await axios.post('http://fluent-bit:9880/events', event);
    }

    console.log('Events sent to Fluent Bit');
  } catch (err) {
    console.error('Error fetching or sending events:', err.message);
  }
}

// Run every 5 seconds
setInterval(fetchAndSend, 5000);
fetchAndSend();
