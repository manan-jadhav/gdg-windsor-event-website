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
  import wetech from '../static/wetechalliance.png'
  import mobistream from '../static/mobistream.jpeg'

export default {
    data: () => ({
      sponsors: [
        {
          name: 'The University of Windsor',
          image: uofw,
          description: 'The Universtity of Windsor has graciously offered to host the 2nd Windsor-Essex DevFest!<p><p>The University of Windsor is a comprehensive, student-focused university, with more than 15,000 students enrolled in a broad range of undergraduate and graduate programs. <p> The University has strong student-faculty relationships, exceptional award-winning faculty and innovative staff. It creates a unifying atmosphere of excellence across all of the faculties to encourage lifelong learning, teaching, research and discovery.',
          socials: {
            facebook: 'https://www.facebook.com/UWindsor/',
            twitter: 'https://twitter.com/uwindsor',
            // github: 'https://github.com/donwardpeng',
            linkedin: 'https://www.linkedin.com/groups/38761',
            
          },
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
        {
          name: 'MobiStream Solutions',
          image: mobistream,
          description: 'We are a team of global software development professionals who are passionate about changing the way our clients do business, by building and implementing cutting-edge web and mobile technology. <p><p>We have been in the mobility business since the beginning. We love what we do and look forward to partnering with our clients in achieving innovative business solutions that drive your business.<p><p>Learn more at: <a href="http://www.mobistreamsolutions.com/">www.mobistreamsolutions.com/</a>',
          socials: {
            twitter: 'https://twitter.com/MobiStreamSln',
            linkedin: 'https://www.linkedin.com/company/mobistream-solutions',
          }
        },
        {
          name: 'WEtech Alliance',
          image: wetech,
          description: 'At WEtech Alliance, we want to see more tech companies start and scale in Windsor-Essex and Chatham-Kent! <p><p>Supporting entrepreneurs as they build and grow tech and tech-enabled products & companies is at the heart of WEtech Alliance. We know that technology touches every aspect of our lives; and Windsor-Essex and Chatham-Kent is packed with bright, ambitious, and hard-working entrepreneurs that are tackling challenges every day with the incredible opportunities that technology brings.<p><p>We help in three ways: TECH ACCELERATION, TECH TALENT & TECH COMMUNITY.<p><p>Since 2011, we have brought together industry, entrepreneurs, tech talent, students, founders, mentors, and investors to build a region that supports innovative businesses from Windsor-Essex and Chatham-Kent and around the world to grow locally and scale globally.<p><p>Learn more at: <a href="www.wetech-alliance.com">www.wetech-alliance.com</a>',
          socials: {
            facebook: 'https://www.facebook.com/WEtechAlliance',
            twitter: 'https://twitter.com/WETECHALLIANCE',
            linkedin: 'https://www.linkedin.com/company/2252698/',
          }
        },
       

      ]
    })
  }
</script>