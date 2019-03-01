import Settings from "./Settings";

export default {
    getAll () {
        return fetch(`${Settings.remoteUrl}/employees`)
        .then(r => r.json())
    },
    get (id) {
        return fetch(`${Settings.remoteUrl}/employees/${id}`)
        .then(r => r.json())
    }
}