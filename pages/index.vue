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
        <v-card-text>
          <p class="display-1">Oct. 5, 2019</p>
          <p class="headline">University of Windsor,<br/>Odette Building</p>
        </v-card-text>
         <v-img
        height="100px"
        src="gdg.png"></v-img>
        <v-card-actions>
          <!-- <v-btn icon flat color="primary">
            <v-icon >share</v-icon>
          </v-btn> -->
          <!-- <v-btn color="primary" @click="openSubscriptionPopup">
            Subscribe to updates
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 md7 pa-2>
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1p5C7RgL9vk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </v-flex>
    <v-flex xs12 md5>
      <v-card>
        <v-card-title class="headline">What is the Windsor-Essex DevFest? </v-card-title>
        <v-card-text>
          <p>
            The Windsor Google Developers Group (GDG) is proud to host our second Windsor-Essex DevFest on Saturday, Oct 5, 2019 with the School of Computer Science at the University of Windsor Odette Building. DevFests are Google sponsored software developer conferences that allow the local software development community to come together to network and learn about the coolest new technology out there.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md12>
      <v-card>
        <v-card-title class="headline">What can you expect at the Windsor-Essex DevFest? </v-card-title>
        <v-card-text>
          <p>
            A day full of great talks on some of the latest Google technology out there with great opportunities to network within the local tech community. Breakfast and lunch will be provided as well as a end of day prize raffle of some cool technology. We will be charging a small fee to help offset the cost of the conference (thanks to our sponsors for helping to cover the rest of the costs :).
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md12>
      <v-card>
        <v-card-title class="headline">What technologies will we be covering? </v-card-title>
        <v-card-text>
          <p>
            Some of the coolest development technologies out there including Flutter, Android, TensorFlow, and Google Cloud Platform (GCP). 
          </p>
          <p>
            Head over to the Speakers page for more details.
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
.video-container {
position: relative;
padding-bottom: 56.25%;
padding-top: 30px; height: 0; overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
</style>

