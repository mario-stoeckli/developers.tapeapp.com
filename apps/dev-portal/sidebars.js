// https://docusaurus.io/docs/sidebar
module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Developer API',
      collapsed: true,
      items: [
        'api/introduction',
        'api/authentication',
        'api/pagination',
        'api/versioning',
        'api/errors',
        'api/request-limits',
        'api/date-timezone',
        {
          type: 'category',
          label: 'Resources',
          collapsed: false,
          items: [
            'api/resource/record',
            {
              type: 'category',
              label: 'Field Value',
              collapsed: true,
              items: [
                'api/resource/field-value/general',
                'api/resource/field-value/text',
                'api/resource/field-value/category',
              ],
            },
            'api/resource/app',
            'api/resource/workspace',
            'api/resource/file',
            'api/resource/link-preview',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Calculation Field',
      collapsed: true,
      items: [
        'calculation/introduction',
        'calculation/libraries',
        'calculation/markdown',
        'calculation/html',
        {
          type: 'category',
          label: 'Components',
          collapsed: false,
          items: ['calculation/component/link', 'calculation/component/button'],
        },
      ],
    },
    'contribute',
    {
      type: 'link',
      label: 'Roadmap',
      href: 'https://get.tapeapp.com/roadmap/',
    },
  ],
  guidesSidebar: [
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'guide/getting-started',
    },
    'contribute',
    {
      type: 'link',
      label: 'Roadmap',
      href: 'https://get.tapeapp.com/roadmap/',
    },
  ],
};
