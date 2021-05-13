<template>
  <div id="info">
    <b-card class="mb-5 round_borders" bg-variant="primary">
      <BCardTitle>{{ selectedTitle[0].mainTitle }}</BCardTitle>
      <div v-for="(paragraph, key) in orderedParapgraphs" :key="key+'paragraph'">
        <BCardText v-html="paragraph.content" class="mb-3">
        </BCardText>
      </div>
      <BCardTitle>{{selectedTitle[0].languageTitle}}</BCardTitle>
      <BCardFooter v-for="(language, index) in languages" :key="index">
        <BCardText>{{language.name}} ({{language.level}})</BCardText>
      </BCardFooter>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BCardFooter,
  BCardText,
  BCardTitle
} from 'bootstrap-vue';

export default {
  props: {
    selectedLanguage: String
  },
  components: {
    BCard,
    BCardFooter,
    BCardText,
    BCardTitle
  },
  data() {
    return {
      titlesByLanguage: [
        {
          language: 'en',
          mainTitle: 'Personal Information',
          languageTitle: 'Languages'
        },
        {
          language: 'es',
          mainTitle: 'Información Personal',
          languageTitle: 'Idiomas'
        }
      ],
      languages: [
        {
          name: 'Spanish',
          level: 'Native'
        },
        {
          name: 'English',
          level: 'Bilingual'
        },
        {
          name: 'French',
          level: 'Intermediate'
        },
        {
          name: 'Japanese',
          level: 'Basic'
        },
      ],
      orderedParapgraphs: [],
      descriptionParagraphs: [
        {
          order: 0,
          content: `I consider myself a young, responsible and proactive man with solid knowledge of Object Oriented Programming
          in the Java (Spring, Spring Boot) and Javascript (Vanilla ES6 and Vue.js) programming languages. I also have
          solid knowledge of HTML5, CSS3 (with Bootstrap 4, Vuetify and Material Design) as well as knowledge of SQL (MariaDB,
          MySQL and Sybase) and NoSQL (Google Cloud Datastore and MongoDB) Database queries.`
        },
        {
          order: 1,
          content: `I also have a solid grasp of deployment technologies such as Web Servers (Apache Tomcat, Nginx),
          architectures (REST APIs and Microservices), container building and orchestation tools (specifically
          Docker and Kubernetes), Cloud Development technologies (such as Azure and Google Cloud Platform/GCP),
          and CI/CD Pipelines.`
        },
        {
          order: 2,
          content: `Finally, I have experience working with Operating Systems and Server Administration through Linux,
          both Debian Based (Linux Mint, Ubuntu 18) and Red Hat based (RHEL7) with regular use of Bash Scripting
          for the automation of repetitive tasks, performance and network monitoring, and system resource management. I also
          have basic knowledge of Windows Powershell`
        }
      ]
    };
  },
  methods: {
    orderParapgraphs() {
      this.orderedParapgraphs = this.descriptionParagraphs.sort((x, y) => x.order - y.order);
    }
  },
  computed: {
    selectedTitle() {
      return this.titlesByLanguage.filter((title) => title.language === this.selectedLanguage);
    }
  },
  mounted() {
    this.orderParapgraphs();
  }
};
</script>

<style lang="scss" scoped>

</style>
