<template>
  <div>
    <b-button-group vertical>
      <b-button variant="primary" @click="setSelectedInfoWindow(1)" class="button_font">{{ selectedTitle[0].aboutTitle }}</b-button>
      <b-button variant="primary" @click="setSelectedInfoWindow(2)" class="button_font">{{ selectedTitle[0].studiesTitle }}</b-button>
      <b-button variant="primary" @click="setSelectedInfoWindow(3)" class="button_font">{{ selectedTitle[0].experiencesTitle }}</b-button>
    </b-button-group>
  </div>
</template>

<script>
import {
  BButton, BButtonGroup
} from 'bootstrap-vue';

export default {
  props: {
    selectedLanguage: String
  },
  components: {
    BButton,
    BButtonGroup,
  },
  data() {
    return {
      titlesByLanguage: [
        {
          language: 'en',
          aboutTitle: 'About Me',
          studiesTitle: 'Studies',
          experiencesTitle: 'My Experience'
        },
        {
          language: 'es',
          aboutTitle: 'Sobre mí',
          studiesTitle: 'Estudios',
          experiencesTitle: 'Experiencia'
        }
      ]
    };
  },
  methods: {
    setSelectedInfoWindow(value) {
      this.$store.dispatch('setSelectedInfoAction', value);
    }
  },
  computed: {
    selectedTitle() {
      return this.titlesByLanguage.filter((title) => title.language === this.selectedLanguage);
    }
  }
};
</script>

<style lang="scss" scoped>
.button_font {
  font-size: 15px;
}
</style>
