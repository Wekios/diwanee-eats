<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="sideNav" fixed app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="deep-orange darken-3">
      <v-toolbar-side-icon 
        @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up" />
      <v-toolbar-title>Diwanee Eats</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only" >
        <v-btn flat v-for="item in menuItems" :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    sideNav: false,
    menuItems: [
      { icon: 'fastfood', title: "View Lunch Options" },
      { icon: 'store', title: "Suggest place" },
      { icon: 'person', title: "Profile" },
      { icon: 'face', title: "Sign up" },
      { icon: 'lock_open', title: "Sign in" }
    ]
  })
};
</script>

<style lang="scss" scoped>
</style>