# Angular 14

## project structure

- `tsconfig.json ` holds settings for typescript
- tsconfig.spec.json for testing
- typescript for dev
- angular cli for commands
- `angular.json` is used for cli

## create component

- `ng generate component component-name`
- remember to add the component name in the module `app.module.ts`

## interpolation

- Refers to embedded expression into marked text
- By default it uses `{{ var_name }}` delimiters
- used to bind properties in html and also show elements

## property binding

- helps set values for properties in html elements or directives
- examples toggling, set path programmatically and share values between components
  > interpolation is not recommended everywhere so use it for property or attrbute binding in html elements

## event binding

- events lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks and touches
