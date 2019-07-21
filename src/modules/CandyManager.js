const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/candies/${id}`).then(entityData => entityData.json())
  },
  getAll() {
    return fetch(`${remoteURL}/candies`).then(entityData => entityData.json())
  },
  removeAndList (id) {
    return fetch(`${remoteURL}/candies/${id}`, {
      method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`${remoteURL}/candies`))
    .then(e => e.json())

  }
}