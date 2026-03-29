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
