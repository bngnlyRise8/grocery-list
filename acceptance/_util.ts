export const refreshDb = async() =>{
    await fetch(`http://localhost:3000/api/list`, {
        method: 'DELETE'
    })
    console.log("DB REFRESHED")
}