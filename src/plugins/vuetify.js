import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.deepOrange.darken3,
    secondary: colors.orange.darken1,
    accent: colors.deepOrange
  }
})
