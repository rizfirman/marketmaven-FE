<template>
  <BaseMenubar />
  <header class="h-[572px]">
    <div
      class="container mx-auto flex justify-center items-center p-5 md:py-5 lg:px-0 h-full text-center lg:text-left"
    >
      <div class="sm:w-full md:w-1/3 md:mr-10">
        <h1
          class="text-[60px] font-inter font-bold text-gray-900 leading-[72px] uppercase"
        >
          Market <span class="text-[#1A7BFF] font-inter">Maven</span>
        </h1>
        <p
          class="text-[16px] font-poppins leading-6 text-gray-500 mt-10 leading-7"
        >
          dedicated to helping businesses enhance their online visibility and
          achieve their marketing goals through tailored digital strategies. We
          have a diverse client base ranging from small startups to established
          enterprises, and we pride ourselves on delivering measurable results.
        </p>
      </div>
      <div class="md:block hidden lg:flex-shrink-0 lg:relative">
        <NuxtImg src="banner.svg" width="568" height="454" />
      </div>
    </div>
  </header>
  <!-- SECTION SERVICE -->
  <section class="h-fit p-6">
    <div class="container mx-auto">
      <h1
        class="text-xl text-center font-poppins text-[#1A7BFF] uppercase font-semibold"
      >
        Our Service
      </h1>
      <h2
        class="text-4xl font-poppins font-bold text-center mt-2 text-gray-800"
      >
        Perfect Solution For Your Business
      </h2>
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 mt-6 justify-center"
      >
        <!-- SERVICE SEO -->
        <div
          class="bg-white shadow-xl w-full h-[400px] border border-gray-500 rounded-lg p-10 flex flex-col items-center relative"
        >
          <div
            class="bg-[#1A7BFF] w-[110px] h-[110px] rounded-full flex items-center justify-center"
          >
            <SearchEngine class="!w-[70px] !h-[50px] !text-white" />
          </div>
          <h1 class="text-2xl text-gray-800 mt-8 font-bold">SEO</h1>
          <p class="text-base text-center text-gray-500 mt-6 mb-10">
            fulfilling users’ search needs by creating relevant, high-quality
            content and providing the best possible user experience.
          </p>
          <Button
            icon="pi pi-arrow-right"
            severity="contrast"
            rounded
            outlined
            aria-label="Bookmark"
            class="!w-8 !h-8 !absolute !bottom-6"
          />
        </div>
        <!-- SERVICE SOCIAL MEDIA -->
        <div
          class="bg-[#1A7BFF] shadow-xl w-full h-[400px] border border-gray-500 rounded-lg p-10 flex flex-col items-center relative"
        >
          <div
            class="bg-white w-[110px] h-[110px] rounded-full flex items-center justify-center"
          >
            <i class="pi pi-megaphone text-[#1A7BFF] text-6xl" />
          </div>
          <h1 class="text-2xl text-white mt-8 font-bold">Social Media</h1>
          <p class="text-base text-center text-white mt-6 mb-10">
            It's time to make your business more known through social media.
          </p>
          <Button
            icon="pi pi-arrow-right"
            severity="contrast"
            rounded
            outlined
            aria-label="Bookmark"
            class="!w-8 !h-8 !text-white !border !border-white !bottom-10 !absolute"
          />
        </div>
        <!-- CONTENT CREATION -->
        <div
          class="bg-white shadow-xl w-full h-[400px] border border-gray-500 rounded-lg p-10 flex flex-col items-center relative"
        >
          <div
            class="bg-[#1A7BFF] w-[110px] h-[110px] rounded-full flex items-center justify-center"
          >
            <i class="pi pi-video text-white text-6xl" />
          </div>
          <h1 class="text-2xl text-gray-500 mt-8 font-bold">
            Content Creation
          </h1>
          <p class="text-base text-center text-gray-500 mt-6 mb-10">
            It's time to make your business more known through social media.
          </p>
          <Button
            icon="pi pi-arrow-right"
            severity="contrast"
            rounded
            outlined
            aria-label="Bookmark"
            class="!w-8 !h-8 !bottom-10 !absolute"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- SECTION CLIENT TESTIMONIAL -->
  <section class="h-[500px] p-6 mt-10">
    <div class="container mx-auto">
      <h1
        class="text-xl text-center font-poppins text-[#1A7BFF] uppercase font-semibold"
      >
        Client Testimonials
      </h1>
      <h2
        class="text-4xl font-poppins font-bold text-center mt-2 text-gray-800"
      >
        What our clients tell about us?
      </h2>
      <div class="flex justify-center mt-10">
        <Carousel
          :value="testimonials"
          :responsiveOptions="responsiveOptions"
          class="max-w-[900px]"
        >
          <template #previcon>
            <i class="pi pi-angle-left text-5xl text-[#1A7BFF]" />
          </template>
          <template #item="slotProps">
            <div class="p-10">
              <!-- header -->
              <div class="flex justify-between">
                <div class="flex">
                  <NuxtImg
                    :src="slotProps.data.image"
                    alt="Image"
                    width="80"
                    height="80"
                  />
                  <div class="ml-4">
                    <h1 class="text-2xl font-bold">
                      {{ slotProps.data.name }}
                    </h1>
                    <p class="text-base mt-1">{{ slotProps.data.date }}</p>
                  </div>
                </div>
                <Rating v-model="slotProps.data.rate" readonly />
              </div>
              <!-- Testimonial -->
              <h1 class="mt-10 text-2xl font-bold">
                {{ slotProps.data.testimonial.title }}
              </h1>
              <p class="text-base italic mt-2">
                "{{ slotProps.data.testimonial.detail }}"
              </p>
            </div>
          </template>
          <template #nexticon>
            <i class="pi pi-angle-right text-5xl text-[#1A7BFF]" />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
  <!-- CONTACT US -->
  <section class="p-10 container mx-auto">
    <div class="flex justify-center">
      <div class="mr-7">
        <h1
          class="text-xl text-center font-poppins text-[#1A7BFF] uppercase font-semibold"
        >
          Contact Us
        </h1>
        <h2
          class="text-4xl font-poppins font-bold text-center mt-2 text-gray-800"
        >
          Ready to get started?
        </h2>
        <form class="mt-4 w-full">
          <FloatLabel class="mb-8 mt-8">
            <InputText id="name" class="!w-full !bg-white" />
            <label for="name">Name</label>
          </FloatLabel>
          <FloatLabel class="mb-8">
            <InputText id="email" class="!w-full !bg-white" />
            <label for="email">Email</label>
          </FloatLabel>
          <FloatLabel class="mb-5">
            <Textarea rows="5" cols="30" class="!w-full !bg-white" />
            <label>Message</label>
          </FloatLabel>
          <div class="text-center">
            <Button
              label="Submit"
              class="!bg-[#1A7BFF] !rounded-2xl !px-3 !py-[10px] !w-1/3"
            />
          </div>

          <!-- <div>
            <label>Name</label>
            <InputText type="text" placeholder="Name" class="!w-full !mt-2" />
          </div>
          <div>
            <label>Email</label>
            <InputText type="text" placeholder="Email" class="!w-full !mt-2" />
          </div>
          <div>
            <label>Message</label>
            <Textarea
              v-model="value"
              rows="5"
              cols="30"
              class="!w-full !mt-2"
            />
          </div> -->
        </form>
      </div>
      <div>
        <NuxtImg
          src="contact-us.png"
          class="flex-shrink-0"
          width="568"
          height="454"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Logo from "~/assets/logo/logo.svg";
