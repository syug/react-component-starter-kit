module.exports = plop => {
  plop.setGenerator('rex-component', {
    description: 'Create a ReX React Component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: '../../../src/{{pascalCase name}}/index.jsx',
        // Handlebars template used to generate content of new file
        templateFile: 'index.jsx.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: '../../../src/{{pascalCase name}}/{{pascalCase name}}.jsx',
        // Handlebars template used to generate content of new file
        templateFile: 'MyComponent.jsx.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: '../../../src/{{pascalCase name}}/{{pascalCase name}}.scss',
        // Handlebars template used to generate content of new file
        templateFile: 'MyComponent.scss.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path:
          '../../../src/{{pascalCase name}}/_{{pascalCase name}}.mixin.scss',
        // Handlebars template used to generate content of new file
        templateFile: '_MyComponent.mixin.scss.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path:
          '../../../src/{{pascalCase name}}/{{pascalCase name}}.stories.jsx',
        // Handlebars template used to generate content of new file
        templateFile: 'MyComponent.stories.jsx.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: '../../../src/{{pascalCase name}}/_core.mixin.scss',
        // Handlebars template used to generate content of new file
        templateFile: '_core.mixin.scss',
      },
    ],
  });
};
