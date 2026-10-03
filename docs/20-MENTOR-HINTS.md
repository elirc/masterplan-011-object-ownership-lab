# M011: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain own property through this project

An entry stored directly on the instance.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain prototype lookup through this project

Searching shared behavior after no own property is found.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain receiver through this project

The this value supplied for a function call.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain shadowing through this project

An own property taking precedence over an inherited one.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: Two fresh widgets

sameMethod is true; names are different own properties

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: Shadow A, then delete its own describe

Only A changes, then inherited behavior returns

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Call detached describe, then describe.call(A)

First throws a receiver error; second returns Widget: Map

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** What changes if you allocate a new function inside every constructor call?

Placing name on each new object gives each widget independent data. Sharing a method on the prototype avoids confusing behavior ownership with data ownership. The reference does not modify Object.prototype, and the shared function reads the receiver supplied by the call. Compare two function identities as well as two return values: identical output alone would not prove the function is shared.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** Why does assigning undefined fail to restore the inherited method?

The shadow button assigns a method on A. It leaves the prototype untouched, which is why B continues to describe itself normally. The restore button deletes that single own property. This is an explicit lookup exercise, not a mechanism for patching global language behavior.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Which expression supplies this in a.describe(), and what supplies it in method.call(a)?

The prototype method checks that its receiver is a Widget. A detached call therefore produces an intentional diagnostic instead of an obscure property-read failure. Calling the same function with .call(a) supplies the missing receiver without creating another widget.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** Where does JavaScript look when this property is absent on the instance?

Property lookup and receiver selection answer different questions. Lookup finds which function is called; the call expression supplies the receiver whose data that function reads. An own property can block an inherited property even when its value is undefined. Keeping these questions separate makes shadowing, deletion and detached callbacks much easier to predict.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add an ownership table

**First hint:** The desired improvement is “Make lookup visible without reading raw JSON.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive rows with property name and ownership; render safe text; compare fresh, shadowed and restored states.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A callable inherited method is not mislabeled as absent.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the columns and property vocabulary. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add a shared category field

**First hint:** The desired improvement is “Compare inherited data with own instance data.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Put a fictional category on the prototype; inspect both widgets; shadow it on only A.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A's category override leaves B's inherited value unchanged.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a clear category example. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Demonstrate a prototype update

**First hint:** The desired improvement is “Show a change that intentionally reaches both unshadowed instances.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Save the original method in a scratch fixture; replace the prototype method; restore it explicitly after the experiment.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Both unshadowed widgets change while an own shadow remains independent.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the temporary shared behavior. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add an invalid receiver fixture

**First hint:** The desired improvement is “Distinguish a Widget from a lookalike object.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Call the prototype method with a plain object containing name; observe the guard; explain the deliberate receiver contract.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A matching field name alone does not satisfy instanceof Widget.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Decide whether duck typing would be a useful alternative branch. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Compare enumeration with ownership

**First hint:** The desired improvement is “Explain why a property list may differ from an own-key list.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Inspect Object.keys and a controlled for-in example; label inherited entries; avoid modifying global prototypes.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The worksheet distinguishes visibility during enumeration from own-property status.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the exact property set to inspect. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a readonly inspection snapshot

**First hint:** The desired improvement is “Prevent a learner confusing displayed data with the live instance.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Return a new diagnostic object; edit the snapshot in a scratch test; compare the real widget afterward.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Changing a diagnostic name field does not rename the widget.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose how to communicate snapshot semantics. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a receiver prediction quiz

**First hint:** The desired improvement is “Practice call-expression reading.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Write three calls using the same function; ask for receiver and output separately; place answers in a hints section.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The answer key explains lookup and receiver as separate steps.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose one deliberately failing call. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Compare constructor and class syntax

**First hint:** The desired improvement is “Explore equivalent behavior on a branch.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Recreate the small Widget with class syntax; keep the same per-instance field and shared method; compare ownership checks.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The explanation does not mistake new syntax for a new ownership policy.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose which differences deserve documentation. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add a property removal warning

**First hint:** The desired improvement is “Explain the effect of deleting an own data field.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Delete A's name only in a scratch fixture; inspect describe output; decide a guard or recovery policy before changing production.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The experiment identifies the missing data instead of blaming method lookup.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether deletion should be supported. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
