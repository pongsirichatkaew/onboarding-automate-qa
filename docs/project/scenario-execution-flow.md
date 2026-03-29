# Scenario Execution Flow

## URL format

```text
http://localhost:5173/webapp?scenario=advisors/get_advisors+me
```

## Mapping

```text
scenario=advisors/get_advisors+me
↓
features/advisors/get_advisors+me.feature
```

## Execution flow

1. Web runner reads the `scenario` parameter
2. The matching feature file is loaded
3. Step text is matched to registered steps
4. The mapped function is executed
5. The support layer handles API, auth, DB, and shared state