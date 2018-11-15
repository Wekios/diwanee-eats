import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router/router'
import store from './store/'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDRZ80VNwJQA-cx7aJKK9cY0F5BOzEx2dI',
      authDomain: 'diwanee-eats.firebaseapp.com',
      databaseURL: 'https://diwanee-eats.firebaseio.com',
      projectId: 'diwanee-eats',
      storageBucket: 'gs://diwanee-eats.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
