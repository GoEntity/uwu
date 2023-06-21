const chokidar = require('chokidar');
const simpleGit = require('simple-git');
const async = require('async');

const git = simpleGit();
git.cwd('E:\\Git\\GoEntity');

const watcher = chokidar.watch('E:\\Git\\GoEntity', {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

const gitQueue = async.queue((task, callback) => {
  const { action, path } = task;

  console.log(`File ${path} :: ${action}`);
  git.add('./*')
    .commit(`auto commit (::file ${action})`)
    .push('origin', 'main')
    .then(() => {
      console.log('push successful');
      callback();
    })
    .catch((err) => {
      console.error('error: ', err);
      callback(err);
    });
}, 1);

['add', 'change', 'delete'].forEach(action => {
  watcher.on(action, path => gitQueue.push({ action, path }));
});

// watcher
//   .on('change', (path) => {
//     console.log('File', path, 'has been changed');
//     git.add('./*')
//       .commit("auto commit (::file changed)")
//       .push('origin', 'main')
//       .then(() => console.log('push successful'))
//       .catch((err) => console.error('error: ', err));
//   })
//   .on('add', (path) => {
//     console.log('File', path, 'has been added');
//     git.add('./*')
//       .commit("auto commit (::file added)")
//       .push('origin', 'main')
//       .then(() => console.log('push successful'))
//       .catch((err) => console.error('error: ', err));
//   })
//   .on('delete', (path) => {
//     console.log('File', path, 'has been deleted');
//     git.add('./*')
//       .commit("auto commit (::file deleted)")
//       .push('origin', 'main')
//       .then(() => console.log('push successful'))
//       .catch((err) => console.error('error: ', err));
//   })
