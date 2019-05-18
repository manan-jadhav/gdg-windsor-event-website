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
  import ali from '../static/ali.png'

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
            github: 'https://github.com/donwardpeng',
            linkedin: 'https://www.linkedin.com/in/donwardpeng/'
          }
        },
        {
          name: 'Ali El-Sharif',
          image: ali,
          description: 'Ali El-Sharif lives in Windsor and works as a Business Intelligence Consultant for Motifworks in metro Detroit.  Ali is a Ph.D. candidate at Nova Southeastern University, conducting research in Machine Learning interpretability.',
          socials: {
            facebook: 'https://facebook.com/ali.elsharif.969',
            twitter: 'https://twitter.com/elsharifali',
            github: 'https://github.com/elsharifali',
            linkedin: 'https://www.linkedin.com/in/elsharifali'
          }
        },
        {
          name: 'Manan Jadhav',
          image: manan,
          description: 'Manan is a graduate student at the University of Windsor. He is also the founder of an online animated video maker service, MotionDen Inc. Manan was previously an organiser at GDG Baroda, and loves building and getting invloved in local communities.',
          socials: {
            facebook: 'https://www.facebook.com/jadhavmanan',
            twitter: 'https://twitter.com/curosmj',
            github: 'https://github.com/curosmj',
            linkedin: 'https://www.linkedin.com/in/curosmj/'
          }
        }
      ]
    })
  }
</script>