#!/bin/bash

mkdir -p docs/overview
mkdir -p docs/runner
mkdir -p docs/cucumber
mkdir -p docs/support

cat > docs/intro.md << 'EOF'
# E2E Automation Docs

OpenAPI E2E testing system with web runner.

## Core flow

Web Runner → Feature → Step → Function → Support

## Start here

- Overview
- Repository Structure
- How Scenario Runs
EOF

cat > docs/overview/project-overview.md << 'EOF'
# Project Overview

## Purpose

Provide end-to-end API testing using feature-based scenarios.

## System

- feature-driven testing
- reusable step functions
- web runner execution
- support layer (api / auth / db)

## Key idea

Feature → Step → Function → Support
EOF

cat > docs/overview/repository-structure.md << 'EOF'
# Repository Structure

## Core folders

features/                → scenario files
src/step_definitions/    → step system
support/                 → api / auth / db / utils

## Features

features/advisors/
  get_advisors.feature
  get_advisors+me.feature
  get_advisors+{advisorid}.feature

## Step system

functions/ → logic
steps/     → mapping

## Support

support/
  api/
  db/
  utils/
  world.js
EOF

cat > docs/runner/how-run-scenario.md << 'EOF'
# How Scenario Runs

## URL

http://localhost:5173/webapp?scenario=advisors/get_advisors+me

## Mapping

scenario=advisors/get_advisors+me
↓
features/advisors/get_advisors+me.feature

## Flow

1. Web runner reads scenario
2. Load feature file
3. Execute steps
4. Call functions
5. Use support layer
EOF

cat > docs/cucumber/feature-pattern.md << 'EOF'
# Feature Pattern

## Format

<method>_<resource>+<variant>.feature

## Example

get_advisors.feature
get_advisors+me.feature
get_advisors+{advisorid}.feature

## Rule

- keep naming consistent
- reflect API behavior
EOF

cat > docs/cucumber/step-system.md << 'EOF'
# Step System

## Structure

functions/ → implementation
steps/     → mapping

## Flow

Feature → Step → Function

## Rule

Step must be thin  
Logic must be reusable
EOF

cat > docs/cucumber/script-catalog.md << 'EOF'
# Script Catalog

## Pattern

[
  'the response should be empty array',
  then.shouldBeEmptyArrayResponse,
  'Check a value in the body response that it is empty array'
]

## Structure

1. step text
2. function
3. description

## Rule

- one step = one responsibility
- reusable
EOF

cat > docs/support/support-layer.md << 'EOF'
# Support Layer

## Structure

support/

api/
  request.js
  response.js
  auth0.js
  iam.js

db/
utils/
world.js

## Responsibility

- API → request / response
- Auth → token
- DB → data
- Utils → helpers
- World → shared state
EOF

echo "✅ Docs generated successfully"