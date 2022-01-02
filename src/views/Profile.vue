<template>
  <div class="wrapper">
    <div class="main">
      <Thenavbar />
      <main class="content">
        <div class="container-fluid p-0" style="margin-top: 50px">
          <div class="row">
            <div class="col-md-4 col-xl-3">
              <Cardrigth />
            </div>

            <div class="col-md-8 col-xl-9">
              <Cardleft />
            </div>
          </div>
        </div>
      </main>
      <Thefooter />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import Thenavbar from "@/components/Thenavbar.vue";
import Thefooter from "@/components/Thefooter.vue";
import Cardrigth from "@/components/Cardrigth.vue";
import Cardleft from "@/components/Cardleft.vue";

export default {
  components: {
    Thenavbar,
    Thefooter,
    Cardrigth,
    Cardleft,
  },
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
