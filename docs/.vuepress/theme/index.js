module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    '@vuepress/last-updated',
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'home',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/',
            layout: 'IndexPost',
            itemPermalink: '/post/:slug',
          },
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/post/',
            layout: 'IndexPost',
            itemPermalink: '/post/:slug',
          },
        ],
        comment: {
          service: 'disqus',
          shortname: 'yzz421',
        },
      },
    ],
  ],
}
