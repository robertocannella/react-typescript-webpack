export function log(str: string) {
    console.log(str)
}

class A {
    greeting = "Hello, world!";
}

log(new A().greeting);
