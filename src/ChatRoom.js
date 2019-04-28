module.exports = function ({name, image}) {
    const members = new Map();

    let chatHistory = [];

    function addUser(client) {
        members.set(client.id, client)
    }
}