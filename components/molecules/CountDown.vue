<template>
  <div class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani">
    <CountdownDigits :digits="minutes" />
    <span class="bg-backgroung px-2">:</span>
    <CountdownDigits :digits="seconds" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapState, mapGetters, mapMutations } from 'vuex';
import {  } from '~/store/Countdown/types';

import CountdownDigits from '~/components/atoms/CountdownDigits.vue';

export default Vue.extend({
  components: { CountdownDigits },
  computed: {
    ...mapState('Countdown', ['time', 'isActive']),
    ...mapGetters('Countdown', ['minutes', 'seconds']),
  },
  methods: {

  }
});
</script>

<style>

</style>