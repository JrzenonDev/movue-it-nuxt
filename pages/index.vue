<template>
  <section class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20">
    <div class="flex flex-col w-full lg:w-1/2">
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
        class="button abandon"
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
import Countdown from '~/components/molecules/Countdown.vue';

import {
  playAudio,
  sendNotification
} from '~/utils';

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
    Countdown,
    Profile,
  },
  mounted () {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  },
  computed: {
    ...mapState('Countdown', {
      hasCountDownCompleted: 'hasCompleted',
      isCountDownActive: 'isActive',
    })
  },
  methods: {
    ...mapMutations({
      setCountDownHasCompleted: `Countdown/${CountDownMT.SET_HAS_COMPLETED}`,
      setCountDownIsActive: `Countdown/${CountDownMT.SET_IS_ACTIVE}`
    }),
    setCountDownState (flag: boolean) {
      this.setCountDownHasCompleted(false);
      this.setCountDownIsActive(flag);
    },
    getNewChallenge () {
      this.setCountDownHasCompleted(true);
      if (Notification?.permission === 'granted') {
        playAudio('/notification.mp3');
        sendNotification('New Challenge!', {
          body: 'A new challenge has started! Go complete it!',
          icon: '/favicon.png',
        });
      }
    }
  }
});
</script>
