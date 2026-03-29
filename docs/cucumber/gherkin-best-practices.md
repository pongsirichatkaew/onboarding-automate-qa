# Gherkin Best Practices

## Core rules

- one scenario = one behavior
- keep wording consistent
- describe intent, not implementation
- use Given / When / Then correctly

---

## Given / When / Then

### Given
Use for setup or context.

Examples:
- a valid access token is prepared
- advisor data exists
- the database is seeded

### When
Use for the main action.

Examples:
- the client requests "GET /advisors"
- the client requests "GET /advisors/me"

### Then
Use for observable result.

Examples:
- the response status should be 200
- the response should be empty array
- the advisor id should be "123"

---

## Good example

```gherkin
Feature: Advisors API

  Scenario: get advisors returns empty array
    Given a valid access token is prepared
    When the client requests "GET /advisors"
    Then the response status should be 200
    And the response should be empty array
```

---

## Another good example

```gherkin
Feature: Advisors API

  Scenario: get advisors me returns advisor profile
    Given a valid access token is prepared
    When the client requests "GET /advisors/me"
    Then the response status should be 200
    And the response should contain advisor profile
```

---

## Avoid this

### Too technical

```gherkin
Scenario: get advisors me
  Given I set authorization header
  When I call the endpoint
  Then response.body.length should be 0
```

### Too broad

```gherkin
Scenario: advisors works
```

### Too many behaviors

```gherkin
Scenario: get advisors and validate auth and check db state
```

---

## Naming guideline

Use this pattern for scenario names:

`<endpoint behavior> + <expected result>`

Examples:
- get advisors returns empty array
- get advisors me returns advisor profile
- get advisor by id returns advisor detail