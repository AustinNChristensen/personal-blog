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
                  buildHookId: '5ea0d10467c433b98031c519',
                  title: 'Sanity Studio',
                  name: 'personal-blog-studio-398wek7k',
                  apiId: '20bac3dd-ac1e-449b-95ba-d5b49e6e7377'
                },
                {
                  buildHookId: '5ea0d104e0f86b754d9b868c',
                  title: 'Blog Website',
                  name: 'personal-blog-web-6yan6xd6',
                  apiId: 'e35cdcc2-50aa-4799-96df-b8df6dd9a81c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AustinNChristensen/personal-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://personal-blog-web-6yan6xd6.netlify.app', category: 'apps' }
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
