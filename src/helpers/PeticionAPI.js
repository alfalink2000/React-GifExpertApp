

export const getGift = async ( categoria ) => {
    //Se crea el fetch o la peticion 
    //api key :  uccZdRom1dwKi67rsL2ATLLBPRKf3YGg
    //El encode URI se encarga de remplazar los espacios en fin hacer que encaje bien en el url 
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=uccZdRom1dwKi67rsL2ATLLBPRKf3YGg`;
    const resp = await fetch(url);
    const { data } = await resp.json();


    const gifs = data.map(data => {
        return {
            id: data.id,
            title: data.title,
            url: data.images.downsized_medium.url
        }
    });

    console.log(gifs);//Para ver lo que nos manda y ver que queremos extraer
    
    return gifs;
}
