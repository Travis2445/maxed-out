async function workoutFormHandler(event) {
    event.preventDefault();
  
    const workout_type = document.querySelector('#type').value.trim();
  
    if (workout_type) {
      const response = await fetch('/api/workout', {
        method: 'post',
        body: JSON.stringify({
            workout_type
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        response.json().then(data => {
            var newWorkoutId = data.id;
            cardioFormHandler(newWorkoutId);
        });
        // cardioFormHandler();
      } else {
        alert(response.statusText);
      }
    }
}

async function cardioFormHandler(newWorkoutId) {

  const date = document.querySelector('#date').value.trim();
//   const workout_type = document.querySelector('#type').value.trim();
  const cardio_type = document.querySelector('#name').value.trim();
  const intensity = document.querySelector('#intensity').value.trim();
  const duration = document.querySelector('#duration').value.trim();
  const distance = document.querySelector('#distance').value.trim();
//   const workout_id = document.querySelector('#activity_type').value.trim();

  if (date && cardio_type && intensity && duration && distance) {
    console.log(newWorkoutId);

    const workoutResponse = await fetch('/api/workout/' + newWorkoutId, {
        method: 'get',
        body: JSON.stringify(),
        headers: { 'Content-Type': 'application/json' }
    });
    console.log(workoutResponse);

    const response = await fetch('/api/cardio', {
      method: 'post',
      body: JSON.stringify({
        cardio_type: cardio_type,
        intensity: intensity,
        duration: duration,
        distance: distance,
        date: date,
        user_id: workoutResponse.user_id,
        workout_id: newWorkoutId
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


document.querySelector('.cardio-form').addEventListener('submit', workoutFormHandler);