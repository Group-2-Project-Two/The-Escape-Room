const Story = require("./story")
const Image = require("./image")

Image.hasOne(Story, {
    foreignKey: 'image_id'
})

Story.belongsTo(Image, {
    foreignKey: 'image_id'
})

module.exports = { Story, Image }