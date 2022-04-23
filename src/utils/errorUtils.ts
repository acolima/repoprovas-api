export interface AppError {
  type: 'conflict' | 
        'unprocessable_entity' | 
        'unauthorized' | 
        'not_found',
  message: string
}

export function unprocessableEntity(message: string): AppError {
  return { type: 'unprocessable_entity', message}
}

export function conflict(message: string): AppError {
  return { type: 'conflict', message}
}

export function unauthorized(message: string): AppError {
  return { type: 'unauthorized', message}
}

export function notFound(message: string): AppError {
  return { type: 'not_found', message }
}