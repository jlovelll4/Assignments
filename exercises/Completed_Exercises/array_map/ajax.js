let xhr = new XMLHttpRequest()

xhr.onreadystatechange = 

xhr.open("GET",, true)
xhr.send()

axios.get("https://swapi.co/api/people/1/").then((response)=>{
    console.log(response.data)
})