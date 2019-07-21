const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/candyTypes/${id}`).then(entityData => entityData.json())
  },
  getAll() {
    return fetch(`${remoteURL}/candyTypes`).then(entityData => entityData.json())
  },
  removeAndList (id) {
    return fetch(`${remoteURL}/candyTypes/${id}`, {
      method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`${remoteURL}/candyTypes`))
    .then(e => e.json())

  }
}