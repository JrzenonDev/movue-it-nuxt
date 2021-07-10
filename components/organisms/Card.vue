<template>
  <div class="bg-white rounded-md flex flex-1 w-full mt-8 lg:mt-0 shadow-sm">
    <Challenge v-if="currentChallenge" v-bind="currentChallenge" />
    <StartCycle v-else />
    <LevelUp />

  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { mapGetters } from 'vuex';

import Challenge from '~/components/molecules/Challenge.vue';
import StartCycle from '~/components/atoms/StartCycle.vue';
import LevelUp from '~/components/atoms/LevelUp.vue';

export default Vue.extend({
  components: {
    Challenge,
    StartCycle,
    LevelUp
  },
  computed: {
    ...mapGetters('Challenges', ['currentChallenge']),
  }
});

</script>