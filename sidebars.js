/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        'getting-started/start-here',
        'getting-started/how-to-run',
      ],
    },
    {
      type: 'category',
      label: '📘 Project',
      items: [
        'project/overview',
        'project/repository-structure',
        'project/scenario-execution-flow',
      ],
    },
    {
      type: 'category',
      label: '🥒 Cucumber',
      items: [
        'cucumber/gherkin-best-practices',
        'cucumber/feature-naming',
        'cucumber/step-system',
        'cucumber/script-catalog',
      ],
    },
    {
      type: 'category',
      label: '🧩 Support',
      items: [
        'support/support-layer',
      ],
    },
  ],
};

module.exports = sidebars;