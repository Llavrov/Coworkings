export function getAllCoworking() {
    return fetch(`http://46.229.212.119:8000/get_coworkings/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=uft-8',
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            return { error: true };
        })
}