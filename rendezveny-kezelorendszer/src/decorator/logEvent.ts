export function LogMethod(
    target: any, 
    propertyKey: string, 
    descriptor: PropertyDescriptor)
{

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Hívva lett a ${propertyKey} metódus a következő argumentumokkal:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`${propertyKey} metódus eredménye:`, result);
        return result;
    };

    return descriptor;
}