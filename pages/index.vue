<template>
  <div>
    <h1>Index</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CompletedChallenges from '~/components/atoms/CompletedChallenge.vue';
import Profile from '~/components/molecules/Profile.vue';

interface Head {
  title: string
}

export default Vue.extend({
  head(): Head {
    return {
      title: 'Home | movue.it',
    }
  },
  components: {
    CompletedChallenges,
    Profile,
  }
});
</script>
