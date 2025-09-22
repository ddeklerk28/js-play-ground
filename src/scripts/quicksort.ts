export default function quickSort() {
  console.log('⚡ Quick Sort Algorithm Demo');
  console.log('============================');

  const arr = [64, 34, 25, 12, 22, 11, 90, 88, 76, 50, 42];
  console.log('Original array:', arr);
  console.log('');

  let stepCount = 0;

  const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high];
    console.log(`Partitioning with pivot: ${pivot} (index ${high})`);

    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        if (i !== j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          console.log(`  Swapped ${arr[j]} and ${arr[i]}`);
        }
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    console.log(`  Placed pivot ${pivot} at index ${i + 1}`);
    console.log(`  Array after partition:`, arr.slice(low, high + 1));

    return i + 1;
  };

  const quickSortImpl = (arr: number[], low: number, high: number): void => {
    if (low < high) {
      stepCount++;
      console.log(`Step ${stepCount}: Sorting subarray [${low}..${high}]`);

      const pivotIndex = partition(arr, low, high);

      console.log(`Recursively sorting left: [${low}..${pivotIndex - 1}]`);
      quickSortImpl(arr, low, pivotIndex - 1);

      console.log(`Recursively sorting right: [${pivotIndex + 1}..${high}]`);
      quickSortImpl(arr, pivotIndex + 1, high);
    }
  };

  const sortedArr = [...arr];
  quickSortImpl(sortedArr, 0, sortedArr.length - 1);

  console.log('');
  console.log('Final sorted array:', sortedArr);
  console.log('');
  console.log('Algorithm Analysis:');
  console.log('Best/Average Time Complexity: O(n log n)');
  console.log('Worst Time Complexity: O(n²)');
  console.log('Space Complexity: O(log n)');
  console.log('In-place: Yes');
  console.log('Stable: No');
}