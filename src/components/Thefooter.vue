<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row text-muted">
        <div class="col-6 text-start">
          <ul class="list-inline">
            <li class="list-inline-item">
              <p class="text-muted m-0">{{ language.footer.string }}</p>
            </li>
          </ul>
        </div>
        <div class="col-6 text-end">
          <p class="text-muted mb-0">
            <i class="fas fa-code"></i> {{ current_year }} | {{ language.name }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      current_year: new Date().getFullYear(),
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
