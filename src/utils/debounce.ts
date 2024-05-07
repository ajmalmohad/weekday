export function debounce<F extends (...args: any[]) => any>(
  func: F,
  wait: number
): (...funcArgs: Parameters<F>) => void {
  let timeout: number | null;
  return function executedFunction(...args: Parameters<F>) {
    const later = () => {
      clearTimeout(timeout!);
      func(...args);
    };
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}
