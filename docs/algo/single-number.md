---
title: Single Number
diff: easy
tags:
  - Math
  - Hash Table
  - Bit
related:
  - single-number-ii
---

<img class="medium-zoom" src="/algo/single-number.png" alt="https://leetcode.com/problems/single-number">

## Solution

B/c duplicates are unwanted, we should recognize the correct data structure to use: `set`, as used in solutions [HashSet](#hashset) and [Math](#math).

The [bit manipulation](#bit-manipulation) solution is most elegant.

### HashSet

Add to `set` if `num` is not seen yet, otherwise remove it. At the end, `set` only has 1 element, so just `pop` it.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$ (due to `set`)
:::

```py
def singleNumber(self, nums: List[int]) -> int:
    hashset = set()
    for num in nums:
        if num not in hashset:
            hashset.add(num)
        else:
            hashset.remove(num)
    return hashset.pop()
```

### Math

Say `c` is the single number while `a` and `b` appear twice. Then $2*(a+b+c)−(a+a+b+b+c)=c$.

::: theorem Complexity
time: $O(n)$  
space: $O(n)$ (due to `set`)
:::

```py
def singleNumber(self, nums: List[int]) -> int:
    return 2*sum(set(nums)) - sum(nums)
```

### Bit Manipulation

`^` is the associative & communicative XOR operator. These are its features:

- `0^a = a`
- `a^a = 0`
- `a^b^a = (a^a)^b = 0^b = b`

::: theorem Complexity
time: $O(n)$  
space: $O(1)$
:::

```py
def singleNumber(self, nums: List[int]) -> int:
    res = 0
    for num in nums:
        res ^= num
    return res
```
