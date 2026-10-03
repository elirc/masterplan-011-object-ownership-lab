# Six junior practice stories

[Debugging lab](04-DEBUGGING-LAB.md) · [Hints — use after an attempt](06-HINTS-AND-ANSWERS.md)

These are new exercises beyond the finished reference. No story is marked complete for you. Start a branch such as practice/story-01 and write acceptance examples before editing. Each plan leaves the actual code, wording and one design choice to you.

## Story 01: Rename only widget A

**User need:** As a learner or user of Object Ownership Lab, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Add a labeled rename field; reuse the constructor name rule in a small shared validation function before changing A.name.

**Implementation plan:**

1. Trace `Widget.prototype.describe` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Renaming A changes its description and leaves B unchanged; spaces-only input is rejected.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Renaming A changes its description and leaves B unchanged; spaces-only input is rejected.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 02: Add a third widget

**User need:** As a learner or user of Object Ownership Lab, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Create a third independent instance and include it in the inspection output without creating another prototype method.

**Implementation plan:**

1. Trace `Widget.prototype.describe` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: All fresh widgets share describe; shadowing A does not affect C.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** All fresh widgets share describe; shadowing A does not affect C.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 03: Show the lookup route

**User need:** As a learner or user of Object Ownership Lab, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Render an own-versus-inherited explanation for describe using Object.hasOwn.

**Implementation plan:**

1. Trace `Widget.prototype.describe` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The explanation changes after shadow and restore and agrees with the displayed result.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The explanation changes after shadow and restore and agrees with the displayed result.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 04: Restore all sample state

**User need:** As a learner or user of Object Ownership Lab, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Add one reset action that constructs fresh A and B and clears the diagnostic message.

**Implementation plan:**

1. Trace `Widget.prototype.describe` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: After renaming or shadowing, reset returns the original names and sameMethod true.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** After renaming or shadowing, reset returns the original names and sameMethod true.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 05: Compare a bound callback

**User need:** As a learner or user of Object Ownership Lab, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Add a button using describe.bind(a) and display its result after a later A rename.

**Implementation plan:**

1. Trace `Widget.prototype.describe` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The bound function keeps A as receiver while reading A's current name.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The bound function keeps A as receiver while reading A's current name.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 06: Document an own undefined property

**User need:** As a learner or user of Object Ownership Lab, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Create a separate diagnostic example showing why own undefined still shadows. Keep the working widgets recoverable.

**Implementation plan:**

1. Trace `Widget.prototype.describe` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The example distinguishes property existence from value and includes a safe reset.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The example distinguishes property existence from value and includes a safe reset.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.
