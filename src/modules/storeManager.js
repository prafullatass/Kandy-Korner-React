import Settings from "./Settings";

export default {
    getAll () {
        return fetch(`${Settings.remoteUrl}/stores`)
        .then(r => r.json())
    },
    get (id) {
        return fetch(`${Settings.remoteUrl}/stores/${id}`)
        .then(r => r.json())
    }
}