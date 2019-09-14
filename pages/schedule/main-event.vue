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
              name: 'Talk 1.1',
              location: 'Hall #1, Odette Building',
              speaker: 'Karthik Kuber'
            },
            {
              name: 'Actions on Google',
              location: 'Hall #2, Odette Building',
              speaker: 'Kyle Paul'
            },
            {
              name: 'Talk 1.3',
              location: 'Hall #3, Odette Building',
              speaker: 'Godfrey Nolan'
            },
            {
              name: 'Talk 1.4',
              location: 'Hall #4, Odette Building',
              speaker: 'Brian Gernon'
            }
          ]
        },
        {
          time: '11:00 AM',
          tracks: [
            {
              name: 'Talk 2.1',
              location: 'Hall #1, Odette Building',
              speaker: 'Harkish Bhaskar'
            },
            {
              name: 'Talk 2.2',
              location: 'Hall #2, Odette Building',
              speaker: 'Sumit Chandel'
            },
            {
              name: 'Talk 2.3',
              location: 'Hall #3, Odette Building',
              speaker: 'Gaurav Kumar Singh'
            },
            {
              name: 'Talk 2.4',
              location: 'Hall #4, Odette Building',
              speaker: 'Mark Krysta'
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
              name: 'Sponsor Session - AlphaKOR',
              location: 'Hall #1, Odette Building',
            },
            {
              name: 'Sponsor Session - RIIS',
              location: 'Hall #2, Odette Building',
            },
            {
              name: 'Sponsor Session - WETech',
              location: 'Hall #3, Odette Building',
            },
            {
              name: 'Sponsor Session - MobiStream?',
              location: 'Hall #4, Odette Building',
            }
          ]
        },
        {
          time: '1:00 PM',
          tracks: [
            {
              name: 'Talk 3.1',
              location: 'Hall #1, Odette Building',
              speaker: 'Arafat Khan'
            },
            {
              name: 'Talk 3.2',
              location: 'Hall #2, Odette Building',
              speaker: 'Gary Coburn'
            },
            {
              name: 'Talk 3.3',
              location: 'Hall #3, Odette Building',
              speaker: 'Ikjot Saini'
            },
            {
              name: 'Talk 3.4',
              location: 'Hall #4, Odette Building',
              speaker: 'Yvonne Pilon'
            }
          ]
        },
        {
          time: '2:00 PM',
          tracks: [
            {
              name: 'Talk 4.1',
              location: 'Hall #1, Odette Building',
              speaker: 'En-Shiun Annie Lee'
            },
            {
              name: 'Progressive Web',
              location: 'Hall #2, Odette Building',
              speaker: 'Kyle Paul'
            },
            {
              name: 'Talk 2.3',
              location: 'Hall #3, Odette Building',
              speaker: 'Christa Stephens'
            },
            {
              name: 'Talk 2.4',
              location: 'Hall #4, Odette Building',
              speaker: 'Jeannette Washington'
            }
          ]
        },
        {
          time: '3:00 PM',
          tracks: [
            {
              name: 'Talk 4.1',
              location: 'Hall #1, Odette Building',
              speaker: 'Richard McCrae'
            },
            {
              name: 'Progressive Web',
              location: 'Hall #2, Odette Building',
              speaker: 'Shawn Elliot'
            },
            {
              name: 'Talk 2.3',
              location: 'Hall #3, Odette Building',
              speaker: 'Ali El-Sharif'
            },
            {
              name: 'Talk 2.4',
              location: 'Hall #4, Odette Building',
              speaker: 'Don Ward'
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