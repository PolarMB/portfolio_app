<template>
      <b-row>
      <b-card v-for="(study, index) in formalStudies" :key="index"
        style="max-width: 15rem; max-height: 30rem;"
        class="mb-4 mx-4 ml-5 bg-terciary round_borders"
        >
        <b-card-img style="width: 100%; height: 40%;" class="mt-n3 mb-1 round_top_borders"
          :src="require(`../../../assets/img/studies/${study.image}`)"
          alt="Image" top>
        </b-card-img>
        <div class="scrolling_wrapper_flexbox">
          <b-card-title>{{ study.institution }}</b-card-title>
          <b-card-text class="card_content_fonts">
            <b>{{selectedTitle.formalCourseTitle}}</b> {{study.courseTitle}}
          </b-card-text>
          <b-card-text class="mt-n2 card_content_fonts">
            {{'- ' + study.courseDescription}}
          </b-card-text>
          <!-- <b-card-text class="mt-n3 card_content_fonts">
            <b>{{selectedTitle[0].semesterAmountTitle}}</b> {{ study.status}}
          </b-card-text> -->
          <b-card-text class="mt-n3 card_content_fonts">
            <b>{{selectedTitle.formalStartTitle}}</b>{{study.startYear}}
          </b-card-text>
          <b-card-text class="mt-n3 card_content_fonts">
            <b>{{selectedTitle.formalEndTitle}}</b>{{study.endYear !== null ? study.endYear : selectedTitle.nullEndDate}}
          </b-card-text>
        </div>
      </b-card>
    </b-row>
</template>

<script>
import {
  BCard, BCardText,
  BCardTitle, BRow,
  BCardImg
} from 'bootstrap-vue';

export default {
  props: {
    selectedTitle: Object,
    formalStudies: Array
  },
  components: {
    BCard,
    BCardTitle,
    BCardText,
    BRow,
    BCardImg
  },
};
</script>

<style lang="scss" scoped>
.card_content_fonts{
  font-size: 14px;
}

.round_borders{
  border-radius: 18px;
}

.round_top_borders{
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
}

.scrolling_wrapper_flexbox {
  -webkit-overflow-scrolling: touch;
  display: block;
  overflow-y: auto;
  height: 60%;

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
