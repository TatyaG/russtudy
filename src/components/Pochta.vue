<template>
    <div class="order__block pochta">
        <form class="form pochta__form">
            <input v-model="city" class="form__input" type="text" @input="onInput()" @change="onChange()">
            <div class="form__btns">
                <button :class="{active: activeTab == 'Карта'}" class="btn-background btn-reset pochta__btn" @click.prevent="activeTab = 'Карта'">Карта</button>
                <button :class="{active: activeTab == 'Список'}" class="btn-background btn-reset pochta__btn" @click.prevent="activeTab = 'Список'">Список</button>
            </div>
            
        </form>

        <div class="pochta__map" v-show="activeTab == 'Карта'">
            <div id="map" style="width: 100%; height: 500px"></div>
            <div class="pochta__balloon balloon">
            </div>
        </div>

        <div v-show="activeTab == 'Список'">
            <div class="flex">
                <p>Адрес</p>
                <p>Режим работы</p>
            </div>

            <ul class="pochta__list list-reset">
                <li v-for="(address, index) in listAddress" :key="index" class="pochta__item">
                    <p>{{ address.address }}</p>
                </li>
            </ul>
        </div>

 
    </div>
</template>

<script>
import axios from 'axios'
import cities from '@/data/cities.json'
import addressArray from '@/data/address.json'
import postcodeArray from '@/data/postcode.json'
export default {
    components: { },

    
  data() {
    return {
        activeTab: 'Карта',
        array: [],
        city: '',
        address: [],
        clientIp: '',
        citiesArray: [],
        showBalloon: false,
        listAddress: []
    }
  },


  mounted() {
    ymaps.ready(this.init);
    this.createList()

   
    // this.sourchAddress()

    // let recaptchaScript = document.createElement('script')
    //   recaptchaScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=77132717-e8b0-4127-bc93-50a29572bb37&lang=ru_RU')
    //   document.head.appendChild(recaptchaScript)
    // this.getAddress()
    if (!localStorage.city) {
        this.getCity()
    }
    
     
  },

  methods: {

    onInput() {
        if (this.city != '') {
            this.city = this.city[0].toUpperCase() + this.city.slice(1)
        }

        this.listAddress = []

        postcodeArray.forEach(postcode => {
            postcode.forEach(item => {
                if (item.unrestricted_value.includes(this.city)) {
                    this.listAddress.push({
                        address: item.unrestricted_value,
                    })
                }
                
                // console.log( item.unrestricted_value.includes(city))
            })
           
           
            
        })

        
        
    },

    createList() {
        const city = localStorage.city
        postcodeArray.forEach(postcode => {
            postcode.forEach(item => {
                if (this.city == '') {
                    if (item.unrestricted_value.includes(city)) {
                    this.listAddress.push({
                        address: item.unrestricted_value,
                    })
                }  
                }

                
                // console.log( item.unrestricted_value.includes(city))
            })
           
           
            
        })
    },

    onChange() {

        console.log('a')

        // this.getAddress(this.city)
        

        // postcodeArray.forEach(item => {
        //     console.log(item)
        // })

        // addressArray.forEach(address => {
        //     // 
        //     address.suggestions.forEach(item => {           
        //         if (this.city == item.data.city) {
        //             console.log(item.data)
        //         }
        //     })
        // })
        // this.sourchAddress()
    },


//     getAddress(text) {    
//             var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/postal_unit";
//             var token = "8c890d6b252427b1a024b544d3b501fc8a618a8c";
//             var query = text;

//             var options = {
//             method: "POST",
//             mode: "cors",
//             headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorization": "Token " + token
//         },
//         body: JSON.stringify({query: query})
// }

//         fetch(url, options)
//         .then(response => response.text())
//         .then(result => {
//             const data = JSON.parse(result);

//             if (data.suggestions.length > 0)
//             this.address.push(data.suggestions)      
//         } )
//         .catch(error => console.log("error", error));

//     },

    // sourchAddress() {      
    //         var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    //     var token = "8c890d6b252427b1a024b544d3b501fc8a618a8c";
    //     var query =  this.city;

    //     var options = {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Authorization": "Token " + token
    //     },
    //     body: JSON.stringify({query: query})
    //     }

    //     fetch(url, options)
    //     .then(response => response.text())
    //     .then(result => {
    //         const data = JSON.parse(result)
    //         this.address.push(data)
    //     } )
    //     .catch(error => console.log("error", error));

    // },

    getCity() {

        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(response => {
        this.clientIp = response.ip;
        });
        
    var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
    var token = "8c890d6b252427b1a024b544d3b501fc8a618a8c";
    var query = this.clientIp;

    var options = {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    }
}

    fetch(url + query, options)
    .then(response => response.text())
    .then(result => {
    const data =JSON.parse(result)
    console.log(data.location.data.city)
    localStorage.city = data.location.data.city

})
.catch(error => console.log("error", error));

    },


    map() {
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10,
            minZoom: 9,
            maxZoom: 10,
            controls: ['zoomControl', 'geolocationControl', 'fullscreenControl']
            });

            var location = ymaps.geolocation.get({
            autoReverseGeocode: false
            })
            .then(response => {
                localStorage.lat = response.geoObjects.position[0]
                localStorage.lon = response.geoObjects.position[1]
                myMap.geoObjects.add(response.geoObjects)
                myMap.setCenter(response.geoObjects.position)
            })
            .catch(err => console.log(err)); 


            postcodeArray.forEach(postcode => {
                var obj = {
                                type: 'FeatureCollection',
                                    features: postcode.map(function(item){
                                        return {
                                            type: 'Feature',
                                            properties: {
                                                postal_code: item.data.postal_code,
                                                address: item.data.address_str,
                                                time: [
                                                `пн ${item.data.schedule_mon}`,
                                                `вт ${item.data.schedule_tue}`,
                                                `ср ${item.data.schedule_wed}`,
                                                `чт ${item.data.schedule_thu}`,
                                                `пт ${item.data.schedule_fri}`,
                                                `сб ${item.data.schedule_sat}`,
                                                `вс ${item.data.schedule_sun}`,
                                                ] 
                                            },
                                            geometry: {
                                                type: 'Point',
                                                coordinates: [item.data.geo_lat, item.data.geo_lon]
                                            }
                                        }
                                    })
                            };


                            var objects = ymaps.geoQuery(obj);

objects.searchInside(myMap).addToMap(myMap);





myMap.events.add('boundschange', function () {
    var visibleObjects = objects.searchInside(myMap).addToMap(myMap);
    objects.remove(visibleObjects).removeFromMap(myMap);
});

objects.addEvents('click', function (e) {
    console.log(e.originalEvent.target)
    const balloon = document.querySelector('.pochta__balloon')

    balloon.innerHTML = `<button class="balloon__close btn-reset"></button>
                <p class="balloon__title">Отделения Почты России</p>
                <p class="balloon__address">Отделение №${e.originalEvent.target.properties._data.postal_code} ${e.originalEvent.target.properties._data.address}</p>
                
                <p class="balloon__time">${e.originalEvent.target.properties._data.time}</p>
                <button class="btn-reset btn-background balloon__btn">Заберу отсюда</button>`
    balloon.classList.add('open')
    const closeBalloon = document.querySelector('.balloon__close');
    closeBalloon.addEventListener('click', (e) => {
        e.preventDefault();
        balloon.classList.remove('open')
    })
})



            })
        },



        init() {
            this.map()
        }   
  },

  created() {
//    this.getAddress()
// this.getCity()
  }

}


</script>