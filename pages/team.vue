<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Team</h1>
    

    <v-container grid-list-md >
      <v-layout row wrap>
        <v-flex xs12 md12 v-for="(speaker, i) in speakers" :key="i">
          <v-card class="mb-4">
            <v-layout>
                <v-flex xs4>
                  <v-img 
                    contain
                    :src="speaker.image">
                    </v-img>
                </v-flex>
                <v-flex xs9>
                  <v-card-title class="headline">
                    {{speaker.name}}
                  </v-card-title>
                  <v-card-text>
                    <p class="body-1">{{speaker.description}}</p>
                  </v-card-text>
                </v-flex>
            </v-layout>
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
  import manan from '../static/team/manan.jpg'
  import don from '../static/team/don.png'
  import ali from '../static/team/ali.png'
  import joshua from '../static/team/joshua.png'
  import austin from '../static/team/austin.jpg'
  import ron from '../static/team/ron_mckenzie.png'
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
        },
        {
          name: 'Ron McKenzie',
          image: ron,
          description: 'Ron McKenzie has been teaching Computer Science for 24 years, the last 16 of which have been at Vincent Massey. He enjoys creating and supporting groups and communities including Toastmasters, Debate, Computer Club, CodeReach, MasseyHacks, and ANS/CCP.',
          socials: {
            facebook: 'https://www.facebook.com/ron.mckenzie.397',
            // twitter: 'https://twitter.com/jgehl99',
            github: 'https://github.com/mss-mckenzie',
            linkedin: 'https://ca.linkedin.com/in/ron-mckenzie-13357744'
          }
        },
        {
          name: 'Joshua Gehl',
          image: joshua,
          description: 'Joshua Gehl is an undergraduate computer science student at the University of WIndsor. He enjoys programming as a hobby and also as a career. Josh has competed in various programming competitions and has placed 1st. Josh wants to help make a difference in others’ lives through engagement with the community.',
          socials: {
            facebook: 'https://www.facebook.com/jgehl99',
            twitter: 'https://twitter.com/jgehl99',
            github: 'https://github.com/jgehl99',
            linkedin: 'https://www.linkedin.com/in/joshua-gehl-b00513171/'
          }
        },
        {
          name: 'Austin Formagin',
          image: austin,
          description: 'Austin Formagin is an undergraduate Computer Science student at the University of Windsor. Austin currently mentors a group of students on an FRC team in Chatham, Ontario, teaching the students the basics of programming competition robots. He looks forward to introducing the importance of STEM to his community.',
          socials: {
            github: 'https://github.com/auti117',
            linkedin: 'https://www.linkedin.com/in/austin-formagin-551b50171/',
            twitter: 'https://twitter.com/AustinFormagin'
          }
        }
      ]
    })
  }
</script>