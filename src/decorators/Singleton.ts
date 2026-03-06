// interface ISingletonHelper {
//     names: string[];
//     count: number;
// }

// It is not constant
let GLOBAL_COUNT_OF_SINGLETONS = 0;

export function Singleton<T extends { new (...args: any[]): {} }>(constructor: T) {
    let isCreated: boolean = false;

    GLOBAL_COUNT_OF_SINGLETONS++;

    console.log(GLOBAL_COUNT_OF_SINGLETONS);

    return class extends constructor {
        constructor(...args: any[]) {
            if (isCreated) {
                throw new Error('The child of class already was created');
            } else {
                super(...args);
                isCreated = true;
                return this;
            }
        }
    };
}
class N {
    static #namebb: string = '32';

    static get namedg() {
        return 'asdasdad';
    }

    set namedg(str: string) {}
}

// class B {
//     constructor() {

//     }
// }

// interface Popa {
//     constructor: Function;
//     getUser: () => void;
// }

// interface POpa extends Popa {
//     getUser: () => number;
// }

// const obj: POpa = {
//     getUser: () => {
//         return 2
//     }
// }

// class C implements Popa {
//     constructor() {

//     }

//     getUser() {

//     }
// }

// interface Jopa<T> {
//     getInstance(): T
// }

// // нужно реалттзовывыать интерфейсы и имплимитьровать классы от них

// export function defaultSingleton<T>(constructor: Function) {

//     export class extends theClass {

//     }
// }

// interface Singleton<T> {
//     getInstance: () => T;

//     constructor: Function;

//     name: string
// }
// interface AIMP {
//     name: string
// }

// class A {
//    static name: string = '2';
// }

// interface CCC {
//     readonly user: string
// }

// const a: CCC = {
//     user: 'asd'
// }

// const A = defaultSingleton(B.constructor)
