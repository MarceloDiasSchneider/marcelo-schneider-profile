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
              @click.prevent="selected_language = 'english'"
            >
              <img src="img/flags/gb.png" alt="English" />
            </a>
            <a
              class="nav-flag dropdown-toggle"
              href="#"
              id="languageDropdown"
              @click.prevent="selected_language = 'italiano'"
            >
              <img src="img/flags/it.png" alt="Italiano" />
            </a>
            <a
              class="nav-flag dropdown-toggle"
              href="#"
              id="languageDropdown"
              @click.prevent="selected_language = 'portugues'"
            >
              <img src="img/flags/br.png" alt="Português" />
            </a>
            <li class="nav-item dropdown">
              <a
                class="nav-icon dropdown-toggle d-inline-block d-sm-none"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i class="align-middle" data-feather="settings"></i>
              </a>

              <a
                class="nav-link dropdown-toggle d-none d-sm-inline-block"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="img/avatars/avatar-marcelo-schneider.jpg"
                  class="avatar img-fluid rounded-circle me-1"
                  :alt="my_name"
                />
                <span class="text-dark">{{ my_name }}</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="pages-profile.html"
                  ><i class="align-middle me-1" data-feather="user"></i>
                  Profile</a
                >
                <a class="dropdown-item" href="#"
                  ><i class="align-middle me-1" data-feather="pie-chart"></i>
                  Analytics</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="pages-settings.html"
                  >Settings & Privacy</a
                >
                <a class="dropdown-item" href="#">Help</a>
                <a class="dropdown-item" href="#">Sign out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <main class="content">
        <div class="container-fluid p-0" style="margin-top: 50px">
          <h1 class="h3 mb-3 text-center" style="font-size: 40pt">
            {{ my_name }}
          </h1>
          <h2
            class="h3 mb-3 text-center text-secondary"
            style="font-size: 30pt"
          >
            {{ language.my_profession }}
          </h2>

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

          <div class="row">
            <div class="col-md-4 col-xl-3">
              <div class="card mb-3">
                <div class="card-header">
                  <h5 class="card-title mb-0">
                    {{ language.profile_details }}
                  </h5>
                </div>
                <div class="card-body text-center">
                  <img
                    src="img/avatars/avatar-marcelo-schneider.jpg"
                    :alt="my_name"
                    class="img-fluid rounded-circle mb-2"
                    width="180"
                    height="180"
                  />
                  <h5 class="card-title mb-0">{{ my_name }}</h5>
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
              </div>
            </div>

            <div class="col-md-8 col-xl-9">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions float-end">
                    <div class="dropdown show">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                      >
                        <i
                          class="align-middle"
                          data-feather="more-horizontal"
                        ></i>
                      </a>

                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </div>
                    </div>
                  </div>
                  <h5 class="card-title mb-0">{{ language.skills.skill }}</h5>
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
                <a href="index.html" class="text-muted">{{ my_name }}</a>
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

export default {
  components: {},
  data() {
    return {
      my_name: "Marcelo Schneider",
      my_birthday: new Date(1992, 0, 14),
      selected_language: "english",
    };
  },
  computed: {
    ...mapState(["languages"]),
    language() {
      return this.languages[this.selected_language];
    },
  },
};
</script>
