<template>
  <v-layout column>
    <h1 class="display-2 mb-2">Stay tuned as we add new speakers!</h1>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md12 v-for="(speaker, i) in speakers" :key="i">
          <v-card class="mb-4">
            <v-layout>
                <v-flex xs3>
                  <v-img
                    :src="speaker.image"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs9>
                  <v-card-text>
                    <p class="display-1">
                      <span v-html="speaker.name"></span>
                    </p>
                    <p class="title">
                      <span v-html="speaker.title"></span>
                    </p>
                    <p class="body-1">
                      <span v-html="speaker.description"></span>
                    </p>
                  </v-card-text>
                </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              <v-btn
                v-for="(link, platform) in speaker.socials"
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
import amirfeizpour from "../static/speakers/amir_feizpour.jpeg";
import sumitchandel from "../static/speakers/sumit_chandel.jpeg";
import markkrysta from "../static/speakers/mark_kryska.jpg";
import alielsharif from "../static/team/ali.png";
import donward from "../static/team/don.png";
import godfreynolan from "../static/speakers/godfrey_nolan.jpg";
import garyocoburn from "../static/speakers/gary_coburn.jpeg";
import guaravkumarsingh from "../static/speakers/gaurav_kumar_singh.jpg";
import jeanettewashington from "../static/speakers/jeannette_washington.jpg";
import harishbhaskar from "../static/speakers/harish_bhaskar.jpg";

