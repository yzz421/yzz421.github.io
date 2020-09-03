<template>
  <ParentLayout>
    <template v-slot:page-top>
      <SummaryList />
    </template>

    <template v-slot:page-bottom>
      <div></div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import SummaryList from '@theme/components/SummaryList.vue'

export default {
  name: 'IndexPost',
  components: {
    ParentLayout,
    SummaryList,
  },
}
</script>
