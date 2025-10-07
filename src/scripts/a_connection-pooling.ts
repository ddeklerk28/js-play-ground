export default async function connectionPooling() {
  console.log('🔗 Connection Pooling Demo');

  const promises = [];
  for (let i = 1; i < 5; i++) {
    promises.push(fetch('https://httpbin.org/delay/1'));
  }

  await Promise.all(promises);
  console.log('All requests completed');
}