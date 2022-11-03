const API_URL = 'http://localhost:8088'
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`)
  return await response.json()
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`)
  const a = await response.json();
  return a.sort((a, b) => {
    return a.flightNumber - b.flightNumber
  })
}

async function httpSubmitLaunch(launch) {
  try {
    await fetch(`${API_URL}/launches`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(launch)
      }
    )
  }
  catch (err) {
    console.log(err)
    return {
      ok: false
    }
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "Delete"
    });
  } catch (err) {
    console.log(err)
    return {
      ok: false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
