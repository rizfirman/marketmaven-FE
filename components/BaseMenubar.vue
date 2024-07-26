<template>
  <Menubar
    :model="items"
    class="container mx-auto !border-0 !h-[100px] !font-poppins !text-sm !font-bold"
  >
    <template #start>
      <div
        class="bg-black w-[50px] h-[50px] flex items-center justify-center p-5 rounded-full"
      >
        <Logo class="text-3xl text-white flex-shrink-0" />
      </div>
    </template>
    <template #item="{ item, props }">
      <a
        v-ripple
        class="flex items-center"
        v-bind="props.action"
        :href="item.url"
      >
        {{ item.label }}
      </a>
    </template>
  </Menubar>
</template>

<script setup>
import { ref } from "vue";
import Logo from "~/assets/logo/logo.svg";

const items = ref([
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Service",
    url: "/service",
  },
  {
    label: "Portfolio",
    url: "/portofolio",
  },
  {
    label: "About",
    url: "/about",
  },
]);
</script>

<style>
.p-menubar-root-list {
  @apply !flex !justify-end !w-full;
}

.p-menubar-item {
  @apply hover:!border hover:!border-b-[1px] hover:!bg-transparent;
}
</style>
