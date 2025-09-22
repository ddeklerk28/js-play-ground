export default function fibonacci() {
  console.log('🌀 Fibonacci Sequence Demo');
  console.log('==========================');

  const n = 10;
  console.log(`Generating first ${n} Fibonacci numbers`);
  console.log('');

  // Iterative approach
  console.log('📈 Iterative Approach:');
  const fibIterative = (n: number): number[] => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
      console.log(`F(${i}) = F(${i-1}) + F(${i-2}) = ${sequence[i-1]} + ${sequence[i-2]} = ${sequence[i]}`);
    }
    return sequence;
  };

  const iterativeResult = fibIterative(n);
  console.log('Result:', iterativeResult);
  console.log('');

  // Recursive approach (with memoization)
  console.log('🔄 Recursive Approach (with memoization):');
  const memo: { [key: number]: number } = {};

  const fibRecursive = (n: number): number => {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fibRecursive(n - 1) + fibRecursive(n - 2);
    console.log(`Computed F(${n}) = ${memo[n]}`);
    return memo[n];
  };

  console.log(`Computing F(${n-1}) recursively:`);
  const recursiveResult = fibRecursive(n - 1);
  console.log(`F(${n-1}) = ${recursiveResult}`);
  console.log('');

  // Performance comparison
  console.log('⚡ Performance Analysis:');
  console.log('Iterative - Time: O(n), Space: O(n)');
  console.log('Recursive (memoized) - Time: O(n), Space: O(n)');
  console.log('Recursive (naive) - Time: O(2^n), Space: O(n)');
}