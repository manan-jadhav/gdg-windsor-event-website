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
import kylepaul from "../static/speakers/kylepaul.jpg";
import lizmerritt from "../static/speakers/liz_merritt.jpeg";
import kartikkuber from "../static/speakers/karthik_kuber.jpeg";
import annielee from "../static/speakers/annie_lee.jpeg";
import arafatkhan from "../static/speakers/arafat_khan.jpg";
import christastephens from "../static/speakers/christa_stephens.png"
import frankabbruzzese from "../static/speakers/frank_abbruzzese.png"
import yvonnepilon from "../static/speakers/yvonne_pilon.jpg"
import richardmccrae from "../static/speakers/richard_mccrae.jpeg"

export default [
  {
    id: 'amir',
    name: "Keynote Speaker - Amir Feizpour",
    title: "Founder of Aggegate Intellect",
    image: amirfeizpour,
    description:
      'Amir Feizpour is the founder of <a href="https://ai.science/">Aggregate Intellect</a>, a company focused on making machine learning research and education more accessible, and runs a popular talk series called <a href="https://aisc.ai.science/">AISC</a>, on advanced machine learning topics. <p><p>Amir is a member of the steering committee of the Toronto Machine Learning Summit. In addition to these responsibilities, he is an NLP Product Lead on the Enterprise Data Science team at the Royal Bank of Canada. Prior to his current position, he held a post-doctoral position at the University of Oxford conducting research on experimental quantum computing. Amir holds a PhD in Physics from the University of Toronto.',
    sessionTitle: "Bridging the AI Translation Gap",
    session:"Canada has been the birth place for many AI breakthroughs but we are still far behind countries like the United States and China in terms of translating all the innovation and brain power into impactful technologies.<p><p>There is a larger challenge in Canada where we are producing tens of thousands of AI related papers every year globally, a large number of which, for good or bad reasons, go completely unnoticed, and the few ones that makes a splash rarely result in significant technological advances. This so called translation gap has existed in many areas but we now have a historical opportunity to address the problem more efficiently using AI. During this talk, Amir will share his thoughts about why this gap exists and more importantly why it is widening. Additionally he will share what some of the early signs are that we have an opportunity to reinvent the way we do inventions.",
    socials: {
      // facebook: 'https://facebook.com',
      twitter: "https://twitter.com/amirfzpr",
      // github: 'https://github.com',
      linkedin: "https://www.linkedin.com/in/amirfzpr/"
    }
  },
  {
    id: 'frank',
    name: "Frank Abbruzzese",
    title:
      "President of AlphaKOR Group",
    image: frankabbruzzese,
    description:
      "Frank Abbruzzese is the president of AlphaKOR Group, with over 31 years of experience in the Technology Sector.  Frank’ experiences include developing long-term relationships with companies and organizations, providing strategic planning for technology advancement, co-founder WEtech Alliance, Entrepreneur of the Year Chamber Business Excellence 2012, mentor and known as “The Connector”.",
    socials: {
      twitter: "https://twitter.com/FrankAbbruzzese",
      linkedin: "https://linkedin.com/in/frankabbruzzese"
    }
  },
  {
    id: 'harish',
    name: "Harish Bhaskar",
    title:
      "President and Chief Consultant of Zero One Infinity Consulting (ZOIC) Services Ltd",
    image: harishbhaskar,
    description:
      "Dr. Harish Bhaskar is the President and Chief Consultant of Zero One Infinity Consulting (ZOIC) Services Ltd., an Ontario based AI Consulting company. <p><p>Prior to ZOIC, Harish was a chief engineer at Samsung Electronics in India and an assistant professor/lead at the Visual Signal Analysis and Processing (VSAP) research center at Khalifa University, UAE. Harish also worked as a researcher, managing the Research and Development (R&D) of the Ministry of Defense (MoD) UK and European Union (EU)-funded projects at Lancaster and Manchester universities UK.  <p><p>Harish is also a keen educator and has served on academic, research and advisory positions at various universities, including University of Waterloo and York University. In his university-related work, Harish has supervised and coached many students and interns on a variety of AI Projects in computer vision, natural language processing, robotics, behavioural analytics, and security; also advising many post-doctoral researchers on the same. In his 16+ years of work experience in AI across many industries, Harish continues to acquire funded research and development projects from the public and private sectors. Harish and his team operate jointly with several industrial partners in Canada and across the world in working towards the common goal of using advanced AI techniques to deliver effective autonomous solutions to practical business problems.",
    sessionTitle:"Production-Grade ML for Real-world Business Problems",
    session:"Building and deploying an ML algorithm for real-world business problems has shifted into a non-prescriptive approach to solution development. This requires an iterative experiment-validation cycle to effectively assess the behavior of models as it evolves over real-time and system-level changes. Therefore, constant monitoring and improvements are required to facilitate system-level interactions and interfaces that resolve the weak abstraction boundaries that does not fit into tidy encapsulation. In this presentation, using our consulting experience and a real-world problem as a use-case, I will cover aspects of designing a production-grade ML architecture along with testing concepts.",
    socials: {
      linkedin: "https://www.linkedin.com/in/harishbhasky/"
    }
  },
  {
    id: 'gary',
    name: "Gary Coburn",
    title: "Google Cloud Customer Engineer",
    image: garyocoburn,
    description:
      "Gary is a Cloud Customer Engineer within Google's Customer Engineering group. In the past he has been purely infrastructure focused, architecting the entire storage and virtualization environment for a global manufacturing company through custom Dev/Ops and application development. He now spends time working in West Michigan to enable enterprise customers to utilize all of the great technology that Google has.",
    sessionTitle: "Containers, Kubernetes, and the Multi-cloud journey",
    session:
      "Starting at the base of portability we will dive into containers as a delivery method for applications, how they are orchestrated and even how to deploy those across multiple clouds. This will highlight the both open source build your own, and the benefits of using Google Cloud technologies to move faster and manage the underlying components.",
    socials: {
      linkedin: "https://www.linkedin.com/in/garyocoburn/",
      twitter: "https://twitter.com/coburngary"
    }
  },
  {
    id: 'sumit',
    name: "Sumit Chandel",
    title: "Sr Developer Advocate at Google",
    image: sumitchandel,
    description:
      "Sumit Chandel works as a senior developer advocate on Firebase, focusing on developer outreach both digitally and in-person by presenting at conferences and meetups globally. <p><p>Previously, Sumit managed the AdWords API advocacy team, worked on Android Wear and Instant Apps, and was a developer programs engineer on the Google Web Toolkit. Prior to joining Google, Sumit was a software engineer at Motorola, Optimal Payments and Westfield Insurance Group.",
    sessionTitle: "An Overview of Firebase",
    session:"Firebase is Google's mobile platform that helps you quickly develop high-quality apps. Using Firebase, you have access to every service that a modern mobile and web app would need. Firebase gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users. During this discussion on Firebase, Sumit Chandel, a Senior Developer Advocate on Firebase will discuss all Firebase has to offer.",
    socials: {
      linkedin: "https://www.linkedin.com/in/sumit-chandel-a273792/",
      twitter: "https://twitter.com/s_chande"
    }
  },
  {
    id: 'ali',
    name: "Ali El-Sharif",
    title: "Business Intelligence Consultant at Motifworks",
    image: alielsharif,
    description:
      "Ali El-Sharif lives in Windsor and works as a Business Intelligence Consultant for Motifworks in metro Detroit.  Ali is a Ph.D. candidate at Nova Southeastern University, conducting research in Machine Learning interpretability.",
    sessionTitle: "No Math, No Code, No Problem.  Explaining Machine Learning to a Business Audience",
    session:"",  
    socials: {
      facebook: "https://facebook.com/ali.elsharif.969",
      twitter: "https://twitter.com/elsharifali",
      github: "https://github.com/elsharifali",
      linkedin: "https://www.linkedin.com/in/elsharifali"
    }
  },
  {
    id: 'arafat',
    name: "Arafat Khan",
    title: "Developer at Shopify",
    image: arafatkhan,
    description:
      "Arafat is a backend developer at Shopify.ca. He is fascinated by the mysteries of programming and logic. He loves experimenting and playing with code and this leads him to become the author of Tensorflow.rb ( The Ruby API of Tensorflow, the most popular Machine Learning Library). He has also made some interesting projects in Golang. <p><p>When he isn’t in front of his laptop he is hiking, kayaking, skating and doing all things outdoorsy.",
    sessionTitle: "Introducing Tensorflow Ruby API",
    session: "Ruby has been mostly restricted to web development and scripting, until now. In this talk, I will introduce Tensorflow.rb to the Ruby community to give them a glimpse of how they can do basic Machine Learning in Ruby.",
    socials: {
      // facebook: 'https://facebook.com',
      // twitter: 'https://twitter.com',
      github: " https://github.com/Arafatk"
      // linkedin: "https://www.linkedin.com/in/markkryska/"
    }
  },
  {
    id: 'mark',
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
    id: 'karthik',
    name: "Karthik Kuber",
    title: "Director of AI/ML, Loblaw Companies Limited",
    image: kartikkuber,
    description:
      "Karthik Kuber is a Director of AI/ML at Loblaw Companies Limited and an adjunct instructor of Machine Learning at York University in Toronto. He has several years of academic research as well as applied data science experience primarily in the technology and banking sectors. His current interests are in exploring and applying various ML techniques in the context of large-scale engineering systems with a special emphasis on interpretability. Previously, he was at RBC in Toronto, at Microsoft in Redmond WA, and had received his PhD in 2014 from Syracuse University in Computer Science focusing on Evolutionary Computation. He is also an instructor and university ambassador for NVIDIA's Deep Learning Institute, has co-organised three editions of the International Workshop on Evolutionary Rule-based ML, and volunteers actively with DataKind on projects applying Data Science for social causes.",
    socials: {
      // facebook: 'https://facebook.com',
      // twitter: 'https://twitter.com',
      // github: 'https://github.com'
      linkedin: "https://www.linkedin.com/in/karthikkuber/"
    }
  },
  {
    id: 'annie',
    name: "Annie Lee",
    title: "Research Scientist at Stradigi AI",
    image: annielee,
    description:
      "Dr. Lee is a Research Scientist in Natural Language Understanding at Stradigi AI.  Dr. Lee holds a PhD from the University of Waterloo at the Centre of Pattern Analysis and Machine Intelligence and has more than a decade of experience in data mining and machine learning. Dr. Lee's passion for finding patterns in society and in nature in the big data era has lead to dozens of publications in computational advertising, sentiment analysis, and sequence analysis, including a highly-read review paper on big data. Most notably, Dr. Lee developed interpretable unsupervised algorithms, which uncovered patterns utilizing clustering and partitioning of raw data and a priori knowledge.<p><p>Currently, at Stradigi AI, Dr. Lee designs competitive deep learning algorithms applied to document classification (such as sentiment analysis, topic classification), named entity recognition, and keyphrase extraction.  Previously, Dr. Lee was the Lead Research Scientist for the Data Science team at VerticalScope Inc., where she drove the efforts for the in-house academic research, algorithmic implementations, and evaluations on identifying product names, sentiments analysis towards product features, and topic modeling in order to generate key business insights for reporting brand and site health. <p><p>Dr. Lee has served as the funding chair for Broadening Participation in Data Mining co-hosted with KDD (Knowledge Discovery and Data Mining) and was a co-chair of Women in Machine Learning, co-hosted with Neural Information Processing Systems (NeurIPs, previously NIPS).",
    socials: {
      // facebook: 'https://facebook.com/ali.elsharif.969',
      // twitter: "https://twitter.com/godfreynolan",
      // github: 'https://github.com/elsharifali',
      linkedin: "https://www.linkedin.com/in/drannielee/"
    }
  },
  {
    id: 'richard',
    name: "Richard McCrae",
    title: "Independent Computer Software Professional",
    image: richardmccrae,
    description:
      "Richard has a 20+ year history of consulting primarily in the Quality Assurance space.  Activities included teaching and mentoring adult learners using technical material in a variety of settings including in-person and remote sessions, consulting on best practices and implementation of various tools (Application Life Cycle Management (ALM), Unified Functional Testing (UFT), LoadRunner (LR) and WinRunner (currently discontinued).  He holds a PhD (Computer Science) from Nova Southeastern University, Florida (2018), MSC (Computer Science) from Queen’s University (1995), and an MBA from Syracuse University (1997). <p><p>His dissertation and current research interests are related to AI, specifically reducing the cost and improving the accuracy of classifiers.",   	
    socials: {
      // facebook: 'https://facebook.com/ali.elsharif.969',
      // twitter: "https://twitter.com/godfreynolan",
      // github: 'https://github.com/elsharifali',
      linkedin: "https://www.linkedin.com/in/rick-mccrae-2057935"
    }
  },
  {
    id: 'godfrey',
    name: "Godfrey Nolan",
    title: "Founder and President of RIIS LLC",
    image: godfreynolan,
    description:
      'Godfrey Nolan is founder and president of RIIS LLC, a mobile development firm in Troy. He is also the author of "Agile Android", "Bulletproof Android", "Android Best Practices", "Decompiling Android" and "Decompiling Java." Godfrey has spoken at DroidCon, AnDevcon as well as JavaOne, ASP-Connections, VSLive, Codemash, Code PaLOUsa, 1DevDay and many local Java and .Net user groups on a wide range of topics such as Continuous Integration, Unit Testing and mobile security.',
    sessionTitle: "Agile AI Testing",
    session: "Common Agile practice is to write lots of unit tests and API tests and only a few User Interface tests. Why? Because if the UI changes then you're going to have to rewrite all of your UI tests. But what if we could use Artificial Intelligence to help us out. Many of our apps have the same functionality such as login, checkout, share, pay etc. So what if we could train a neural network to test our apps? In this session we'll look at Test.ai and how it uses Object Detection and labeling techniques to make our UI tests less brittle.",
    socials: {
      // facebook: 'https://facebook.com/ali.elsharif.969',
      twitter: "https://twitter.com/godfreynolan",
      // github: 'https://github.com/elsharifali',
      linkedin: "https://www.linkedin.com/in/godfrey-nolan"
    }
  },
  {
    id: 'kyle',
    name: "Kyle Paul",
    title: "Program Manager of Developer Ecosystems, Google",
    image: kylepaul,
    description:
      "Kyle works for Google in Mountain View, California. His job on the Developer Relations team is to support awesome developer communities, like the Google Developer Groups. In his spare time he enjoys building and hacking on the web, playing with his two cats, and photographing the outdoors. Before Google, Kyle was a startup founder, organizer for GDG Kansas City, and a Google Developer Expert (GDE).",
    sessionTitle:"What are Progressive Web Apps and How do they work?",
    session:"The web is advancing at an alarming rate and browsers are providing new features giving web developers the ability to features to engage with mobile users. Using PWAs, web developers can provide 'app like' experiences for their web apps without the need for a native (or hybrid) app.",
    socials: {
      // facebook: 'https://facebook.com/ali.elsharif.969',
      twitter: "https://twitter.com/_kylepaul",
      // github: 'https://github.com/elsharifali',
      linkedin: "https://www.linkedin.com/in/kylepaul/"
    }
  },
  {
    id: 'yvonne',
    name: "Yvonne Pilon",
    title: "President and CEO, WEtech Alliance",
    image: yvonnepilon,
    description:
      'Yvonne Pilon is the President and CEO of WEtech Alliance, 1 of 17 Regional Innovation Centres funded by the Province of Ontario. At the age of 24, she founded her first tech venture, AD2IT, and by the age of 29, she became the youngest female to lead a Regional Innovation Centre. Yvonne has over 10 years experience in the tech sector with a core focus on growing companies and building a thriving entrepreneurial community. Yvonne recently took her love for tech to the airwaves as Host of the ‘Tech In The City’ podcast where she likes to consider herself the Carrie Bradshaw of tech. Yvonne was also just recognized as a Top Social Media Influencer in Canadian Tech. Follow her at @yvonnepilon.',
    sessionTitle: "Get to Know & Get Plugged into the Windsor-Essex Tech Scene",
    session: "The Windsor-Essex Tech Scene has a lot to offer! You need to be plugged into it - whether you are a student, professional or an employer. In this session, Yvonne will share how to uncover opportunities to network, land that prized tech job, tap into the pool of local tech talent, and connect with our region’s growing tech community and its programs, events and initiatives.",
    socials: {
      // facebook: 'https://facebook.com/ali.elsharif.969',
      twitter: "https://twitter.com/yvonnepilon",
      // github: 'https://github.com/elsharifali',
      linkedin: "https://www.linkedin.com/in/yvonnepilon/"
    }
  },
  {
    id: 'gaurav',
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
    id: 'christa',
    name: "Christa Stephens",
    title: "Software Developer",
    image: christastephens,
    description:
      "During my days of being a student at Grand Circus' Coding Boot camp in Detroit, I was under a lot of stress. My days would start at 6 am and end at 9 pm. \"Code Until Complete\" was my mantra. In addition to boot camp life, I had a regular life, being a mom and a wife, a yoga instructor, geologist, gardener...you get the picture. I have a ton of responsibilities with fewer hours than the next human to complete all of these things -successfully. How do I keep my sanity? Meditation and yoga. I began yoga as a weight-loss journey 10 years ago and found out that the practice held so much more than just some \"trendy diet fad\". Being a scientist, I delved deep into why meditation was calming. I needed to know how it worked and why the yoga poses (called asanas) aided in meditation. Although stress comes and goes, I have a toolkit of coping mechanisms to combat my \"mom list\" and the ability to debug any code you throw at me.",
    sessionTitle:"OOP VS Dopamine Lead Programming",
    session:"Do you remember when you wrote your first line of code? Or solved fizz-buzz? What about programming the Fibonacci sequence? I'm sure you felt like the smartest person that ever used an IDE (maybe replace with laptop). But how long did that feeling last? Maybe a few seconds – a minute, I\'m sure it wasn\'t a week, right? You went scurrying along to find the next \"big thing\" to crack. To prove to yourself that\" I\'m smart, I\'m a programmer and I know things\"! But did you realize that you were in a loop? Not a lame Do While loop or the far superior enhanced for loop, I\'m talking the Dopamine Loop. Instead of learning how to break out of the infinite loop of (insert infinite loop prob) you are continually feeding the infinite Dopamine Loop. Dopamine is a chemical that is produced by the body that pretty much gives us a \"gold star\" forever time we get something right. It helps us chase the next \"gold star\" but not the same gold star, oh no, this time the star must be bigger and brighter. Sounds a bit more powerful than the enhanced for-loop! With any loop, you need to create a break and step away from the computer. During my talk, we will discuss \"breaking the loop\" by:<p><p>*Understanding Dopamine *Understanding Cortisol *How These Chemicals Interact with the Body *Mindful Work *Meditation *Taking Breaks",
    socials: {
      // facebook: 'https://facebook.com/ali.elsharif.969',
      // twitter: 'https://twitter.com/godfreynolan',
      // github: 'https://github.com/elsharifali',
      linkedin: "https://www.linkedin.com/in/christastephens/"
    }
  },
  {
    id: 'jeannette',
    name: "Jeannette Washington",
    title: "Founder of Bearly Articulating",
    image: jeanettewashington,
    description:
      "I'm Jeannette Washington, M.Ed. I worked as a Speech Pathologist for a number of years before attending a coding bootcamp and transcending into a role with Microsoft teaching high school girls to code. My passion for exceptional learners has helped me ignite conversations across multiple dimensions of diversity in the tech industry. I currently teach introductory coding courses at Grand Circus Detroit and Im pioneering a company called Bearly Articulating, a concierge style, equity, diversity and inclusivity (D&I) think tank.",
    sessionTitle: "The Mental Health Code",
    session: "With 1 in 5 adults living with mental illness, such as depression and anxiety, it's safe to acknowledge that how we define diversity and inclusion has to evolve. Though noticeable efforts in intersections like race, class, gender and sexual identity have been made, when will mental health be apart of the diversity and inclusion pitch? <p><p>Learn ways that companies like Google are leading the charge to destigmatize mental health, understand your role in supporting mental health awareness and adopt techniques to safeguard your mental health while working on demanding projects. ",
    socials: {
      // facebook: 'https://facebook.com/ali.elsharif.969',
      twitter: "https://twitter.com/BearlyArtic",
      // github: 'https://github.com/elsharifali',
      linkedin: "https://www.linkedin.com/in/jlrwashington/"
    }
  },
  {
    id: 'don',
    name: "Don Ward",
    title: "Senior Research Engineer at Quicken Loans",
    image: donward,
    description:
      "Don Ward is a Senior Research Engineer at Quicken Loans, the nation's largest mortgage lender, which is based in Detroit, Michigan. As the previous Director of Mobile Development at Quicken Loans, he has been building mobile apps for the past 10 years. He leads the local chapters of the Google Developers Group in Detroit and Windsor, Canada. Always up for a good challenge, Don entered and won a 24-hour hackathon leveraging the power of wearables such as the Apple Watch. Recently, Don purchased an oversized boat and has been honing his captain skills on the Detroit River and Great Lakes. As an avid lover of all things Android, he's waiting on the boating industry to release an excellent Android chart plotter so he can write apps for his boat. To stay up-to-date with Don, follow him on Twitter at @donwardpeng.",
    sessionTitle:"Flutter for Web",
    session:"In this talk, we will talk about the current state of Flutter for Web and considerations for developing a website using it.",
    socials: {
      facebook: "https://www.facebook.com/don.ward.395",
      twitter: "https://twitter.com/donwardpeng",
      github: "https://github.com/donwardpeng",
      linkedin: "https://www.linkedin.com/in/donwardpeng/"
    }
  }
]