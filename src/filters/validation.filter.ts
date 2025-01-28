import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { ERROR_CODES } from 'src/constants/message.constant';
import { Response } from 'express';

@Catch(BadRequestException)
export class ValidationFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const errorResponse = exception.getResponse() as { message: string[] };

    if (Array.isArray(errorResponse.message)) {
      return response.status(400).json({
        success: false,
        data: {
          message: errorResponse.message[0],
          error: ERROR_CODES.INVALID_PARAMETER,
        },
      });
    }

    return response.status(400).json({
      success: false,
      data: {
        message: errorResponse.message,
        error: ERROR_CODES.INVALID_PARAMETER,
      },
    });
  }
}
