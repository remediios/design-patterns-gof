# Creational Design Patterns

Creational design patterns are patterns that abstract the object instantiation process. They help make a system independent of how its objects are represented, created, and composed. Generally, they achieve this goal by delegating tasks to other objects.

These patterns provide a lot of flexibility to the system because they encapsulate knowledge about which concrete classes are used. Additionally, they hide how instances are created and composed. The focus is on eliminating the client's knowledge of _WHAT_, _HOW_, and _WHEN_ is being created and _WHO_ is part of the creation process.

## Patterns and Intentions

The original GoF creational design patterns are:

- **Abstract Factory** - Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
- **Builder** - Separate the construction of a complex object from its representation so that the same construction process can create different representations.
- **Factory Method** - Define an interface for creating an object but let subclasses decide which class to instantiate. The Factory Method allows a class to defer instantiation to subclasses.
- **Prototype** - Specify the types of objects to be created using a prototypical instance and create new objects by copying this prototype.
- **Singleton** - Ensure that a class has only one instance and provide a global point of access to it.
