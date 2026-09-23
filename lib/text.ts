// Chinese and Japanese headings are not space-separated; Korean and Latin scripts are.
const NO_SPACE_BEFORE = /[　-ヿ㐀-鿿＀-￯]$/;

export function titleGap(part1: string): string {
  return NO_SPACE_BEFORE.test(part1) ? "" : " ";
}
