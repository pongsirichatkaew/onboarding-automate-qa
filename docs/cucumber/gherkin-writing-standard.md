
## `docs/cucumber/gherkin-writing-standard.md`

```md
# Gherkin Writing Standard

## Principles

- One scenario should describe one behavior.
- Avoid implementation details in feature files.
- Use Given for preconditions.
- Use When for actions.
- Use Then for observable outcomes.

## Example

```gherkin
Scenario: valid request is processed successfully
  Given valid prerequisite data exists
  When the user submits a valid request
  Then the request should be processed successfully