const sequelize = require('../config/connection');
const { Story, Image }  = require('../models')

const storyData = require('./story')
const imageData = require('./image')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const image = await Image.bulkCreate(imageData)
    const story = await Story.bulkCreate(storyData);

    process.exit(0);
}
seedDatabase();