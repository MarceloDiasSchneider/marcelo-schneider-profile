<template>
  <div class="card mb-3 sticky-top">
    <div class="card-header">
      <h5 class="card-title mb-0">
        {{ language.profile_details }}
      </h5>
    </div>
    <div class="card-body text-center">
      <img
        src="img/avatars/avatar-marcelo-schneider.jpg"
        :alt="language.name"
        class="img-fluid rounded-circle mb-2"
        width="180"
        height="180"
      />
      <h5 class="card-title mb-0">{{ language.name }}</h5>
      <div class="text-muted mb-2">
        {{ language.my_profession }}
      </div>
    </div>
    <hr class="my-0" />
    <div class="card-body">
      <h5 class="card-title">{{ language.skills.skill }}</h5>
      <a
        href="#"
        v-for="(skill, key) in language.skills.skills"
        :key="key"
        class="badge bg-primary me-1 my-1"
        >{{ skill.name }}</a
      >
    </div>
    <hr class="my-0" />
    <div class="card-body">
      <h5 class="card-title">{{ language.about.about }}</h5>
      <ul class="list-unstyled mb-0">
        <li class="mb-1">
          <i class="fas fa-home me-1"></i>
          {{ language.about.address.current.lives_in }}
          <a
            :href="language.about.address.current.google_maps"
            target="blank"
            >{{ language.about.address.current.city }}</a
          >
        </li>
        <li class="mb-1">
          <i class="fas fa-map-marker-alt me-1"></i>
          {{ language.about.work_at.work_at }}
          <a :href="language.about.work_at.site" target="black">{{
            language.about.work_at.company
          }}</a>
        </li>
        <li class="mb-1">
          <i class="fas fa-briefcase me-1"></i>
          {{ language.about.address.from.from }}
          <a :href="language.about.address.from.google_maps" target="blank">{{
            language.about.address.from.city
          }}</a>
        </li>
        <li class="mb-1">
          <i class="fas fa-sticky-note me-1"></i>
          {{ language.about.curriculum.see_my_pdf }}
          <a :href="language.about.curriculum.pdf_path" target="blank">{{
            language.about.curriculum.curriculum
          }}</a>
        </li>
      </ul>
    </div>
    <hr class="my-0" />
    <div class="card-body">
      <h5 class="card-title">{{ language.social_media }}</h5>
      <ul class="list-unstyled mb-0">
        <li class="mb-1">
          <i class="fab fa-facebook fa-fw me-1"></i>
          <a href="https://www.facebook.com/lagocelo" target="black"
            >Facebook</a
          >
        </li>
        <li class="mb-1">
          <i class="fab fa-instagram fa-fw me-1"></i>
          <a
            href="https://www.instagram.com/marcelo.dias.schneider/"
            target="black"
            >Instagram</a
          >
        </li>
        <li class="mb-1">
          <i class="fab fa-linkedin fa-fw me-1"></i>
          <a
            href="https://www.linkedin.com/in/marcelo-dias-schneider-6392ba94/"
            target="black"
            >LinkedIn</a
          >
        </li>
        <li class="mb-1">
          <i class="fab fa-github fa-fw me-1"></i>
          <a href="https://github.com/MarceloDiasSchneider">Github</a>
        </li>
      </ul>
    </div>
    <hr class="my-0" />
    <div class="card-body">
      <h5 class="h6 card-title">
        {{ language.language_skills.title }}
      </h5>
      <ul class="list-unstyled mb-0">
        <li
          class="mb-1"
          v-for="(leng, key) in language.language_skills.mother_tongue"
          :key="key"
        >
          <p class="my-0">
            <i class="fas fa-language me-1"></i>
            <strong>{{ leng.lenguage }}</strong>
          </p>
          <p class="my-0">
            <small class="text-muted ms-2">
              {{ language.language_skills.items.mother_tongue }}
            </small>
          </p>
        </li>
        <li
          class="mb-1"
          v-for="(leng, key) in language.language_skills.other_language"
          :key="key"
        >
          <p class="my-0">
            <i class="fas fa-language me-1"></i>
            <strong>{{ leng.lenguage }}</strong>
          </p>
          <p class="my-0" v-for="(level, key) in leng.level" :key="key">
            <small class="text-muted ms-2">
              {{ level.title }}: {{ level.description }}
            </small>
          </p>
        </li>
      </ul>
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
