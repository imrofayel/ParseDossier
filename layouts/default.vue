<template>

  <div class="text-lg h-12 w-full bg-gray-50 dark:border-none border-b dark:bg-black/10 flex items-center justify-center dark:text-white inter">
    This is beta theming, dark mode isnt tested yet also some fonts and colors maybe missing. Please let me know about those.
  </div>

  <div
    class="-z-10 h-full w-full bg-white dark:bg-[#1F2632] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

    <div class="p-6 pb-10">
      <header class="text-3xl flex justify-between">
        <span>Dossier</span>
        <AppFooter />
      </header>
      <slot />
    </div>
  </div>

</template>

<script lang="ts" setup>
</script>

<style></style>