<script>
import { createStore } from "vuex";

const Store = createStore({
  state() {
    return {
      textIntro1Duration: 3,
      textIntro2Duration: 4,
      intro1Duration: 2,
      intro2Duration: 2,
      logoDuration: 0.5,
      homeDuration: 0.4,
      aboutDuration: 0.4,
      skillsDuration: 0.4,
      projectsDuration: 0.4,
      contactDuration: 0.4,
      sosmedDuration: 0.4,
      heroTextDuration: 2,
    };
  },
  getters: {
    getIntroDelay(state) {
      return state.textIntro1Duration + state.textIntro2Duration;
    },
    getLogoDelay(state, getters) {
      return getters.getIntroDelay + state.intro1Duration;
    },
    getHomeDelay(state, getters) {
      return getters.getLogoDelay + state.logoDuration;
    },
    getAboutDelay(state, getters) {
      return getters.getHomeDelay + state.homeDuration;
    },
    getSkillsDelay(state, getters) {
      return getters.getAboutDelay + state.aboutDuration;
    },
    getProjectsDelay(state, getters) {
      return getters.getSkillsDelay + state.skillsDuration;
    },
    getContactDelay(state, getters) {
      return getters.getProjectsDelay + state.projectsDuration;
    },
    getSosmedDelay(state, getters) {
      return getters.getContactDelay + state.contactDuration;
    },
    getHeroTextDelay(state, getters) {
      return getters.getSosmedDelay + state.sosmedDuration;
    },
  },
});

export { Store };
</script>
