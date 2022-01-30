# skaldyrskysterne

_Built on [snail-template-website](https://github.com/setsnail/snail-template-website)_

## SETUP

##### In the root folder run:

- `npm install`
- To start the dev server, run:

- `npm run start`

## Routing

- New routes can be setup in `src/client/RouterSwitch.tsx`

## SCRIPTS

###### start the node server:

- dev: `npm run start`

- prod: `npm run prod`

###### Compile a release build:

- `npm run build`

## TROUBLESHOOTING

#### Windows - Unsupported platform for fsevents:

Try the following commands

- `npm install --no-optional`
- `npm install chokidar --no-optional`
- `npm install datocms-client --no-optional`
