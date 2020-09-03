<template>
  <ParentLayout>
    <Comment v-slot:sidebar-bottom />
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

export default {
  name: 'Layout',

  components: {
    ParentLayout,
    Comment,
  },
}
</script>
