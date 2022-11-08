export const assign = async () => {
    const accessToken = localStorage.getItem('accessToken')
    const response = await fetch('/api/admin/assign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify
    })
}