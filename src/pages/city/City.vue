<template>
  <div>
    <city-header/>
    <city-search :cities="cities"/>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"/>
    <city-alphabet :cities="cities" @change="handleLetterChange"/>
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
      hotCities: [],
      letter: ''
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
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>
</style>
