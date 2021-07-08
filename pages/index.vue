<template>
  <section class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20">
    <div class="flex flex-col w-full ld:w-1/2">
      <Profile />
      <CompletedChallenges />
      <Countdown @completed="getNewChallenge" />

      <button
        v-if="hasCountDownCompleted"
        disabled
        class="button completed"
      >
        Cycle completed
      </button>
      <button
        v-else-if="isCountDownActive"
        class="button abadon"
        @click="setCountDownState(false)"
      >
        Abandon cycle
      </button>
      <button
        v-else
        class="button start"
        @click="setCountDownState(true)"
      >
        Start a cycle
      </button>

    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapState, mapMutations } from 'vuex'
import { Mutations as CountDownMT } from '~/store/Countdown/types'

import CompletedChallenges from '~/components/atoms/CompletedChallenge.vue';
import Profile from '~/components/molecules/Profile.vue';
import CountDown from '~/components/molecules/CountDown.vue';

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
    CountDown,
    Profile,
  }
});
</script>
