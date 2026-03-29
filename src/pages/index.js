import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const cards = [
  {
    title: '🚀 Start Here',
    description: 'Begin onboarding and understand the project quickly',
    to: '/docs/getting-started/start-here',
  },
  {
    title: '📘 Project Overview',
    description: 'Understand system structure and purpose',
    to: '/docs/project/overview',
  },
  {
    title: '▶️ Scenario Flow',
    description: 'See how a scenario runs end-to-end',
    to: '/docs/project/scenario-execution-flow',
  },
  {
    title: '🥒 Gherkin Best Practices',
    description: 'Learn how to write clean scenarios',
    to: '/docs/cucumber/gherkin-best-practices',
  },
  {
    title: '⚙️ Step System',
    description: 'Understand step and function structure',
    to: '/docs/cucumber/step-system',
  },
  {
    title: '🧩 Support Layer',
    description: 'API, auth, DB, and shared utilities',
    to: '/docs/support/support-layer',
  },
];

export default function Home() {
  return (
    <Layout
      title="E2E Automation Docs"
      description="OpenAPI E2E documentation portal"
    >
      <main className="homepage">
        
        {/* HERO */}
        <section className="hero-banner">
          <div className="container">
            <p className="hero-kicker">QA Automation Platform</p>
            <h1 className="hero-title">E2E Automation Docs</h1>
            <p className="hero-subtitle">
              Documentation for OpenAPI E2E, step system, and web runner execution
            </p>

            <div className="hero-actions">
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/start-here"
              >
                Start Here
              </Link>

              <Link
                className="button button--secondary button--lg"
                to="/docs/project/overview"
              >
                View Overview
              </Link>
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section className="home-section container">
          <div className="card-grid">
            {cards.map((card) => (
              <Link key={card.title} className="home-card" to={card.to}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </Layout>
  );
}