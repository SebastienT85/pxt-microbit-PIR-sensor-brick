// Ajouter votre code ici
enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}
/**
 * Custom blocks
 */
//%weight=100 colo=#0fbc11 icon"╬"
namespace customBlock{
    /**
     * TODO: escribe your function here
     * @param n dexcribe parameter here, eg: 5
     * @param s describe parameter here, eg: "hello"
     * @param e describe parameter here
     */
    //% block="do stuff with $n and $s and $e"
    export function doStuff(n: number, s: string, e: MyEnum): void{
        //Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="computefib with $value"
    export function fib(value: number): number{
        return value <= 1 ? value : fib(value -1) + fib(value)
    }
}