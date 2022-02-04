async function workoutFormHandler(event) {
    event.preventDefault();
  
    const date = document.querySelector('#date').value.trim();
    const workout_type = document.querySelector('#type').value.trim();
    const cardio_type = document.querySelector('#name').value.trim();
    const intensity = document.querySelector('#intensity').value.trim();
    const duration = document.querySelector('#duration').value.trim();
    const distance = document.querySelector('#distance').value.trim();
  
    if (date && workout_type && cardio_type && intensity && duration && distance) {
      const response = await fetch('/api/cardio', {
        method: 'post',
        body: JSON.stringify({
            date,
            workout_type,
            cardio_type,
            intensity,
            duration,
            distance,

        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}


document.querySelector('.workout-form').addEventListener('submit', workoutFormHandler);