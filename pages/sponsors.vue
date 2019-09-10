<template>
  <v-layout column>
    <h1 class="display-3 mb-2">Thank you to our fantastic sponsors!</h1>
    <p class="mb-10"></p>

    <h2 class="display-1 mb-1">Sponsors providing Financial Assistance</h2>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 v-for="(sponsor, i) in sponsors" :key="i">
          <v-card>
            <v-img height="300px" :src="sponsor.image"></v-img>
            <v-card-title class="headline">{{sponsor.name}}</v-card-title>
            <v-card-text>
              <p class="body-1">
                <span v-html="sponsor.description"></span>
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-for="(link, platform) in sponsor.socials"
                :key="link"
                class="mx-3"
                icon
                flat
                :href="link"
              >
                <v-icon size="24px">fab fa-{{ platform }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <p class="mb-10"></p>
    <h2 class="display-1 mb-1">Community Sponsors</h2>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 v-for="(community_sponsor, i) in community_sponsors" :key="i">
          <v-card>
            <v-img height="300px" :src="community_sponsor.image"></v-img>
            <v-card-title class="headline">{{community_sponsor.name}}</v-card-title>
            <v-card-text>
              <p class="body-1">
                <span v-html="community_sponsor.description"></span>
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-for="(link, platform) in community_sponsor.socials"
                :key="link"
                class="mx-3"
                icon
                flat
                :href="link"
              >
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
import uofw from "../static/uofw.png";
import coulter from "../static/coulter_software.jpg";
import wetech from "../static/wetechalliance.png";
import mobistream from "../static/mobistream.jpeg";
import wicys from "../static/wicys.jpg";
import hackforge from "../static/hackforge.png";
import riis from "../static/RIIS.png";
import dsc from "../static/dsc.png";
import uofwcoop from "../static/u_of_w_internship_program.png";
import alphaKOR from "../static/alphaKOR.png";

export default {
  data: () => ({
    sponsors: [
      {
        name: "The University of Windsor",
        image: uofw,
        description:
          "The Universtity of Windsor has graciously offered to host the 2nd Windsor-Essex DevFest!<p><p>The University of Windsor is a comprehensive, student-focused university, with more than 15,000 students enrolled in a broad range of undergraduate and graduate programs. <p> The University has strong student-faculty relationships, exceptional award-winning faculty and innovative staff. It creates a unifying atmosphere of excellence across all of the faculties to encourage lifelong learning, teaching, research and discovery.",
        socials: {
          facebook: "https://www.facebook.com/UWindsor/",
          twitter: "https://twitter.com/uwindsor",
          // github: 'https://github.com/donwardpeng',
          linkedin: "https://www.linkedin.com/groups/38761"
        }
      },
      {
        name: "AlphaKOR Group",
        image: alphaKOR,
        description:
          'AlphaKOR is your Technology Partner.  We are committed to continuously evolving to serve our business community. We\'ve enjoyed continuous growth since 1995, solidifying our position as the most dynamic technology partner in the region. We have experts on staff, and work with the most powerful technology partners in the world. Together, we offer solutions in:<p><p><ul><li>Managed Services</li><li>Software Development</li><li>Hardware and IT Support</li><li>Digital Marketing Services</li><li>Data Security</li><li>Unified Communications</li></ul><p><p>Learn more about us at: <a href="https://www.alphakor.com/">https://www.alphakor.com/',
        socials: {
          // facebook: 'https://www.facebook.com/UWindsor/',
          // twitter: 'https://twitter.com/uwindsor',
          // // github: 'https://github.com/donwardpeng',
          // linkedin: 'https://www.linkedin.com/groups/38761'
        }
      },
      {
        name: "Coulter Software",
        image: coulter,
        description:
          "We build great software.\n We are a specialized team that provides common sense solutions to our customers problems. \nWe are experienced in designing and building web and mobile apps to help bring your business to the next level!\nContact us at: info@coulters.ca",
        socials: {
          // facebook: 'https://www.facebook.com/UWindsor/',
          // twitter: 'https://twitter.com/uwindsor',
          // // github: 'https://github.com/donwardpeng',
          // linkedin: 'https://www.linkedin.com/groups/38761'
        }
      },
      {
        name: "MobiStream Solutions",
        image: mobistream,
        description:
          'We are a team of global software development professionals who are passionate about changing the way our clients do business, by building and implementing cutting-edge web and mobile technology. <p><p>We have been in the mobility business since the beginning. We love what we do and look forward to partnering with our clients in achieving innovative business solutions that drive your business.<p><p>Learn more at: <a href="http://www.mobistreamsolutions.com/">www.mobistreamsolutions.com/</a>',
        socials: {
          twitter: "https://twitter.com/MobiStreamSln",
          linkedin: "https://www.linkedin.com/company/mobistream-solutions"
        }
      },
      {
        name: "RIIS LLC",
        image: riis,
        description:
          'Passionate software and application developers drive our business.<p><p>We recognize that our team is at the heart of our business. That’s why we have spent nearly two decades carefully building, training & engaging highly-skilled IT and business professionals. Our culture revolves around making our team better at what they do – we invest in learning, exploring & changing technology.<p><p>Learn more at: <a href="https://riis.com/">https://riis.com/</a>',
        socials: {
          twitter: "https://twitter.com/riisllc",
          linkedin: "https://www.linkedin.com/company/155258/"
        }
      },
      {
        name: "WEtech Alliance",
        image: wetech,
        description:
          'At WEtech Alliance, we want to see more tech companies start and scale in Windsor-Essex and Chatham-Kent! <p><p>Supporting entrepreneurs as they build and grow tech and tech-enabled products & companies is at the heart of WEtech Alliance. We know that technology touches every aspect of our lives; and Windsor-Essex and Chatham-Kent is packed with bright, ambitious, and hard-working entrepreneurs that are tackling challenges every day with the incredible opportunities that technology brings.<p><p>We help in three ways: TECH ACCELERATION, TECH TALENT & TECH COMMUNITY.<p><p>Since 2011, we have brought together industry, entrepreneurs, tech talent, students, founders, mentors, and investors to build a region that supports innovative businesses from Windsor-Essex and Chatham-Kent and around the world to grow locally and scale globally.<p><p>Learn more at: <a href="https://www.wetech-alliance.com">www.wetech-alliance.com</a>',
        socials: {
          facebook: "https://www.facebook.com/WEtechAlliance",
          twitter: "https://twitter.com/WETECHALLIANCE",
          linkedin: "https://www.linkedin.com/company/2252698/"
        }
      }
    ],
    community_sponsors: [
      {
        name: "University of Windsor Co-op and Internship Programs",
        image: uofwcoop,
        description:
          'The University of Windsor co-op and internship programs integrate valuable work experience with classroom learning and professional development activities to ensure that students develop the transferable skills employers are looking for. Co-op and internship staff and UWindsor faculty members work closely to ensure that our programs are responsive to students needs and to overall enhance the student experience.',
        socials: {
          // facebook: 'https://www.facebook.com/UWindsor/',
          // twitter: "https://twitter.com/hackforge",
          // github: 'https://github.com/donwardpeng',
          // linkedin: "https://www.linkedin.com/company/hackforge/about/"
        }
      },
      {
        name: "University of Windsor Google Developer Student Club",
        image: dsc,
        description:
          'Developer Student Clubs (DSC) is a program presented by Google Developers. DSCs are university based community groups for students. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community<p><p>Learn more at: <a href="https://sites.google.com/view/dscwindsor/home">https://sites.google.com/view/dscwindsor/home/</a>',
        socials: {
          // facebook: 'https://www.facebook.com/UWindsor/',
          // twitter: "https://twitter.com/hackforge",
          // github: 'https://github.com/donwardpeng',
          // linkedin: "https://www.linkedin.com/company/hackforge/about/"
        }
      },
      {
        name: "Hackforge",
        image: hackforge,
        description:
          'Hackforge is a registered non-profit focused in technology. A member-driven organization, we host events and programming for beginners, professionals, and hobbyists. Hackforge operates as an event space, community workshop, and co-working space.<p><p>The Hackforge is the key catalyst of a thriving, tech-empowered Windsor.<p><p>Learn more at: <a href="http://hackf.org/">http://hackf.org/</a>',
        socials: {
          // facebook: 'https://www.facebook.com/UWindsor/',
          twitter: "https://twitter.com/hackforge",
          // github: 'https://github.com/donwardpeng',
          linkedin: "https://www.linkedin.com/company/hackforge/about/"
        }
      },
      {
        name:
          "WiCyS- Women in CyberSecuity - University of Windsor Student Chapter",
        image: wicys,
        description:
          'We are Canada\'s first Women in Cybersecurity (WiCys) student chapter located in Windsor, Ontario. This student chapter was created by a diverse group of PhD Candidates, Graduate and Undergraduate students at the School of Computer Science, University of Windsor.<p><p>Our mission is to provide opportunities for women to learn and get hands on experience in cybersecurity. Our goal is to spread awareness of cybersecurity in Windsor-Essex region. Join hands with us in creating a diverse cybersecurity workforce. <p><p>Learn more at: <a href="https://www.wicyswindsor.wordpress.com">www.wicyswindsor.wordpress.com</a>',
        socials: {
          // facebook: 'https://www.facebook.com/UWindsor/',
          // twitter: 'https://twitter.com/uwindsor',
          // github: 'https://github.com/donwardpeng',
          linkedin: "https://www.linkedin.com/in/wicys-windsor-ab498218a/"
        }
      }
    ]
  })
};
</script>