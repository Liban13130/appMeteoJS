const button = document.querySelector('button')
const ville = document.querySelector('.ville')
const pays = document.querySelector('.pays')
const temp = document.querySelector('.temp')
const icone = document.querySelector('.icone')
const humidity = document.querySelector('.humidity')
const pollution = document.querySelector('.pollution')
const region = document.querySelector('.region')


async function getData(){
    const response = await fetch("http://api.airvisual.com/v2/nearest_city?key=800f08d3-c18c-4abe-b706-f0c75f7470c9")
    const statu = await response.json()
    console.log(statu);

    const sortedData = {
        city: statu.data.city,
        country: statu.data.country,
        temp: statu.data.current.weather.tp,
        ic: statu.data.current.weather.ic,
        humidity: statu.data.current.weather.hu,
        pollution: statu.data.current.pollution.aqius,
        region: statu.data.state
    }
    console.log(sortedData);

    ville.textContent = sortedData.city
    pays.textContent = sortedData.country
    temp.textContent = `${sortedData.temp}°`
    icone.src = `img/${sortedData.ic}.svg`
    humidity.textContent = `Le niveau d'humidité est de : ${sortedData.humidity}%`
    region.textContent = sortedData.region

    if(sortedData.pollution > 0 && sortedData.pollution < 50){
        pollution.textContent = `Le niveau de pollution est de : ${sortedData.pollution} (Bien)`
    }else if(sortedData.pollution >= 50 && sortedData.pollution < 100){
        pollution.textContent = `Le niveau de pollution est de : ${sortedData.pollution} (Modéré)`
    }
    else if(sortedData.pollution >= 100 && sortedData.pollution < 150){
        pollution.textContent = `Le niveau de pollution est de : ${sortedData.pollution} (Malsain pour les personnes sensibles)`
    }
    else if(sortedData.pollution >= 150 && sortedData.pollution < 200){
        pollution.textContent = `Le niveau de pollution est de : ${sortedData.pollution} (Mauvais pour la santé)`
    }

}