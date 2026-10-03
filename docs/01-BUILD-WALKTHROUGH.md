# Building Object Ownership Lab, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Each Widget owns its name while both instances inherit one describe function. Assigning a describe property to A shadows the inherited function without changing B. Deleting that own property reveals the prototype method again. A detached method needs an explicit Widget receiver; the reference reports a readable error when it has none.

The smallest useful result answers this user need: A learner needs to see why changing one object's own property differs from changing a shared prototype. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Construct two objects

Open public/core.js and read the assignment to this.name. Make a two-column sketch for A and B and write each own name into its column. Then draw a shared box for Widget.prototype.describe. Resist drawing two copies of the function merely because two objects can call it. Use inspect to connect the sketch to Object.hasOwn results displayed by the page.

**Pause and produce evidence:** Two fresh widgets. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Follow the lookup

Read inspect before changing the UI. It asks whether properties are owned and also calls the method. Those observations answer different questions. A property can be callable even when ownsDescribe is false. Predict both fields after pressing Shadow, and explain why sameMethod changes even though B has not been edited.

**Pause and produce evidence:** Shadow A, then delete its own describe. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Restore through deletion

Trace delete a.describe in public/app.js. Removing the own entry does not remove the prototype entry. In a scratch console, compare delete with assigning undefined; the latter leaves an own property that still blocks lookup. Restore the working fixture by reloading rather than permanently modifying the reference while exploring.

**Pause and produce evidence:** Call detached describe, then describe.call(A). Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Separate function and receiver

The detached-call button intentionally retrieves the shared function into a local variable. The binding button calls that same function with an explicit receiver. Write down the function identity and receiver as separate facts. This prepares you to understand event callbacks and class methods without assuming a method carries its original object everywhere.

**Pause and produce evidence:** Call detached describe, then describe.call(A). Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose the examples that expose shared-state mistakes.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
