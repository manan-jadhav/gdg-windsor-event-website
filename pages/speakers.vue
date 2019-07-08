<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Stay tuned as we add new speakers!</h1>

    <v-container grid-list-md >
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="(speaker, i) in speakers" :key="i">
          <v-card>
             <template v-if="speaker.isKeynote">
             <v-card-title class="display-1">
              Keynote Speaker!
            </v-card-title>
             </template>
            <v-img 
            height="250px"
            :src="speaker.image">
            </v-img>
            <v-card-title class="headline">
              {{speaker.name}}
            </v-card-title>
            <v-card-text>
              <p class="body-1"><span v-html="speaker.description"></span></p>
              <!-- <p class="body-1">{{speaker.description}}</p> -->
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
  import manan from '../static/speakers/amir_feizpour.jpeg'

  export default {
    data: () => ({
      speakers: [
        {
          name: 'Amir Feizpour',
          image: manan,
          description: 'Amir Feizpour is the founder of <a href="https://ai.science/">Aggregate Intellect</a>, a company focused on making machine learning research and education more accessible, and runs a popular talk series called <a href="https://aisc.ai.science/">AISC</a>, on advanced machine learning topics. <p><p>Amir is a member of the steering committee of the Toronto Machine Learning Summit. In addition to these responsibilities, he is an NLP Product Lead on the Enterprise Data Science team at the Royal Bank of Canada. Prior to his current position, he held a post-doctoral position at the University of Oxford conducting research on experimental quantum computing. Amir holds a PhD in Physics from the University of Toronto.',
          socials: {
            // facebook: 'https://facebook.com',
            twitter: 'https://twitter.com/amirfzpr',
            // github: 'https://github.com',
            linkedin: 'https://www.linkedin.com/in/amirfzpr/'
          },
          isKeynote: true,
        },
        // {
        //   name: 'John Doe',
        //   image: manan,
        //   description: 'Godfrey Nolan is founder and president of RIIS LLC, a mobile development firm in Troy. He is also author of "Agile Android", "Bulletproof Android", "Android Best Practices", "Decompiling Android" and "Decompiling Java." Godfrey has spoken at DroidCon, AnDevcon as well as JavaOne, ASP-Connections, VSLive, Codemash, Code PaLOUsa, 1DevDay and many local Java and .Net user groups on a wide range of topics such as Continuous Integration, Unit Testing and mobile security.",',
        //   socials: {
        //     facebook: 'https://facebook.com',
        //     twitter: 'https://twitter.com',
        //     github: 'https://github.com'
        //   }
        // },
        // {
        //   name: 'John Doe',
        //   image: manan,
        //   description: 'Godfrey Nolan is founder and president of RIIS LLC, a mobile development firm in Troy. He is also author of "Agile Android", "Bulletproof Android", "Android Best Practices", "Decompiling Android" and "Decompiling Java." Godfrey has spoken at DroidCon, AnDevcon as well as JavaOne, ASP-Connections, VSLive, Codemash, Code PaLOUsa, 1DevDay and many local Java and .Net user groups on a wide range of topics such as Continuous Integration, Unit Testing and mobile security.",',
        //   socials: {
        //     facebook: 'https://facebook.com',
        //     twitter: 'https://twitter.com',
        //     github: 'https://github.com'
        //   }
        // }
      ]
    })
  }
</script>