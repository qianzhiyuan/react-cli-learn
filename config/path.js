const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
	publicUrlOrPath: require(resolveApp('package.json')).homepage,
	appBuild: resolveApp('build')
}
