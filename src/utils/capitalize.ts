export default function capitalize(str: string) {
  const part1 = str.charAt(0).toUpperCase();
  const part2 = str.slice(1);

  return `${part1}${part2.toLowerCase()}`;
}
