<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h4 class="primary--text"> {{ meetup.title }} </h4>
            </v-card-title>
            <v-img
              :src="meetup.imageUrl"
              height="400px">
            </v-img>
            <v-card-text>
              <div class="secondary--text"> {{ meetup.date }} - Where it takes place</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus corrupti eveniet, nihil vel in alias! Libero officiis laborum tempore.</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn class="primary">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
