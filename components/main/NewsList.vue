<template>
  <section class="news">
    <h2 v-if="news?.length > 0">{{ $t("news") }}</h2>
    <div class="news-list">
      <div class="news-list__box" v-for="item in props.news" :key="item.id">
        <div class="news-list__big" @click="handleRouteNews(item.id)">
          <NuxtImg
            loading="lazy"
            :src="item.image"
            :alt="item.title"
            class="news-list__big__img"
          />
          <div class="news-list__footer">
            <div class="news-list__line">
              <p class="news-list__date" v-if="item.date_published !== ''">
                {{ useFormatDate(item.date_published) }}
              </p>
            </div>
            <p class="news-list__text">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  news: INews[];
}>();

async function handleRouteNews(id: number) {
  await navigateTo(`/news/${id}`);
}
</script>
