module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
        userName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false

        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false

        },
        dob:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)
return User;
}