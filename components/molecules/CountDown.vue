<template>
  <div class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani">
    <CountdownDigits :digits="minutes" />
    <span class="bg-background px-2">:</span>
    <CountdownDigits :digits="seconds" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapState, mapGetters, mapMutations } from 'vuex';
import { Mutations } from '~/store/Countdown/types';

import CountdownDigits from '~/components/atoms/CountdownDigits.vue';

let TIMEOUT_REFERENCE: ReturnType<typeof setTimeout>;

export default Vue.extend({
  components: { CountdownDigits },
  computed: {
    ...mapState('Countdown', ['time', 'isActive']),
    ...mapGetters('Countdown', ['minutes', 'seconds']),
  },
  methods: {
    ...mapMutations('Countdown', {
      setTime: Mutations.SET_TIME,
      resetTime: Mutations.RESET_TIME,
    }),
    runCountdown (flag: boolean) {
      if (this.isActive && flag) {
        TIMEOUT_REFERENCE = setTimeout(() => {
          this.setTime(this.time - 1);
        }, 1000);
      } else {
        clearTimeout(TIMEOUT_REFERENCE);
      }
    },
  },
  watch: {
    isActive (newValue: boolean) {
        console.log('inicio watch');

      this.runCountdown(newValue);

      if (!newValue) {
        this.resetTime();
        console.log('if watch');
      }
    },
    time (newValue: number) {
      if (newValue > 0) {
        this.runCountdown(true);
        console.log('if time');

      } else {
        this.$emit('completed');
        console.log('else');

      }
    }
  },
});
</script>

<style>

</style>