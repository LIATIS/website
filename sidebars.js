module.exports = {
  sidebar: {
    "👋 Introduction": ['index', 'philosophy', 'sponsors', 'roadmap', 'community', 'license'],
    "💁 Usage": [
      'install',
      'hello-world',
      'config',
      'server-side',
    ],
    "🛠 Config": [
      'config/data',
      'config/from',
      'config/columns',
      'config/server',
      'config/style',
      'config/className',
      'config/language',
      'config/width',
      'config/height',
      'config/autoWidth',
      'config/fixedHeader',
      'config/search',
      'config/sort',
      'config/pagination',
    ],
    "🧩 Plugin": [
      'plugin/basics',
      'plugin/writing-plugin',
      'plugin/advanced-plugins',
    ],
    "🔌 Integrations": [
      'integrations/react',
      'integrations/vue',
      'integrations/angular',
      'integrations/svelte',
      'integrations/jquery',
    ],
    "🎮 Examples": [{
      type: 'category',
      label: 'Basic',
      items: [
        'examples/hello-world',
        'examples/from',
        'examples/pagination',
        'examples/search',
        'examples/sorting',
        'examples/loading-state',
        'examples/wide-table',
        'examples/fixed-header',
        'examples/hidden-columns',
      ]
    }, {
      type: 'category',
      label: 'Data Source',
      items: [
        'examples/import-json',
        'examples/import-xml',
        'examples/from',
        'examples/server',
        'examples/import-function',
        'examples/import-async',
      ]
    }, {
      type: 'category',
      label: 'Server-side',
      items: [
        'examples/server',
        'examples/server-side-search',
        'examples/server-side-pagination',
        'examples/server-side-sort',
        'examples/custom-http-client',
      ]
    }, {
      type: 'category',
      label: 'Styling',
      items: [
        'examples/css-style',
        'examples/css-classname',
        'examples/css-in-js',
      ]
    }, {
      type: 'category',
      label: 'Customizing',
      items: [
        'examples/cell-formatting',
        'examples/cell-attributes',
        'examples/row-buttons',
        'examples/html-cells',
        'examples/html-header-cells',
        'examples/react-cells',
        'examples/i18n',
      ]
    }, {
      type: 'category',
      label: 'Selection',
      items: [
        'examples/selection',
        'examples/row-selection',
        'examples/selection-events',
      ]
    }, {
      type: 'category',
      label: 'Advanced',
      items: [
        'examples/nested-header',
        'examples/force-render',
        'examples/virtual-dom',
        'examples/multi-sort',
        'examples/custom-sort',
        'examples/stock-market',
        'examples/event-handler'
      ]
    }]
  },
};
