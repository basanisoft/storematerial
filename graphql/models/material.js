module.exports = function(sequelize, DataTypes) {
    var material = sequelize.define('material', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

	material.associate = function(models) {
        models.material.hasMany(models.storematerial, { foreignKey: "material_id", sourceKey: "id" });
    }

    return material;
}
