interface Subject
{
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}
class ConcreateSubject implements Subject
{
    public state: number = 0;
    private observers: Observer[] = [];
    public attach(observer: Observer): void
    {
        const isExist = this.observers.includes(observer);
        if (isExist)
        {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer)
    }
    detach(observer: Observer): void
    {
        const id = this.observers.indexOf(observer);
        if (id === -1)
        {
            return console.log('Subject: Nonexistent observer.')
        }
        this.observers.splice(id, 1);
        console.log('Subject: Detached an observer.');
    }
    notify(): void
    {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers)
        {
            observer.update(this);
        }
    }
    public dosome(): void
    {
        console.log('state changed');
        this.state = Math.floor(Math.random() * (10 + 1));
        this.notify();
    }
}
interface Observer
{
    update(subject: Subject): void;
}
class ConcreteObserverA implements Observer
{
    update(subject: Subject): void
    {
        if (subject instanceof ConcreateSubject && subject.state < 6)
        {
            console.log('AAA');
        }
    }
}

class ConcreteObserverB implements Observer
{
    update(subject: Subject): void
    {
        if (subject instanceof ConcreateSubject)
        {
            console.log('BBB');
        }
    }
}

const subject = new ConcreateSubject();
const observer1 = new ConcreteObserverA();
const observer2 = new ConcreteObserverB();
subject.attach(observer1)
subject.attach(observer2)
subject.dosome();
subject.dosome();
subject.detach(observer1);
subject.dosome();