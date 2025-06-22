# React ToDo App

A simple React ToDo application with a responsive floating sidebar and persistent localStorage support.

## Features

* Add, edit, complete, and delete tasks
* Tasks are stored in `localStorage` for persistence across page reloads
* Responsive floating sidebar navigation with slide-in animation
* Mobile-first design with Tailwind CSS

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devStormAkash/Basic-ToDo-App.git
   cd Basic-ToDo-App
   ```
2. Install dependencies:

   ```bash
   npm install vite@latest
   ``` 

## Usage

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

* `npm start` / `yarn start`: Runs the app in development mode.
* `npm run build` / `yarn build`: Builds the app for production into the `build` folder.
* `npm test` / `yarn test`: Launches the test runner.

## Technologies

* React
* Tailwind CSS
* UUID for unique task IDs
* React Icons for iconography

## Folder Structure

```
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───fa6
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───fc
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───fi
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───gi
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───go
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───gr
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───hi
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───hi2
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───im
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───io
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───io5
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───lia
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───lib
│   │   │       iconBase.d.ts
│   │   │       iconBase.js
│   │   │       iconBase.mjs
│   │   │       iconContext.d.ts
│   │   │       iconContext.js
│   │   │       iconContext.mjs
│   │   │       iconsManifest.d.ts
│   │   │       iconsManifest.js
│   │   │       iconsManifest.mjs
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───lu
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───md
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───pi
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───ri
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───rx
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───si
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───sl
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───tb
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───tfi
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───ti
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   ├───vsc
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       package.json
│   │   │
│   │   └───wi
│   │           index.d.ts
│   │           index.js
│   │           index.mjs
│   │           package.json
│   │
│   ├───react-refresh
│   │   │   babel.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   runtime.js
│   │   │
│   │   └───cjs
│   │           react-refresh-babel.development.js
│   │           react-refresh-babel.production.js
│   │           react-refresh-runtime.development.js
│   │           react-refresh-runtime.production.js
│   │
│   ├───resolve-from
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───rollup
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───dist
│   │       │   getLogFilter.d.ts
│   │       │   getLogFilter.js
│   │       │   loadConfigFile.d.ts
│   │       │   loadConfigFile.js
│   │       │   native.js
│   │       │   parseAst.d.ts
│   │       │   parseAst.js
│   │       │   rollup.d.ts
│   │       │   rollup.js
│   │       │
│   │       ├───bin
│   │       │       rollup
│   │       │
│   │       ├───es
│   │       │   │   getLogFilter.js
│   │       │   │   package.json
│   │       │   │   parseAst.js
│   │       │   │   rollup.js
│   │       │   │
│   │       │   └───shared
│   │       │           node-entry.js
│   │       │           parseAst.js
│   │       │           watch.js
│   │       │
│   │       └───shared
│   │               fsevents-importer.js
│   │               index.js
│   │               loadConfigFile.js
│   │               parseAst.js
│   │               rollup.js
│   │               watch-cli.js
│   │               watch.js
│   │
│   ├───scheduler
│   │   │   index.js
│   │   │   index.native.js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   unstable_mock.js
│   │   │   unstable_post_task.js
│   │   │
│   │   └───cjs
│   │           scheduler-unstable_mock.development.js
│   │           scheduler-unstable_mock.production.js
│   │           scheduler-unstable_post_task.development.js
│   │           scheduler-unstable_post_task.production.js
│   │           scheduler.development.js
│   │           scheduler.native.development.js
│   │           scheduler.native.production.js
│   │           scheduler.production.js
│   │
│   ├───semver
│   │   │   LICENSE
│   │   │   package.json
│   │   │   range.bnf
│   │   │   README.md
│   │   │   semver.js
│   │   │
│   │   └───bin
│   │           semver.js
│   │
│   ├───shebang-command
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───shebang-regex
│   │       index.d.ts
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───source-map-js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   source-map.d.ts
│   │   │   source-map.js
│   │   │
│   │   └───lib
│   │           array-set.js
│   │           base64-vlq.js
│   │           base64.js
│   │           binary-search.js
│   │           mapping-list.js
│   │           quick-sort.js
│   │           source-map-consumer.d.ts
│   │           source-map-consumer.js
│   │           source-map-generator.d.ts
│   │           source-map-generator.js
│   │           source-node.d.ts
│   │           source-node.js
│   │           util.js
│   │
│   ├───strip-json-comments
│   │       index.d.ts
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───supports-color
│   │       browser.js
│   │       index.js
│   │       license
│   │       package.json
│   │       readme.md
│   │
│   ├───tailwindcss
│   │   │   index.css
│   │   │   LICENSE
│   │   │   package.json
│   │   │   preflight.css
│   │   │   README.md
│   │   │   theme.css
│   │   │   utilities.css
│   │   │
│   │   └───dist
│   │           chunk-E562WLSY.mjs
│   │           chunk-G32FJCSR.mjs
│   │           chunk-HTB5LLOP.mjs
│   │           colors-b_6i0Oi7.d.ts
│   │           colors.d.mts
│   │           colors.d.ts
│   │           colors.js
│   │           colors.mjs
│   │           default-theme.d.mts
│   │           default-theme.d.ts
│   │           default-theme.js
│   │           default-theme.mjs
│   │           flatten-color-palette.d.mts
│   │           flatten-color-palette.d.ts
│   │           flatten-color-palette.js
│   │           flatten-color-palette.mjs
│   │           lib.d.mts
│   │           lib.d.ts
│   │           lib.js
│   │           lib.mjs
│   │           plugin.d.mts
│   │           plugin.d.ts
│   │           plugin.js
│   │           plugin.mjs
│   │           resolve-config-BIFUA2FY.d.ts
│   │           resolve-config-QUZ9b-Gn.d.mts
│   │           types-B254mqw1.d.mts
│   │
│   ├───tapable
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   tapable.d.ts
│   │   │
│   │   └───lib
│   │           AsyncParallelBailHook.js
│   │           AsyncParallelHook.js
│   │           AsyncSeriesBailHook.js
│   │           AsyncSeriesHook.js
│   │           AsyncSeriesLoopHook.js
│   │           AsyncSeriesWaterfallHook.js
│   │           Hook.js
│   │           HookCodeFactory.js
│   │           HookMap.js
│   │           index.js
│   │           MultiHook.js
│   │           SyncBailHook.js
│   │           SyncHook.js
│   │           SyncLoopHook.js
│   │           SyncWaterfallHook.js
│   │           util-browser.js
│   │
│   ├───tar
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───dist
│   │   │   ├───commonjs
│   │   │   │       create.d.ts
│   │   │   │       create.d.ts.map
│   │   │   │       create.js
│   │   │   │       create.js.map
│   │   │   │       cwd-error.d.ts
│   │   │   │       cwd-error.d.ts.map
│   │   │   │       cwd-error.js
│   │   │   │       cwd-error.js.map
│   │   │   │       extract.d.ts
│   │   │   │       extract.d.ts.map
│   │   │   │       extract.js
│   │   │   │       extract.js.map
│   │   │   │       get-write-flag.d.ts
│   │   │   │       get-write-flag.d.ts.map
│   │   │   │       get-write-flag.js
│   │   │   │       get-write-flag.js.map
│   │   │   │       header.d.ts
│   │   │   │       header.d.ts.map
│   │   │   │       header.js
│   │   │   │       header.js.map
│   │   │   │       index.d.ts
│   │   │   │       index.d.ts.map
│   │   │   │       index.js
│   │   │   │       index.js.map
│   │   │   │       large-numbers.d.ts
│   │   │   │       large-numbers.d.ts.map
│   │   │   │       large-numbers.js
│   │   │   │       large-numbers.js.map
│   │   │   │       list.d.ts
│   │   │   │       list.d.ts.map
│   │   │   │       list.js
│   │   │   │       list.js.map
│   │   │   │       make-command.d.ts
│   │   │   │       make-command.d.ts.map
│   │   │   │       make-command.js
│   │   │   │       make-command.js.map
│   │   │   │       mkdir.d.ts
│   │   │   │       mkdir.d.ts.map
│   │   │   │       mkdir.js
│   │   │   │       mkdir.js.map
│   │   │   │       mode-fix.d.ts
│   │   │   │       mode-fix.d.ts.map
│   │   │   │       mode-fix.js
│   │   │   │       mode-fix.js.map
│   │   │   │       normalize-unicode.d.ts
│   │   │   │       normalize-unicode.d.ts.map
│   │   │   │       normalize-unicode.js
│   │   │   │       normalize-unicode.js.map
│   │   │   │       normalize-windows-path.d.ts
│   │   │   │       normalize-windows-path.d.ts.map
│   │   │   │       normalize-windows-path.js
│   │   │   │       normalize-windows-path.js.map
│   │   │   │       options.d.ts
│   │   │   │       options.d.ts.map
│   │   │   │       options.js
│   │   │   │       options.js.map
│   │   │   │       pack.d.ts
│   │   │   │       pack.d.ts.map
│   │   │   │       pack.js
│   │   │   │       pack.js.map
│   │   │   │       package.json
│   │   │   │       parse.d.ts
│   │   │   │       parse.d.ts.map
│   │   │   │       parse.js
│   │   │   │       parse.js.map
│   │   │   │       path-reservations.d.ts
│   │   │   │       path-reservations.d.ts.map
│   │   │   │       path-reservations.js
│   │   │   │       path-reservations.js.map
│   │   │   │       pax.d.ts
│   │   │   │       pax.d.ts.map
│   │   │   │       pax.js
│   │   │   │       pax.js.map
│   │   │   │       read-entry.d.ts
│   │   │   │       read-entry.d.ts.map
│   │   │   │       read-entry.js
│   │   │   │       read-entry.js.map
│   │   │   │       replace.d.ts
│   │   │   │       replace.d.ts.map
│   │   │   │       replace.js
│   │   │   │       replace.js.map
│   │   │   │       strip-absolute-path.d.ts
│   │   │   │       strip-absolute-path.d.ts.map
│   │   │   │       strip-absolute-path.js
│   │   │   │       strip-absolute-path.js.map
│   │   │   │       strip-trailing-slashes.d.ts
│   │   │   │       strip-trailing-slashes.d.ts.map
│   │   │   │       strip-trailing-slashes.js
│   │   │   │       strip-trailing-slashes.js.map
│   │   │   │       symlink-error.d.ts
│   │   │   │       symlink-error.d.ts.map
│   │   │   │       symlink-error.js
│   │   │   │       symlink-error.js.map
│   │   │   │       types.d.ts
│   │   │   │       types.d.ts.map
│   │   │   │       types.js
│   │   │   │       types.js.map
│   │   │   │       unpack.d.ts
│   │   │   │       unpack.d.ts.map
│   │   │   │       unpack.js
│   │   │   │       unpack.js.map
│   │   │   │       update.d.ts
│   │   │   │       update.d.ts.map
│   │   │   │       update.js
│   │   │   │       update.js.map
│   │   │   │       warn-method.d.ts
│   │   │   │       warn-method.d.ts.map
│   │   │   │       warn-method.js
│   │   │   │       warn-method.js.map
│   │   │   │       winchars.d.ts
│   │   │   │       winchars.d.ts.map
│   │   │   │       winchars.js
│   │   │   │       winchars.js.map
│   │   │   │       write-entry.d.ts
│   │   │   │       write-entry.d.ts.map
│   │   │   │       write-entry.js
│   │   │   │       write-entry.js.map
│   │   │   │
│   │   │   └───esm
│   │   │           create.d.ts
│   │   │           create.d.ts.map
│   │   │           create.js
│   │   │           create.js.map
│   │   │           cwd-error.d.ts
│   │   │           cwd-error.d.ts.map
│   │   │           cwd-error.js
│   │   │           cwd-error.js.map
│   │   │           extract.d.ts
│   │   │           extract.d.ts.map
│   │   │           extract.js
│   │   │           extract.js.map
│   │   │           get-write-flag.d.ts
│   │   │           get-write-flag.d.ts.map
│   │   │           get-write-flag.js
│   │   │           get-write-flag.js.map
│   │   │           header.d.ts
│   │   │           header.d.ts.map
│   │   │           header.js
│   │   │           header.js.map
│   │   │           index.d.ts
│   │   │           index.d.ts.map
│   │   │           index.js
│   │   │           index.js.map
│   │   │           large-numbers.d.ts
│   │   │           large-numbers.d.ts.map
│   │   │           large-numbers.js
│   │   │           large-numbers.js.map
│   │   │           list.d.ts
│   │   │           list.d.ts.map
│   │   │           list.js
│   │   │           list.js.map
│   │   │           make-command.d.ts
│   │   │           make-command.d.ts.map
│   │   │           make-command.js
│   │   │           make-command.js.map
│   │   │           mkdir.d.ts
│   │   │           mkdir.d.ts.map
│   │   │           mkdir.js
│   │   │           mkdir.js.map
│   │   │           mode-fix.d.ts
│   │   │           mode-fix.d.ts.map
│   │   │           mode-fix.js
│   │   │           mode-fix.js.map
│   │   │           normalize-unicode.d.ts
│   │   │           normalize-unicode.d.ts.map
│   │   │           normalize-unicode.js
│   │   │           normalize-unicode.js.map
│   │   │           normalize-windows-path.d.ts
│   │   │           normalize-windows-path.d.ts.map
│   │   │           normalize-windows-path.js
│   │   │           normalize-windows-path.js.map
│   │   │           options.d.ts
│   │   │           options.d.ts.map
│   │   │           options.js
│   │   │           options.js.map
│   │   │           pack.d.ts
│   │   │           pack.d.ts.map
│   │   │           pack.js
│   │   │           pack.js.map
│   │   │           package.json
│   │   │           parse.d.ts
│   │   │           parse.d.ts.map
│   │   │           parse.js
│   │   │           parse.js.map
│   │   │           path-reservations.d.ts
│   │   │           path-reservations.d.ts.map
│   │   │           path-reservations.js
│   │   │           path-reservations.js.map
│   │   │           pax.d.ts
│   │   │           pax.d.ts.map
│   │   │           pax.js
│   │   │           pax.js.map
│   │   │           read-entry.d.ts
│   │   │           read-entry.d.ts.map
│   │   │           read-entry.js
│   │   │           read-entry.js.map
│   │   │           replace.d.ts
│   │   │           replace.d.ts.map
│   │   │           replace.js
│   │   │           replace.js.map
│   │   │           strip-absolute-path.d.ts
│   │   │           strip-absolute-path.d.ts.map
│   │   │           strip-absolute-path.js
│   │   │           strip-absolute-path.js.map
│   │   │           strip-trailing-slashes.d.ts
│   │   │           strip-trailing-slashes.d.ts.map
│   │   │           strip-trailing-slashes.js
│   │   │           strip-trailing-slashes.js.map
│   │   │           symlink-error.d.ts
│   │   │           symlink-error.d.ts.map
│   │   │           symlink-error.js
│   │   │           symlink-error.js.map
│   │   │           types.d.ts
│   │   │           types.d.ts.map
│   │   │           types.js
│   │   │           types.js.map
│   │   │           unpack.d.ts
│   │   │           unpack.d.ts.map
│   │   │           unpack.js
│   │   │           unpack.js.map
│   │   │           update.d.ts
│   │   │           update.d.ts.map
│   │   │           update.js
│   │   │           update.js.map
│   │   │           warn-method.d.ts
│   │   │           warn-method.d.ts.map
│   │   │           warn-method.js
│   │   │           warn-method.js.map
│   │   │           winchars.d.ts
│   │   │           winchars.d.ts.map
│   │   │           winchars.js
│   │   │           winchars.js.map
│   │   │           write-entry.d.ts
│   │   │           write-entry.d.ts.map
│   │   │           write-entry.js
│   │   │           write-entry.js.map
│   │   │
│   │   └───node_modules
│   │       └───yallist
│   │           │   LICENSE.md
│   │           │   package.json
│   │           │   README.md
│   │           │
│   │           └───dist
│   │               ├───commonjs
│   │               │       index.d.ts
│   │               │       index.d.ts.map
│   │               │       index.js
│   │               │       index.js.map
│   │               │       package.json
│   │               │
│   │               └───esm
│   │                       index.d.ts
│   │                       index.d.ts.map
│   │                       index.js
│   │                       index.js.map
│   │                       package.json
│   │
│   ├───tinyglobby
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───dist
│   │           index.d.mts
│   │           index.d.ts
│   │           index.js
│   │           index.mjs
│   │
│   ├───type-check
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───lib
│   │           check.js
│   │           index.js
│   │           parse-type.js
│   │
│   ├───update-browserslist-db
│   │       check-npm-version.js
│   │       cli.js
│   │       index.d.ts
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       utils.js
│   │
│   ├───uri-js
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   yarn.lock
│   │   │
│   │   └───dist
│   │       ├───es5
│   │       │       uri.all.d.ts
│   │       │       uri.all.js
│   │       │       uri.all.js.map
│   │       │       uri.all.min.d.ts
│   │       │       uri.all.min.js
│   │       │       uri.all.min.js.map
│   │       │
│   │       └───esnext
│   │           │   index.d.ts
│   │           │   index.js
│   │           │   index.js.map
│   │           │   regexps-iri.d.ts
│   │           │   regexps-iri.js
│   │           │   regexps-iri.js.map
│   │           │   regexps-uri.d.ts
│   │           │   regexps-uri.js
│   │           │   regexps-uri.js.map
│   │           │   uri.d.ts
│   │           │   uri.js
│   │           │   uri.js.map
│   │           │   util.d.ts
│   │           │   util.js
│   │           │   util.js.map
│   │           │
│   │           └───schemes
│   │                   http.d.ts
│   │                   http.js
│   │                   http.js.map
│   │                   https.d.ts
│   │                   https.js
│   │                   https.js.map
│   │                   mailto.d.ts
│   │                   mailto.js
│   │                   mailto.js.map
│   │                   urn-uuid.d.ts
│   │                   urn-uuid.js
│   │                   urn-uuid.js.map
│   │                   urn.d.ts
│   │                   urn.js
│   │                   urn.js.map
│   │                   ws.d.ts
│   │                   ws.js
│   │                   ws.js.map
│   │                   wss.d.ts
│   │                   wss.js
│   │                   wss.js.map
│   │
│   ├───uuid
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   └───dist
│   │       ├───cjs
│   │       │       index.d.ts
│   │       │       index.js
│   │       │       max.d.ts
│   │       │       max.js
│   │       │       md5.d.ts
│   │       │       md5.js
│   │       │       native.d.ts
│   │       │       native.js
│   │       │       nil.d.ts
│   │       │       nil.js
│   │       │       package.json
│   │       │       parse.d.ts
│   │       │       parse.js
│   │       │       regex.d.ts
│   │       │       regex.js
│   │       │       rng.d.ts
│   │       │       rng.js
│   │       │       sha1.d.ts
│   │       │       sha1.js
│   │       │       stringify.d.ts
│   │       │       stringify.js
│   │       │       types.d.ts
│   │       │       types.js
│   │       │       uuid-bin.d.ts
│   │       │       uuid-bin.js
│   │       │       v1.d.ts
│   │       │       v1.js
│   │       │       v1ToV6.d.ts
│   │       │       v1ToV6.js
│   │       │       v3.d.ts
│   │       │       v3.js
│   │       │       v35.d.ts
│   │       │       v35.js
│   │       │       v4.d.ts
│   │       │       v4.js
│   │       │       v5.d.ts
│   │       │       v5.js
│   │       │       v6.d.ts
│   │       │       v6.js
│   │       │       v6ToV1.d.ts
│   │       │       v6ToV1.js
│   │       │       v7.d.ts
│   │       │       v7.js
│   │       │       validate.d.ts
│   │       │       validate.js
│   │       │       version.d.ts
│   │       │       version.js
│   │       │
│   │       ├───cjs-browser
│   │       │       index.d.ts
│   │       │       index.js
│   │       │       max.d.ts
│   │       │       max.js
│   │       │       md5.d.ts
│   │       │       md5.js
│   │       │       native.d.ts
│   │       │       native.js
│   │       │       nil.d.ts
│   │       │       nil.js
│   │       │       package.json
│   │       │       parse.d.ts
│   │       │       parse.js
│   │       │       regex.d.ts
│   │       │       regex.js
│   │       │       rng.d.ts
│   │       │       rng.js
│   │       │       sha1.d.ts
│   │       │       sha1.js
│   │       │       stringify.d.ts
│   │       │       stringify.js
│   │       │       types.d.ts
│   │       │       types.js
│   │       │       uuid-bin.d.ts
│   │       │       uuid-bin.js
│   │       │       v1.d.ts
│   │       │       v1.js
│   │       │       v1ToV6.d.ts
│   │       │       v1ToV6.js
│   │       │       v3.d.ts
│   │       │       v3.js
│   │       │       v35.d.ts
│   │       │       v35.js
│   │       │       v4.d.ts
│   │       │       v4.js
│   │       │       v5.d.ts
│   │       │       v5.js
│   │       │       v6.d.ts
│   │       │       v6.js
│   │       │       v6ToV1.d.ts
│   │       │       v6ToV1.js
│   │       │       v7.d.ts
│   │       │       v7.js
│   │       │       validate.d.ts
│   │       │       validate.js
│   │       │       version.d.ts
│   │       │       version.js
│   │       │
│   │       ├───esm
│   │       │   │   index.d.ts
│   │       │   │   index.js
│   │       │   │   max.d.ts
│   │       │   │   max.js
│   │       │   │   md5.d.ts
│   │       │   │   md5.js
│   │       │   │   native.d.ts
│   │       │   │   native.js
│   │       │   │   nil.d.ts
│   │       │   │   nil.js
│   │       │   │   parse.d.ts
│   │       │   │   parse.js
│   │       │   │   regex.d.ts
│   │       │   │   regex.js
│   │       │   │   rng.d.ts
│   │       │   │   rng.js
│   │       │   │   sha1.d.ts
│   │       │   │   sha1.js
│   │       │   │   stringify.d.ts
│   │       │   │   stringify.js
│   │       │   │   types.d.ts
│   │       │   │   types.js
│   │       │   │   uuid-bin.d.ts
│   │       │   │   uuid-bin.js
│   │       │   │   v1.d.ts
│   │       │   │   v1.js
│   │       │   │   v1ToV6.d.ts
│   │       │   │   v1ToV6.js
│   │       │   │   v3.d.ts
│   │       │   │   v3.js
│   │       │   │   v35.d.ts
│   │       │   │   v35.js
│   │       │   │   v4.d.ts
│   │       │   │   v4.js
│   │       │   │   v5.d.ts
│   │       │   │   v5.js
│   │       │   │   v6.d.ts
│   │       │   │   v6.js
│   │       │   │   v6ToV1.d.ts
│   │       │   │   v6ToV1.js
│   │       │   │   v7.d.ts
│   │       │   │   v7.js
│   │       │   │   validate.d.ts
│   │       │   │   validate.js
│   │       │   │   version.d.ts
│   │       │   │   version.js
│   │       │   │
│   │       │   └───bin
│   │       │           uuid
│   │       │
│   │       └───esm-browser
│   │               index.d.ts
│   │               index.js
│   │               max.d.ts
│   │               max.js
│   │               md5.d.ts
│   │               md5.js
│   │               native.d.ts
│   │               native.js
│   │               nil.d.ts
│   │               nil.js
│   │               parse.d.ts
│   │               parse.js
│   │               regex.d.ts
│   │               regex.js
│   │               rng.d.ts
│   │               rng.js
│   │               sha1.d.ts
│   │               sha1.js
│   │               stringify.d.ts
│   │               stringify.js
│   │               types.d.ts
│   │               types.js
│   │               uuid-bin.d.ts
│   │               uuid-bin.js
│   │               v1.d.ts
│   │               v1.js
│   │               v1ToV6.d.ts
│   │               v1ToV6.js
│   │               v3.d.ts
│   │               v3.js
│   │               v35.d.ts
│   │               v35.js
│   │               v4.d.ts
│   │               v4.js
│   │               v5.d.ts
│   │               v5.js
│   │               v6.d.ts
│   │               v6.js
│   │               v6ToV1.d.ts
│   │               v6ToV1.js
│   │               v7.d.ts
│   │               v7.js
│   │               validate.d.ts
│   │               validate.js
│   │               version.d.ts
│   │               version.js
│   │
│   ├───vite
│   │   │   client.d.ts
│   │   │   index.cjs
│   │   │   index.d.cts
│   │   │   LICENSE.md
│   │   │   package.json
│   │   │   README.md
│   │   │
│   │   ├───bin
│   │   │       openChrome.applescript
│   │   │       vite.js
│   │   │
│   │   ├───dist
│   │   │   ├───client
│   │   │   │       client.mjs
│   │   │   │       env.mjs
│   │   │   │
│   │   │   ├───node
│   │   │   │   │   cli.js
│   │   │   │   │   constants.js
│   │   │   │   │   index.d.ts
│   │   │   │   │   index.js
│   │   │   │   │   module-runner.d.ts
│   │   │   │   │   module-runner.js
│   │   │   │   │   moduleRunnerTransport.d-DJ_mE5sf.d.ts
│   │   │   │   │
│   │   │   │   └───chunks
│   │   │   │           dep-3RmXg9uo.js
│   │   │   │           dep-AiMcmC_f.js
│   │   │   │           dep-CvfTChi5.js
│   │   │   │           dep-DBxKXgDP.js
│   │   │   │           dep-SgSik2vo.js
│   │   │   │
│   │   │   └───node-cjs
│   │   │           publicUtils.cjs
│   │   │
│   │   ├───misc
│   │   │       false.js
│   │   │       true.js
│   │   │
│   │   └───types
│   │       │   customEvent.d.ts
│   │       │   hmrPayload.d.ts
│   │       │   hot.d.ts
│   │       │   import-meta.d.ts
│   │       │   importGlob.d.ts
│   │       │   importMeta.d.ts
│   │       │   metadata.d.ts
│   │       │   package.json
│   │       │
│   │       └───internal
│   │               cssPreprocessorOptions.d.ts
│   │               lightningcssOptions.d.ts
│   │
│   ├───which
│   │   │   CHANGELOG.md
│   │   │   LICENSE
│   │   │   package.json
│   │   │   README.md
│   │   │   which.js
│   │   │
│   │   └───bin
│   │           node-which
│   │
│   ├───word-wrap
│   │       index.d.ts
│   │       index.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │
│   ├───yallist
│   │       iterator.js
│   │       LICENSE
│   │       package.json
│   │       README.md
│   │       yallist.js
│   │
│   └───yocto-queue
│           index.d.ts
│           index.js
│           license
│           package.json
│           readme.md
│
├───public
│       vite.svg
│
└───src
    │   App.css
    │   App.jsx
    │   index.css
    │   main.jsx
    │
    ├───assets
    │       react.svg
    │
    └───components
            FloatingSideBar.jsx
            SideBar.jsx
            ToDo.jsx

```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
