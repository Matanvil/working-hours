export const getLatestDocs = async () => {
    const response = await fetch(`http://localhost:4000/api/input/latest`)
    const data = await response.json()
    return data
}
