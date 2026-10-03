# Debugging laboratory

[Concepts](02-CONCEPTS-AND-TRACES.md) · [Practice stories](05-PRACTICE-STORIES.md)

These are deliberately proposed defects for a scratch branch. They are not claims that the shipped reference still contains these bugs. Keep main working and introduce only one change at a time.

## Case 1: Both widgets change when only A should change

**Introduce or discuss this mistake:** Replace the own-property assignment with Widget.prototype.describe = ... on a scratch branch.

**Discriminating experiment:** Press Shadow and inspect B as well as A.

### Worked diagnosis

First state the expected contract: Each Widget owns its name while both instances inherit one describe function. Assigning a describe property to A shadows the inherited function without changing B. Deleting that own property reveals the prototype method again. A detached method needs an explicit Widget receiver; the reference reports a readable error when it has none. Then create the smallest example from the experiment above. Compare the observed result with the contract before changing more code. The likely cause is at this boundary: **public/app.js: the mutation target must be a, not Widget.prototype.**. Repair that boundary, rerun the example, and check one neighboring valid case so the repair does not merely special-case the chosen input.

The completed reasoning record is: symptom → contract violated → input that distinguishes hypotheses → owning line or rule → minimal repair → regression evidence. This is a worked diagnostic route; fill in your actual outputs when you run it. No invented console transcript is supplied.

## Case 2: Restore makes describe non-callable

**Introduce or discuss this mistake:** Assign a.describe = undefined instead of deleting it.

**Discriminating experiment:** Call inspect(a) after restore; explain why lookup stops at the own property.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** public/app.js: restore must remove the own property.

## Case 3: A detached method reads the wrong object

**Introduce or discuss this mistake:** Remove the receiver check and invoke describe as a standalone function.

**Discriminating experiment:** Compare standalone invocation with .call(a).

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** public/core.js: Widget.prototype.describe and its call sites.

## If the first repair does not work

Do not pile on another unrelated edit. Read the diff and check whether the observed failure changed. If the hypothesis was wrong, write that down and restore only your own experimental change before testing the next hypothesis. A rejected hypothesis is useful progress when its evidence is clear.

When asking an assistant for help, provide the exact input, expected and observed result, the current diff and the file you believe owns the rule. Ask for one counterexample or diagnostic question first. Keep proposed causes separate from demonstrated causes.
