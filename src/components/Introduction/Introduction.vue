<template>
  <!-- eslint-disable max-len -->
  <div>
    <BContainer>
      <BRow>
        <BCol cols="12" md="6" class="mt-3">
          <BImg v-bind="imgageProps"
            rounded
            :src="require('../../assets/img/fotoPerfilCV.png')"></BImg>
        </BCol>
        <div class="line d-none d-md-block"></div>
        <b-col cols="12" md="5" class="mt-3 text-center">
          <BCard
            style="max-width: 30rem;"
            class="mb-2 mt-4 ml-md-n5 round_borders"
          >
            <b-card-header class="mt-n2 header_borders">
              <h5 class="mb-0 text-left">{{ selectedDisplay[0].cardTitle }}</h5>
            </b-card-header>
            <BCardText class="mt-2">
              <h3>{{ cvData.name }}</h3>
            </BCardText>
            <BCardText>
                <b>{{selectedDisplay[0].jobTitleText+': '}}</b>{{cvData.jobTitle}}
            </BCardText>
            <BCardText>
                <b>{{selectedDisplay[0].cityTitleText+': '}}</b>{{cvData.city}}
            </BCardText>
            <BCardText>
                <b>{{selectedDisplay[0].ageTitleText+': '}}</b>{{cvData.age}}
            </BCardText>
            <b-row>
              <b-col cols="12" md=6>
                <BButton class="button_width" :href="cvData.github" target="_blank" variant="primary">
                  <font-awesome-icon class="mt-n1" :icon="['fab', 'github']" />
                  Github
                </BButton>
              </b-col>
              <b-col cols="12" md=6>
                <BButton class="button_width" :href="cvData.linkedin" target="_blank" variant="primary">
                  <font-awesome-icon class="mt-n1" :icon="['fab', 'linkedin']" />
                  LinkedIn
                </BButton>
              </b-col>
            </b-row>
          </BCard>
        </b-col>
      </BRow>
    </BContainer>
  </div>
</template>

<script>
import {
  BContainer, BRow, BCol, BImg, BCard, BCardText, BButton, BCardHeader
} from 'bootstrap-vue';

export default {
  props: {
    selectedLanguage: String
  },
  components: {
    BContainer,
    BRow,
    BCol,
    BImg,
    BCard,
    BCardText,
    BButton,
    BCardHeader
  },
  data() {
    return {
      language: 0,
      imgageProps: {
        blankColor: '#777',
        width: 250,
        height: 350,
        class: 'ml-5 mr-n5',
      },
      displayTexts: [
        {
          language: 'en',
          cardTitle: 'Personal Information',
          jobTitleText: 'Title',
          cityTitleText: 'City',
          ageTitleText: 'Age'
        },
        {
          language: 'es',
          cardTitle: 'Información Personal',
          jobTitleText: 'Título',
          cityTitleText: 'Ciudad',
          ageTitleText: 'Edad'
        },
      ],
      cvData: {
        name: 'Omar Vivenes',
        jobTitle: 'Jr. Fullstack Developer',
        city: 'Buenos Aires, Argentina',
        age: 24,
        github: 'https://github.com/PolarMB?tab=repositories',
        linkedin: 'https://www.linkedin.com/in/omar-vivenes/'
      }
    };
  },
  computed: {
    selectedDisplay() {
      return this.displayTexts.filter((text) => text.language === this.selectedLanguage);
    }
  }
};
</script>

<style lang="scss" scoped>

.button_width{
  width: 10rem;
}

.header_borders{
  border-top-left-radius: 18px !important;
  border-bottom-right-radius: 18px !important;
  background-color: #916f07;
}

.line{
  margin-top: 1.5%;
  margin-left: 27rem;
  height: 340px;
  border-left: 1px solid black;
  position: absolute;
}
</style>
