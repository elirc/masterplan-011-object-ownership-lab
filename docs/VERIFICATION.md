# Verification record

[Overview](../README.md) · [Machine-readable evidence](verification.json)

Local reference checks ran on 2026-10-03 with **Node v22.16.0**. The machine-readable record contains the captured output rather than an invented transcript.

## Executable checks

Command: `node --test`. Exit code: **0**. 4 tests passed.

Re-run from this repository with `npm test`. There are no external npm dependencies. The local preview can be started with npm start.

## Browser evidence

- No document horizontal overflow at 1200, 800, 500 and 320 CSS pixels
- First Tab reveals skip link; Enter focuses main
- Own-method shadow and deletion leave B independent; detached-call error recovers through explicit receiver

These checks ran in installed Microsoft Edge through a browser automation harness. No JavaScript page errors were observed. A representative screenshot is saved in images/preview.png. The harness was run from the parent workspace; the reproduction checklist below can be performed without installing that harness.

## Reproduce the important observation yourself

Load the page, shadow A, inspect B, restore A, detach the method, and then call with a receiver. Record ownsDescribe and sameMethod at each step.

Record viewport, input, expected result and actual result. For interaction failures, verify that correcting the input produces a normal result and does not leave stale error styling or stale output. For a layout failure, distinguish document overflow from an intentionally scrollable table region.

## Limits

These observations cover the listed fixtures and one installed browser. They are not a full cross-browser, accessibility, production-security or performance audit. There is no real external service to validate. CI checks executable logic and local asset references; the React builds also install the lockfile and compile JSX. The recorded browser observations remain separate evidence. New stories require new evidence after your changes.

The GitHub Actions workflow runs `npm test` on push and pull request. Its configuration is included; an actual remote success must be verified on GitHub separately. Do not infer it merely from this local report.