import SearchEngine from "~/assets/icon/search-engine.svg";

const items = ref([
  {
    label: "Home",
  },
  {
    label: "Service",
  },
  {
    label: "Portfolio",
  },
  {
    label: "About",
  },
]);

const testimonials = [
  {
    name: "Jane Cooper",
    position: "Owner & Optometrist at Blake Bush Family Eye Care",
    image: "user1.png",
    date: "01/01/2021",
    rate: 5,
    testimonial: {
      title: "Amazing Delivered",
      detail:
        "I’m really impressed with the results you have delivered. The way you work your magic has made a big difference in our practice.",
    },
  },
  {
    name: "Jane Cooper",
    position: "Owner & Optometrist at Blake Bush Family Eye Care",
    image: "user1.png",
    date: "01/01/2021",
    rate: 4,
    testimonial: {
      title: "Amazing Delivered",
      detail:
        "I’m really impressed with the results you have delivered. The way you work your magic has made a big difference in our practice.",
    },
  },
];
</script>

<style>
.p-menubar-root-list {
  @apply !flex !justify-end !w-full;
}

.p-menubar-item {
  @apply hover:!border hover:!border-b-[1px] hover:!bg-transparent;
}

.p-carousel-indicator .p-carousel-indicator-button {
  @apply !w-4 !h-4 !rounded-full;
}

.p-carousel-indicator-active .p-carousel-indicator-button {
  @apply !bg-[#1A7BFF];
}

.p-rating-on-icon {
  @apply !text-[#1A78FF];
}

* {
  @apply font-poppins;
}
</style>
