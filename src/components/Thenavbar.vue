<template>
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
