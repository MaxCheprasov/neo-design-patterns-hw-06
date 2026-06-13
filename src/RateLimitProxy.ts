import { IMessageService } from './IMessageService';

export class RateLimitProxy implements IMessageService {
    private wrappee: IMessageService;
    private intervalMs: number;
    private lastCallTime: number = 0;

    constructor(wrappee: IMessageService, intervalMs: number) {
        this.wrappee = wrappee;
        this.intervalMs = intervalMs;
    }

    send(message: string): void {
        const now = Date.now();
        
        if (now - this.lastCallTime < this.intervalMs) {
            console.log('[RateLimit] skipped');
        } else {
            this.lastCallTime = now;
            this.wrappee.send(message);
        }
    }
}

export function createRateLimitProxy(wrappee: IMessageService, intervalMs: number): IMessageService {
    return new RateLimitProxy(wrappee, intervalMs);
}