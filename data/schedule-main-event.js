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
        name: 'Keynote Speech',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'amir'})
      }
    ]
  },
  {
    time: '10:00 AM',
    tracks: [
      {
        name: 'Talk 1.1',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'karthik'})
      },
      {
        name: 'Actions on Google',
        location: 'Hall #2, Odette Building',
        speaker: _.find(speakers, {id: 'kyle'})
      },
      {
        name: 'Talk 1.3',
        location: 'Hall #3, Odette Building',
        speaker: _.find(speakers, {id: 'godfrey'})
      },
      {
        name: 'Talk 1.4',
        location: 'Hall #4, Odette Building',
        speaker: _.find(speakers, {id: 'brian'})
      }
    ]
  },
  {
    time: '11:00 AM',
    tracks: [
      {
        name: 'Talk 2.1',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'harish'})
      },
      {
        name: 'Talk 2.2',
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
        name: 'Sponsor Session - AlphaKOR',
        location: 'Hall #1, Odette Building',
      },
      {
        name: 'Sponsor Session - RIIS',
        location: 'Hall #2, Odette Building',
      },
      {
        name: 'Sponsor Session - WETech',
        location: 'Hall #3, Odette Building',
      },
      {
        name: 'Sponsor Session - MobiStream?',
        location: 'Hall #4, Odette Building',
      }
    ]
  },
  {
    time: '1:00 PM',
    tracks: [
      {
        name: 'Talk 3.1',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'arafat'})
      },
      {
        name: 'Talk 3.2',
        location: 'Hall #2, Odette Building',
        speaker: _.find(speakers, {id: 'gary'})
      },
      {
        name: 'Talk 3.3',
        location: 'Hall #3, Odette Building',
        speaker: _.find(speakers, {id: 'ikjot'})
      },
      {
        name: 'Talk 3.4',
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
        name: 'Talk 2.3',
        location: 'Hall #3, Odette Building',
        speaker: _.find(speakers, {id: 'christa'})
      },
      {
        name: 'Talk 2.4',
        location: 'Hall #4, Odette Building',
        speaker: _.find(speakers, {id: 'jeanette'})
      }
    ]
  },
  {
    time: '3:00 PM',
    tracks: [
      {
        name: 'Talk 4.1',
        location: 'Hall #1, Odette Building',
        speaker: _.find(speakers, {id: 'richard'})
      },
      {
        name: 'Progressive Web',
        location: 'Hall #2, Odette Building',
        speaker: _.find(speakers, {id: 'shawn'})
      },
      {
        name: 'Talk 2.3',
        location: 'Hall #3, Odette Building',
        speaker: _.find(speakers, {id: 'ali'})
      },
      {
        name: 'Talk 2.4',
        location: 'Hall #4, Odette Building',
        speaker: _.find(speakers, {id: 'don'})
      }
    ]
  },
  {
    time: '4:00 PM',
    tracks: [
      {
        name: 'Wrap Up / Vote of Thanks',
        location: 'Hall #1, Odette Building',
      }
    ]
  },
]