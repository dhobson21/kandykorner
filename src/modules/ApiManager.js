const remoteURL = "http://localhost:5002"

export default {
  get(entity,id) {
    return fetch(`${remoteURL}/${entity}/${id}`).then(entityData => entityData.json())
  },
  getAll(entity) {
    return fetch(`${remoteURL}/${entity}`).then(entityData => entityData.json())
  },
  removeAndList (entity, id) {
    return fetch(`http://localhost:5002/${entity}/${id}`, {
      method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/${entity}`))
    .then(e => e.json())

  }
}