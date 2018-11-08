<template>
  <v-container>

    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="accent">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="/meetup/new" class="accent">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel style="cursor:pointer">
          <v-carousel-item
            v-for="(meetup) in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Choose where to eat</p>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    meetups: [
      {
        imageUrl: 'http://burritomadre.com/wp-content/uploads/2017/img/BM-terazije-2.jpg',
        id: 'blaldal',
        title: 'Burito Madre'
      },
      {
        imageUrl: 'https://melmagazine.com/wp-content/uploads/2018/08/18bHwEce1IinWYd5PXH_UaQ.jpeg',
        id: 'blaldadal',
        title: 'Asia Food'
      }
    ]
  }),
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 10px 15px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
