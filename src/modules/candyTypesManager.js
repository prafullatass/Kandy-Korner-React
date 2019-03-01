import Settings from "./Settings";

export default {
    getAll () {
        return fetch(`${Settings.remoteUrl}/candyTypes`)
        .then(r => r.json())
    },
    get (id) {
        return fetch(`${Settings.remoteUrl}/candyTypes/${id}`)
        .then(r => r.json())
    }
}