const newman = require('newman');

newman.run({
    collection: require('./MyPostManCollection.postman_collection.json'), // Path to your collection file
    environment: require('./testenvironment.postman_environment.json'), // Optional: Path to your environment file
    globals: require('./workspace.postman_globals.json'), // Optional: Path to your environment file
    reporters: 'cli'
})
.on('start', function (err, args) {
    console.log('running collection...');
})
.on('done', function (err, summary) {
    if (err || summary.error) {
        console.error('collection run failed.');
    } else {
        console.log('collection run completed.');
    }
});