const chokidar = require('chokidar');
const git = require('simple-git');

const watcher = chokidar.watch('C:\\GoEntity', {ignored: /^\./, persistent: true});

watcher
    .on('change', function(path) {
        console.log('File', path, 'has been changed');

        git()
            .add('./*')
            .commit("auto commit on change")
            .push('origin', 'main', () => console.log('done'));
    });