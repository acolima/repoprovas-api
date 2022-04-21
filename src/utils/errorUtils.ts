export interface AppError {
  type: 'conflict' | 'unprocessable_entity',
  message: string
}

export function unprocessableEntity(message: string): AppError {
  return { type: 'unprocessable_entity', message}
}

export function conflict(message: string): AppError {
  return { type: 'conflict', message}
}