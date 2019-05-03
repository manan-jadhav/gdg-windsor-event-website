<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Speakers</h1>
    <p class="mb-10">Stay tuned as we update our schedule or add new speakers!</p>

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

  export default {
    data: () => ({
      speakers: [
        {
          name: 'John Doe',
          image: manan,
          description: 'Godfrey Nolan is founder and president of RIIS LLC, a mobile development firm in Troy. He is also author of "Agile Android", "Bulletproof Android", "Android Best Practices", "Decompiling Android" and "Decompiling Java." Godfrey has spoken at DroidCon, AnDevcon as well as JavaOne, ASP-Connections, VSLive, Codemash, Code PaLOUsa, 1DevDay and many local Java and .Net user groups on a wide range of topics such as Continuous Integration, Unit Testing and mobile security.",',
          socials: {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            github: 'https://github.com'
          }
        },
        {
          name: 'John Doe',
          image: manan,
          description: 'Godfrey Nolan is founder and president of RIIS LLC, a mobile development firm in Troy. He is also author of "Agile Android", "Bulletproof Android", "Android Best Practices", "Decompiling Android" and "Decompiling Java." Godfrey has spoken at DroidCon, AnDevcon as well as JavaOne, ASP-Connections, VSLive, Codemash, Code PaLOUsa, 1DevDay and many local Java and .Net user groups on a wide range of topics such as Continuous Integration, Unit Testing and mobile security.",',
          socials: {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            github: 'https://github.com'
          }
        },
        {
          name: 'John Doe',
          image: manan,
          description: 'Godfrey Nolan is founder and president of RIIS LLC, a mobile development firm in Troy. He is also author of "Agile Android", "Bulletproof Android", "Android Best Practices", "Decompiling Android" and "Decompiling Java." Godfrey has spoken at DroidCon, AnDevcon as well as JavaOne, ASP-Connections, VSLive, Codemash, Code PaLOUsa, 1DevDay and many local Java and .Net user groups on a wide range of topics such as Continuous Integration, Unit Testing and mobile security.",',
          socials: {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            github: 'https://github.com'
          }
        }
      ]
    })
  }
</script>