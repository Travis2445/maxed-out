async function newFormHandler(event) {
  event.preventDefault();

  const workout_type = document.querySelector('#w-type').value.trim();

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
          weightsFormHandler(newWorkoutId);
      });
      // cardioFormHandler();
    } else {
      alert(response.statusText);
    }
  }
}

async function weightsFormHandler(newWorkoutId) {

const date = document.querySelector('#w-date').value.trim();
//   const workout_type = document.querySelector('#type').value.trim();
const weight_type = document.querySelector('#w-name').value.trim();
const intensity = document.querySelector('#w-intensity').value.trim();
const duration = document.querySelector('#w-duration').value.trim();
const reps = document.querySelector('#w-reps').value.trim();
//   const workout_id = document.querySelector('#activity_type').value.trim();

if (date && weight_type && intensity && duration && reps) {
  console.log(newWorkoutId);

  const workoutResponse = await fetch('/api/workout/' + newWorkoutId, {
      method: 'get',
      body: JSON.stringify(),
      headers: { 'Content-Type': 'application/json' }
  });
  console.log(workoutResponse);

  const response = await fetch('/api/weights', {
    method: 'post',
    body: JSON.stringify({
      weight_type: weight_type,
      intensity: intensity,
      duration: duration,
      reps: reps,
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


document.querySelector('.weights-form').addEventListener('submit', newFormHandler);