<template>
  <b-card class="mb-5 round_borders" bg-variant="secondary">
    <b-card-title>{{ selectedTitle[0].mainTitle }}</b-card-title>
    <FormalStudiesCard :selectedTitle="selectedTitle[0]" :formalStudies="formalStudies"/>

    <b-card-title>{{ selectedTitle[0].secondTitle }}</b-card-title>
    <CoursesCard :selectedTitle="selectedTitle[0]" :courseList="courseList" />
  </b-card>
</template>

<script>
import {
  BCard,
  BCardTitle,
} from 'bootstrap-vue';
import FormalStudiesCard from './FormalStudiesCard/FormalStudiesCard.vue';
import CoursesCard from './CoursesCard/CoursesCard.vue';

export default {
  props: {
    selectedLanguage: String
  },
  components: {
    BCard,
    BCardTitle,
    FormalStudiesCard,
    CoursesCard
  },
  data() {
    return {
      titlesByLanguage: [
        {
          language: 'en',
          mainTitle: 'Formal Education',
          secondTitle: 'Courses and Diplomas',
          formalCourseTitle: 'Career: ',
          formalStartTitle: 'Start year: ',
          formalEndTitle: 'End year: ',
          nullEndDate: 'To Date',
          semesterAmountTitle: 'Completed Semesters: ',
          informalCourseTitle: 'Course:',
          informalPlaceTitle: 'Place: ',
          informalYearTitle: 'Year: ',
          certificateButtonText: 'Show Certificate'
        },
        {
          language: 'es',
          mainTitle: 'Educación Formal',
          secondTitle: 'Cursos y Diplomas',
          formalCourseTitle: 'Carrera',
          formalStartTitle: 'Año de inicio: ',
          formalEndTitle: 'Año de fin: ',
          nullEndDate: 'Hasta la fecha',
          semesterAmountTitle: 'Semestres Completos: ',
          informalCourseTitle: 'Curso:',
          informalPlaceTitle: 'Lugar: ',
          informalYearTitle: 'Año: ',
          certificateButtonText: 'Mostrar Certificado'
        }
      ],
      formalStudies: [
        {
          institution: 'University of Buenos Aires',
          image: 'UBA.png',
          courseTitle: 'Bachelors Degree in Computer Science',
          courseDescription: 'Principles and advanced concepts of computation, from algorithms and Data Structures to Relational Databases and Data Modelling.',
          startYear: 2019,
          endYear: null,
          finishedSemesters: 0,
        },
        {
          institution: 'University Fermín Toro',
          image: 'UFT.png',
          courseTitle: 'Bachelors Degree in Computer Engineering',
          courseDescription: 'Principles and advanced concepts of systems engineering, from algorithms and Data Structures to Web Server configuration and monitoring.',
          startYear: 2015,
          endYear: 2017,
          finishedSemesters: 0,
        },
        {
          institution: 'National Experimental University "Antonio José de Sucre" - UNEXPO',
          image: 'UNEXPO.png',
          courseTitle: 'Bachelors Degree in Mechanical Engineering',
          courseDescription: 'Course focused on mechanics, movement, force, thermodynamics and fluid mechanics',
          startYear: 2014,
          endYear: 2017,
          finishedSemesters: 0,
        },
      ],
      courseList: [
        {
          year: 2020,
          institution: 'Educacion IT',
          courseTitle: 'Java Career',
          city: 'Buenos Aires',
          country: 'Argentina',
          status: 'Finished',
          image: 'eduIt.jpg',
          certificateUrl: null
        },
        {
          year: 2020,
          institution: 'Udemy',
          courseTitle: 'Modern Javascript (ES6) Course',
          city: 'Online',
          country: null,
          status: 'Finished',
          image: 'Udemy.jpeg',
          certificateUrl: null
        },
        {
          year: 2020,
          institution: 'Udemy',
          courseTitle: 'Full Introduction to HTML & HTML5',
          city: 'Online',
          country: null,
          status: 'Finished',
          image: 'Udemy.jpeg',
          certificateUrl: null
        },
        {
          year: 2020,
          institution: 'Udemy',
          courseTitle: 'Creating Modern Applications with Vue.js',
          city: 'Online',
          country: null,
          status: 'Finished',
          image: 'Udemy.jpeg',
          certificateUrl: null
        },
        {
          year: 2020,
          institution: 'Udemy',
          courseTitle: 'Spring & Hibernate for Beginners (Includes Spring Boot)',
          city: 'Online',
          country: null,
          status: 'In Progress',
          image: 'Udemy.jpeg',
          certificateUrl: null
        },
        {
          year: 2020,
          institution: 'Austral University',
          courseTitle: 'Server Side Development: NodeJS, Express, MongoDB',
          city: 'Online',
          country: null,
          status: 'Finished',
          image: 'coursera.jpeg',
          certificateUrl: ''
        },
        {
          year: 2020,
          institution: 'Google Cloud',
          courseTitle: 'Google Cloud Platform Fundamentals: Core Infrastructure',
          city: 'Online',
          country: null,
          status: 'Finished',
          image: 'coursera.jpeg',
          certificateUrl: ''
        },
        {
          year: 2020,
          institution: 'Google Cloud',
          courseTitle: 'Architecting with Google Kubernetes Engine: Workloads',
          city: 'Online',
          country: null,
          status: 'Finished',
          image: 'coursera.jpeg',
          certificateUrl: ''
        },
        {
          year: 2020,
          institution: 'Yonsei University',
          courseTitle: 'Introduction to TCP/IP',
          city: 'Online',
          country: null,
          status: 'Finished',
          image: 'coursera.jpeg',
          certificateUrl: ''
        },
        {
          year: 2020,
          institution: 'deeplearning.ai',
          courseTitle: 'Introduction to TensorFlow for Airtificial Intelligence, Machine Learning and Deep Learning',
          lugar: 'Online',
          country: null,
          status: 'Finished',
          image: 'coursera.jpeg',
          certificateUrl: ''
        },
        {
          year: 2020,
          institution: 'University of California: San Diego',
          courseTitle: 'Algorithmic Toolbox',
          lugar: 'Online',
          country: null,
          status: 'Finished',
          image: 'coursera.jpeg',
          certificateUrl: ''
        },
        {
          year: 2020,
          institution: 'Kennsaw State University',
          courseTitle: 'Cybersecurity and its ten domains',
          lugar: 'Online',
          country: null,
          status: 'Finished',
          image: 'coursera.jpeg',
          certificateUrl: ''
        },
      ]
    };
  },
  computed: {
    selectedTitle() {
      return this.titlesByLanguage.filter((title) => title.language === this.selectedLanguage);
    }
  },
};
</script>

<style lang="scss" scoped>

.scrolling_wrapper_flexbox {
    -webkit-overflow-scrolling: touch;
    display: block;
    overflow-y: auto;
    height: 67%;

    padding-right: 5%;
    margin-right: -5%;
    scrollbar-width: thin;
    scrollbar-color: #232d36 rgba(0,0,0,0.9);

    &::-webkit-scrollbar{
      width: 8px;
    }

    &::-webkit-scrollbar-track{
      --webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background-image: -webkit-linear-gradient(90deg,transparent,#232d36 50%,transparent,transparent)
    }
  }
</style>
