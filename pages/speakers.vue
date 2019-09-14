<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Stay tuned as we add new speakers!</h1>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md12 v-for="(speaker, i) in speakers" :key="i">
          <v-card class="mb-4">
            <v-layout>
              <v-flex xs3>
                <v-img :src="speaker.image" contain></v-img>
              </v-flex>
              <v-flex xs9>
                <v-card-text>
                  <p class="display-1">
                    <span v-html="speaker.name"></span>
                  </p>
                  <p class="title">
                    <span v-html="speaker.title"></span>
                  </p>
                  <p class="body-1">
                    <span v-html="speaker.description"></span>
                  </p>
                </v-card-text>
              </v-flex>
            </v-layout>
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
};
</script>