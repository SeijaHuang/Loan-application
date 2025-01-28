export const ERROR_CODES = {
  INVALID_PROPERTY_VALUE: 'INVALID_PROPERTY_VALUE',
  INVALID_PARAMETER: 'INVALID_PARAMETER',
} as const;

export const MESSAGES = {
  ERROR: {
    [ERROR_CODES.INVALID_PROPERTY_VALUE]: 'Invalid property value',
    [ERROR_CODES.INVALID_PARAMETER]: 'Invalid parameter',
  },
};
