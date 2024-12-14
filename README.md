# TypeScript Type Error Not Thrown on Number + String

This example demonstrates a subtle issue in TypeScript where a type error is not thrown when adding a number and a string.  The type system does not enforce strict type checking in this scenario leading to unexpected string concatenation.

## Problem
The `add` function is declared to accept two numbers and return a number. However, when a string is passed as an argument, TypeScript does not throw an error during compilation. Instead it performs string concatenation.