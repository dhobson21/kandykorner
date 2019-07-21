const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/stores/${id}`).then(entityData => entityData.json())
  },
  getAll() {
    return fetch(`${remoteURL}/stores`).then(entityData => entityData.json())
  },
  removeAndList (id) {
    return fetch(`${remoteURL}/stores/${id}`, {
      method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`${remoteURL}/stores`))
    .then(e => e.json())

  }
}