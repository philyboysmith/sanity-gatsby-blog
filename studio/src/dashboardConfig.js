export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6a458a4d24d5399b69a519',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ay9x2p2w',
                  apiId: '28bed705-6016-4cad-b2ef-13b890ab3ee0'
                },
                {
                  buildHookId: '5e6a458a10527542925ec0fb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-a9146z5c',
                  apiId: '80e02097-8c95-4163-87b4-9a9897b62558'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/philyboysmith/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-a9146z5c.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
