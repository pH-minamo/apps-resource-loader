require('shelljs/make');

target.all = function () {
  cd(__dirname);
  cd('lib/RAL');
  cat([
    "Namespace.js",
    "Heap.js",
    "Sanitiser.js",
    "CacheParser.js",
    "FileSystem.js",
    "FileManifest.js",
    "RemoteFile.js",
    "Image.js",
    "Loader.js",
    "NetworkMonitor.js",
    "Queue.js"
  ]).to('../ral.js');
};