export default {
  data: () => ({
    speakers: [
      {
        name: "Keynote Speaker - Amir Feizpour",
        title: "Founder of Aggegate Intellect",
        image: amirfeizpour,
        description:
          'Amir Feizpour is the founder of <a href="https://ai.science/">Aggregate Intellect</a>, a company focused on making machine learning research and education more accessible, and runs a popular talk series called <a href="https://aisc.ai.science/">AISC</a>, on advanced machine learning topics. <p><p>Amir is a member of the steering committee of the Toronto Machine Learning Summit. In addition to these responsibilities, he is an NLP Product Lead on the Enterprise Data Science team at the Royal Bank of Canada. Prior to his current position, he held a post-doctoral position at the University of Oxford conducting research on experimental quantum computing. Amir holds a PhD in Physics from the University of Toronto.',
        socials: {
          // facebook: 'https://facebook.com',
          twitter: "https://twitter.com/amirfzpr",
          // github: 'https://github.com',
          linkedin: "https://www.linkedin.com/in/amirfzpr/"
        }
      },
      {
        name: "Sumit Chandel",
        title: "Sr Developer Advocate at Google",
        image: sumitchandel,
        description:
          "Sumit Chandel works as a senior developer advocate on Firebase, focusing on developer outreach both digitally and in-person by presenting at conferences and meetups globally. <p><p>Previously, Sumit managed the AdWords API advocacy team, worked on Android Wear and Instant Apps, and was a developer programs engineer on the Google Web Toolkit. Prior to joining Google, Sumit was a software engineer at Motorola, Optimal Payments and Westfield Insurance Group.",
        socials: {
          linkedin: "https://www.linkedin.com/in/sumit-chandel-a273792/",
          twitter: "https://twitter.com/s_chande"
        }
      },
      {
        name: "Harish Bhaskar",
        title:
          "President and Chief Consultant of Zero One Infinity Consulting (ZOIC) Services Ltd",
        image: harishbhaskar,
        description:
          "Dr. Harish Bhaskar is the President and Chief Consultant of Zero One Infinity Consulting (ZOIC) Services Ltd., an Ontario based AI Consulting company. Prior to ZOIC, Harish was a chief engineer at Samsung Electronics in India and an assistant professor/lead at the Visual Signal Analysis and Processing (VSAP) research center at Khalifa University, UAE. Harish also worked as a researcher, managing the Research and Development (R&D) of the Ministry of Defense (MoD) UK and European Union (EU)-funded projects at Lancaster and Manchester universities UK.  Harish is also a keen educator and has served on academic, research and advisory positions at various universities, including University of Waterloo and York University. In his university-related work, Harish has supervised and coached many students and interns on a variety of AI Projects in computer vision, natural language processing, robotics, behavioural analytics, and security; also advising many post-doctoral researchers on the same. In his 16+ years of work experience in AI across many industries, Harish continues to acquire funded research and development projects from the public and private sectors. Harish and his team operate jointly with several industrial partners in Canada and across the world in working towards the common goal of using advanced AI techniques to deliver effective autonomous solutions to practical business problems.",
        socials: {
          linkedin: "https://www.linkedin.com/in/harishbhasky/"
        }
      },

      {
        name: "Gary Coburn",
        title: "Google Cloud Customer Engineer",
        image: garyocoburn,
        description:
          "Gary is a Cloud Customer Engineer within Google's Customer Engineering group. In the past he has been purely infrastructure focused, architecting the entire storage and virtualization environment for a global manufacturing company through custom Dev/Ops and application development. He now spends time working in West Michigan to enable enterprise customers to utilize all of the great technology that Google has.",
        socials: {
          linkedin: "https://www.linkedin.com/in/garyocoburn/",
          twitter: "https://twitter.com/coburngary"
        }
      },
      {
        name: "Ali El-Sharif",
        title: "Business Intelligence Consultant at Motifworks",
        image: alielsharif,
        description:
          "Ali El-Sharif lives in Windsor and works as a Business Intelligence Consultant for Motifworks in metro Detroit.  Ali is a Ph.D. candidate at Nova Southeastern University, conducting research in Machine Learning interpretability.",
        socials: {
          facebook: "https://facebook.com/ali.elsharif.969",
          twitter: "https://twitter.com/elsharifali",
          github: "https://github.com/elsharifali",
          linkedin: "https://www.linkedin.com/in/elsharifali"
        }
      },
      {
        name: "Mark Kryska",
        title: "VP of Technology, Atlas Oil",
        image: markkrysta,
        description:
          "Mark Kryska is the Vice President Of Technology at Atlas Oil. He is an innovative and competent leader with a track record of meeting deadlines on high-impact projects that enhance performance, add value, effect change, drive profits and growth for diverse companies and organizations. His focus includes setting the IT strategy for a company that leads innovation in the Oil & Energy industry, Digital Transformation, and aligning IT to support business needs. Prior to his time at Atlas Oil he spent five years at Kelly Services, Inc where he was the Senior Director of Product Management & Strategy, and eight years working at Ernst & Young, LLP where he was a Manager in their Enterprise Intelligence practice. His relationship with innovation is driven by a love of mathematics and technology solutions. He received his undergraduate from University of Michigan in Computer Information Sciences and is currently enrolled in their MBA program. He currently resides in the Detroit Metro area with his wife and two children.",
        socials: {
          // facebook: 'https://facebook.com',
          // twitter: 'https://twitter.com',
          // github: 'https://github.com'
          linkedin: "https://www.linkedin.com/in/markkryska/"
        }
      },
      {
        name: "Gaurav Kumar Singh",
        title: "AV Research and Strategy, Ford Motor Company",
        image: guaravkumarsingh,
        description:
          "Gaurav brings expertise on emerging technologies like artificial intelligence and data science. He also dabbles in technical strategy and planning of autonomous vehicles (AV). Through speaking and panel gigs, he has shared platforms with prominent researchers and stakeholders of (AV) technology and expanded his network.",
        socials: {
          // facebook: 'https://facebook.com/ali.elsharif.969',
          // twitter: 'https://twitter.com/godfreynolan',
          // github: 'https://github.com/elsharifali',
          linkedin: "https://www.linkedin.com/in/gauravgks/"
        }
      },
      {
        name: "Godfrey Nolan",
        title: "Founder and President of RIIS LLC",
        image: godfreynolan,
        description:
          'Godfrey Nolan is founder and president of RIIS LLC, a mobile development firm in Troy. He is also the author of "Agile Android", "Bulletproof Android", "Android Best Practices", "Decompiling Android" and "Decompiling Java." Godfrey has spoken at DroidCon, AnDevcon as well as JavaOne, ASP-Connections, VSLive, Codemash, Code PaLOUsa, 1DevDay and many local Java and .Net user groups on a wide range of topics such as Continuous Integration, Unit Testing and mobile security.',
        socials: {
          // facebook: 'https://facebook.com/ali.elsharif.969',
          twitter: "https://twitter.com/godfreynolan",
          // github: 'https://github.com/elsharifali',
          linkedin: "https://www.linkedin.com/in/godfrey-nolan"
        }
      },

      {
        name: "Jeannette Washington",
        title: "Founder of Bearly Articulating",
        image: jeanettewashington,
        description:
          "I'm Jeannette Washington, M.Ed. I worked as a Speech Pathologist for a number of years before attending a coding bootcamp and transcending into a role with Microsoft teaching high school girls to code. My passion for exceptional learners has helped me ignite conversations across multiple dimensions of diversity in the tech industry. I currently teach introductory coding courses at Grand Circus Detroit and Im pioneering a company called Bearly Articulating, a concierge style, equity, diversity and inclusivity (D&I) think tank.",
        socials: {
          // facebook: 'https://facebook.com/ali.elsharif.969',
          twitter: "https://twitter.com/BearlyArtic",
          // github: 'https://github.com/elsharifali',
          linkedin: "https://www.linkedin.com/in/jlrwashington/"
        }
      },

      {
        name: "Don Ward",
        title: "Senior Research Engineer at Quicken Loans",
        image: donward,
        description:
          "Don Ward is a Senior Research Engineer at Quicken Loans, the nation's largest mortgage lender, which is based in Detroit, Michigan. As the previous Director of Mobile Development at Quicken Loans, he has been building mobile apps for the past 10 years. He leads the local chapters of the Google Developers Group in Detroit and Windsor, Canada. Always up for a good challenge, Don entered and won a 24-hour hackathon leveraging the power of wearables such as the Apple Watch. Recently, Don purchased an oversized boat and has been honing his captain skills on the Detroit River and Great Lakes. As an avid lover of all things Android, he's waiting on the boating industry to release an excellent Android chart plotter so he can write apps for his boat. To stay up-to-date with Don, follow him on Twitter at @donwardpeng.",
        socials: {
          facebook: "https://www.facebook.com/don.ward.395",
          twitter: "https://twitter.com/donwardpeng",
          github: "https://github.com/donwardpeng",
          linkedin: "https://www.linkedin.com/in/donwardpeng/"
        }
      }
    ]
  })
};
</script>