export function uppercase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (message: string) {
        return originalMethod.call(this, message.toUpperCase());
    };
    
    return descriptor;
}

export function withTimestamp(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (message: string) {
        const now = new Date();
        const pad = (n: number) => n.toString().padStart(2, '0');
        const timestamp = `[${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}]`;
        
        return originalMethod.call(this, `${timestamp} ${message}`);
    };
    
    return descriptor;
}