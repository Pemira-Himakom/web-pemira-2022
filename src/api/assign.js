const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

export const assign = async () => {
    const accessToken = localStorage.getItem('accessToken')
    const response = await fetch(`BASE_URL/admin/assign`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify
    })
}