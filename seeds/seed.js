const sequelize = require('../config/connection');
const Story  = require('../models/story')

const storyData = require('./story.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const story = await Story.bulkCreate(storyData);
    process.exit(0);
}
seedDatabase();