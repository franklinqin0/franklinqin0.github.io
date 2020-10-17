---
title: Add to Array-Form of Integer
tags:
  - Array
---

<img class="medium-zoom" src="/algo/add-to-array-form-of-integer.png" alt="https://leetcode.com/problems/add-to-array-form-of-integer">

## Solution

There are solutions to append the carry to result and reverse before return but not really necessary.

### Schoolbook Addition

Add `K` to last element in `A`, do bitwise addition, then handle the carry.

Complexity:

- time: $O(max(n,\log K))$
- space: $O(1)$

where `n` is length of `A`.

```py {7}
def addToArrayForm(self, A: List[int], K: int) -> List[int]:
    A[-1] += K
    for i in reversed(range(len(A))):
        carry, A[i] = divmod(A[i], 10)
        if i: A[i-1] += carry
    if carry:
        # OR list comprehension: A = [int(i) for i in str(carry)] + A
        A = list(map(int, str(carry))) + A
    return A
```