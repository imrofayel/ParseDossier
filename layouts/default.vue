<template>


  <div
    class="-z-10 h-full w-full bg-white dark:bg-[#1F2632] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

    <div class="p-6 blur-[.24px]">
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