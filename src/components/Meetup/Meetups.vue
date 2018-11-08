<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="accent">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-img
                  src="http://burritomadre.com/wp-content/uploads/2017/img/BM-terazije-2.jpg"
                  height="125px">
                </v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h4 class="white--text mb-0">My Choice for meal</h4>
                    <span>8th of october 2018</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat to="/meetups/1">
                    <v-icon left>arrow_forward</v-icon>
                    View restaraunt
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>
