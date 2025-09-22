export default function bubbleSort() {
  console.log('🔀 Bubble Sort Algorithm Demo');
  console.log('================================');

  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log('Original array:', arr);

  const bubbleSortImpl = (arr: number[]): number[] => {
    const n = arr.length;
    const result = [...arr];

    for (let i = 0; i < n - 1; i++) {
      let swapped = false;

      for (let j = 0; j < n - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
          swapped = true;
        }
      }

      console.log(`Pass ${i + 1}:`, result);

      if (!swapped) {
        console.log('Array is already sorted, breaking early');
        break;
      }
    }

    return result;
  };

  const sorted = bubbleSortImpl(arr);
  console.log('Final sorted array:', sorted);
  console.log('Time Complexity: O(n²)');
  console.log('Space Complexity: O(1)');
}