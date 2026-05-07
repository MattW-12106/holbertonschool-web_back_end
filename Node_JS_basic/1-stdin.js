process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.trim()}`);
});

process.on('SIGINT', () => {
  console.log('\nThis important software is now closing\n');
  process.exit();
});