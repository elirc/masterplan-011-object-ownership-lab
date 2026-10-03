# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Rename only widget A

**Hint 1 — ownership:** Begin from `Widget.prototype.describe`. Add a labeled rename field; reuse the constructor name rule in a small shared validation function before changing A.name.

**Hint 2 — reasoning:** Revisit the decision “Share behavior, keep values per instance”. Ask yourself: What changes if you allocate a new function inside every constructor call?

**Answer direction:** A defensible solution demonstrates this observable result: Renaming A changes its description and leaves B unchanged; spaces-only input is rejected. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Add a third widget

**Hint 1 — ownership:** Begin from `Widget.prototype.describe`. Create a third independent instance and include it in the inspection output without creating another prototype method.

**Hint 2 — reasoning:** Revisit the decision “Show shadowing with an own property”. Ask yourself: Why does assigning undefined fail to restore the inherited method?

**Answer direction:** A defensible solution demonstrates this observable result: All fresh widgets share describe; shadowing A does not affect C. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Show the lookup route

**Hint 1 — ownership:** Begin from `Widget.prototype.describe`. Render an own-versus-inherited explanation for describe using Object.hasOwn.

**Hint 2 — reasoning:** Revisit the decision “Fail visibly on a lost receiver”. Ask yourself: Which expression supplies this in a.describe(), and what supplies it in method.call(a)?

**Answer direction:** A defensible solution demonstrates this observable result: The explanation changes after shadow and restore and agrees with the displayed result. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Restore all sample state

**Hint 1 — ownership:** Begin from `Widget.prototype.describe`. Add one reset action that constructs fresh A and B and clears the diagnostic message.

**Hint 2 — reasoning:** Revisit the decision “Share behavior, keep values per instance”. Ask yourself: What changes if you allocate a new function inside every constructor call?

**Answer direction:** A defensible solution demonstrates this observable result: After renaming or shadowing, reset returns the original names and sameMethod true. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Compare a bound callback

**Hint 1 — ownership:** Begin from `Widget.prototype.describe`. Add a button using describe.bind(a) and display its result after a later A rename.

**Hint 2 — reasoning:** Revisit the decision “Show shadowing with an own property”. Ask yourself: Why does assigning undefined fail to restore the inherited method?

**Answer direction:** A defensible solution demonstrates this observable result: The bound function keeps A as receiver while reading A's current name. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Document an own undefined property

**Hint 1 — ownership:** Begin from `Widget.prototype.describe`. Create a separate diagnostic example showing why own undefined still shadows. Keep the working widgets recoverable.

**Hint 2 — reasoning:** Revisit the decision “Fail visibly on a lost receiver”. Ask yourself: Which expression supplies this in a.describe(), and what supplies it in method.call(a)?

**Answer direction:** A defensible solution demonstrates this observable result: The example distinguishes property existence from value and includes a safe reset. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

new Widget("Map") creates A with an own name → lookup of A.describe finds no own property → lookup continues on Widget.prototype → the call uses A as its receiver → the result includes Map. Assigning A.describe changes the first lookup step; B still follows the original route.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
