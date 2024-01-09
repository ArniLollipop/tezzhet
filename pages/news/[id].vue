<template>
  <header class="news-header">
    <div class="restaurants-header__flex">
      <button @click="navigateTo('/')" class="restaurants-header__btn">
        <IconChevron class="rotate-90 -ml-2" />
      </button>
    </div>
    <NuxtImg
      loading="lazy"
      :src="
        newsDetails?.image ||
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
      "
      :alt="newsDetails?.title"
      class="news-header__img"
    />
    <div class="news-header__bottom">
      <p class="news-header__text">{{ newsDetails?.title }}</p>
    </div>
  </header>
  <div class="content-grid">
    <MainNewsList :news="news.results" v-if="news" />
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const route = useRoute();

const { data: newsDetails } = await useHttp<INews>(
  `main_page/news/${route.params.id}/`
);

const { data: news } = await useHttp("main_page/news", {
  transform(data: Pagination<INews>) {
    return {
      ...data,
      results: data.results?.filter((item) => {
        return (
          typeof item === "object" &&
          "id" in item &&
          (item as INews).id !== newsDetails.value?.id
        );
      }),
    };
  },
});
</script>
