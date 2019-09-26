import speakers from './speakers'
import _ from 'lodash'

export default [
  {
    time: '8:00 AM - 8:45 AM',
    tracks: [
      {
        name: 'Registration',
        location: 'Main Lobby, Odette Building',
        subtitle: 'Check your names and get your schwag!',
      }
    ]
  },
  {
    time: '8:45 AM - 9:00 AM',
    tracks: [
      {
        name: 'Introductions',
        location: 'Main Lobby, Odette Building',
      }
    ]
  },
  {
    time: '9:00 AM - 9:50 AM',
    tracks: [
      {
        name: 'Keynote Speech - Bridging the AI Translation Gap',
        location: 'Allan Conway Room , Odette Building',
        speaker: _.find(speakers, {id: 'amir'})
      }
    ]
  },
  {
    time: '10:00 AM - 10:45 AM',
    tracks: [
      {
        name: 'The Ingredients of a Practical Course on ML at Scale for the Modern Data Scientist',
        location: 'Allan Conway Room , Odette Building',
        speaker: _.find(speakers, {id: 'karthik'})
      },
      {
        name: 'Actions on Google',
        location: 'Room #2, Odette Building',
        speaker: _.find(speakers, {id: 'kyle'})
      },
      {
        name: 'Agile AI Testing',
        location: 'Room #3, Odette Building',
        speaker: _.find(speakers, {id: 'godfrey'})
      },
      {
        name: 'The State of CyberSecurity Today',
        location: 'Room #4, Odette Building',
        speaker: _.find(speakers, {id: 'brian'})
      }
    ]
  },
  {
    time: '10:50 AM - 11:35 AM',
    tracks: [
      {
        name: 'Introducing Tensorflow Ruby API',
        location: 'Allan Conway Room , Odette Building',
        speaker: _.find(speakers, {id: 'arafat'})
      },
      {
        name: 'An Overview of Firebase',
        location: 'Room #2, Odette Building',
        speaker: _.find(speakers, {id: 'sumit'})
      },
      {
        name: 'Enabling Technology behind Autonomous Vehicles',
        location: 'Room #3, Odette Building',
        speaker: _.find(speakers, {id: 'gaurav'})
      },
      {
        name: 'The Mental Health Code',
        location: 'Room #4, Odette Building',
        speaker: _.find(speakers, {id: 'jeannette'})
      }
    ]
  },
  {
    time: '11:45 AM - 12:45 PM',
    tracks: [
      {
        name: 'Lunch',
        location: 'Main Lobby, Odette Building',
      }
    ]
  },
  {
    time: '12:45 PM - 1:15 PM',
    tracks: [
      {
        name: 'Sponsor Session',
        location: 'Allan Conway Room , Odette Building',
      },
      {
        name: 'Sponsor Session',
        location: 'Room #2, Odette Building',
      },
      {
        name: 'Sponsor Session',
        location: 'Room #3, Odette Building',
      },
      {
        name: 'Sponsor Session',
        location: 'Room #4, Odette Building',
      }
    ]
  },
  {
    time: '1:20 PM - 2:05 PM',
    tracks: [
      {
        name: 'Progressive Web',
        location: 'Allan Conway Room , Odette Building',
        speaker: _.find(speakers, {id: 'kyle'})
      },
      {
        name: 'Containers, Kubernetes, and the Multi-cloud journey',
        location: 'Room #2, Odette Building',
        speaker: _.find(speakers, {id: 'gary'})
      },
      {
        name: 'OOP VS Dopamine Lead Programming',
        location: 'Room #3, Odette Building',
        speaker: _.find(speakers, {id: 'christa'})
      },
      {
        name: 'Get to Know & Get Plugged into the Windsor-Essex Tech Scene',
        location: 'Room #4, Odette Building',
        speaker: _.find(speakers, {id: 'yvonne'})
      }
    ]
  },
  {
    time: '2:10 PM - 2:55 PM',
    tracks: [
      {
        name: 'Machine Learning Life-Cycle applied to Text Classification',
        location: 'Allan Conway Room , Odette Building',
        speaker: _.find(speakers, {id: 'annie'})
      },
      {
        name: 'Coming Soon',
        location: 'Room #2, Odette Building',
        speaker: _.find(speakers, {id: 'kyle'})
      },
      {
        name: 'A new Cyberspace of Connected Vehicles: Secure or Not?',
        location: 'Room #3, Odette Building',
        speaker: _.find(speakers, {id: 'ikjot'})
      },
      {
        name: 'From Invention to Implementation, Our Digital Transformation Journey',
        location: 'Room #4, Odette Building',
        speaker: _.find(speakers, {id: 'mark'})
      }
    ]
  },
  {
    time: '2:55 PM - 3:10 PM',
    tracks: [
      {
        name: 'Break',
        location: 'Main Lobby, Odette Building',
      }
    ]
  },
  {
    time: '3:10 PM - 3:55 PM',
    tracks: [
      {
        name: 'Feature Reduction Based on Performance and Cost',
        location: 'Allan Conway Room , Odette Building',
        speaker: _.find(speakers, {id: 'richard'})
      },
      {
        name: 'Coming Soon',
        location: 'Room #2, Odette Building',
        speaker: _.find(speakers, {id: 'shawn'})
      },
      {
        name: 'Machine Learning Interpretability',
        location: 'Room #3, Odette Building',
        speaker: _.find(speakers, {id: 'ali'})
      },
      {
        name: 'Flutter for Web',
        location: 'Room #4, Odette Building',
        speaker: _.find(speakers, {id: 'don'})
      }
    ]
  },
  {
    time: '4:00 PM - 4:30 PM',
    tracks: [
      {
        name: 'Wrap Up',
        location: 'Allan Conway Room , Odette Building',
      }
    ]
  },
]