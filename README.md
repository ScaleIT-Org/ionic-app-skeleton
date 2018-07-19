<img src="https://raw.githubusercontent.com/ScaleIT-Org/media-ressources/master/logo/scaleit-logo.png" width="20%"/>
<img src="https://github.com/ScaleIT-Org/media-ressources/raw/master/logo/scaleit-waben-ionic.png" width="15%"/>


# Ionic App Skeleton ![License](https://img.shields.io/github/license/ScaleIT-Org/ionic-app-skeleton.svg?link=https://github.com/ScaleIT-Org/ionic-app-skeleton/blob/master/LICENSE)

The Ionic App Skeleton is a pre-configured base for ScaleIT Apps. It provides a ready to use production ready scaffolding for ScaleIT Ready Domain Apps.

## How to Use
### Standalone

    # Resolve dependencies
    npm install
    # Build frontend
    npm run build
    # Run dev server
    npm run ionic:serve

### Docker

This skeleton uses a multi stage build in order to create a very small production ready image. This results in an image size of about 70MB compared to the 300+MB size of the build image.

    docker-compose up -d
    # navigate to localhost:8100

## Screenshots

| Mobile        | Desktop       |
| ------------- | ------------- |
| <img src="Resources/Store/Screenshots/Mobile%20Main%20Page.png?raw=true"/> | <img src="Resources/Store/Screenshots/Desktop%20Main%20Page.png?raw=true"/> |

|Administration view with configurable endpoints| Tech Stack |
| ------------- | ------------- |
| <img width="100%" src="https://github.com/ScaleIT-Org/ionic-app-skeleton/blob/master/Resources/Store/Screenshots/Administration.png?raw=true"/> | <p align="center"><img width="40%" src="Resources/Documentation/tech-stack.png?raw=true"/> <p align="center">Webpack->(Typescript->Angular->Ionic)->Compiled HTML, JS, CSS</p></p>|

## Requirements
-

## Features

1) Ionic frontend with Angular
2) Pages and Navigation
2) Data Providers and Pipes
2) Nginx Server for serving the built project (docker build only)

## Known Issues
 - The --prod flag for ionic:build results in an Error which needs to be resolved. Till now dont use production build. Flag removed with commit: fe76eaf96fc7c7630682cfdfac4060deb64a5657

## Troubleshooting

### Running on windows
Most likely, when executing `npm install` on windows, you will get weird issues related to "node-gyp".
You can solve this issue by running
```
npm install --global --production windows-build-tools
```
inside CMD or Powershell **with administator privileges** before running install.

## How to build

```
  docker-compose build
  docker-compose up -d
```

## Configuration

-

## Tests

  No Tests


## Notes
This is still a work in progress

## Development

In order to simplify development we recommend working locally (or with a docker bind mount) and using the ionic hot reload feature of the ionic dev server

    npm run ionic:serve

In order to pull from this repo as upstream you should use githubs rebasing feature:

    git checkout alpine
    git pull --rebase origin master

    git checkout dev
    git pull --rebase origin alpine

Alternatively use cherry picking (or patching):

    git cherry-pick d147423..2622049
    git cherry-pick d147423

## Health Check (Optional)
        #Build with healtcheck enabled
        HEALTHCHECK --interval=5m --timeout=3s \
        CMD curl -f http://localhost:5002/ || exit 1

<!-- ## Navigation and Pages
## Data Providers
## Bindings (Two-Way & One-Way)
## Pipes -->

## Learning Material

Reactive Manifesto: https://www.reactivemanifesto.org/

Reactive Programming: https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

Ionic Presentation: http://ionicframework.com/present-ionic/slides/#/26
