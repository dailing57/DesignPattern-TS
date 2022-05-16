# 创建型

## [工场方法模式](https://refactoringguru.cn/design-patterns/factory-method)

![工厂方法模式结构](https://refactoringguru.cn/images/patterns/diagrams/factory-method/structure.png)

[![OyYdL4.png](https://s1.ax1x.com/2022/05/13/OyYdL4.png)](https://imgtu.com/i/OyYdL4)

- 在许多设计工作的初期都会使用[工厂方法模式](https://refactoringguru.cn/design-patterns/factory-method) （较为简单， 而且可以更方便地通过子类进行定制）， 随后演化为使用[抽象工厂模式](https://refactoringguru.cn/design-patterns/abstract-factory)、 [原型模式](https://refactoringguru.cn/design-patterns/prototype)或[生成器模式](https://refactoringguru.cn/design-patterns/builder) （更灵活但更加复杂）。
- [抽象工厂模式](https://refactoringguru.cn/design-patterns/abstract-factory)通常基于一组[工厂方法](https://refactoringguru.cn/design-patterns/factory-method)， 但你也可以使用[原型模式](https://refactoringguru.cn/design-patterns/prototype)来生成这些类的方法。
- 你可以同时使用[工厂方法](https://refactoringguru.cn/design-patterns/factory-method)和[迭代器模式](https://refactoringguru.cn/design-patterns/iterator)来让子类集合返回不同类型的迭代器， 并使得迭代器与集合相匹配。
- [工厂方法](https://refactoringguru.cn/design-patterns/factory-method)是[模板方法模式](https://refactoringguru.cn/design-patterns/template-method)的一种特殊形式。 同时， *工厂方法*可以作为一个大型*模板方法*中的一个步骤。

### 设计原则

1. 依赖抽象，不要依赖具体

   不能让高层组件依赖低层组件，而两者都要依赖于“抽象” 。  要遵循==依赖倒置==原则，工厂方法是最有威力的技巧之一  。

## [抽象工场模式](https://refactoringguru.cn/design-patterns/abstract-factory)

![抽象工厂设计模式](https://refactoringguru.cn/images/patterns/diagrams/abstract-factory/structure.png)

- 在许多设计工作的初期都会使用[工厂方法模式](https://refactoringguru.cn/design-patterns/factory-method) （较为简单， 而且可以更方便地通过子类进行定制）， 随后演化为使用[抽象工厂模式](https://refactoringguru.cn/design-patterns/abstract-factory)、 [原型模式](https://refactoringguru.cn/design-patterns/prototype)或[生成器模式](https://refactoringguru.cn/design-patterns/builder) （更灵活但更加复杂）。
- [抽象工厂模式](https://refactoringguru.cn/design-patterns/abstract-factory)通常基于一组[工厂方法](https://refactoringguru.cn/design-patterns/factory-method)， 但你也可以使用[原型模式](https://refactoringguru.cn/design-patterns/prototype)来生成这些类的方法。
- 当只需对客户端代码隐藏子系统创建对象的方式时， 你可以使用[抽象工厂](https://refactoringguru.cn/design-patterns/abstract-factory)来代替[外观模式](https://refactoringguru.cn/design-patterns/facade)。
- [抽象工厂](https://refactoringguru.cn/design-patterns/abstract-factory)、 [生成器](https://refactoringguru.cn/design-patterns/builder)和[原型](https://refactoringguru.cn/design-patterns/prototype)都可以用[单例模式](https://refactoringguru.cn/design-patterns/singleton)来实现。

简单工厂 ： 用来生产同一等级结构中的任意产品。（对于增加新的产品，无能为力）

工厂方法 ：用来生产同一等级结构中的固定产品。（支持增加任意产品）   

抽象工厂 ：用来生产不同产品族的全部产品。（对于增加新的产品，无能为力；支持增加产品族）  

## [单例模式](https://refactoringguru.cn/design-patterns/singleton)

![单例模式结构](https://refactoringguru.cn/images/patterns/diagrams/singleton/structure-zh.png)

[![OyaMpq.png](https://s1.ax1x.com/2022/05/13/OyaMpq.png)](https://imgtu.com/i/OyaMpq)

- [外观模式](https://refactoringguru.cn/design-patterns/facade)类通常可以转换为[单例模式](https://refactoringguru.cn/design-patterns/singleton)类， 因为在大部分情况下一个外观对象就足够了。
- [抽象工厂模式](https://refactoringguru.cn/design-patterns/abstract-factory)、 [生成器模式](https://refactoringguru.cn/design-patterns/builder)和[原型模式](https://refactoringguru.cn/design-patterns/prototype)都可以用[单例](https://refactoringguru.cn/design-patterns/singleton)来实现。

# 结构型

## [装饰者模式](https://refactoringguru.cn/design-patterns/decorator)

![装饰设计模式的结构](https://refactoringguru.cn/images/patterns/diagrams/decorator/structure.png)

[![OyaW9I.png](https://s1.ax1x.com/2022/05/13/OyaW9I.png)](https://imgtu.com/i/OyaW9I)

- [适配器模式](https://refactoringguru.cn/design-patterns/adapter)可以对已有对象的接口进行修改， [装饰模式](https://refactoringguru.cn/design-patterns/decorator)则能在不改变对象接口的前提下强化对象功能。 此外， *装饰*还支持递归组合， *适配器*则无法实现。

- [适配器](https://refactoringguru.cn/design-patterns/adapter)能为被封装对象提供不同的接口， [装饰](https://refactoringguru.cn/design-patterns/decorator)则能为对象提供加强的接口。

- [组合模式](https://refactoringguru.cn/design-patterns/composite)和[装饰](https://refactoringguru.cn/design-patterns/decorator)的结构图很相似， 因为两者都依赖递归组合来组织无限数量的对象。

  *装饰*类似于*组合*， 但其只有一个子组件。 此外还有一个明显不同： *装饰*为被封装对象添加了额外的职责， *组合*仅对其子节点的结果进行了 “求和”。

  但是， 模式也可以相互合作： 你可以使用*装饰*来扩展*组合*树中特定对象的行为。

- 大量使用[组合](https://refactoringguru.cn/design-patterns/composite)和[装饰](https://refactoringguru.cn/design-patterns/decorator)的设计通常可从对于[原型模式](https://refactoringguru.cn/design-patterns/prototype)的使用中获益。 你可以通过该模式来复制复杂结构， 而非从零开始重新构造。

- [装饰](https://refactoringguru.cn/design-patterns/decorator)可让你更改对象的外表， [策略模式](https://refactoringguru.cn/design-patterns/strategy)则让你能够改变其本质。

### 设计原则

1. ==开闭原则==：对扩展开放，对修改关闭

## [适配器模式](https://refactoringguru.cn/design-patterns/adapter)

![适配器设计模式的结构（对象适配器）](https://refactoringguru.cn/images/patterns/diagrams/adapter/structure-object-adapter.png)

![适配器设计模式（类适配器）](https://refactoringguru.cn/images/patterns/diagrams/adapter/structure-class-adapter.png)

- [适配器](https://refactoringguru.cn/design-patterns/adapter)可以对已有对象的接口进行修改， [装饰模式](https://refactoringguru.cn/design-patterns/decorator)则能在不改变对象接口的前提下强化对象功能。 此外， *装饰*还支持递归组合， *适配器*则无法实现。
- [适配器](https://refactoringguru.cn/design-patterns/adapter)能为被封装对象提供不同的接口， [装饰](https://refactoringguru.cn/design-patterns/decorator)则能为对象提供加强的接口。
- [外观模式](https://refactoringguru.cn/design-patterns/facade)为现有对象定义了一个新接口， [适配器](https://refactoringguru.cn/design-patterns/adapter)则会试图运用已有的接口。 *适配器*通常只封装一个对象， *外观*通常会作用于整个对象子系统上。
- [桥接](https://refactoringguru.cn/design-patterns/bridge)、 [状态模式](https://refactoringguru.cn/design-patterns/state)和[策略模式](https://refactoringguru.cn/design-patterns/strategy) （在某种程度上包括[适配器](https://refactoringguru.cn/design-patterns/adapter)） 模式的接口非常相似。 实际上， 它们都基于[组合模式](https://refactoringguru.cn/design-patterns/composite)——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。

## 外观模式

![外观设计模式的结构](https://refactoringguru.cn/images/patterns/diagrams/facade/structure.png)

- [外观模式](https://refactoringguru.cn/design-patterns/facade)为现有对象定义了一个新接口， [适配器模式](https://refactoringguru.cn/design-patterns/adapter)则会试图运用已有的接口。 *适配器*通常只封装一个对象， *外观*通常会作用于整个对象子系统上。
- 当只需对客户端代码隐藏子系统创建对象的方式时， 你可以使用[抽象工厂模式](https://refactoringguru.cn/design-patterns/abstract-factory)来代替[外观](https://refactoringguru.cn/design-patterns/facade)。
- [外观](https://refactoringguru.cn/design-patterns/facade)类通常可以转换为[单例模式](https://refactoringguru.cn/design-patterns/singleton)类， 因为在大部分情况下一个外观对象就足够了。

### 设计原则

==最少知识原则（接口隔离）==：只和你的密友谈话

## [组合模式](https://refactoringguru.cn/design-patterns/composite)

![组合设计模式的结构](https://refactoringguru.cn/images/patterns/diagrams/composite/structure-zh.png)

- [桥接模式](https://refactoringguru.cn/design-patterns/bridge)、 [状态模式](https://refactoringguru.cn/design-patterns/state)和[策略模式](https://refactoringguru.cn/design-patterns/strategy) （在某种程度上包括[适配器模式](https://refactoringguru.cn/design-patterns/adapter)） 模式的接口非常相似。 实际上， 它们都基于[组合模式](https://refactoringguru.cn/design-patterns/composite)——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。

- 你可以使用[迭代器模式](https://refactoringguru.cn/design-patterns/iterator)来遍历[组合](https://refactoringguru.cn/design-patterns/composite)树。

- [组合](https://refactoringguru.cn/design-patterns/composite)和[装饰模式](https://refactoringguru.cn/design-patterns/decorator)的结构图很相似， 因为两者都依赖递归组合来组织无限数量的对象。

  *装饰*类似于*组合*， 但其只有一个子组件。 此外还有一个明显不同： *装饰*为被封装对象添加了额外的职责， *组合*仅对其子节点的结果进行了 “求和”。

  但是， 模式也可以相互合作： 你可以使用*装饰*来扩展*组合*树中特定对象的行为。

- 大量使用[组合](https://refactoringguru.cn/design-patterns/composite)和[装饰](https://refactoringguru.cn/design-patterns/decorator)的设计通常可从对于[原型模式](https://refactoringguru.cn/design-patterns/prototype)的使用中获益。 你可以通过该模式来复制复杂结构， 而非从零开始重新构造。

# 行为模式

## [策略模式](https://refactoringguru.cn/design-patterns/strategy)

![策略设计模式的结构](https://refactoringguru.cn/images/patterns/diagrams/strategy/structure.png)

- [桥接模式](https://refactoringguru.cn/design-patterns/bridge)、 [状态模式](https://refactoringguru.cn/design-patterns/state)和[策略模式](https://refactoringguru.cn/design-patterns/strategy) （在某种程度上包括[适配器模式](https://refactoringguru.cn/design-patterns/adapter)） 模式的接口非常相似。 实际上， 它们都基于[组合模式](https://refactoringguru.cn/design-patterns/composite)——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。
- [命令模式](https://refactoringguru.cn/design-patterns/command)和[策略](https://refactoringguru.cn/design-patterns/strategy)看上去很像， 因为两者都能通过某些行为来参数化对象。 但是， 它们的意图有非常大的不同。
  - 你可以使用*命令*来将任何操作转换为对象。 操作的参数将成为对象的成员变量。 你可以通过转换来延迟操作的执行、 将操作放入队列、 保存历史命令或者向远程服务发送命令等。
  - 另一方面， *策略*通常可用于描述完成某件事的不同方式， 让你能够在同一个上下文类中切换算法。
- [装饰模式](https://refactoringguru.cn/design-patterns/decorator)可让你更改对象的外表， [策略](https://refactoringguru.cn/design-patterns/strategy)则让你能够改变其本质。
- [模板方法模式](https://refactoringguru.cn/design-patterns/template-method)基于继承机制： 它允许你通过扩展子类中的部分内容来改变部分算法。 [策略](https://refactoringguru.cn/design-patterns/strategy)基于组合机制： 你可以通过对相应行为提供不同的策略来改变对象的部分行为。 *模板方法*在类层次上运作， 因此它是静态的。 *策略*在对象层次上运作， 因此允许在运行时切换行为。
- [状态](https://refactoringguru.cn/design-patterns/state)可被视为[策略](https://refactoringguru.cn/design-patterns/strategy)的扩展。 两者都基于组合机制： 它们都通过将部分工作委派给 “帮手” 对象来改变其在不同情景下的行为。 *策略*使得这些对象相互之间完全独立， 它们不知道其他对象的存在。 但*状态*模式没有限制具体状态之间的依赖， 且允许它们自行改变在不同情景下的状态。

### 设计原则

1. 把变化的地方独立出来

   把会变化的部分取出来并“封装”起来，好让其他部分不会受到影响。结果: 代码变化引起的不经意后果变少，系统变得更有弹性

2. 针对超类型编程，而不是针对实现编程 ==依赖倒转原则==

3. 多组合，少继承 ==聚合复用原则==

   将算法族封装成类;使得在运行时动态的改变行为成为可能。

## [观察者模式](https://refactoringguru.cn/design-patterns/observer)

![观察者设计模式的结构](https://refactoringguru.cn/images/patterns/diagrams/observer/structure.png)

- [责任链模式](https://refactoringguru.cn/design-patterns/chain-of-responsibility)、 [命令模式](https://refactoringguru.cn/design-patterns/command)、 [中介者模式](https://refactoringguru.cn/design-patterns/mediator)和[观察者模式](https://refactoringguru.cn/design-patterns/observer)用于处理请求发送者和接收者之间的不同连接方式：
  - *责任链*按照顺序将请求动态传递给一系列的潜在接收者， 直至其中一名接收者对请求进行处理。
  - *命令*在发送者和请求者之间建立单向连接。
  - *中介者*清除了发送者和请求者之间的直接连接， 强制它们通过一个中介对象进行间接沟通。
  - *观察者*允许接收者动态地订阅或取消接收请求。

### 设计原则

1. 最小化对象间的依赖：让交互对象之间松耦合 ==迪米特法则==  

## [命令模式](https://refactoringguru.cn/design-patterns/command)

![命令设计模式的结构](https://refactoringguru.cn/images/patterns/diagrams/command/structure.png)

- [责任链模式](https://refactoringguru.cn/design-patterns/chain-of-responsibility)、 [命令模式](https://refactoringguru.cn/design-patterns/command)、 [中介者模式](https://refactoringguru.cn/design-patterns/mediator)和[观察者模式](https://refactoringguru.cn/design-patterns/observer)用于处理请求发送者和接收者之间的不同连接方式：
  - *责任链*按照顺序将请求动态传递给一系列的潜在接收者， 直至其中一名接收者对请求进行处理。
  - *命令*在发送者和请求者之间建立单向连接。
  - *中介者*清除了发送者和请求者之间的直接连接， 强制它们通过一个中介对象进行间接沟通。
  - *观察者*允许接收者动态地订阅或取消接收请求。
- [命令](https://refactoringguru.cn/design-patterns/command)和[策略模式](https://refactoringguru.cn/design-patterns/strategy)看上去很像， 因为两者都能通过某些行为来参数化对象。 但是， 它们的意图有非常大的不同。
  - 你可以使用*命令*来将任何操作转换为对象。 操作的参数将成为对象的成员变量。 你可以通过转换来延迟操作的执行、 将操作放入队列、 保存历史命令或者向远程服务发送命令等。
  - 另一方面， *策略*通常可用于描述完成某件事的不同方式， 让你能够在同一个上下文类中切换算法。

## [迭代器模式](https://refactoringguru.cn/design-patterns/iterator)

![迭代器设计模式的结构](https://refactoringguru.cn/images/patterns/diagrams/iterator/structure.png)

- 你可以使用[迭代器模式](https://refactoringguru.cn/design-patterns/iterator)来遍历[组合模式](https://refactoringguru.cn/design-patterns/composite)树。
- 你可以同时使用[工厂方法模式](https://refactoringguru.cn/design-patterns/factory-method)和[迭代器](https://refactoringguru.cn/design-patterns/iterator)来让子类集合返回不同类型的迭代器， 并使得迭代器与集合相匹配。

### 设计原则

==单一职责==：一个类应该只有一个引起变化的原因

内聚力是一个术语，用来度量一个类或模块紧密的达到单一目的或责任。遵守这个原则的类具有很高的内聚力，而且比背负许多责任的低内聚类更容易维护。

## [状态模式](https://refactoringguru.cn/design-patterns/state)

![状态设计模式的结构](https://refactoringguru.cn/images/patterns/diagrams/state/structure-zh.png)

- [桥接模式](https://refactoringguru.cn/design-patterns/bridge)、 [状态模式](https://refactoringguru.cn/design-patterns/state)和[策略模式](https://refactoringguru.cn/design-patterns/strategy) （在某种程度上包括[适配器模式](https://refactoringguru.cn/design-patterns/adapter)） 模式的接口非常相似。 实际上， 它们都基于[组合模式](https://refactoringguru.cn/design-patterns/composite)——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。
- [状态](https://refactoringguru.cn/design-patterns/state)可被视为[策略](https://refactoringguru.cn/design-patterns/strategy)的扩展。 两者都基于组合机制： 它们都通过将部分工作委派给 “帮手” 对象来改变其在不同情景下的行为。 *策略*使得这些对象相互之间完全独立， 它们不知道其他对象的存在。 但*状态*模式没有限制具体状态之间的依赖， 且允许它们自行改变在不同情景下的状态。

## [模板方法模式](https://refactoringguru.cn/design-patterns/template-method)

![模板方法设计模式的结构](https://refactoringguru.cn/images/patterns/diagrams/template-method/structure.png)

- [工厂方法模式](https://refactoringguru.cn/design-patterns/factory-method)是[模板方法模式](https://refactoringguru.cn/design-patterns/template-method)的一种特殊形式。 同时， *工厂方法*可以作为一个大型*模板方法*中的一个步骤。
- [模板方法](https://refactoringguru.cn/design-patterns/template-method)基于继承机制： 它允许你通过扩展子类中的部分内容来改变部分算法。 [策略模式](https://refactoringguru.cn/design-patterns/strategy)基于组合机制： 你可以通过对相应行为提供不同的策略来改变对象的部分行为。 *模板方法*在类层次上运作， 因此它是静态的。 *策略*在对象层次上运作， 因此允许在运行时切换行为。

### 设计原则

==好莱坞原则==：允许低层组件将自己挂钩到系统上,但是高层组件会决定什么时候和怎样使用这些低层组件。

# 关系图

[![O6FuIs.png](https://s1.ax1x.com/2022/05/14/O6FuIs.png)](https://imgtu.com/i/O6FuIs)

| 标记 | 设计模式原则名称  |                     简单定义                     |
| :--: | :---------------: | :----------------------------------------------: |
| OCP  |     开闭原则      |              对扩展开放，对修改关闭              |
| SRP  |   单一职责原则    |       一个类只负责一个功能领域中的相应职责       |
| LSP  |   里氏代换原则    |  所有引用基类的地方必须能透明地使用其子类的对象  |
| DIP  |   依赖倒转原则    |          依赖于抽象，不能依赖于具体实现          |
| ISP  |   接口隔离原则    |      类之间的依赖关系应该建立在最小的接口上      |
| CARP | 合成/聚合复用原则 | 尽量使用合成/聚合，而不是通过继承达到复用的目的  |
| LOD  |    迪米特法则     | 一个软件实体应当尽可能少的与其他实体发生相互作用 |

