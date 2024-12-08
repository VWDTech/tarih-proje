const button = document.getElementById("btn")
button.addEventListener("click", async () => {
    const header = document.getElementById("header").value
    const content = document.getElementById("content").value

    const jsonFile = {
        dataHeader: header,
        dataContent: content
    }
    try{
        const response = await fetch("https://tarih-performans-gorevi.onrender.com/api/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  // JSON formatında veri gönderiyoruz
            },
            body: JSON.stringify(jsonFile)
        })
    } catch(err) {
        console.log(err)
    }
})
