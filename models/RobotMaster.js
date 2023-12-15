module.exports = (Sequelize, type)=> {
    return Sequelize.define('robot_master', {
        series: type.INTEGER,
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        name: type.STRING,
        weapon: type.STRING,
        avatar: type.STRING,
        sprite: type.STRING,
        weakness: type.STRING,
        stage: {type: type.STRING, allowNull: true},
    }, { timestamps: false })
}