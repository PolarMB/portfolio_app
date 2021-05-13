<template>
  <div class="home">
    <div :key="$route.params.language">
      <Introduction :selectedLanguage="currentLanguage"/>
      <b-container class="mt-4">
        <b-row align-h="end">
          <b-col cols="12" class="d-block d-md-none mb-4">
            <b-row align-h="center">
              <b-col cols=5>
                <ButtonGroup :selectedLanguage="currentLanguage"/>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" md="11">
            <AboutMe :selectedLanguage="currentLanguage" v-if="selectedInfo === 1"/>
            <StudyHistory :selectedLanguage="currentLanguage" v-if="selectedInfo === 2"/>
            <ExperienceHistory :selectedLanguage="currentLanguage" v-if="selectedInfo === 3"/>
          </b-col>
          <b-col cols="1" class="d-none d-md-block">
            <ButtonGroup :selectedLanguage="currentLanguage"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from '@/components/Introduction/Introduction.vue';
import {
  BRow,
  BContainer, BCol
} from 'bootstrap-vue';
import { mapGetters } from 'vuex';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup.vue';
import AboutMe from '../components/AboutMe/AboutMe.vue';
import StudyHistory from '../components/StudyHistory/StudyHistory.vue';
import ExperienceHistory from '../components/ExperienceHistory/ExperienceHistory.vue';

export default {
  name: 'Home',
  components: {
    Introduction,
    AboutMe,
    BRow,
    BContainer,
    BCol,
    ButtonGroup,
    StudyHistory,
    ExperienceHistory
  },
  data() {
    return {
      currentLanguage: 'en'
    };
  },
  created() {
    this.changeLanguage();
  },
  beforeUpdate() {
    this.changeLanguage();
  },
  methods: {
    changeLanguage() {
      switch (this.$route.params.language) {
        case undefined:
          this.currentLanguage = 'en';
          break;
        case 'spanish':
          this.currentLanguage = 'es';
          break;
        default:
          break;
      }
    }
  },
  computed: {
    ...mapGetters([
      'selectedInfo'
    ]),
  }
};
</script>

<style lang="scss" scoped>
.button_font {
  font-size: 15px;
}
</style>
