// https://docusaurus.io/docs/sidebar
module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Developer API',
      collapsed: false,
      items: ['api/api-reference', 'api/api-reference-new', 'api/pagination', 'api/rate-limiting', 'api/errors'],
    },
    {
      type: 'category',
      label: 'Calculation Field',
      collapsed: false,
      items: [
        'calculation/intro',
        'calculation/libraries',
        'calculation/markdown',
        'calculation/html',
        {
          type: 'category',
          label: 'Examples',
          collapsed: true,
          items: ['calculation/example/link', 'calculation/example/button'],
        },
      ],
    },
    'contribute',
  ],
};
