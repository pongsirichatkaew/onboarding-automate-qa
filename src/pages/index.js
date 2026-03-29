import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const cards = [
  {
    title: 'Project Overview',
    description: 'Understand what this E2E project covers and why it exists.',
    to: 'docs/overview/project-overview',
  },
  {
    title: 'Start Here',
    description: 'Follow the onboarding path for new QA automation contributors.',
    to: 'docs/onboarding/start-here',
  },
  {
    title: 'Cucumber Standards',
    description: 'Learn how scenarios and step definitions should be written.',
    to: 'docs/cucumber/gherkin-writing-standard',
  },
];

export default function Home() {
  return (
    <Layout
      title="E2E Automation Docs"
      description="Documentation portal for E2E automation project"
    >
      <main className="homepage">
        <section className="hero-banner">
          <div className="container">
            <p className="hero-kicker">QA Automation Platform</p>
            <h1 className="hero-title">E2E Automation Docs</h1>
            <p className="hero-subtitle">
              Clean documentation for onboarding, Cucumber standards, and project structure.
            </p>

            <div className="hero-actions">
              <Link className="button button--primary button--lg" to="docs/intro">
                Open Docs
              </Link>
              <Link className="button button--secondary button--lg" to="docs/onboarding/start-here">
                Start Onboarding
              </Link>
            </div>
          </div>
        </section>

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