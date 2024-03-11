# TypeScript Gang of Four Design Patterns

This repository contains a collection of TypeScript implementations of the Gang of Four (GoF) Design Patterns. The GoF design patterns are 23 classic software design patterns that are categorized into three groups: Creational, Structural, and Behavioral.

## Table of Contents

1. [Introduction](#introduction)
2. [Design Patterns](#design-patterns)
   - [Creational Patterns](#creational-patterns)
   - [Structural Patterns](#structural-patterns)
   - [Behavioral Patterns](#behavioral-patterns)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

## Introduction

Design patterns are proven solutions to common problems encountered in software design. The Gang of Four (GoF) patterns, introduced by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, are a set of 23 design patterns widely used in object-oriented software development.

This repository focuses on implementing these design patterns in TypeScript, showcasing how they can be applied in a modern and type-safe language.

## Design Patterns

### Creational Patterns

1. [**Singleton Pattern** ](src/creational/singleton)

2. [**Factory Method Pattern**](src/creational/factory-method)

3. [**Abstract Factory Pattern**](src/creational/abstract-factory)

4. [**Builder Pattern**](src/creational/builder)

5. [**Prototype Pattern**](src/creational/prototype)

### Structural Patterns

1. **Adapter Pattern**
   - [adapter.ts](src/structural/adapter.ts)

2. **Bridge Pattern**
   - [bridge.ts](src/structural/bridge.ts)

3. **Composite Pattern**
   - [composite.ts](src/structural/composite.ts)

4. **Decorator Pattern**
   - [decorator.ts](src/structural/decorator.ts)

5. **Facade Pattern**
   - [facade.ts](src/structural/facade.ts)

6. **Flyweight Pattern**
   - [flyweight.ts](src/structural/flyweight.ts)

7. **Proxy Pattern**
   - [proxy.ts](src/structural/proxy.ts)

### Behavioral Patterns

1. **Chain of Responsibility Pattern**
   - [chain-of-responsibility.ts](src/behavioral/chain-of-responsibility.ts)

2. **Command Pattern**
   - [command.ts](src/behavioral/command.ts)

3. **Interpreter Pattern**
   - [interpreter.ts](src/behavioral/interpreter.ts)

4. **Iterator Pattern**
   - [iterator.ts](src/behavioral/iterator.ts)

5. **Mediator Pattern**
   - [mediator.ts](src/behavioral/mediator.ts)

6. **Memento Pattern**
   - [memento.ts](src/behavioral/memento.ts)

7. **Observer Pattern**
   - [observer.ts](src/behavioral/observer.ts)

8. **State Pattern**
   - [state.ts](src/behavioral/state.ts)

9. **Strategy Pattern**
   - [strategy.ts](src/behavioral/strategy.ts)

10. **Template Method Pattern**
    - [template-method.ts](src/behavioral/template-method.ts)

11. **Visitor Pattern**
    - [visitor.ts](src/behavioral/visitor.ts)

## Installation

To use this repository, you need to have Node.js and npm installed on your machine.

```bash
git clone https://github.com/remediios/design-patterns-gof.git
cd design-patterns-gof
npm install
```

To run any design pattern implementation, I advise changing the `.vscode` settings, locally and installing `CodeRunner extension`. Add the following configurations:
```bash
{
  "code-runner.executorMap": {
    "typescript": "npx ts-node --files --transpile-only"
  }
}
```

## Usage

Each design pattern is located in its own directory under the src folder. To use a pattern, simply import it into your TypeScript code.

## Contributing

If you'd like to contribute to this project by adding more design patterns, improving existing implementations, or fixing issues, feel free to send a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


