import speakers from './speakers'
import _ from 'lodash'

export default [
  {
    time: '8:00 AM',
    tracks: [
      {
        name: 'Registration',
        location: 'Main Lobby, Odette Building',
        subtitle: 'Check your names and get your schwag!',
      }
    ]
  },
  {
    time: '8:45 AM',
    tracks: [
      {
        name: 'Introductions',
        location: 'Main Lobby, Odette Building',
      }
    ]
  },
  {
    time: '9:00 AM',
    tracks: [
      {
        name: 'Keynote Speech - Bridging the AI Translation Gap',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'amir'})
      }
    ]
  },
  {
    time: '10:00 AM',
    tracks: [
      {
        name: 'The Ingredients of a Practical Course on ML at Scale for the Modern Data Scientist',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'karthik'})
      },
      {
        name: 'Actions on Google',
        location: 'Hall #2, Odette Building',
        speaker: _.find(speakers, {id: 'kyle'})
      },
      {
        name: 'Agile AI Testing',
        location: 'Hall #3, Odette Building',
        speaker: _.find(speakers, {id: 'godfrey'})
      },
      {
        name: 'The State of CyberSecurity Today',
        location: 'Hall #4, Odette Building',
        speaker: _.find(speakers, {id: 'brian'})
      }
    ]
  },
  {
    time: '11:00 AM',
    tracks: [
      {
        name: 'Production-Grade ML for Real-world Business Problems',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'harish'})
      },
      {
        name: 'An Overview of Firebase',
        location: 'Hall #2, Odette Building',
        speaker: _.find(speakers, {id: 'sumit'})
      },
      {
        name: 'Talk 2.3',
        location: 'Hall #3, Odette Building',
        speaker: _.find(speakers, {id: 'gaurav'})
      },
      {
        name: 'Talk 2.4',
        location: 'Hall #4, Odette Building',
        speaker: _.find(speakers, {id: 'mark'})
      }
    ]
  },
  {
    time: '12:00 PM',
    tracks: [
      {
        name: 'Lunch',
        location: 'Main Lobby, Odette Building',
      }
    ]
  },
  {
    time: '12:30 PM',
    tracks: [
      {
        name: 'Sponsor Session',
        location: 'Hall #1, Odette Building',
      },
      {
        name: 'Sponsor Session',
        location: 'Hall #2, Odette Building',
      },
      {
        name: 'Sponsor Session',
        location: 'Hall #3, Odette Building',
      },
      {
        name: 'Sponsor Session',
        location: 'Hall #4, Odette Building',
      }
    ]
  },
  {
    time: '1:00 PM',
    tracks: [
      {
        name: 'Introducing Tensorflow Ruby API',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'arafat'})
      },
      {
        name: 'Containers, Kubernetes, and the Multi-cloud journey',
        location: 'Hall #2, Odette Building',
        speaker: _.find(speakers, {id: 'gary'})
      },
      {
        name: 'Talk 3.3',
        location: 'Hall #3, Odette Building',
        speaker: _.find(speakers, {id: 'ikjot'})
      },
      {
        name: 'Get to Know & Get Plugged into the Windsor-Essex Tech Scene',
        location: 'Hall #4, Odette Building',
        speaker: _.find(speakers, {id: 'yvonne'})
      }
    ]
  },
  {
    time: '2:00 PM',
    tracks: [
      {
        name: 'Talk 4.1',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'annie'})
      },
      {
        name: 'Progressive Web',
        location: 'Hall #2, Odette Building',
        speaker: _.find(speakers, {id: 'kyle'})
      },
      {
        name: 'OOP VS Dopamine Lead Programming',
        location: 'Hall #3, Odette Building',
        speaker: _.find(speakers, {id: 'christa'})
      },
      {
        name: 'The Mental Health Code',
        location: 'Hall #4, Odette Building',
        speaker: _.find(speakers, {id: 'jeannette'})
      }
    ]
  },
  {
    time: '3:00 PM',
    tracks: [
      {
        name: 'Feature Reduction Based on Performance and Cost',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'richard'})
      },
      {
        name: 'Progressive Web',
        location: 'Hall #2, Odette Building',
        speaker: _.find(speakers, {id: 'shawn'})
      },
      {
        name: 'No Math, No Code, No Problem. Explaining Machine Learning to a Business Audience',
        location: 'Hall #3, Odette Building',
        speaker: _.find(speakers, {id: 'ali'})
      },
      {
        name: 'Flutter for Web',
        location: 'Hall #4, Odette Building',
        speaker: _.find(speakers, {id: 'don'})
      }
    ]
  },
  {
    time: '4:00 PM',
    tracks: [
      {
        name: 'Wrap Up',
        location: 'Hall #1, Odette Building',
      }
    ]
  },
]