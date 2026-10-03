# Build journal: Object Ownership Lab

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A learner needs to see why changing one object's own property differs from changing a shared prototype.

The main temptation was to make the project larger than its learning target. The useful boundary is **prototype lookup and shared behavior**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Each Widget owns its name while both instances inherit one describe function. Assigning a describe property to A shadows the inherited function without changing B. Deleting that own property reveals the prototype method again. A detached method needs an explicit Widget receiver; the reference reports a readable error when it has none.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Share behavior, keep values per instance

Placing name on each new object gives each widget independent data. Sharing a method on the prototype avoids confusing behavior ownership with data ownership. The reference does not modify Object.prototype, and the shared function reads the receiver supplied by the call. Compare two function identities as well as two return values: identical output alone would not prove the function is shared.

**What a learner should challenge:** What changes if you allocate a new function inside every constructor call?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Show shadowing with an own property

The shadow button assigns a method on A. It leaves the prototype untouched, which is why B continues to describe itself normally. The restore button deletes that single own property. This is an explicit lookup exercise, not a mechanism for patching global language behavior.

**What a learner should challenge:** Why does assigning undefined fail to restore the inherited method?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Fail visibly on a lost receiver

The prototype method checks that its receiver is a Widget. A detached call therefore produces an intentional diagnostic instead of an obscure property-read failure. Calling the same function with .call(a) supplies the missing receiver without creating another widget.

**What a learner should challenge:** Which expression supplies this in a.describe(), and what supplies it in method.call(a)?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `Widget.prototype.describe`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
