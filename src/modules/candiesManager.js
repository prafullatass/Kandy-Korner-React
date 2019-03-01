import Settings from "./Settings";

export default {
    getAll () {
        return fetch(`${Settings.remoteUrl}/candies`)
        .then(r => r.json())
    },
    get (id) {
        return fetch(`${Settings.remoteUrl}/candies/${id}`)
        .then(r => r.json())
    },
    delete (id) {
        return fetch(`${Settings.remoteUrl}/candies/${id}`, {
            method: "DELETE"
        })
    }
}