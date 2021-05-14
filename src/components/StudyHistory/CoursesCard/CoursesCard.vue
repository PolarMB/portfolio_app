<template>
    <b-row>
        <b-col cols="12" md="6" lg="4" v-for="(course, index) in courseList" :key="index">
          <b-card
            style="width: 15rem; height: 25.3rem;"
            class="mb-4 mx-4 ml-4 bg-terciary round_borders"
          >
            <b-card-img style="width: 100%; height: 35%;" class="mt-n2 mb-1 round_top_borders"
              :src="require(`../../../assets/img/studies/${course.image}`)"
              alt="Image" top>
            </b-card-img>
            <b-card-title><b>{{ course.institution }}</b></b-card-title>
            <b-card-text class="card_content_fonts">
              <b>{{selectedTitle.informalCourseTitle}}</b> {{course.courseTitle}}
            </b-card-text>
            <b-card-text class="mt-n3 card_content_fonts">
              <b>{{selectedTitle.informalPlaceTitle}}</b> {{course.country !== null ? course.city+', ' : course.city}} {{course.country !== null ? course.country : ''}}
            </b-card-text>
            <b-card-text class="mt-n3 card_content_fonts">
              <b>{{selectedTitle.informalYearTitle}}</b>{{course.year}}
            </b-card-text>
            <b-card-text class="mt-n3 card_content_fonts">
              <b>Status: </b>{{course.status}}
            </b-card-text>
          </b-card>
            <b-row v-if="course.certificateUrl !== null" style="position: absolute; margin-left: 3.2rem; margin-top: -4.5rem;">
              <b-col cols="12">
                <b-button :href="course.certificateUrl" class="bg-secondary" target="_blank">{{selectedTitle.certificateButtonText}}</b-button>
              </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import {
  BCard, BCardText,
  BCardTitle, BRow,
  BCardImg, BButton, BCol
} from 'bootstrap-vue';

export default {
  props: {
    selectedTitle: Object,
    courseList: Array
  },
  components: {
    BCard,
    BCardTitle,
    BCardText,
    BButton,
    BRow,
    BCardImg,
    BCol,
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
</style>
