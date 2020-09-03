<template>
  <div class="content">
    <article v-for="post of pages" :key="post.key" class="post-item">
      <header class="post-title">
        <router-link :to="{ path: post.path }">{{ post.title }}</router-link>
      </header>
      <div class="post-content">
        <Content :pageKey="post.key" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    pages() {
      return this.$site.pages
        .filter(({ id }) => id === "post")
        .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
        .slice(0, 5);
    },
  },
  created() {},
  methods: {
    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || "ddd MMM DD YYYY"
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.content {
  .post-item {
    margin: 3rem auto;
    padding-bottom: 3rem;
    border-bottom: 1px solid #ddd;

    .post-title {
      margin: 1rem auto;
      font-size: 2rem;
    }

    .post-content {
      max-height: 20rem;
      overflow: hidden;

      & >>> img {
        max-width: 100%;
        height: auto;
      }
    }
  }
}
</style>
