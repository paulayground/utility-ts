export function toCamelCase(str: string) {
  return str.replace(/[-_]\w/gi, (match) => match.charAt(1).toUpperCase());
}
