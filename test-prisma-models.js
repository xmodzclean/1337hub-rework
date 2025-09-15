const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

console.log('Available models:', Object.keys(prisma).filter(key => 
  !key.startsWith('_') && 
  !key.startsWith('$') && 
  typeof prisma[key] === 'object' && 
  prisma[key] !== null
));

// Check if bannedUser exists
console.log('bannedUser exists:', typeof prisma.bannedUser);
console.log('BannedUser exists:', typeof prisma.BannedUser);

process.exit(0);
