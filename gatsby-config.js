module.exports = {
  siteMetadata: {
    title: `Node.js Rio`,
    logoSmall: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTU0QjU3MDU5NjAzMTFFQUJEQ0Y4NkVENUQ5NjBERjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTU0QjU3MDY5NjAzMTFFQUJEQ0Y4NkVENUQ5NjBERjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NTRCNTcwMzk2MDMxMUVBQkRDRjg2RUQ1RDk2MERGOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NTRCNTcwNDk2MDMxMUVBQkRDRjg2RUQ1RDk2MERGOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnKg+d4AAAk0SURBVHja7JwJ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`,
    siteUrl: `https://nodejs-rio.github.io`,
    description: `Comunidade Node.js no Rio de Janeiro`,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "Código de Conduta",
            url: "/codigo-de-conduta"
          },
          {
            title: "Vagas",
            url: "/vagas"
          },
          {
            title: "Quero Palestrar",
            url: "/call-4-papers"
          }
        ]
      },
      footer: {
        copyright: "nodejs-rio.github.io",
        columns: [
          {
            heading: "Nossos Canais",
            links: [
              {
                title: "Telegram",
                url: "https://t.me/nodejsrj"
              },
              {
                title: "Instagram",
                url: "https://www.instagram.com/nodejsrio/"
              },
              {
                title: "Meetup",
                url: "https://www.meetup.com/pt-BR/Node-js-Rio"
              }
            ]
          },
          {
            heading: "Quero ajudar",
            links: [
              {
                title: "Quero ser palestrante",
                url: "https://forms.gle/zKexDS5bUdEY7TvJ6"
              },
              {
                title: "Quero divulgar vagas",
                url: "/call-4-papers"
              }
            ]
          },
          {
            heading: "Navegar",
            links: [
              {
                title: "Código de Conduta",
                url: "/codigo-de-conduta"
              },
              {
                title: "Vagas",
                url: "/vagas"
              },
              {
                title: "Posts",
                url: "/posts"
              }
            ]
          }
        ]
      }
    },
    templates: {
      home: {
        totalPosts: 3,
        template: "home"
      },
      pages: {
        path: "/content/pages/",
        template: "page"
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefix: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6
            }
          }
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6
        }
      }
    }
  },
  plugins: [
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NodeJSRio`,
        short_name: `NodeJSRio`,
        start_url: `/`,
        background_color: `green`,
        theme_color: `green`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `nodejsrio`
      }
    },
  ]
};
