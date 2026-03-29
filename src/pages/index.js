import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const cards = [
  {
    title: 'Start Here',
    description: 'Begin onboarding and understand the project quickly.',
    to: '/docs/getting-started/start-here',
    icon: '🚀',
  },
  {
    title: 'Project Overview',
    description: 'Understand the purpose, structure, and core concepts.',
    to: '/docs/project/overview',
    icon: '📘',
  },
  {
    title: 'Scenario Flow',
    description: 'See how web runner, feature, steps, and support connect.',
    to: '/docs/project/scenario-execution-flow',
    icon: '▶️',
  },
  {
    title: 'Gherkin Best Practices',
    description: 'Learn how to write clean and reusable scenarios.',
    to: '/docs/cucumber/gherkin-best-practices',
    icon: '🥒',
  },
  {
    title: 'Step System',
    description: 'Understand step mapping, functions, and execution flow.',
    to: '/docs/cucumber/step-system',
    icon: '⚙️',
  },
  {
    title: 'Support Layer',
    description: 'API, auth, DB, utils, and shared scenario state.',
    to: '/docs/support/support-layer',
    icon: '🧩',
  },
];

function HomeCard({ title, description, to, icon }) {
  return (
    <Link className="homeCard" to={to}>
      <div className="homeCard__icon">{icon}</div>
      <h3 className="homeCard__title">{title}</h3>
      <p className="homeCard__description">{description}</p>
      <span className="homeCard__action">Open page →</span>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout
      title="E2E Automation Docs"
      description="OpenAPI E2E documentation portal"
    >
      <main className="homePage">
        <section className="heroSection">
          <div className="container heroSection__inner">
            <div className="heroBadge">OpenAPI E2E</div>

            <h1 className="heroTitle">E2E Automation Docs</h1>

            <p className="heroSubtitle">
              Clean documentation for web runner execution, Cucumber structure,
              and reusable step-based automation.
            </p>

            <div className="heroActions">
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/start-here"
              >
                Start Here
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/project/overview"
              >
                View Project
              </Link>
            </div>
          </div>
        </section>

        <section className="homeCardsSection">
          <div className="container">
            <div className="sectionHeader">
              <p className="sectionEyebrow">Navigation</p>
              <h2 className="sectionTitle">Start with the right pages</h2>
              <p className="sectionDescription">
                These pages are enough to onboard a new contributor without
                throwing them into the codebase too early.
              </p>
            </div>

            <div className="homeCardsGrid">
              {cards.map((card) => (
                <HomeCard key={card.title} {...card} />
              ))}
            </div>

            <section className="homeCardsSection">
              <div className="container">
                <div className="sectionHeader">
                  <p className="sectionEyebrow">Core Flow</p>
                  <h2 className="sectionTitle">How the system works</h2>
                  <p className="sectionDescription">
                    The web runner loads a scenario, maps steps to functions, and executes
                    shared support logic for API, auth, DB, and state.
                  </p>
                </div>

                <div className="homeFlow">
                  <div className="homeFlow__item">Web Runner</div>
                  <div className="homeFlow__arrow">→</div>
                  <div className="homeFlow__item">Feature</div>
                  <div className="homeFlow__arrow">→</div>
                  <div className="homeFlow__item">Step</div>
                  <div className="homeFlow__arrow">→</div>
                  <div className="homeFlow__item">Function</div>
                  <div className="homeFlow__arrow">→</div>
                  <div className="homeFlow__item">Support</div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}