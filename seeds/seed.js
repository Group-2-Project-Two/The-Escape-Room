const sequelize = require("../config/connection");
const { Story, Image, User } = require("../models");

const storyData = require("./story");
const imageData = require("./image");
const userData = require("./user");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const image = await Image.bulkCreate(imageData);
  const story = await Story.bulkCreate(storyData);
  const user = await User.bulkCreate(userData);

  process.exit(0);
};
seedDatabase();
