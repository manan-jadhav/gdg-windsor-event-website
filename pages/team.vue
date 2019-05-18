<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Team</h1>
    <p class="mb-10"></p>

    <v-container grid-list-md >
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="(speaker, i) in speakers" :key="i">
          <v-card>
            <v-img 
            height="250px"
            :src="speaker.image">
            </v-img>
            <v-card-title class="headline">
              {{speaker.name}}
            </v-card-title>
            <v-card-text>
              <p class="body-1">{{speaker.description}}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-for="(link, platform) in speaker.socials"
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
  import manan from '../static/manan.jpg'
  import don from '../static/don.png'
  import ali from '../static/ali.jpg'

  export default {
    data: () => ({
      speakers: [
        {
          name: 'Don Ward',
          image: don,
          description: 'Don Ward currently helps lead the Detroit and Windsor Google Developers Groups. An avid technologist, he enjoys hosting software developer events as well as networking within the local software development community. During the day, Don works at Quicken Loans in downtown Detroit.',
          socials: {
            facebook: 'https://www.facebook.com/don.ward.395',
            twitter: 'https://twitter.com/donwardpeng',
            github: 'https://github.com/donwardpeng'
          }
        },
        {
          name: 'Ali El-Sharif',
          image: ali,
          description: '',
          socials: {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            github: 'https://github.com'
          }
        },
        {
          name: 'Manan Jadhav',
          image: manan,
          description: 'Manan is a graduate student at the University of Windsor. He is also the founder of an online animated video maker service, MotionDen Inc.',
          socials: {
            facebook: 'https://www.facebook.com/jadhavmanan',
            twitter: 'https://twitter.com/curosmj',
            github: 'https://github.com/curosmj'
          }
        }
      ]
    })
  }
</script>