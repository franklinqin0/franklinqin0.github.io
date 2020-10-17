---
title: Inorder Predecessor in BST
source: LintCode
diff: medium
tags:
  - Tree
related:
  - inorder-successor-in-bst
---

<img class="medium-zoom" src="/algo/inorder-predecessor-in-bst.png" alt="https://www.lintcode.com/problem/inorder-predecessor-in-bst">

## Definition for a Binary Tree Node

```py
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
```

## Solution

Let $h$ be the height of tree.

Complexity:

- time: $O(h)$
- space: $O(h)$

### Iteration I

```py
def inorderPredecessor(self, root, p):
    if not root:
        return None
    lowest_left_father = None
    # find lowest left father, if any
    while root!=p:
        if root.val < p.val:
            lowest_left_father = root
            root = root.right
        else:
            root = root.left
    # find rightmost node of left subtree, if any
    son = p.left
    res = son
    while son:
        res = son
        son = son.right
    if not res:
        return lowest_left_father
    return res
```

### Iteration II

```py
def inorderPredecessor(self, root, p):
    res = None
    while root:
        if p.val <= root.val:
            root = root.left
        else:
            if res is None or root.val > res.val:
                res = root
            root = root.right
    return res
```

<!-- TODO: recursive solution

首先要确定中序遍历的后继:

如果该节点有右子节点, 那么后继是其右子节点的子树中最左端的节点
如果该节点没有右子节点, 那么后继是离它最近的祖先, 该节点在这个祖先的左子树内.
使用循环实现:

查找该节点, 并在该过程中维护上述性质的祖先节点
查找到后, 如果该节点有右子节点, 则后继在其右子树内; 否则后继就是维护的那个祖先节点
使用递归实现:

如果根节点小于或等于要查找的节点, 直接进入右子树递归
如果根节点大于要查找的节点, 则暂存左子树递归查找的结果, 如果是 null, 则直接返回当前根节点; 反之返回左子树递归查找的结果.
-->

<!-- ## Follow Up

kth predecessor in bst -->