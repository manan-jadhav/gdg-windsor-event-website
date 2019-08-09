<template>
  <v-app>
    <!-- <v-navigation-drawer
      v-model="drawer"
      temporary
    fixed
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar
    
      app
      absolute
      dark
      color="primary"
    >
      <v-toolbar-title>
          <router-link to="/" class="toolbar-title">{{title}}</router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down" >
        <v-btn v-for="item in items" :key="item.title" :href="item.href" :to="item.to" flat>{{item.title}}</v-btn>
      </v-toolbar-items>

      <v-menu  class="hidden-md-and-up"> 
        <!-- <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" class="hidden-md-and-up">
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>
        //used this as a template for the menu -> https://codepen.io/kematzy/pen/oMgrjE
 -->
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :href="item.href"
            :to="item.to"
          >
            <v-list-tile-title> {{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      height="auto"
      dark
    >
      <v-card
      flat
      tile
      width="100%"
      color="primary"
      class="text-xs-center"
    >
    <!-- Disable social media btns -->
      <!-- <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text> -->
      <v-card-text>
        <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="primary darken-2">
        &copy;2019 — <strong>GDG Windsor</strong>
      </v-card-text>
    </v-card>
    </v-footer>
  </v-app>
</template>

<style scoped>
.toolbar-title {
  color: #fff;
  text-decoration: none;
}
</style>

<script>
export default {
  data() {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
      drawer: false,
      fixed: false,
      items: [
        // {
        //   title: 'Home',
        //   to: '/'
        // },
        // {
        //   title: 'Schedule',
        //   to: '/schedule'
        // },
        {
          title: 'Speakers',
          to: '/speakers'
        },
        // {
        //   title: 'Register',
        //   to: '/tickets'
        // }
        {
          title: 'Sponsors',
          href: '/sponsors'
        },
        {
          title: 'Team',
          to: '/team'
        },
        
        {
          title: 'Code of Conduct',
          href: '/codeofconduct'
        },
        {
          title: 'Get your ticket now!',
          href: 'https://www.eventbrite.com/e/the-windsor-essex-google-developers-devfest-tickets-5488751002'
        }
      ],
      title: 'GDG Windsor-Essex DevFest 2019',
      gdglogo: '../static/gdg.png'
    }
  }
}
</script>
