<template>
  <div class="wrapper">
    <div class="main">
      <nav
        class="navbar navbar-expand navbar-light navbar-bg"
        style="position: fixed; width: 100%; z-index: 1000"
      >
        <a>
          <i class="hamburger align-self-center"></i>
        </a>

        <ul class="navbar-nav">
          <li class="nav-item px-2 dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="servicesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Mega menu
            </a>
            <div
              class="dropdown-menu dropdown-menu-start dropdown-mega"
              aria-labelledby="servicesDropdown"
            >
              <div class="d-md-flex align-items-start justify-content-start">
                <div class="dropdown-mega-list">
                  <div class="dropdown-header">UI Elements</div>
                  <a class="dropdown-item" href="#">Alerts</a>
                  <a class="dropdown-item" href="#">Buttons</a>
                  <a class="dropdown-item" href="#">Cards</a>
                  <a class="dropdown-item" href="#">Carousel</a>
                  <a class="dropdown-item" href="#">General</a>
                  <a class="dropdown-item" href="#">Grid</a>
                  <a class="dropdown-item" href="#">Modals</a>
                  <a class="dropdown-item" href="#">Tabs</a>
                  <a class="dropdown-item" href="#">Typography</a>
                </div>
                <div class="dropdown-mega-list">
                  <div class="dropdown-header">Forms</div>
                  <a class="dropdown-item" href="#">Layouts</a>
                  <a class="dropdown-item" href="#">Basic Inputs</a>
                  <a class="dropdown-item" href="#">Input Groups</a>
                  <a class="dropdown-item" href="#">Advanced Inputs</a>
                  <a class="dropdown-item" href="#">Editors</a>
                  <a class="dropdown-item" href="#">Validation</a>
                  <a class="dropdown-item" href="#">Wizard</a>
                </div>
                <div class="dropdown-mega-list">
                  <div class="dropdown-header">Tables</div>
                  <a class="dropdown-item" href="#">Basic Tables</a>
                  <a class="dropdown-item" href="#">Responsive Table</a>
                  <a class="dropdown-item" href="#">Table with Buttons</a>
                  <a class="dropdown-item" href="#">Column Search</a>
                  <a class="dropdown-item" href="#">Muulti Selection</a>
                  <a class="dropdown-item" href="#">Ajax Sourced Data</a>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="navbar-collapse collapse">
          <ul class="navbar-nav navbar-align">
            <a
              class="nav-flag dropdown-toggle"
              href="#"
              id="languageDropdown"
              v-for="(lenguage, key) in config.lenguages"
              :key="key"
              :title="lenguage.title"
              @click.prevent="select_lenguage({ language: lenguage.lenguage })"
            >
              <img :src="lenguage.img_path" :alt="lenguage.title" />
            </a>
          </ul>
        </div>
      </nav>

      <main class="content">
        <div class="container-fluid p-0" style="margin-top: 50px">
          <div class="row">
            <div class="col-md-4 col-xl-3">
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
                  <h5 class="h6 card-title">{{ language.skills.skill }}</h5>
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
                  <h5 class="h6 card-title">{{ language.about.about }}</h5>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-1">
                      <span data-feather="home" class="feather-sm me-1"></span>
                      {{ language.about.address.current.lives_in }}
                      <a
                        :href="language.about.address.current.google_maps"
                        target="blank"
                        >{{ language.about.address.current.city }}</a
                      >
                    </li>
                    <li class="mb-1">
                      <span
                        data-feather="briefcase"
                        class="feather-sm me-1"
                      ></span>
                      {{ language.about.work_at.work_at }}
                      <a :href="language.about.work_at.site" target="black">{{
                        language.about.work_at.company
                      }}</a>
                    </li>
                    <li class="mb-1">
                      <span
                        data-feather="map-pin"
                        class="feather-sm me-1"
                      ></span>
                      {{ language.about.address.from.from }}
                      <a
                        :href="language.about.address.from.google_maps"
                        target="blank"
                        >{{ language.about.address.from.city }}</a
                      >
                    </li>
                    <li class="mb-1">
                      <span data-feather="map-pin" class="feather-sm me-1">
                        {{ language.about.curriculum.see_my_pdf }}
                      </span>
                      <a
                        :href="language.about.curriculum.pdf_path"
                        target="blank"
                        >{{ language.about.curriculum.curriculum }}</a
                      >
                    </li>
                  </ul>
                </div>
                <hr class="my-0" />
                <div class="card-body">
                  <h5 class="h6 card-title">{{ language.social_media }}</h5>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-1">
                      <span class="fab fa-facebook fa-fw me-1"></span>
                      <a href="https://www.facebook.com/lagocelo" target="black"
                        >Facebook</a
                      >
                    </li>
                    <li class="mb-1">
                      <span class="fab fa-instagram fa-fw me-1"></span>
                      <a
                        href="https://www.instagram.com/marcelo.dias.schneider/"
                        target="black"
                        >Instagram</a
                      >
                    </li>
                    <li class="mb-1">
                      <span class="fab fa-linkedin fa-fw me-1"></span>
                      <a
                        href="https://www.linkedin.com/in/marcelo-dias-schneider-6392ba94/"
                        target="black"
                        >LinkedIn</a
                      >
                    </li>
                    <li class="mb-1">
                      <span class="fab fa-github fa-fw me-1"></span>
                      <a href="https://github.com/MarceloDiasSchneider"
                        >Github</a
                      >
                    </li>
                  </ul>
                </div>
                <hr class="my-0" />
                <div class="card-body">
                  <h5 class="h6 card-title">{{ language.language_skills.title }}</h5>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-1">
                      <p><i class="fas fa-language"></i> <small class="text-muted">{{ language.language_skills.items.mother_tongue }}</small></p>
                      <p 
                        v-for="(leng, key) in language.language_skills.mother_tongue" 
                        :key="key"
                      >
                        {{ leng.lenguage }}
                      </p>
                    </li>
                    <li class="mb-1">
                      <p><i class="fas fa-language"></i> <small class="text-muted">{{ language.language_skills.items.other_language }}</small></p>
                      <div 
                        class="mb-3"
                        v-for="(leng, key) in language.language_skills.other_language" 
                        :key="key"
                      >
                        <p class="mb-0">{{ leng.lenguage }}</p>
                        <ul>
                          <li 
                            v-for="(level, key) in leng.level"
                            :key="key"
                          >
                            <strong>{{ level.title }}</strong> {{level.description}}
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-8 col-xl-9">
              <div class="card">
                <div class="card-header">
                  <h2
                    class="float-left h1 card-title text-center mb-0 gradient"
                    style="font-size: 40pt"
                  >
                    {{ language.name }}
                  </h2>
                  <h5
                    class="h2 mb-3 text-center text-secondary"
                    style="font-size: 25pt"
                  >
                    {{ language.my_profession }}
                  </h5>

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
                  <h5 class="card-title mb-0">{{ language.skills.title }}</h5>
                </div>
                <div class="card-body h-100 row">
                  <div
                    class="d-flex align-items-start col-lg-6 mb-3"
                    v-for="(skill, key) in language.skills.skills"
                    :key="key"
                  >
                    <img
                      :src="skill.path_img"
                      width="36"
                      class="me-2"
                      :alt="skill.name"
                    />
                    <div class="flex-grow-1">
                      <strong>{{ skill.name }}</strong> {{ skill.description }}
                    </div>
                  </div>
                </div>
                <hr class="my-0" />
                <div class="card-header">
                  <h5 class="card-title mb-0">
                    {{ language.education_and_training.title }}
                  </h5>
                </div>
                <div class="card-body h-100 row">
                  <div
                    class="d-flex align-items-start col-lg-6 mb-3"
                    v-for="(course, key) in language.education_and_training
                      .courses"
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
                        {{
                          language.education_and_training.courses_key
                            .course_details
                        }}: {{ course.hours }} |
                        {{ course.training_period }}
                      </p>
                      <a :href="course.link" target="blank">{{
                        language.education_and_training.courses_key
                          .see_more_details
                      }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer class="footer">
        <div class="container-fluid">
          <div class="row text-muted">
            <div class="col-6 text-start">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="text-muted" href="#">Support</a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted" href="#">Help Center</a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted" href="#">Privacy</a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted" href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div class="col-6 text-end">
              <p class="mb-0">
                2021 -
                <a href="index.html" class="text-muted">{{ language.name }}</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
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
    return {
      my_birthday: new Date(1992, 0, 14),
    };
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

<style scoped>
.sticky-top {
  top: 90px;
  z-index: 950;
}
</style>
