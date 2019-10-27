const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGoodInput(data) {
    let errors = {};

    // TITLE
    console.log(data);

    data.title = validText(data.title) ? data.title : '';

    if (!Validator.isLength(data.title, { max: 50 })) {
        errors.title = 'Good Title cannot be over 50 characters';
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Text field is required';
    }

    // DESCRIPTION
    data.description = validText(data.description) ? data.description : '';

    if (!Validator.isLength(data.description, { max: 300 })) {
        errors.description = 'Good Description cannot be over 300 characters';
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = 'Text field is required';
    }

    // PROPERTIES
    data.properties = validText(data.properties) ? data.properties : '';

    if (Validator.isEmpty(data.properties)) {
        errors.properties = 'Text field is required';
    }

    // QUANTITY
    data.quantity = validText(data.quantity) ? data.quantity : '';

    if (Validator.isEmpty(data.quantity)) {
        errors.quantity = 'Text field is required';
    }

    // PHOTO
    data.photo = validText(data.photo) ? data.photo : '';

    if (Validator.isEmpty(data.photo)) {
        errors.photo = 'Text field is required';
    }

    

    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};