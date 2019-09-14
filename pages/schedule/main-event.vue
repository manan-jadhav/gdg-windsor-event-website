<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Main Event Schedule</h1>
    <p class="mb-10">Stay tuned as we update our schedule or add new sessions!</p>
    <h3>Oct. 5, 2019</h3>
    <h3>Odette Building, University of Windsor</h3>
    <a href="/schedule/high-school-track">Looking for High School track schedule?</a>
    <br />
    <v-timeline align-top dense>
      <v-timeline-item
        v-for="(session, i) in sessions"
        :key="i"
        class="mb-5"
        color="pink">
          <v-layout wrap pt-3>
              <v-flex xs12 md12 class="mb-4">
                <strong class="headline">{{session.time}}</strong>
              </v-flex>
              <v-flex class="pr-3" xs12 md3 v-for="track in session.tracks" :key="track.name">
                <strong class="headline">{{track.name}}</strong>
                <div class="subheading mt-2 mb-2" v-if="track.speaker">
                  <a @click="select(track.speaker)">
                    <i class="fas fa-chalkboard-teacher"></i> {{track.speaker.name}}
                  </a>
                </div>
                <div class="subheading mt-2 mb-2" v-if="track.location">
                  <i class="fas fa-map-marker-alt"></i> {{track.location}}
                </div>
                <!-- <div class="body-1 mb-2">
                  {{session.description}}
                </div> -->
                <!-- <v-avatar v-for="(img, i) in track.avatars" :key="i">
                  <v-img :src="img"></v-img>
                </v-avatar> -->
                <v-avatar v-if="track.speaker" >
                  <v-img style="cursor: pointer;" :src="track.speaker.image" @click="select(track.speaker)"></v-img>
                </v-avatar>
              </v-flex>
            </v-layout>
      </v-timeline-item>
    </v-timeline>
    <v-dialog v-model="dialog" width="800">
      <v-card>
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
    </v-dialog>
  </v-layout>
</template>
<script>
  import sessions from '../../data/schedule-main-event'

  export default {
    data: () => ({
      sessions,
      dialog: false,
      speaker: {}
    }),
    methods: {
      select (speaker) {
        this.speaker = speaker
        this.dialog = true
      }
    }
  }
</script>