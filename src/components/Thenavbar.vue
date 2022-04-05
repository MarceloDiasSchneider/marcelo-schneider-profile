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
          class="h3 m-0 p-0 nav-link"
          href="#"
          id="servicesDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ language.name }}
        </a>
      </li>
      <li class="nav-item px-2 dropdown d-none d-md-block">
        <a
          class="h3 m-0 p-0 nav-link"
          href="#"
          id="servicesDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ language.my_profession }}
        </a>
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
