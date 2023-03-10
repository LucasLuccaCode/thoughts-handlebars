const { DataTypes } = require("sequelize")

const db = require("../db/connection")

// Models
const User = require("./User")

const Thought = db.define("thought", {
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  primaryKey: true,
  timestamps: true
})

User.hasMany(Thought, {
  foreignKey: "userId",
  as: "thoughts",
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
})

Thought.belongsTo(User, {
  foreignKey: "userId",
  as: "author"
})

module.exports = Thought