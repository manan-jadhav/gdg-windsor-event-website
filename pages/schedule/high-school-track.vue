<template>
  <v-layout column>
    <h1 class="display-2 mb-2">High School Track Schedule</h1>
    <p class="mb-10">Stay tuned as we update our schedule or add new sessions!</p>
    <h3>Oct. 5, 2019</h3>
    <h3>Erie Hall, University of Windsor</h3>
    <a href="/schedule/main-event">Looking for Main Event schedule?</a>
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
              <v-flex xs12 md3 v-for="track in session.tracks" :key="track.name">
                <strong class="headline">{{track.name}}</strong>
                <div class="subheading mt-2 mb-2" v-if="track.speaker">
                  <i class="fas fa-chalkboard-teacher"></i> {{track.speaker}}
                </div>
                <div class="subheading mt-2 mb-2" v-if="track.location">
                  <i class="fas fa-map-marker-alt"></i> {{track.location}}
                </div>
                <!-- <div class="body-1 mb-2">
                  {{session.description}}
                </div> -->
                <v-avatar v-for="(img, i) in track.avatars" :key="i">
                  <v-img :src="img"></v-img>
                </v-avatar>
              </v-flex>
            </v-layout>
      </v-timeline-item>
    </v-timeline>
  </v-layout>
</template>
<script>
  export default {
    data: () => ({
      sessions: [
        {
          time: '8:00 AM',
          tracks: [
            {
              name: 'Registration',
              location: 'Main Lobby, Odette Building',
              subtitle: 'Check your names and get your schwag!',
            }
          ]
        },
        {
          time: '8:45 AM',
          tracks: [
            {
              name: 'Introductions',
              location: 'Main Lobby, Odette Building',
            }
          ]
        },
        {
          time: '9:00 AM',
          tracks: [
            {
              name: 'Keynote Speech',
              location: 'Hall #1, Odette Building',
              speaker: 'Amir Feizpour'
            }
          ]
        },
        {
          time: '10:00 AM',
          tracks: [
            {
              name: 'High School Track',
              location: 'Room #1, Erie Hall'
            }
          ]
        },
        {
          time: '11:00 AM',
          tracks: [
            {
              name: 'High School Track',
              location: 'Room #1, Erie Hall'
            }
          ]
        },
        {
          time: '12:00 PM',
          tracks: [
            {
              name: 'Lunch',
              location: 'Main Lobby, Odette Building',
            }
          ]
        },
        {
          time: '12:30 PM',
          tracks: [
            {
              name: 'High School Track',
              location: 'Room #1, Erie Hall'
            }
          ]
        },
        {
          time: '1:00 PM',
          tracks: [
            {
              name: 'High School Track',
              location: 'Room #1, Erie Hall'
            }
          ]
        },
        {
          time: '2:00 PM',
          tracks: [
            {
              name: 'High School Track',
              location: 'Room #1, Erie Hall'
            }
          ]
        },
        {
          time: '3:00 PM',
          tracks: [
            {
              name: 'High School Track',
              location: 'Room #1, Erie Hall'
            }
          ]
        },
        {
          time: '4:00 PM',
          tracks: [
            {
              name: 'Wrap Up / Vote of Thanks',
              location: 'Hall #1, Odette Building',
            }
          ]
        },
      ]
    })
  }
</script>