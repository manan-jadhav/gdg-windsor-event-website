<template>
  <v-layout column>
    <h1 class="display-2 mb-2">High School Track Schedule</h1>
    <h3>Oct. 5, 2019</h3>
    <h3>Odette Building, University of Windsor</h3>
    <a href="/schedule/main-event">Looking for the Main Event schedule?</a>
    <br />
    <h2>The aim of the High School Track is to teach a group of 30 students how to program. During it, students will be working with Arduino Microcontrollers to build a wide range of projects from a self-balancing robots to line-tracking robots. The session will be led by instructors from local high schools and university students. Students will keep what they build to continue working on after the event.
    <br/><br/>Some of the projects we will build include, <br/>
    1. "What's in the Fridge? - a project so that you do not need to get up from the couch :) <br/>
    2. "The Robot that never falls down" - the name says it all! <br/>
    3. "Never going to lock you out" - build the ultimate door lock system for your house.<br/>
    <br/>The Arduino software needed to start the projects can be found here: <a href="https://www.arduino.cc/en/Main/Software">https://www.arduino.cc/en/Main/Software</a>
    </h2>
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
  import sessions from '../../data/schedule-high-school-track'

  export default {
    data: () => ({
      sessions
    })
  }
</script>