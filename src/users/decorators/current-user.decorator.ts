import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// an ExectuionContext object can be used to abstract a WebSocket incoming message, a GRPC request, a HTTP request
export const CurrentUser = createParamDecorator(
  (data: never, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.currentUser;
  },
);
