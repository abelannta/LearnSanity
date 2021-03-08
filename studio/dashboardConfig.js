export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6046039cad3d94afd60fb8ef',
                  title: 'Sanity Studio',
                  name: 'learnsanity-studio',
                  apiId: '5255c370-18de-4586-8b8f-0bbb18953297'
                },
                {
                  buildHookId: '6046039c4813f795d760ff5b',
                  title: 'Blog Website',
                  name: 'learnsanity',
                  apiId: 'c53bf965-5003-4ec6-b539-2f6c25eab7df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abelannta/LearnSanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://learnsanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
