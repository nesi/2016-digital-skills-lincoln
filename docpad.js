module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Digital Skills for Research Training at Lincoln",
      description: "This event provides an opportunity for all researchers to improve their computational lab skills through a number of hands-on training sessions. Training modules are offered by experienced researchers who are keen to share their knowledge and skills with their research communities.",
      date: "October 17-21st, 2016",
      // If your event is free, just comment this line
    //  #price: "free",
      venue: "CRI offices",
      address: "Gerald Street",
      city: "Lincoln",
      code: "7608",
      country: "New Zealand"

    },


    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://nesi.github.io/2016-digital-skills-lincoln",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'partners',
      'location',
      'speakers',
      'schedule',
      //'sponsors',

      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Sessions",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Organisers",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [

     {

         //name: "Software Carpentry",
         bio: "Software Carpentry is a hands on workshop helping researchers develop their computational lab skills.",
         link:{
           href: "http://software-carpentry.org/",
           text: "Software Carpentry"
         },
         link:{
           href: "https://apawlik.github.io/2016-10-17-lincoln/",
           text: "Details and registration"
         },

       presentation: {
        title: "Software Carpentry - day 1",
        description: "Software Carpentry is a hands on workshop helping researchers develop their computational lab skills.",
        time: "Monday 10am - 4:30 pm"
       }
      },



     {
         //name: "Software Carpentry",
         bio: "Software Carpentry is a hands on workshop helping researchers develop their computational lab skills.",
         link:{
           href: "http://software-carpentry.org/",
           text: "Software Carpentry"
         },
         link:{
           href: "https://apawlik.github.io/2016-10-17-lincoln/",
           text: "Details and registration"
         },
      presentation: {
        title: "Software Carpentry - day 2",
        description: "Software Carpentry is a hands on workshop helping researchers develop their computational lab skills.",
        time: "Tuesday 10:15 am - 4:30 pm"
      }
   },


{
         //name: "Statistics with R",
         bio: "Exploratory Data Analysis with R - part 1",
       
         link:{
//           href: "https://apawlik.github.io/2016-10-17-lincoln/",
           text: "Details and registration"
         },
      presentation: {
        title: "Exploratory Data Analysis with R - part 1",
        description: "Introduction do doing statistics with R.",
        time: "Wednesday 10:00 am - 12:00 pm"
      }
   },



{
         //name: "Statistics with R",
         bio: "Exploratory Data Analysis with R - part 2",
       
         link:{
//           href: "https://apawlik.github.io/2016-10-17-lincoln/",
           text: "Details and registration"
         },
      presentation: {
        title: "Exploratory Data Analysis with R - part 2",
        description: "Introducing R by Graphs",
        time: "Wednesday 1:00 pm - 3:00 pm"
      }
   },



 {
       //name: "Genome assembly",
       bio: "Genome assembly",
       link:{
         //href: "http://software-carpentry.org/",
         //text: "Software Carpentry"
       },
       link:{
         //href: "https://apawlik.github.io/2016-10-17-lincoln/",
         text: "Details and registration"
       },
    presentation: {
      title: "Genome Assembly module",
      description: "",
      time: "Wednesday,  Duration: 6 hrs"
    }
 },




 {
       //name: "Introduction to Bayesian Statistics",
       bio: "Introduction to Bayesian Statistics",
       link:{
         //href: "https://apawlik.github.io/2016-10-17-lincoln/",
         text: "Details and registration"
       },
    presentation: {
      title: "Introduction to Bayesian Statistics",
      description: "Introduction to Bayesian Statistics",
      time: "Thursday,  Duration: 6 hrs"
    }
 },


 {
       //name: "Random Effect Models",
       bio: "Random Effect Models",
       link:{
         //href: "https://apawlik.github.io/2016-10-17-lincoln/",
         text: "Details and registration"
       },
    presentation: {
      title: "Random Effect Models",
      description: "Random Effect Models",
      time: "Friday,  Duration: 4 hrs"
    }
 },


 {
       //name: "Random Effect Models",
       bio: "Random Effect Models",
       link:{
         //href: "https://apawlik.github.io/2016-10-17-lincoln/",
         text: "Details and registration"
       },
    presentation: {
      title: "Random Effect Models",
      description: "Random Effect Models",
      time: "Friday,  Duration: 4 hrs"
    }
 },


   {
       bio: "How to start on NeSI HPC infrastructure. This session provides hands-on introduction to using NeSI-provided clusters.",
       link:{
         href: "http://www.nesi.org.nz/",
         text: "New Zealand e-Science Infrastructure"
       },
       link:{
        // href: "",
         text: "Details and registration"
       },
    presentation: {
      title: "Starting on NeSI HPC",
      description: "Using High Performance Computing with NeSI. Duration: 3 h",
      time: "TBA"
    }
 },



 {
     bio: "Intermediate version control with Git and GitHub.",
     link:{
      // href: "",
       text: "Details and registration"
     },
  presentation: {
    title: "Intermediate version control with Git and GitHub",
    description: "This session builds on the top of the Software Carpentry version control module. We will cover topics such as branching, forking on GitHub and creating Pull Requests. Duration: 3-4 hours",
    time: "TBA"
  }
},


{
    bio: "Research Data Management",
    link:{
  //    href: "http://www.nesi.org.nz/",
  //    text: "New Zealand e-Science Infrastructure"
    },
    link:{
     // href: "",
      text: "Details and registration"
    },
 presentation: {
   title: "Research Data Management Plans",
   description: "Managing your research data - best practices. Duration: 2 h",
   time: "TBA"
 },
},


     {
         //name: "Introduction to Python",
         bio: "Developing software with Python.",
                link:{
           //href: "https://apawlik.github.io/2016-10-17-lincoln/",
           text: "Details and registration"
         },
      presentation: {
        title: "Developing software with Python",
        description: "Essential Python for researchers.",
        time: "TBA Duration: 3 hrs"
      }
   },



  







],


    // List of Partners
    partners: [
      {
        name: "Landcare Research",
        logo: "themes/yellow-swan/img/landcare.jpg",
        url: "http://www.landcareresearch.co.nz/"
      },

      {
        name: "Plant & Food Research",
        logo: "themes/yellow-swan/img/pfr.png",
        url: "http://www.plantandfood.co.nz/"
      },

      {
        name: "AgResearch",
        logo: "themes/yellow-swan/img/ag_research.png",
        url: "http://www.agresearch.co.nz/"
      },

      {
        name: "Lincoln University",
        logo: "themes/yellow-swan/img/lincoln.jpg",
        url: "http://www.lincoln.ac.nz/"
      },

      {
        name: "NeSI",
        logo: "themes/yellow-swan/img/nesi.png",
        url: "http://www.nesi.org.nz/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
