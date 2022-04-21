<template>
  <div class="card">
    <div class="card-header">
      <div class="row my-3 r-1">
        <div class="col-12">
          <picture>
            <source
              media="(max-width: 576px)"
              srcset="img/photos/header-background.jpg"
              type="image/jpg"
            />
            <source
              media="(max-width: 768px)"
              srcset="img/photos/header-background.jpg"
              type="image/jpg"
            />
            <source
              media="(max-width: 992px)"
              srcset="img/photos/header-background.jpg"
              type="image/jpg"
            />
            <img
              src="img/photos/header-background.jpg"
              alt="Cover image"
              class="img-fluid rounded"
            />
          </picture>
        </div>
      </div>
    </div>
    <hr class="my-0" />
    <div class="card-header">
      <h5 class="h1 mb-0">{{ language.skills.title }}</h5>
    </div>
    <div class="card-body h-100 row">
      <div
        class="d-flex align-items-start col-lg-6 mb-3"
        v-for="(skill, key) in language.skills.skills"
        :key="key"
      >
        <img :src="skill.path_img" width="36" class="me-2" :alt="skill.name" />
        <div class="flex-grow-1">
          <strong>{{ skill.name }}</strong> {{ skill.description }}
        </div>
      </div>
    </div>
    <hr class="my-0" />
    <div class="card-header">
      <h5 class="h1 mb-0">{{ language.skills.title }}</h5>
    </div>
    <div class="card-body h-100 row">
      <div
        class="d-flex align-items-start col-lg-6 mb-3"
        v-for="(skill, key) in language.skills.skills"
        :key="key"
      >
        <img :src="skill.path_img" width="36" class="me-2" :alt="skill.name" />
        <div class="flex-grow-1">
          <strong>{{ skill.name }}</strong> {{ skill.description }}
        </div>
      </div>
    </div>
    <hr class="my-0" />
    <div class="card-header">
      <h5 class="h1 mb-0">
        {{ language.education_and_training.title }}
      </h5>
    </div>
    <div class="card-body h-100 row">
      <div
        class="d-flex align-items-start col-lg-6 mb-3"
        v-for="(course, key) in language.education_and_training.courses"
        :key="key"
      >
        <img
          :src="course.path_img"
          width="36"
          class="me-2"
          :alt="course.title"
        />
        <div class="flex-grow-1">
          <h4 class="h4">
            {{ course.title }}
          </h4>
          <p class="m-0">
            <span class="fst-italic">{{ course.institution }}</span>
          </p>
          <p class="m-0">{{ course.country_address }}</p>
          <p>
            {{ language.education_and_training.courses_key.course_details }}:
            {{ course.hours }} |
            {{ course.training_period }}
          </p>
          <a :href="course.link" target="blank">{{
            language.education_and_training.courses_key.see_more_details
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["select_lenguage"]),
  },
  computed: {
    ...mapState(["languages", "config"]),
    ...mapGetters(["language"]),
  },
};
</script>
