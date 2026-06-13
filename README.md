# Домашнє завдання — Тема 6. Структурні патерни: Декоратор та Замісник

Консольна утиліта на TypeScript, що демонструє поєднання патернів Decorator та Proxy для розширення функціональності сервісу повідомлень.

## Патерни

### Decorator (Декоратор)
TypeScript-декоратори застосовуються до методу `send()` класу `MessageService`:

| Декоратор | Що робить |
|---|---|
| `@uppercase` | Перетворює текст повідомлення на верхній регістр |
| `@withTimestamp` | Додає мітку часу `[YYYY-MM-DD HH:mm:ss]` перед повідомленням |

Декоратори накладаються у порядку знизу вгору: спочатку `@uppercase`, потім `@withTimestamp`.

### Proxy (Замісник)
`RateLimitProxy` обгортає `MessageService` та контролює частоту викликів: якщо між двома викликами пройшло менше заданого інтервалу, виклик пропускається з повідомленням `[RateLimit] skipped`.

## Структура проєкту

```
src/
├── IMessageService.ts    # Інтерфейс сервісу повідомлень
├── MessageService.ts     # Реалізація з декораторами
├── RateLimitProxy.ts     # Proxy з rate limiting
├── decorators.ts         # @uppercase та @withTimestamp
└── main.ts
```

## Запуск

```bash
npm install
npx ts-node src/main.ts
```

## Приклад виводу

```
[2025-01-15 10:30:00] HELLO WORLD
[RateLimit] skipped
[2025-01-15 10:30:01] ANOTHER MESSAGE
```
