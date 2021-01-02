const app = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello Vue!',
      condition: '',
    };
  },

  mounted() {
    axios
      .get('https://community-open-weather-map.p.rapidapi.com/weather', {
        params: {
          q: 'Prague',
          // lat: '0',
          // lon: '0',
          // callback: 'test',
          // id: '2172797',
          // lang: 'null',
          units: 'metric',
          // mode: 'xml, html',
        },
        headers: {
          'x-rapidapi-key':
            '80f034f464msh14c9b15a28e9b77p1ca1c2jsn7e0d85d444e4',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          useQueryString: true,
        },
      })
      .then((response) => {
        this.condition = response.data.weather[0].main;
      })
      .catch((error) => console.log(error));
  },

  methods: {
    weatherCondition: function () {
      // console.log(this.condition);
      // this.condition === 'Mist' ? console.log('mlha') : console.log('ostatni');
      return {
        day: this.condition === 'Clear',
        mist: this.condition === 'Mist',
        rain: this.condition === 'Rain',
        rain: this.condition === 'Clouds',
        fog: this.condition === 'Fog',
        dusk: this.condition === 'Dusk',
        dawn: this.condition === 'Dawn',
        night: this.condition === 'Snow',
      };
    },
  },
});
