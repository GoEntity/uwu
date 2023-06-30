const chokidar = require('chokidar');
const simpleGit = require('simple-git');
const async = require('async');
const path = require('path');

const git = simpleGit();
git.cwd('E:\\Git\\auto_git_push_for_my_blog');

const watcher = chokidar.watch('E:\\Git\\auto_git_push_for_my_blog', {
  ignored: [/(^|[\/\\])\..|node_modules/, /offline\.bat/, /online\.bat/, /package-lock\.json/, (filename) => path.basename(filename).startsWith('0')],
  persistent: true
});

const gitQueue = async.queue((task, callback) => {
  const { action, path } = task;

  console.log(`File ${path} :: ${action}`);
  git.add('.')
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

['add', 'addDir', 'change', 'unlink', 'unlinkDir'].forEach(action => {
  watcher.on(action, path => gitQueue.push({ action, path }));
});