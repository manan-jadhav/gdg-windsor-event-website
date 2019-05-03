<template>
<v-container grid-list-md>
  <v-layout row wrap >
    <v-flex xs12 md8>
      <v-card>
        <img class="responsive" src="logo.png" style="padding: 40px; width: 100%;" />
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card>
        <v-card-title class="body-2">GDG Windsor-Essex DevFest 2019</v-card-title>
        <v-card-text>
          <p class="display-2">Oct. 5, 2019</p>
          <p>
            The Windsor Google Developers Group (GDG) is proud to host the first ever Windsor-Essex DevFest on Saturday, Feb 23, 2019 at the Institute for Border Logistics and Security in Windsor, Ontario.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn icon flat color="primary">
            <v-icon >share</v-icon>
          </v-btn>
          <v-btn color="primary">
             Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card>
        <v-card-title class="headline">What is a DevFest? </v-card-title>
        <v-card-text>
          <p>
            DevFests are Google sponsored software developer conferences that allow the local software development community to come together to network and learn about the coolest new technology out there.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md8>
      <v-card>
        <v-card-title class="headline">What can you expect at the Windsor-Essex DevFest? </v-card-title>
        <v-card-text>
          <p>
            A day full of great talks on some of the latest Google technology out there with great opportunities to network within the local tech community. Breakfast and lunch will be provided as well as a end of day prize raffle of some cool technology. We will be charging a small fee of $10 to help offset the cost of the conference (thanks to our sponsors for helping to cover the rest of the costs :).
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card>
        <v-card-title class="headline">What technologies will we be covering? </v-card-title>
        <v-card-text>
          <p>
            Some of the coolest development technologies out there including Flutter, TensorFlow, and Google Cloud Platform (GCP). 
          </p>
          <p>
            Head over to the Speakers & Sessions page for more details. More speakers will be added soon!
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<style scoped>
.v-card {
  height: 100%;
}
</style>
