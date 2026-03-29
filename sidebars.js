/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: '🚀 Onboarding',
      items: [
        'onboarding/start-here',
        'onboarding/how-to-run',
      ],
    },
    {
      type: 'category',
      label: '📘 Overview',
      items: [
        'overview/project-overview',
        'overview/repository-structure',
      ],
    },
    {
      type: 'category',
      label: '▶️ Runner',
      items: [
        'runner/how-run-scenario',
      ],
    },
    {
      type: 'category',
      label: '🥒 Cucumber',
      items: [
        'cucumber/feature-pattern',
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