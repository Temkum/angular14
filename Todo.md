# Angular 14

- root module
- create component from cli
- intepolation
- property, event, two way binding
- directives, ngif, ngfor
- pipes
- style component
- parent to child data and vice versa
- listen to custom events
- life cycle hooks
- using service,
- dependency injection
- custom module
- state management
- angular route, route guard
- angular forms, form validation
- firebase auth
- deploy to firebase

## project structure

- `tsconfig.json` holds settings for typescript
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

## Two way binding

- Gives component a way to share data
- used to listen to events, update values simultaneously between parent and child components

## Directives

- directives add additional behavior to elements
- use built-in directives to manage forms, lists, and what users see

1. components -> used with a template
2. attributes -> change appearance of elements, components or other directives
3. structural -> change the DOM layout

> builtin attribute directives

- ngClass
- ngStyle
- ngModel -> helps on two way binding

> builtin structural directives

- ngIf
- ngFor
- ngSwitch

## ngFor

## Pipe

- Simple function to use in a template expression to accept an input and return a transformed value.
- Declare them once and used throughout the app.
- Used to transform strings, currency, dates and other display data

## style component

## parent and child components
- listen to custom event
