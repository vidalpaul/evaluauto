import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

// TypeScript doesn't offer good type safety when handling decorators, so this interface merely ensures that functions that receive a DTO must receive a class
interface ClassConstructor {
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run before a request is handled by the request handler
    //
    return handler.handle().pipe(
      map((data: any) => {
        // Run before the response is sent out
        return plainToClass(this.dto, data, { excludeExtraneousValues: true });
      }),
    );
  }
}
