export default function binarySearch() {
  console.log('🔍 Binary Search Algorithm Demo');
  console.log('===============================');

  const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
  const target = 15;

  console.log('Sorted array:', sortedArr);
  console.log('Target value:', target);
  console.log('');

  const binarySearchImpl = (arr: number[], target: number): number => {
    let left = 0;
    let right = arr.length - 1;
    let step = 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = arr[mid];

      console.log(`Step ${step}: left=${left}, right=${right}, mid=${mid}, value=${midValue}`);

      if (midValue === target) {
        console.log(`✅ Found target ${target} at index ${mid}`);
        return mid;
      } else if (midValue < target) {
        console.log(`${midValue} < ${target}, searching right half`);
        left = mid + 1;
      } else {
        console.log(`${midValue} > ${target}, searching left half`);
        right = mid - 1;
      }

      step++;
    }

    console.log(`❌ Target ${target} not found in array`);
    return -1;
  };

  const result = binarySearchImpl(sortedArr, target);
  console.log('');
  console.log('Result:', result !== -1 ? `Found at index ${result}` : 'Not found');
  console.log('Time Complexity: O(log n)');
  console.log('Space Complexity: O(1)');
}