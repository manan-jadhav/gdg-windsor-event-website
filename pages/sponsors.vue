<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Thank you to our fantastic sponsors!</h1>
    <p class="mb-10"></p>

    <v-container grid-list-md >
      <v-layout row wrap>
        <v-flex xs12 v-for="(sponsor, i) in sponsors" :key="i">
          <v-card>
            <v-img 
            height="300px"
            :src="sponsor.image">
            </v-img>
            <v-card-title class="headline">
              {{sponsor.name}}
            </v-card-title>
            <v-card-text>
              <p class="body-1"><span v-html="sponsor.description"></span></p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-for="(link, platform) in sponsor.socials"
                :key="link"
                class="mx-3"
                icon flat
                :href="link">
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
  import uofw from '../static/uofw.png'
  import coulter from '../static/coulter_software.jpg'

export default {
    data: () => ({
      sponsors: [
        {
          name: 'The University of Windsor',
          image: uofw,
          description: 'The University of Windsor is a comprehensive, student-focused university, with more than 15,000 students enrolled in a broad range of undergraduate and graduate programs, including: <br/> <br/> <ul> <li> Law </li> <li> Business </li> <li> Engineering </li> <li> Science </li> <li> Education </li> <li> Nursing </li> <li> Human Kinetics </li> <li> Social Work </li> </ul> <br/> We have strong student-faculty relationships, exceptional award-winning faculty and innovative staff. It creates a unifying atmosphere of excellence across all of our faculties to encourage lifelong learning, teaching, research and discovery.',
          socials: {
            facebook: 'https://www.facebook.com/UWindsor/',
            twitter: 'https://twitter.com/uwindsor',
            // github: 'https://github.com/donwardpeng',
            linkedin: 'https://www.linkedin.com/groups/38761'
          }
        },
        {
          name: 'Coulter Software',
          image: coulter,
          description: 'We build great software.\n We are a specialized team that provides common sense solutions to our customers problems. \nWe are experienced in designing and building web and mobile apps to help bring your business to the next level!\nContact us at: info@coulters.ca',
          socials: {
            // facebook: 'https://www.facebook.com/UWindsor/',
            // twitter: 'https://twitter.com/uwindsor',
            // // github: 'https://github.com/donwardpeng',
            // linkedin: 'https://www.linkedin.com/groups/38761'
          }
        },
      ]
    })
  }
</script>