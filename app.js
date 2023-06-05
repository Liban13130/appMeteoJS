const button = document.querySelector('button')
const ville = document.querySelector('.ville')

button.addEventListener('click', getData)

async function getData(){
    const response = await fetch("http://api.airvisual.com/v2/nearest_city?key=800f08d3-c18c-4abe-b706-f0c75f7470c9")
    console.log(response);
    const statu = response.json()
    console.log(statu);
}