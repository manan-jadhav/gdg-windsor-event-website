<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Event Schedule</h1>
    <p class="mb-10">Stay tuned as we update our schedule or add new sessions!</p>
    <h3>Oct. 5, 2019</h3>
    <v-timeline align-top dense>
      <v-timeline-item
        v-for="(session, i) in sessions"
        :key="i"
        color="pink">
          <v-layout wrap pt-3>
              <v-flex xs12 md2>
                <strong class="headline">{{session.time}}</strong>
              </v-flex>
              <v-flex xs12 md10>
                <strong class="headline">{{session.name}}</strong>
                <div class="subheading mt-2 mb-2">{{session.subtitle}}</div>
                <div class="body-1 mb-2">
                  {{session.description}}
                </div>
                <v-avatar v-for="(img, i) in session.avatars" :key="i">
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
          time: '3:00 PM',
          name: 'Getting Started with Flutter',
          subtitle: 'Flutter, Mobile Developement, Android, iOS',
          description: 'This class is a hands-on guide to adding AI to your drone’s mobile app to count sheep in a field. Using Google’s Tensorflow we can relatively quickly add trained models to any Android app. After a brief overview of machine learning and how to use machine learning in Android apps, you’ll see how to process the video from a drone app so we can use the AI to literally count how many sheep there are in the farmer’s field. You’ll see how we trained the model, implemented the app and tested it in the real world.',
          avatars: [
            'https://s.gravatar.com/avatar/bdd9fad49ba2e10229b395d66e70b4fb?s=80'
          ]
        },
        {
          time: '3:00 PM',
          name: 'Getting Started with Flutter',
          subtitle: 'Flutter, Mobile Developement, Android, iOS',
          description: 'This class is a hands-on guide to adding AI to your drone’s mobile app to count sheep in a field. Using Google’s Tensorflow we can relatively quickly add trained models to any Android app. After a brief overview of machine learning and how to use machine learning in Android apps, you’ll see how to process the video from a drone app so we can use the AI to literally count how many sheep there are in the farmer’s field. You’ll see how we trained the model, implemented the app and tested it in the real world.',
          avatars: [
            'https://s.gravatar.com/avatar/bdd9fad49ba2e10229b395d66e70b4fb?s=80'
          ]
        },
        {
          time: '3:00 PM',
          name: 'Getting Started with Flutter',
          subtitle: 'Flutter, Mobile Developement, Android, iOS',
          description: 'This class is a hands-on guide to adding AI to your drone’s mobile app to count sheep in a field. Using Google’s Tensorflow we can relatively quickly add trained models to any Android app. After a brief overview of machine learning and how to use machine learning in Android apps, you’ll see how to process the video from a drone app so we can use the AI to literally count how many sheep there are in the farmer’s field. You’ll see how we trained the model, implemented the app and tested it in the real world.',
          avatars: [
            'https://s.gravatar.com/avatar/bdd9fad49ba2e10229b395d66e70b4fb?s=80'
          ]
        }
      ]
    })
  }
</script>