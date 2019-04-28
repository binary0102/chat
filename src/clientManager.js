export function Manager() {
    const clients = new Map();
    
    function addClient(client) {
        clients.set(client.id, client);
    }
    function removeClient(client) {
        clients.delete(client.id);
    }
    return {
        addClient,
        removeClient
    }
}