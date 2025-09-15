// Test script to verify the new Prisma models work
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testModels() {
  try {
    console.log('Testing new Prisma models...')
    
    // Test BannedUser model
    console.log('Testing BannedUser model...')
    const testBan = await prisma.bannedUser.findMany({ take: 1 })
    console.log('✅ BannedUser model working')
    
    // Test Announcement model
    console.log('Testing Announcement model...')
    const testAnnouncement = await prisma.announcement.findMany({ take: 1 })
    console.log('✅ Announcement model working')
    
    console.log('✅ All models are working correctly!')
    
  } catch (error) {
    console.error('❌ Error testing models:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testModels()
