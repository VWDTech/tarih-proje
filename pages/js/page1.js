const fetchData = async () => {
    try {
        const response = await fetch("https://tarih-performans-gorevi.onrender.com/api/show")

        if(response.ok){
            console.log("Başarili")
        } else {
            console.log("Basarisiz")
        }

        const jsonFile = await response.json()
        
        jsonFile.forEach(item => {
            const datas = document.getElementById("datas")
            const br1 = document.createElement("br")
            const hr = document.createElement("hr")
            const br2 = document.createElement("br")
            const header = document.createElement("h2")
            const content = document.createElement("div")
            header.innerText = item.dataHeader
            content.innerText = item.dataContent
            datas.appendChild(header)
            datas.appendChild(content)
            datas.appendChild(br1)
            datas.appendChild(hr)
            datas.appendChild(br2)
            
        })

    } catch(err){
        console.log(`Bir sorun çıktı ${err}`)
    }
}

fetchData()