<template>
  <b-card class="mb-5 round_borders" bg-variant="secondary">
    <b-card-title>{{ selectedTitle[0].mainTitle }}</b-card-title>
      <b-row>
        <b-col cols="12" md="4" v-for="(job, index) in jobList" :key="index">
          <b-card
            style="width: 15rem; height: 23.3rem;"
            class="mb-4 mx-4 ml-4 bg-terciary round_borders"
          >
            <b-card-title>{{ job.company }}</b-card-title>
            <b-card-img style="width: 100%; height: 35%; background-color: #DCDCDC;" class="round_borders p-1 mt-n2 mb-1"
              :src="require(`../../assets/img/jobs/${job.image}`)"
              alt="Image" top>
            </b-card-img>
            <b-card-text class="card_content_fonts">
              <b>{{selectedTitle[0].positionTitle}}</b> {{generatePositionString(job.position)}}
            </b-card-text>
            <b-card-text class="mt-n3 card_content_fonts">
              <b>{{selectedTitle[0].durationTitle}}</b> {{job.endYear !== null ? job.duration : selectedTitle[0].nullEndDate}}
            </b-card-text>
            <b-card-text class="mt-n3 card_content_fonts">
              <b>{{selectedTitle[0].placeTitle}}</b>{{job.city+', '+job.city}}
            </b-card-text>
            <b-card-text class="mt-n3 card_content_fonts">
              <b>{{selectedTitle[0].modalityTitle}}</b>{{job.modality}}
            </b-card-text>
          </b-card>
        </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BCardText,
  BCardTitle, BRow,
  BCardImg, BCol
} from 'bootstrap-vue';

export default {
  props: {
    selectedLanguage: String
  },
  components: {
    BCard,
    BCardTitle,
    BCardText,
    BRow,
    BCardImg,
    BCol
  },
  data() {
    return {
      titlesByLanguage: [
        {
          language: 'en',
          mainTitle: 'Work Experience',
          positionTitle: 'Position: ',
          durationTitle: 'Duration: ',
          placeTitle: 'Place: ',
          modalityTitle: 'Modality: ',
          nullEndDate: 'To-Date'
        },
        {
          language: 'es',
          mainTitle: 'Experiencia Laboral',
          positionTitle: 'Puesto: ',
          durationTitle: 'Duración: ',
          placeTitle: 'Lugar: ',
          modalityTitle: 'Modalidad: ',
          nullEndDate: 'Hasta la fecha'
        }
      ],
      jobList: [
        {
          company: 'Epidata Consulting S.A',
          image: 'epi.jpg',
          duration: '4 Months',
          city: 'Buenos Aires',
          country: 'Argentina',
          modality: 'In-Office',
          position: ['DevOps Engineer'],
          startYear: 2019,
          endYear: 2020,
        },
        {
          company: 'Agnostic IT S.A',
          image: 'agnostic.png',
          duration: '1 Year',
          city: 'Buenos Aires',
          country: 'Argentina',
          modality: 'Remote',
          position: ['Java Backend Developer'],
          startYear: 2020,
          endYear: 2021,
        },
        {
          company: 'Reemp - Revolution of Employment',
          image: 'logo.png',
          duration: '4 Months',
          city: 'Medellin',
          country: 'Colombia',
          modality: 'Remote',
          position: ['Fullstack Developer (Vue.js+Django)', 'Scrum Master'],
          startYear: 2021,
          endYear: 2021,
        },
        {
          company: 'Epidata Consulting S.A',
          image: 'epi.jpg',
          duration: 'To-Date',
          city: 'Buenos Aires',
          country: 'Argentina',
          modality: 'Remote',
          position: ['Fullstack Developer (React.js+React-Native+Spring Boot)'],
          startYear: 2020,
          endYear: null,
        },
      ]
    };
  },
  computed: {
    selectedTitle() {
      return this.titlesByLanguage.filter((title) => title.language === this.selectedLanguage);
    }
  },
  methods: {
    generatePositionString(list) {
      if (list.length === 0 || list === undefined) {
        return 'Error';
      }
      if (list.length === 1) {
        return list[0];
      }
      return list.join(', ');
    }
  }
};
</script>

<style lang="scss" scoped>
.card_content_fonts{
  font-size: 14px;
}

.round_borders{
  border-radius: 18px;
}

</style>
