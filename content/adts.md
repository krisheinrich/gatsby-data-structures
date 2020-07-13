---
title: "ADTs"
metaTitle: "ADTs"
metaDescription: "Abstract Data Types"
---

import { Link as GatsbyLink } from 'gatsby';

## Introduction

An **Abstract Data Type (ADT)** is a theoretical model of a data structure. Each ADT defines an _interface_, a set of behaviors or operations, that a data structure should support, but does not determine the _implementation_ which enables such operations.

**Data** (i.e. numbers, characters, etc.) are often grouped into a **collection**. Various types of collections exist which are distinguished by the way their data elements are conceptually organized and accessed. Each type of collection is useful in designing solutions to certain computing problems.

See <GatsbyLink to='/overview/adts-vs-structures'>ADTs vs Data Structures</GatsbyLink> for more information.


## List of ADTs

### Linear Collections

**Linear collections** are abstract data types which allow _sequential_ access to their elements. The exact ordering of the sequence depends on the ADT, as does the ability to access the sequence in reverse order. It is often desirable to retrieve an item based on its assigned _sequential ordering_ (**List**). In other cases, it may be preferable to access an element that was _added first_ (**Queue**) or one that was _added most recently_ (**Stack**), process it, and remove it from the collection. In some scenarios, a program might instead require access to an element based on some notion of _priority_ or _level of importance_ that is assigned to each item (**Priority Queue**).

Queues that allow processing from either end are called **double-ended queues** or **deques**, while priority queues with this property are called **double-ended priority queues** or **DEPQs**.

- <GatsbyLink to='/adts/1-list'>List</GatsbyLink>
- <GatsbyLink to='/adts/2-stack'>Stack</GatsbyLink>
- <GatsbyLink to='/adts/3-queue'>Queue and Deque</GatsbyLink>
- <GatsbyLink to='/adts/4-priority-queue'>Priority Queue and DEPQ</GatsbyLink>

### Associative Collections

**Associative collections** are ADTs that store a group of elements without a particular ordering. **Sets** model the mathematical notion of a set, where elements may or may not be unique members of particular sets. **Maps**, also called **associative arrays** or **dictionaries**, allow the retrieval of some data based on a _key_ associated with the datum.

- <GatsbyLink to='/adts/5-set'>Set and Multiset</GatsbyLink>
- <GatsbyLink to='/adts/6-map'>Map (Associative Array/Dictionary) and Multimap</GatsbyLink>

### Graphs

**Graphs** are ADTs that model elements which are conceptually connected, but not necessarily following a linear ordering. One _node_ in a graph may have connections to several other nodes. A **Tree** is a particular variety of graph in which every node other than the _root_ of the tree is a "child" node of exactly one "parent". Trees are useful for modeling data that follows a hierarchical structure, while graphs in general can model systems with more complex connectivity, such as computer networks, social networks, traffic routes, etc.

- <GatsbyLink to='/adts/7-tree'>Tree</GatsbyLink>
- <GatsbyLink to='/adts/8-graph'>Graph</GatsbyLink>


## Read More

- [Wikipedia - Abstract Data Type](https://en.wikipedia.org/wiki/Abstract_data_type)
- [OpenDSA - Abstract Data Type](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/ADT.html)
