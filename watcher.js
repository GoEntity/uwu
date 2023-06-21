const chokidar = require('chokidar');
const simpleGit = require('simple-git');

const git = simpleGit();
git.cwd('C:\\GoEntity');

const watcher = chokidar.watch('C:\\GoEntity', {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

watcher
  .on('change', (path) => {
    console.log('File', path, 'has been changed');
    git()
      .add('./*')
      .commit("auto commit (::file changed)")
      .push('origin', 'main')
      .then(() => console.log('push successful'))
      .catch((err) => console.error('error: ', err));
  })
  .on('add', (path) => {
    console.log('File', path, 'has been added');
    git()
      .add('./*')
      .commit("auto commit (::file added)")
      .push('origin', 'main')
      .then(() => console.log('push successful'))
      .catch((err) => console.error('error: ', err));
  });
