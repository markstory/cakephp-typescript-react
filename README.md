# CakePHP + Typescript + React Application Skeleton

An application skeleton for creating applications with
[CakePHP](https://cakephp.org) 4.x, typescript and react.

## Installation

1. Ensure you have nodejs installed.
2. Download [Composer](https://getcomposer.org/doc/00-intro.md) or update `composer self-update`.
3. Run `php composer.phar create-project --prefer-dist markstory/cakephp-typescript-react [app_name]`.
4. Install nodejs dependencies with `npm install` or `yarn install`.

## Frontend Assets

Unlike typical CakePHP applications, the frontend assets in this skeleton live
in `assets`.  In this directory you'll find directories for the
[SASS](https://sass-lang.com) and [Typescript](https://typescriptlang.org) files
your application will use. These source files are compiled into assets stored in
`webroot` via [webpack](https://webpack.js.org).

## Running webpack

This skeleton uses [Laravel Mix](https://laravel-mix.com/docs/6.0/installation)(via [AssetMix](https://github.com/ishanvyas22/asset-mix) plugin) as
a high-level wrapper around webpack to build the typescript/react & sass assets.
For local development you'll generally want to run webpack in 'watch' mode:

    yarn run watch

In watch mode, webpack will watch the filesystem for changes and recompile as necessary.
Source maps will be available in watch mode.

When it comes time to deploy your application to production you should use:

    yarn run prod

The above will generate minified assets and *not* generate sourcemaps. Ideally
the above command is generated during your deploy process, or when you build the
artifacts you are going to deploy.

## Running tests

This application skeleton includes setup for PHPUnit to do serverside testing
& jest + testing-library/react to do frontend tests.

You can run PHPUnit with:

    composer test

And jest with:

    yarn test

## Running the local PHP server

You can run the local PHP server with:

    bin/cake server

And then visit this server at `http://localhost:8765`. Using another webserver
is possible, but you will need to further configure `mix` to know about the subdirectory
your application is running in. If you have built the frontend using webpack you
can view `http://localhost:8765/pages/greet` to see a the result of a PHP template
that also renders react components.



