export const getBiblionfts = async () => {
    const response = await fetch('http://localhost:3001/biblionfts', {
        method: 'GET',
        headers: {'Accept': 'application/json', 'Content-Type':'application/json'}
    })
    const biblionfts = await response.json()
    return biblionfts
}

export const postBiblionft = async (item) => {
    const response = await fetch('http://localhost:3001/biblionfts', {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
        body: item
    })
}
