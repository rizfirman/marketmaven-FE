<template>
  <BaseMenubar />
  <div class="container mx-auto p-10 max-w-[1000px]">
    <h1
      class="text-xl text-center font-poppins text-[#1A7BFF] uppercase font-semibold"
    >
      Portofolio
    </h1>
    <h2 class="text-4xl font-poppins font-bold text-center mt-2 text-gray-800">
      Let’s See Our Projects!
    </h2>
    <p class="mt-16 text-base text-gray-400 text-center">
      Over the years, we have had the great pleasure of working with companies
      leading their respective industries. Working with various industries
      helped us to be aware of the different approaches each needs. With
      MarketMaven, we will try to understand your company first and what it
      might need before offering any advices of improvement that’s within our
      expertise. We won’t push you to do something that will only benefit us.
    </p>
    <div
      v-for="portofolio in listPortofolio"
      class="flex justify-between mt-10 items-center"
    >
      <div class="w-1/2 mr-5">
        <h1 class="text-2xl font-bold mb-2">{{ portofolio.title }}</h1>
        <p class="text-base text-gray-500">{{ portofolio.description }}</p>
        <div class="mt-6">
          <label class="text-base font-bold">Client : </label>
          <div class="flex items-center">
            {{ portofolio.client.name }}
            <NuxtImg
              :src="`/client/${portofolio.client.image}`"
              width="150"
              height="30"
              class="ml-2 flex-shrink-0"
            />
          </div>
        </div>
      </div>
      <NuxtImg
        :src="`/portofolio/${portofolio.image}`"
        class="flex-shrink-0 w-1/2"
      />
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
interface Portofolio {
  title: String;
  description: String;
  image: String;
  client: {
    name: String;
    image: String;
  };
}

let listPortofolio: Portofolio[] = [
  //   {
  //     title: "Peluang Kerjaku",
  //     description:
  //       "Peluang Kerjaku is a useful source of information for job seekers in Indonesia. This account provides information about the latest job vacancies, job application tips, and other career information.",
  //     image: "peluang-kerjaku.png",
  //   },
  //   {
  //     title: "Wonder Photoshop",
  //     description:
  //       "Wonder Photo Shop ID is a shop that offers various photography and photo printing services, providing services such as instant photo printing, making photo albums, and other creative products related to photography.",
  //     image: "wonder-photoshop.png",
  //   },
  {
    title: "Instax Indonesia",
    description:
      "Instax Indonesia is the official distributor of Fujifilm Instax products in Indonesia. Instax offers a wide variety of instant and film cameras that allow you to print photos directly",
    image: "instax-Indonesia.png",
    client: { name: "Fujifilm", image: "fujifilm-logo.svg" },
  },
  {
    title: "Universitas Terbuka Surabaya",
    description:
      "Universitas Terbuka Surabaya is a higher education institution that provides access to quality education for the community with a focus on distance learning",
    image: "universitas-terbuka-surabaya.png",
    client: { name: "Universitas Terbuka Surabaya", image: "ut-surabaya.png" },
  },
  {
    title: "People @ocbc",
    description:
      "A social media account from OCBC that introduces activities and activities as well as the enthusiasm of OCBC employees. Don't forget to also act as a forum to help employees implement a growth mindset by providing tips and appreciation",
    image: "people-ocbc.png",
    client: { name: "PT OCBC NISP", image: "ocbc.jpg" },
  },
];

// let contentCreation:Card[]=[{

// }]
</script>

<style scoped>
* {
  @apply font-poppins;
}
</style>
