module.exports = {
    default: {
        paths: [
            "tests/Features/**/*.feature"
        ],
        require: [
            "tests/Stepdefinition/**/*.js"
        ],
        format: ["progress"]
    }
};