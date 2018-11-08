import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [{
      imageUrl: 'http://burritomadre.com/wp-content/uploads/2017/img/BM-terazije-2.jpg',
      id: 'buritou',
      title: 'Burito Madre',
      date: '20018-11-8'
    },
    {
      imageUrl: 'https://melmagazine.com/wp-content/uploads/2018/08/18bHwEce1IinWYd5PXH_UaQ.jpeg',
      id: 'kayru',
      title: 'Asia Food',
      date: '20018-11-8'
    }],
    user: {
      id: 'alalakdlasm',
      registeredMeetups: ['blaldadal']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
