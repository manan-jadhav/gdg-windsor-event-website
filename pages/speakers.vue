<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Stay tuned as we add new speakers!</h1>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md6 v-for="(speaker, i) in speakers" :key="i">
          <v-card class="mb-4" height="100%">
            <v-col>
              <!-- <v-flex xs4> -->
              <v-img :src="speaker.image" height="300px" width="500px"></v-img>
              <!-- </v-flex>
              <v-flex xs8>-->
              <v-card-text>
                <p class="display-1">
                  <span v-html="speaker.name"></span>
                </p>
                <p class="title">
                  <span v-html="speaker.title"></span>
                </p>
              </v-card-text>
              <!-- </v-flex> -->
            </v-col>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              <v-btn
                v-for="(link, platform) in speaker.socials"
                :key="link"
                class="mx-3"
                icon
                flat
                :href="link"
              >
                <v-icon size="24px">fab fa-{{ platform }}</v-icon>
              </v-btn>
              <v-dialog v-model="dialog" width="600">
                <template v-slot:activator="{ on }">
                  <v-btn color="blue lighten-2" dark v-on="on">Session Info</v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title v-if="speaker.sessionTitle">
                    {{speaker.sessionTitle}} by 
                    {{speaker.name}}
                  </v-card-title>
                  <v-card-title class="headline grey lighten-2" primary-title v-else>
                    {{speaker.name}}
                  </v-card-title>

                  <v-card-text>
                    <p class="body-1">
                      <span v-html="speaker.session"></span>
                    </p>
                    <p class="body-1">
                      <span v-html="speaker.description"></span>
                    </p>
                  </v-card-text>

                  <v-divider></v-divider>

                  <!-- <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                  </v-card-actions> -->
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script>
import speakers from '../data/speakers'

export default {
  data: () => ({
    speakers
  })
}
</script>