interface DataProps {
    coworking_id: number;
    num_recommendations: number;
}

export function algorithmHandler(data: DataProps, algorithm: string) {
    return fetch(`http://46.229.212.119:8000/${algorithm}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=uft-8',
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (res.ok) {
                return res.json() as {success: any, time: any};
            }

            return { error: true };
        })
}