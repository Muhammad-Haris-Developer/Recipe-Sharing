const Users = require('../models/users');
const Category = require('../models/category');
const Rating = require('../models/ratings');
const Recipe = require('../models/recipe');

exports.deleteDataAfter10Minutes = () => {

    Users.deleteMay({ deleted_at: { $ne : null } })
    .catch(err => {
        console.log('Users Does Not Deleted in CronJob: ', err);
    });

    Category.deleteMay({ deleted_at: { $ne : null } })
    .catch(err => {
        console.log('Category Does Not Deleted in CronJob: ', err);
    });

    Rating.deleteMay({ deleted_at: { $ne : null } })
    .catch(err => {
        console.log('Rating Does Not Deleted in CronJob: ', err);
    });

    Recipe.deleteMay({ deleted_at: { $ne : null } })
    .catch(err => {
        console.log('Recipe Does Not Deleted in CronJob: ', err);
    });
};