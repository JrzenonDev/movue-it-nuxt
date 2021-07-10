<template>
  <section class="flex flex-col flex-1 justify-center items-center py-6 px-10 md:px-16">

    <header class="w-full pb-6 border-b-2 border-background">
      <h2 class="text-xl text-blue font-semibold text-center">
        {{ `Win ${amount} xp` }}
      </h2>
    </header>

    <main class="flex flex-col flex-1 justify-center items-center mt-6">
      <img :src="`icons/${type}.svg`" :alt="type" :style="{ minHeight: '70px' }" >
      <h1 class="text-semibold text-3xl text-title mt-6 mb-2"></h1>
      <p></p>
    </main>

    <footer>
      <button></button>
      <button></button>
    </footer>
  </section>
</template>

<script lang="ts">
</script>

<style>

</style>