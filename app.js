const button = document.querySelector('button')
const ville = document.querySelector('.ville')
const pays = document.querySelector('.pays')
const temp = document.querySelector('.temp')
const icone = document.querySelector('.icone')

button.addEventListener('click', getData)


async function getData(){
    const response = await fetch("http://api.airvisual.com/v2/nearest_city?key=800f08d3-c18c-4abe-b706-f0c75f7470c9")
    const statu = await response.json()

    const sortedData = {
        city: statu.data.city,
        country: statu.data.country,
        temp: statu.data.current.weather.tp,
        ic: statu.data.current.weather.ic
    }
    console.log(sortedData);

    ville.textContent = sortedData.city
    pays.textContent = sortedData.country
    temp.textContent = `${sortedData.temp}°`
    icone.src = `img/${sortedData.ic}.svg`

}