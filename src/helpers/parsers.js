const parseImage= (vod_url, image)=>{
    return {
        height: image.HEIGHT,
        width: image.WIDTH,
        order: image.ORDEN,
        url: vod_url + image.URL
    }
}


export{
    parseImage
}