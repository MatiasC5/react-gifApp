export const getGifs = async(category)=> {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=61m5oMXwQWbT2eTrikF72IvQuFOt6QbH&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map(img => ({
        url : img.images.downsized_medium.url,
        title: img.title,
        id: img.id
    })
   
)

return gifs
}

