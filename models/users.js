const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes)=>{
  const User = sequelize.define("User", {
    username: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    first_name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    last_name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    manager:{
      type:DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    hire_date: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    password: {
      type:DataTypes.STRING,
    }
  })
  // ,{
  //   classMethods: {
  //     validPassword: function(password, passwd, done, user){
  //       bcrypt.compare(password, passwd, function(err, isMatch){
  //         if(err){ console.log(err)};
  //         if(isMatch){
  //           return done(null, user);
  //         }else {
  //           return done(null, false)
  //         }
  //       })
  //     }
  //   }
  // })
  // User.hook("beforeCreate", function(user, fn){
  //   let salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
  //     return salt
  //   });
  //   bcrypt.hash(user.password, salt, null, function(err, hash){
  //     if(err) return next(err);
  //     user.password = hash;
  //     return fn(null, user);
  //   })
  // })
  return User;
}