if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://ocetp1:vfrcbv123@ds157844.mlab.com:57844/vidjot-prod'}
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'}
}