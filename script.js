document.getElementById('registerForm').addEventListener('submit', async function (event) {
  event.preventDefault(); 

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    course: document.getElementById('course').value,
    timestamp: getCurrentTimestamp(),
  };

  try {
    // Replace YOUR_API_URL 
    const response = await fetch('https://sheetdb.io/api/v1/chaz960zhofr2', {
      method: 'POST',
      body: JSON.stringify(formData), 
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('Response status:', response.status); 

    if (response.status === 201) {
      // Redirect to the success page
      window.location.href = 'success.html'; 
    } else {
      const result = await response.json(); 
      console.log('Response body:', result); 
      alert(result.message || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
});

// Helper function to get the current timestamp in dd/mm/yyyy hh:mm:ss format
function getCurrentTimestamp() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
