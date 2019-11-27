const packageJson = require('../../../package.json');

const { name } = packageJson;
const componentName = name.replace('@rakuten-rex/', '');

const template = `${JSON.stringify(packageJson, null, 2)}\n`.replace(
  new RegExp(componentName, 'g'),
  '{{dashCase name}}'
);

module.exports = plop => {
  plop.setGenerator('package-json', {
    description: 'Update package.json with custom repository settings',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your package name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../../package.json',
        template,
        force: true,
      },
    ],
  });
};
