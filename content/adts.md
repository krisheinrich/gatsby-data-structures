---
title: "ADTs"
metaTitle: "ADTs"
metaDescription: "Abstract Data Types"
---

import { Link as GatsbyLink } from 'gatsby';

## Introduction

An **Abstract Data Type (ADT)** is a theoretical model of a data structure. It defines the _interface_, the set of behaviors or operations, that a data structure should support, but does not determine the _implementation_ which enables such operations.

**Data** (i.e. numbers, characters, etc.) are often grouped into a **collection**. Various types of collections exist which are distinguished by the way their data elements are conceptually organized and accessed. Each type of collection is useful in designing solutions to certain computing problems.

**Linear collections** are abstract data types which allow _sequential_ access to their elements. The exact ordering of the sequence depends on the ADT, as does the ability to access the sequence in reverse order. It is often desirable to retrieve an item based on its assigned _sequential ordering_ (**List**). In other cases, it may be preferable to access an element that was _added first_ (**Queue**) or one that was _added most recently_ (**Stack**), process it, and remove it from the collection. In some scenarios, a program might instead require access to an element based on some notion of _priority_ or _level of importance_ that is assigned to each item (**Priority Queue**).

**Associative collections** are ADTs that store a group of elements without a particular ordering. **Sets** model the mathematical notion of a set, where elements may or may not be unique members of particular sets. **Maps**, also called **associative arrays** or **dictionaries**, allow the retrieval of some data based on a _key_ associated with the datum.

Finally, **Graphs** are ADTs that model elements which are conceptually connected, but not necessarily following a linear ordering. One _node_ in a graph may have connections to several other nodes. A **Tree** is a particular variety of graph in which no "child" node has more than one "parent" node, and is useful for modeling data that follows a hierarchical structure.


See <GatsbyLink to='/adts-vs-structures'>ADTs vs Data Structures</GatsbyLink> for more information.


## List of ADTs

### Linear Collections
- <GatsbyLink to='/adts/list'>List</GatsbyLink>
- [Stack]()
- [Queue / Deque]()
- [Priority Queue / DEPQ]()
### Associative Collections
- [Set]()
    - [Multiset]()
- [Map / Associative Array / Dictionary]()
    - [Multimap]()
### Graphs
- [Tree]()
- [Graph]()


## Read More

- [Wikipedia - Abstract Data Type](https://en.wikipedia.org/wiki/Abstract_data_type)
- [OpenDSA - Abstract Data Type](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/ADT.html)
