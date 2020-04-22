<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list :cities="cities" :hot="hotCities"/>
    <city-alphabet :cities="cities"/>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './cpmponents/Header'
import CitySearch from './cpmponents/Search'
import CityList from './cpmponents/List'
import CityAlphabet from './cpmponents/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>
</style>
