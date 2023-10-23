class TronApi{
    query = async (uri:string, body?:object) => {
        return await fetch(`http://localhost:3000/api${uri}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((res) => res)
    }
}

export default new TronApi()