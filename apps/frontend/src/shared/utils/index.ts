export const isISODateString = (str: string): boolean => !isNaN(Date.parse(str))
export const timestampToISODate = (timestamp: number): string => new Date(timestamp).toISOString().split('T')[0]
