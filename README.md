# SkillToBill (STB)

Straight facts: this is an MVP-first platform. Not perfect, not fancy, but built to validate fast and scale later.

---

## 🚀 What is SkillToBill?

SkillToBill is a service marketplace + community platform focused on **earning AND growth**. Not just gigs — skills, learning, and real outcomes.

Target users:

* Freelancers / Earners (especially Tier-2 & Tier-3 cities)
* Clients who want simple, affordable, reliable services

---

## 🔑 Core USPs (No fluff)

1. **Community-first** – users don’t feel alone; they learn + earn together.
2. **Growth-focused** – skills, learning, and progression matter, not just money.
3. **Simple UX** – no clutter, no tech headache.

If any of these fail, the product fails. Period.

---

## 🧱 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication

### Payments

* Razorpay
* Webhooks for payment verification

---

## 📁 Folder Structure 


stb
├───STB-Backend
│   │   .env
│   │   .gitignore
│   │   index.js
│   │   package-lock.json
│   │   package.json
│   │   query
│   │   README.md
│   │
│   ├───node_modules
│   │   │   .package-lock.json
│   │   │
│   │   ├───.bin
│   │   │       bcrypt
│   │   │       bcrypt.cmd
│   │   │       bcrypt.ps1
│   │   │       node-gyp-build
│   │   │       node-gyp-build-optional
│   │   │       node-gyp-build-optional.cmd
│   │   │       node-gyp-build-optional.ps1
│   │   │       node-gyp-build-test
│   │   │       node-gyp-build-test.cmd
│   │   │       node-gyp-build-test.ps1
│   │   │       node-gyp-build.cmd
│   │   │       node-gyp-build.ps1
│   │   │       nodemon
│   │   │       nodemon.cmd
│   │   │       nodemon.ps1
│   │   │       nodetouch
│   │   │       nodetouch.cmd
│   │   │       nodetouch.ps1
│   │   │       semver
│   │   │       semver.cmd
│   │   │       semver.ps1
│   │   │
│   │   ├───@hapi
│   │   │   ├───address
│   │   │   │   │   LICENSE.md
│   │   │   │   │   package.json
│   │   │   │   │   README.md
│   │   │   │   │
│   │   │   │   ├───dist
│   │   │   │   │       decode.d.ts
│   │   │   │   │       decode.js
│   │   │   │   │       decode.js.map
│   │   │   │   │       domain.d.ts
│   │   │   │   │       domain.js
│   │   │   │   │       domain.js.map
│   │   │   │   │       email.d.ts
│   │   │   │   │       email.js
│   │   │   │   │       email.js.map
│   │   │   │   │       errors.d.ts
│   │   │   │   │       errors.js
│   │   │   │   │       errors.js.map
│   │   │   │   │       index.d.ts
│   │   │   │   │       index.js
│   │   │   │   │       index.js.map
│   │   │   │   │       ip.d.ts
│   │   │   │   │       ip.js
│   │   │   │   │       ip.js.map
│   │   │   │   │       uri.d.ts
│   │   │   │   │       uri.js
│   │   │   │   │       uri.js.map
│   │   │   │   │
│   │   │   │   ├───esm
│   │   │   │   │       decode.d.ts
│   │   │   │   │       decode.js
│   │   │   │   │       decode.js.map
│   │   │   │   │       domain.d.ts
│   │   │   │   │       domain.js
│   │   │   │   │       domain.js.map
│   │   │   │   │       email.d.ts
│   │   │   │   │       email.js
│   │   │   │   │       email.js.map
│   │   │   │   │       errors.d.ts
│   │   │   │   │       errors.js
│   │   │   │   │       errors.js.map
│   │   │   │   │       index.d.ts
│   │   │   │   │       index.js
│   │   │   │   │       index.js.map
│   │   │   │   │       ip.d.ts
│   │   │   │   │       ip.js
│   │   │   │   │       ip.js.map
│   │   │   │   │       uri.d.ts
│   │   │   │   │       uri.js
│   │   │   │   │       uri.js.map
│   │   │   │   │
│   │   │   │   └───src
│   │   │   │           decode.ts
│   │   │   │           domain.ts
│   │   │   │           email.ts
│   │   │   │           errors.ts
│   │   │   │           index.ts
│   │   │   │           ip.ts
│   │   │   │           uri.ts
│   │   │   │
│   │   │   ├───formula
│   │   │   │   │   LICENSE.md
│   │   │   │   │   package.json
│   │   │   │   │   README.md
│   │   │   │   │
│   │   │   │   └───lib
│   │   │   │           index.d.ts
│   │   │   │           index.js
│   │   │   │
│   │   │   ├───hoek
│   │   │   │   │   LICENSE.md
│   │   │   │   │   package.json
│   │   │   │   │   README.md
│   │   │   │   │
│   │   │   │   └───lib
│   │   │   │           applyToDefaults.d.ts
│   │   │   │           applyToDefaults.js
│   │   │   │           assert.d.ts
│   │   │   │           assert.js
│   │   │   │           assertError.d.ts
│   │   │   │           assertError.js
│   │   │   │           bench.d.ts
│   │   │   │           bench.js
│   │   │   │           block.d.ts
│   │   │   │           block.js
│   │   │   │           clone.d.ts
│   │   │   │           clone.js
│   │   │   │           contain.d.ts
│   │   │   │           contain.js
│   │   │   │           deepEqual.d.ts
│   │   │   │           deepEqual.js
│   │   │   │           escapeHeaderAttribute.d.ts
│   │   │   │           escapeHeaderAttribute.js
│   │   │   │           escapeHtml.d.ts
│   │   │   │           escapeHtml.js
│   │   │   │           escapeJson.d.ts
│   │   │   │           escapeJson.js
│   │   │   │           escapeRegex.d.ts
│   │   │   │           escapeRegex.js
│   │   │   │           flatten.d.ts
│   │   │   │           flatten.js
│   │   │   │           ignore.d.ts
│   │   │   │           ignore.js
│   │   │   │           index.d.ts
│   │   │   │           index.js
│   │   │   │           index.mjs
│   │   │   │           intersect.d.ts
│   │   │   │           intersect.js
│   │   │   │           isPromise.d.ts
│   │   │   │           isPromise.js
│   │   │   │           merge.d.ts
│   │   │   │           merge.js
│   │   │   │           once.d.ts
│   │   │   │           once.js
│   │   │   │           reach.d.ts
│   │   │   │           reach.js
│   │   │   │           reachTemplate.d.ts
│   │   │   │           reachTemplate.js
│   │   │   │           stringify.d.ts
│   │   │   │           stringify.js
│   │   │   │           types.js
│   │   │   │           utils.js
│   │   │   │           wait.d.ts
│   │   │   │           wait.js
│   │   │   │
│   │   │   ├───pinpoint
│   │   │   │   │   LICENSE.md
│   │   │   │   │   package.json
│   │   │   │   │   README.md
│   │   │   │   │
│   │   │   │   └───lib
│   │   │   │           index.d.ts
│   │   │   │           index.js
│   │   │   │
│   │   │   ├───tlds
│   │   │   │   │   LICENSE.md
│   │   │   │   │   package.json
│   │   │   │   │   README.md
│   │   │   │   │
│   │   │   │   └───dist
│   │   │   │       ├───commonjs
│   │   │   │       │       index.d.ts
│   │   │   │       │       index.d.ts.map
│   │   │   │       │       index.js
│   │   │   │       │       index.js.map
│   │   │   │       │       package.json
│   │   │   │       │       tlds.d.ts
│   │   │   │       │       tlds.d.ts.map
│   │   │   │       │       tlds.js
│   │   │   │       │       tlds.js.map
│   │   │   │       │
│   │   │   │       └───esm
│   │   │   │               index.d.ts
│   │   │   │               index.d.ts.map
│   │   │   │               index.js
│   │   │   │               index.js.map
│   │   │   │               package.json
│   │   │   │               tlds.d.ts
│   │   │   │               tlds.d.ts.map
│   │   │   │               tlds.js
│   │   │   │               tlds.js.map
│   │   │   │
│   │   │   └───topo
│   │   │       │   LICENSE.md
│   │   │       │   package.json
│   │   │       │   README.md
│   │   │       │
│   │   │       └───lib
│   │   │               index.d.ts
│   │   │               index.js
│   │   │
│   │   ├───@mongodb-js
│   │   │   └───saslprep
│   │   │       │   LICENSE
│   │   │       │   package.json
│   │   │       │   readme.md
│   │   │       │
│   │   │       └───dist
│   │   │               .esm-wrapper.mjs
│   │   │               browser.d.ts
│   │   │               browser.d.ts.map
│   │   │               browser.js
│   │   │               browser.js.map
│   │   │               code-points-data-browser.d.ts
│   │   │               code-points-data-browser.d.ts.map
│   │   │               code-points-data-browser.js
│   │   │               code-points-data-browser.js.map
│   │   │               code-points-data.d.ts
│   │   │               code-points-data.d.ts.map
│   │   │               code-points-data.js
│   │   │               code-points-data.js.map
│   │   │               code-points-src.d.ts
│   │   │               code-points-src.d.ts.map
│   │   │               code-points-src.js
│   │   │               code-points-src.js.map
│   │   │               generate-code-points.d.ts
│   │   │               generate-code-points.d.ts.map
│   │   │               generate-code-points.js
│   │   │               generate-code-points.js.map
│   │   │               index.d.ts
│   │   │               index.d.ts.map
│   │   │               index.js
│   │   │               index.js.map
│   │   │               memory-code-points.d.ts
│   │   │               memory-code-points.d.ts.map
│   │   │               memory-code-points.js
│   │   │               memory-code-points.js.map
│   │   │               node.d.ts
│   │   │               node.d.ts.map
│   │   │               node.js
│   │   │               node.js.map
│   │   │               util.d.ts
│   │   │               util.d.ts.map
│   │   │               util.js
│   │   │               util.js.map
│   │   │
│   │   ├───@standard-schema
│   │   │   └───spec
│   │   │       │   LICENSE
│   │   │       │   package.json
│   │   │       │   README.md
│   │   │       │
│   │   │       └───dist
│   │   │               index.cjs
│   │   │               index.d.cts
│   │   │               index.d.ts
│   │   │               index.js
│   │   │
│   │   ├───@types
│   │   │   ├───webidl-conversions
│   │   │   │       index.d.ts
│   │   │   │       LICENSE
│   │   │   │       package.json
│   │   │   │       README.md
│   │   │   │
│   │   │   └───whatwg-url
│   │   │       │   index.d.ts
│   │   │       │   LICENSE
│   │   │       │   package.json
│   │   │       │   README.md
│   │   │       │   webidl2js-wrapper.d.ts
│   │   │       │
│   │   │       └───lib
│   │   │               URL-impl.d.ts
│   │   │               URL.d.ts
│   │   │               URLSearchParams-impl.d.ts
│   │   │               URLSearchParams.d.ts
│   │   │
│   │   ├───accepts
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───anymatch
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───balanced-match
│   │   │   │   index.js
│   │   │   │   LICENSE.md
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───.github
│   │   │           FUNDING.yml
│   │   │
│   │   ├───basic-auth
│   │   │   │   HISTORY.md
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───node_modules
│   │   │       └───safe-buffer
│   │   │               index.d.ts
│   │   │               index.js
│   │   │               LICENSE
│   │   │               package.json
│   │   │               README.md
│   │   │
│   │   ├───bcrypt
│   │   │   │   .dockerignore
│   │   │   │   .editorconfig
│   │   │   │   bcrypt.js
│   │   │   │   binding.gyp
│   │   │   │   build-all.sh
│   │   │   │   CHANGELOG.md
│   │   │   │   Dockerfile
│   │   │   │   Dockerfile-alpine
│   │   │   │   ISSUE_TEMPLATE.md
│   │   │   │   LICENSE
│   │   │   │   Makefile
│   │   │   │   package.json
│   │   │   │   promises.js
│   │   │   │   README.md
│   │   │   │   SECURITY.md
│   │   │   │
│   │   │   ├───.github
│   │   │   │   └───workflows
│   │   │   │           build-pack-publish.yml
│   │   │   │           ci.yaml
│   │   │   │
│   │   │   ├───examples
│   │   │   │       async_compare.js
│   │   │   │       forever_gen_salt.js
│   │   │   │
│   │   │   ├───prebuilds
│   │   │   │   ├───darwin-arm64
│   │   │   │   │       bcrypt.node
│   │   │   │   │
│   │   │   │   ├───darwin-x64
│   │   │   │   │       bcrypt.node
│   │   │   │   │
│   │   │   │   ├───linux-arm
│   │   │   │   │       bcrypt.glibc.node
│   │   │   │   │       bcrypt.musl.node
│   │   │   │   │
│   │   │   │   ├───linux-arm64
│   │   │   │   │       bcrypt.glibc.node
│   │   │   │   │       bcrypt.musl.node
│   │   │   │   │
│   │   │   │   ├───linux-x64
│   │   │   │   │       bcrypt.glibc.node
│   │   │   │   │       bcrypt.musl.node
│   │   │   │   │
│   │   │   │   ├───win32-arm64
│   │   │   │   │       bcrypt.node
│   │   │   │   │
│   │   │   │   └───win32-x64
│   │   │   │           bcrypt.node
│   │   │   │
│   │   │   ├───src
│   │   │   │       bcrypt.cc
│   │   │   │       bcrypt_node.cc
│   │   │   │       blowfish.cc
│   │   │   │       node_blf.h
│   │   │   │
│   │   │   └───test
│   │   │           async.test.js
│   │   │           implementation.test.js
│   │   │           promise.test.js
│   │   │           repetitions.test.js
│   │   │           sync.test.js
│   │   │
│   │   ├───bcryptjs
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   types.d.ts
│   │   │   │
│   │   │   ├───bin
│   │   │   │       bcrypt
│   │   │   │
│   │   │   └───umd
│   │   │           index.d.ts
│   │   │           index.js
│   │   │           package.json
│   │   │           types.d.ts
│   │   │
│   │   ├───binary-extensions
│   │   │       binary-extensions.json
│   │   │       binary-extensions.json.d.ts
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       license
│   │   │       package.json
│   │   │       readme.md
│   │   │
│   │   ├───body-parser
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │       │   read.js
│   │   │       │   utils.js
│   │   │       │
│   │   │       └───types
│   │   │               json.js
│   │   │               raw.js
│   │   │               text.js
│   │   │               urlencoded.js
│   │   │
│   │   ├───brace-expansion
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───braces
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           compile.js
│   │   │           constants.js
│   │   │           expand.js
│   │   │           parse.js
│   │   │           stringify.js
│   │   │           utils.js
│   │   │
│   │   ├───bson
│   │   │   │   bson.d.ts
│   │   │   │   LICENSE.md
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───etc
│   │   │   │       prepare.js
│   │   │   │
│   │   │   ├───lib
│   │   │   │       bson.bundle.js
│   │   │   │       bson.bundle.js.map
│   │   │   │       bson.cjs
│   │   │   │       bson.cjs.map
│   │   │   │       bson.mjs
│   │   │   │       bson.mjs.map
│   │   │   │       bson.node.mjs
│   │   │   │       bson.node.mjs.map
│   │   │   │       bson.rn.cjs
│   │   │   │       bson.rn.cjs.map
│   │   │   │
│   │   │   └───src
│   │   │       │   binary.ts
│   │   │       │   bson.ts
│   │   │       │   bson_value.ts
│   │   │       │   code.ts
│   │   │       │   constants.ts
│   │   │       │   db_ref.ts
│   │   │       │   decimal128.ts
│   │   │       │   double.ts
│   │   │       │   error.ts
│   │   │       │   extended_json.ts
│   │   │       │   index.ts
│   │   │       │   int_32.ts
│   │   │       │   long.ts
│   │   │       │   max_key.ts
│   │   │       │   min_key.ts
│   │   │       │   objectid.ts
│   │   │       │   parse_utf8.ts
│   │   │       │   regexp.ts
│   │   │       │   symbol.ts
│   │   │       │   timestamp.ts
│   │   │       │
│   │   │       ├───parser
│   │   │       │   │   calculate_size.ts
│   │   │       │   │   deserializer.ts
│   │   │       │   │   serializer.ts
│   │   │       │   │   utils.ts
│   │   │       │   │
│   │   │       │   └───on_demand
│   │   │       │           index.ts
│   │   │       │           parse_to_elements.ts
│   │   │       │
│   │   │       └───utils
│   │   │               byte_utils.ts
│   │   │               latin.ts
│   │   │               node_byte_utils.ts
│   │   │               number_utils.ts
│   │   │               string_utils.ts
│   │   │               web_byte_utils.ts
│   │   │
│   │   ├───buffer-equal-constant-time
│   │   │       .npmignore
│   │   │       .travis.yml
│   │   │       index.js
│   │   │       LICENSE.txt
│   │   │       package.json
│   │   │       README.md
│   │   │       test.js
│   │   │
│   │   ├───bytes
│   │   │       History.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       Readme.md
│   │   │
│   │   ├───call-bind-apply-helpers
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   actualApply.d.ts
│   │   │   │   actualApply.js
│   │   │   │   applyBind.d.ts
│   │   │   │   applyBind.js
│   │   │   │   CHANGELOG.md
│   │   │   │   functionApply.d.ts
│   │   │   │   functionApply.js
│   │   │   │   functionCall.d.ts
│   │   │   │   functionCall.js
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   reflectApply.d.ts
│   │   │   │   reflectApply.js
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───call-bound
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───chokidar
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───lib
│   │   │   │       constants.js
│   │   │   │       fsevents-handler.js
│   │   │   │       nodefs-handler.js
│   │   │   │
│   │   │   └───types
│   │   │           index.d.ts
│   │   │
│   │   ├───concat-map
│   │   │   │   .travis.yml
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.markdown
│   │   │   │
│   │   │   ├───example
│   │   │   │       map.js
│   │   │   │
│   │   │   └───test
│   │   │           map.js
│   │   │
│   │   ├───content-disposition
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───content-type
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───cookie
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │       SECURITY.md
│   │   │
│   │   ├───cookie-signature
│   │   │       History.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       Readme.md
│   │   │
│   │   ├───cors
│   │   │   │   CONTRIBUTING.md
│   │   │   │   HISTORY.md
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           index.js
│   │   │
│   │   ├───crypto
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───debug
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───src
│   │   │           browser.js
│   │   │           common.js
│   │   │           index.js
│   │   │           node.js
│   │   │
│   │   ├───depd
│   │   │   │   History.md
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   Readme.md
│   │   │   │
│   │   │   └───lib
│   │   │       └───browser
│   │   │               index.js
│   │   │
│   │   ├───dotenv
│   │   │   │   CHANGELOG.md
│   │   │   │   config.d.ts
│   │   │   │   config.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README-es.md
│   │   │   │   README.md
│   │   │   │   SECURITY.md
│   │   │   │
│   │   │   └───lib
│   │   │           cli-options.js
│   │   │           env-options.js
│   │   │           main.d.ts
│   │   │           main.js
│   │   │
│   │   ├───dunder-proto
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   get.d.ts
│   │   │   │   get.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   set.d.ts
│   │   │   │   set.js
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           get.js
│   │   │           index.js
│   │   │           set.js
│   │   │
│   │   ├───ecdsa-sig-formatter
│   │   │   │   CODEOWNERS
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───src
│   │   │           ecdsa-sig-formatter.d.ts
│   │   │           ecdsa-sig-formatter.js
│   │   │           param-bytes-for-alg.js
│   │   │
│   │   ├───ee-first
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───encodeurl
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───es-define-property
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───es-errors
│   │   │   │   .eslintrc
│   │   │   │   CHANGELOG.md
│   │   │   │   eval.d.ts
│   │   │   │   eval.js
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   range.d.ts
│   │   │   │   range.js
│   │   │   │   README.md
│   │   │   │   ref.d.ts
│   │   │   │   ref.js
│   │   │   │   syntax.d.ts
│   │   │   │   syntax.js
│   │   │   │   tsconfig.json
│   │   │   │   type.d.ts
│   │   │   │   type.js
│   │   │   │   uri.d.ts
│   │   │   │   uri.js
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───es-object-atoms
│   │   │   │   .eslintrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   isObject.d.ts
│   │   │   │   isObject.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   RequireObjectCoercible.d.ts
│   │   │   │   RequireObjectCoercible.js
│   │   │   │   ToObject.d.ts
│   │   │   │   ToObject.js
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───escape-html
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       Readme.md
│   │   │
│   │   ├───etag
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───express
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   Readme.md
│   │   │   │
│   │   │   └───lib
│   │   │           application.js
│   │   │           express.js
│   │   │           request.js
│   │   │           response.js
│   │   │           utils.js
│   │   │           view.js
│   │   │
│   │   ├───express-validator
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │       │   base.d.ts
│   │   │       │   base.js
│   │   │       │   context-builder.d.ts
│   │   │       │   context-builder.js
│   │   │       │   context.d.ts
│   │   │       │   context.js
│   │   │       │   express-validator.d.ts
│   │   │       │   express-validator.js
│   │   │       │   field-selection.d.ts
│   │   │       │   field-selection.js
│   │   │       │   index.d.ts
│   │   │       │   index.js
│   │   │       │   matched-data.d.ts
│   │   │       │   matched-data.js
│   │   │       │   options.d.ts
│   │   │       │   options.js
│   │   │       │   utils.d.ts
│   │   │       │   utils.js
│   │   │       │   validation-result.d.ts
│   │   │       │   validation-result.js
│   │   │       │
│   │   │       ├───chain
│   │   │       │       context-handler-impl.d.ts
│   │   │       │       context-handler-impl.js
│   │   │       │       context-handler.d.ts
│   │   │       │       context-handler.js
│   │   │       │       context-runner-impl.d.ts
│   │   │       │       context-runner-impl.js
│   │   │       │       context-runner.d.ts
│   │   │       │       context-runner.js
│   │   │       │       index.d.ts
│   │   │       │       index.js
│   │   │       │       sanitizers-impl.d.ts
│   │   │       │       sanitizers-impl.js
│   │   │       │       sanitizers.d.ts
│   │   │       │       sanitizers.js
│   │   │       │       validation-chain.d.ts
│   │   │       │       validation-chain.js
│   │   │       │       validators-impl.d.ts
│   │   │       │       validators-impl.js
│   │   │       │       validators.d.ts
│   │   │       │       validators.js
│   │   │       │
│   │   │       ├───context-items
│   │   │       │       bail.d.ts
│   │   │       │       bail.js
│   │   │       │       chain-condition.d.ts
│   │   │       │       chain-condition.js
│   │   │       │       context-item.d.ts
│   │   │       │       context-item.js
│   │   │       │       custom-condition.d.ts
│   │   │       │       custom-condition.js
│   │   │       │       custom-validation.d.ts
│   │   │       │       custom-validation.js
│   │   │       │       index.d.ts
│   │   │       │       index.js
│   │   │       │       sanitization.d.ts
│   │   │       │       sanitization.js
│   │   │       │       standard-validation.d.ts
│   │   │       │       standard-validation.js
│   │   │       │
│   │   │       └───middlewares
│   │   │               check.d.ts
│   │   │               check.js
│   │   │               exact.d.ts
│   │   │               exact.js
│   │   │               one-of.d.ts
│   │   │               one-of.js
│   │   │               schema.d.ts
│   │   │               schema.js
│   │   │               validation-chain-builders.d.ts
│   │   │               validation-chain-builders.js
│   │   │
│   │   ├───fill-range
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───finalhandler
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───forwarded
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───fresh
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───function-bind
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   implementation.js
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │       SECURITY.md
│   │   │   │
│   │   │   └───test
│   │   │           .eslintrc
│   │   │           index.js
│   │   │
│   │   ├───get-intrinsic
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           GetIntrinsic.js
│   │   │
│   │   ├───get-proto
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   Object.getPrototypeOf.d.ts
│   │   │   │   Object.getPrototypeOf.js
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   Reflect.getPrototypeOf.d.ts
│   │   │   │   Reflect.getPrototypeOf.js
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───glob-parent
│   │   │       CHANGELOG.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───gopd
│   │   │   │   .eslintrc
│   │   │   │   CHANGELOG.md
│   │   │   │   gOPD.d.ts
│   │   │   │   gOPD.js
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───has-flag
│   │   │       index.js
│   │   │       license
│   │   │       package.json
│   │   │       readme.md
│   │   │
│   │   ├───has-symbols
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   shams.d.ts
│   │   │   │   shams.js
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │       │   index.js
│   │   │       │   tests.js
│   │   │       │
│   │   │       └───shams
│   │   │               core-js.js
│   │   │               get-own-property-symbols.js
│   │   │
│   │   ├───hasown
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   └───.github
│   │   │           FUNDING.yml
│   │   │
│   │   ├───http-errors
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───iconv-lite
│   │   │   │   Changelog.md
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───encodings
│   │   │   │   │   dbcs-codec.js
│   │   │   │   │   dbcs-data.js
│   │   │   │   │   index.js
│   │   │   │   │   internal.js
│   │   │   │   │   sbcs-codec.js
│   │   │   │   │   sbcs-data-generated.js
│   │   │   │   │   sbcs-data.js
│   │   │   │   │   utf16.js
│   │   │   │   │   utf32.js
│   │   │   │   │   utf7.js
│   │   │   │   │
│   │   │   │   └───tables
│   │   │   │           big5-added.json
│   │   │   │           cp936.json
│   │   │   │           cp949.json
│   │   │   │           cp950.json
│   │   │   │           eucjp.json
│   │   │   │           gb18030-ranges.json
│   │   │   │           gbk-added.json
│   │   │   │           shiftjis.json
│   │   │   │
│   │   │   └───lib
│   │   │       │   bom-handling.js
│   │   │       │   index.d.ts
│   │   │       │   index.js
│   │   │       │   streams.js
│   │   │       │
│   │   │       └───helpers
│   │   │               merge-exports.js
│   │   │
│   │   ├───ignore-by-default
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───inherits
│   │   │       inherits.js
│   │   │       inherits_browser.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───ipaddr.js
│   │   │   │   ipaddr.min.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           ipaddr.js
│   │   │           ipaddr.js.d.ts
│   │   │
│   │   ├───is-binary-path
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       license
│   │   │       package.json
│   │   │       readme.md
│   │   │
│   │   ├───is-extglob
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───is-glob
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───is-number
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───is-promise
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       index.mjs
│   │   │       LICENSE
│   │   │       package.json
│   │   │       readme.md
│   │   │
│   │   ├───joi
│   │   │   │   LICENSE.md
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───dist
│   │   │   │       joi-browser.min.js
│   │   │   │
│   │   │   └───lib
│   │   │       │   annotate.js
│   │   │       │   base.js
│   │   │       │   cache.js
│   │   │       │   common.js
│   │   │       │   compile.js
│   │   │       │   errors.js
│   │   │       │   extend.js
│   │   │       │   index.d.ts
│   │   │       │   index.js
│   │   │       │   manifest.js
│   │   │       │   messages.js
│   │   │       │   modify.js
│   │   │       │   ref.js
│   │   │       │   schemas.js
│   │   │       │   state.js
│   │   │       │   template.js
│   │   │       │   trace.js
│   │   │       │   validator.js
│   │   │       │   values.js
│   │   │       │
│   │   │       └───types
│   │   │               alternatives.js
│   │   │               any.js
│   │   │               array.js
│   │   │               binary.js
│   │   │               boolean.js
│   │   │               date.js
│   │   │               function.js
│   │   │               keys.js
│   │   │               link.js
│   │   │               number.js
│   │   │               object.js
│   │   │               string.js
│   │   │               symbol.js
│   │   │
│   │   ├───jsonwebtoken
│   │   │   │   decode.js
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   sign.js
│   │   │   │   verify.js
│   │   │   │
│   │   │   └───lib
│   │   │           asymmetricKeyDetailsSupported.js
│   │   │           JsonWebTokenError.js
│   │   │           NotBeforeError.js
│   │   │           psSupported.js
│   │   │           rsaPssKeyDetailsSupported.js
│   │   │           timespan.js
│   │   │           TokenExpiredError.js
│   │   │           validateAsymmetricKey.js
│   │   │
│   │   ├───jwa
│   │   │       index.js
│   │   │       LICENSE
│   │   │       opslevel.yml
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───jws
│   │   │   │   CHANGELOG.md
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   opslevel.yml
│   │   │   │   package.json
│   │   │   │   readme.md
│   │   │   │
│   │   │   └───lib
│   │   │           data-stream.js
│   │   │           sign-stream.js
│   │   │           tostring.js
│   │   │           verify-stream.js
│   │   │
│   │   ├───kareem
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   SECURITY.md
│   │   │   │
│   │   │   ├───.nyc_output
│   │   │   │   │   fa57d6c4-9e78-4624-9229-f77b87a07481.json
│   │   │   │   │
│   │   │   │   └───processinfo
│   │   │   │           fa57d6c4-9e78-4624-9229-f77b87a07481.json
│   │   │   │           index.json
│   │   │   │
│   │   │   └───coverage
│   │   │       │   lcov.info
│   │   │       │
│   │   │       └───lcov-report
│   │   │               base.css
│   │   │               block-navigation.js
│   │   │               favicon.png
│   │   │               index.html
│   │   │               index.js.html
│   │   │               prettify.css
│   │   │               prettify.js
│   │   │               sort-arrow-sprite.png
│   │   │               sorter.js
│   │   │
│   │   ├───lodash
│   │   │   │   add.js
│   │   │   │   after.js
│   │   │   │   array.js
│   │   │   │   ary.js
│   │   │   │   assign.js
│   │   │   │   assignIn.js
│   │   │   │   assignInWith.js
│   │   │   │   assignWith.js
│   │   │   │   at.js
│   │   │   │   attempt.js
│   │   │   │   before.js
│   │   │   │   bind.js
│   │   │   │   bindAll.js
│   │   │   │   bindKey.js
│   │   │   │   camelCase.js
│   │   │   │   capitalize.js
│   │   │   │   castArray.js
│   │   │   │   ceil.js
│   │   │   │   chain.js
│   │   │   │   chunk.js
│   │   │   │   clamp.js
│   │   │   │   clone.js
│   │   │   │   cloneDeep.js
│   │   │   │   cloneDeepWith.js
│   │   │   │   cloneWith.js
│   │   │   │   collection.js
│   │   │   │   commit.js
│   │   │   │   compact.js
│   │   │   │   concat.js
│   │   │   │   cond.js
│   │   │   │   conforms.js
│   │   │   │   conformsTo.js
│   │   │   │   constant.js
│   │   │   │   core.js
│   │   │   │   core.min.js
│   │   │   │   countBy.js
│   │   │   │   create.js
│   │   │   │   curry.js
│   │   │   │   curryRight.js
│   │   │   │   date.js
│   │   │   │   debounce.js
│   │   │   │   deburr.js
│   │   │   │   defaults.js
│   │   │   │   defaultsDeep.js
│   │   │   │   defaultTo.js
│   │   │   │   defer.js
│   │   │   │   delay.js
│   │   │   │   difference.js
│   │   │   │   differenceBy.js
│   │   │   │   differenceWith.js
│   │   │   │   divide.js
│   │   │   │   drop.js
│   │   │   │   dropRight.js
│   │   │   │   dropRightWhile.js
│   │   │   │   dropWhile.js
│   │   │   │   each.js
│   │   │   │   eachRight.js
│   │   │   │   endsWith.js
│   │   │   │   entries.js
│   │   │   │   entriesIn.js
│   │   │   │   eq.js
│   │   │   │   escape.js
│   │   │   │   escapeRegExp.js
│   │   │   │   every.js
│   │   │   │   extend.js
│   │   │   │   extendWith.js
│   │   │   │   fill.js
│   │   │   │   filter.js
│   │   │   │   find.js
│   │   │   │   findIndex.js
│   │   │   │   findKey.js
│   │   │   │   findLast.js
│   │   │   │   findLastIndex.js
│   │   │   │   findLastKey.js
│   │   │   │   first.js
│   │   │   │   flake.lock
│   │   │   │   flake.nix
│   │   │   │   flatMap.js
│   │   │   │   flatMapDeep.js
│   │   │   │   flatMapDepth.js
│   │   │   │   flatten.js
│   │   │   │   flattenDeep.js
│   │   │   │   flattenDepth.js
│   │   │   │   flip.js
│   │   │   │   floor.js
│   │   │   │   flow.js
│   │   │   │   flowRight.js
│   │   │   │   forEach.js
│   │   │   │   forEachRight.js
│   │   │   │   forIn.js
│   │   │   │   forInRight.js
│   │   │   │   forOwn.js
│   │   │   │   forOwnRight.js
│   │   │   │   fp.js
│   │   │   │   fromPairs.js
│   │   │   │   function.js
│   │   │   │   functions.js
│   │   │   │   functionsIn.js
│   │   │   │   get.js
│   │   │   │   groupBy.js
│   │   │   │   gt.js
│   │   │   │   gte.js
│   │   │   │   has.js
│   │   │   │   hasIn.js
│   │   │   │   head.js
│   │   │   │   identity.js
│   │   │   │   includes.js
│   │   │   │   index.js
│   │   │   │   indexOf.js
│   │   │   │   initial.js
│   │   │   │   inRange.js
│   │   │   │   intersection.js
│   │   │   │   intersectionBy.js
│   │   │   │   intersectionWith.js
│   │   │   │   invert.js
│   │   │   │   invertBy.js
│   │   │   │   invoke.js
│   │   │   │   invokeMap.js
│   │   │   │   isArguments.js
│   │   │   │   isArray.js
│   │   │   │   isArrayBuffer.js
│   │   │   │   isArrayLike.js
│   │   │   │   isArrayLikeObject.js
│   │   │   │   isBoolean.js
│   │   │   │   isBuffer.js
│   │   │   │   isDate.js
│   │   │   │   isElement.js
│   │   │   │   isEmpty.js
│   │   │   │   isEqual.js
│   │   │   │   isEqualWith.js
│   │   │   │   isError.js
│   │   │   │   isFinite.js
│   │   │   │   isFunction.js
│   │   │   │   isInteger.js
│   │   │   │   isLength.js
│   │   │   │   isMap.js
│   │   │   │   isMatch.js
│   │   │   │   isMatchWith.js
│   │   │   │   isNaN.js
│   │   │   │   isNative.js
│   │   │   │   isNil.js
│   │   │   │   isNull.js
│   │   │   │   isNumber.js
│   │   │   │   isObject.js
│   │   │   │   isObjectLike.js
│   │   │   │   isPlainObject.js
│   │   │   │   isRegExp.js
│   │   │   │   isSafeInteger.js
│   │   │   │   isSet.js
│   │   │   │   isString.js
│   │   │   │   isSymbol.js
│   │   │   │   isTypedArray.js
│   │   │   │   isUndefined.js
│   │   │   │   isWeakMap.js
│   │   │   │   isWeakSet.js
│   │   │   │   iteratee.js
│   │   │   │   join.js
│   │   │   │   kebabCase.js
│   │   │   │   keyBy.js
│   │   │   │   keys.js
│   │   │   │   keysIn.js
│   │   │   │   lang.js
│   │   │   │   last.js
│   │   │   │   lastIndexOf.js
│   │   │   │   LICENSE
│   │   │   │   lodash.js
│   │   │   │   lodash.min.js
│   │   │   │   lowerCase.js
│   │   │   │   lowerFirst.js
│   │   │   │   lt.js
│   │   │   │   lte.js
│   │   │   │   map.js
│   │   │   │   mapKeys.js
│   │   │   │   mapValues.js
│   │   │   │   matches.js
│   │   │   │   matchesProperty.js
│   │   │   │   math.js
│   │   │   │   max.js
│   │   │   │   maxBy.js
│   │   │   │   mean.js
│   │   │   │   meanBy.js
│   │   │   │   memoize.js
│   │   │   │   merge.js
│   │   │   │   mergeWith.js
│   │   │   │   method.js
│   │   │   │   methodOf.js
│   │   │   │   min.js
│   │   │   │   minBy.js
│   │   │   │   mixin.js
│   │   │   │   multiply.js
│   │   │   │   negate.js
│   │   │   │   next.js
│   │   │   │   noop.js
│   │   │   │   now.js
│   │   │   │   nth.js
│   │   │   │   nthArg.js
│   │   │   │   number.js
│   │   │   │   object.js
│   │   │   │   omit.js
│   │   │   │   omitBy.js
│   │   │   │   once.js
│   │   │   │   orderBy.js
│   │   │   │   over.js
│   │   │   │   overArgs.js
│   │   │   │   overEvery.js
│   │   │   │   overSome.js
│   │   │   │   package.json
│   │   │   │   pad.js
│   │   │   │   padEnd.js
│   │   │   │   padStart.js
│   │   │   │   parseInt.js
│   │   │   │   partial.js
│   │   │   │   partialRight.js
│   │   │   │   partition.js
│   │   │   │   pick.js
│   │   │   │   pickBy.js
│   │   │   │   plant.js
│   │   │   │   property.js
│   │   │   │   propertyOf.js
│   │   │   │   pull.js
│   │   │   │   pullAll.js
│   │   │   │   pullAllBy.js
│   │   │   │   pullAllWith.js
│   │   │   │   pullAt.js
│   │   │   │   random.js
│   │   │   │   range.js
│   │   │   │   rangeRight.js
│   │   │   │   README.md
│   │   │   │   rearg.js
│   │   │   │   reduce.js
│   │   │   │   reduceRight.js
│   │   │   │   reject.js
│   │   │   │   release.md
│   │   │   │   remove.js
│   │   │   │   repeat.js
│   │   │   │   replace.js
│   │   │   │   rest.js
│   │   │   │   result.js
│   │   │   │   reverse.js
│   │   │   │   round.js
│   │   │   │   sample.js
│   │   │   │   sampleSize.js
│   │   │   │   seq.js
│   │   │   │   set.js
│   │   │   │   setWith.js
│   │   │   │   shuffle.js
│   │   │   │   size.js
│   │   │   │   slice.js
│   │   │   │   snakeCase.js
│   │   │   │   some.js
│   │   │   │   sortBy.js
│   │   │   │   sortedIndex.js
│   │   │   │   sortedIndexBy.js
│   │   │   │   sortedIndexOf.js
│   │   │   │   sortedLastIndex.js
│   │   │   │   sortedLastIndexBy.js
│   │   │   │   sortedLastIndexOf.js
│   │   │   │   sortedUniq.js
│   │   │   │   sortedUniqBy.js
│   │   │   │   split.js
│   │   │   │   spread.js
│   │   │   │   startCase.js
│   │   │   │   startsWith.js
│   │   │   │   string.js
│   │   │   │   stubArray.js
│   │   │   │   stubFalse.js
│   │   │   │   stubObject.js
│   │   │   │   stubString.js
│   │   │   │   stubTrue.js
│   │   │   │   subtract.js
│   │   │   │   sum.js
│   │   │   │   sumBy.js
│   │   │   │   tail.js
│   │   │   │   take.js
│   │   │   │   takeRight.js
│   │   │   │   takeRightWhile.js
│   │   │   │   takeWhile.js
│   │   │   │   tap.js
│   │   │   │   template.js
│   │   │   │   templateSettings.js
│   │   │   │   throttle.js
│   │   │   │   thru.js
│   │   │   │   times.js
│   │   │   │   toArray.js
│   │   │   │   toFinite.js
│   │   │   │   toInteger.js
│   │   │   │   toIterator.js
│   │   │   │   toJSON.js
│   │   │   │   toLength.js
│   │   │   │   toLower.js
│   │   │   │   toNumber.js
│   │   │   │   toPairs.js
│   │   │   │   toPairsIn.js
│   │   │   │   toPath.js
│   │   │   │   toPlainObject.js
│   │   │   │   toSafeInteger.js
│   │   │   │   toString.js
│   │   │   │   toUpper.js
│   │   │   │   transform.js
│   │   │   │   trim.js
│   │   │   │   trimEnd.js
│   │   │   │   trimStart.js
│   │   │   │   truncate.js
│   │   │   │   unary.js
│   │   │   │   unescape.js
│   │   │   │   union.js
│   │   │   │   unionBy.js
│   │   │   │   unionWith.js
│   │   │   │   uniq.js
│   │   │   │   uniqBy.js
│   │   │   │   uniqueId.js
│   │   │   │   uniqWith.js
│   │   │   │   unset.js
│   │   │   │   unzip.js
│   │   │   │   unzipWith.js
│   │   │   │   update.js
│   │   │   │   updateWith.js
│   │   │   │   upperCase.js
│   │   │   │   upperFirst.js
│   │   │   │   util.js
│   │   │   │   value.js
│   │   │   │   valueOf.js
│   │   │   │   values.js
│   │   │   │   valuesIn.js
│   │   │   │   without.js
│   │   │   │   words.js
│   │   │   │   wrap.js
│   │   │   │   wrapperAt.js
│   │   │   │   wrapperChain.js
│   │   │   │   wrapperLodash.js
│   │   │   │   wrapperReverse.js
│   │   │   │   wrapperValue.js
│   │   │   │   xor.js
│   │   │   │   xorBy.js
│   │   │   │   xorWith.js
│   │   │   │   zip.js
│   │   │   │   zipObject.js
│   │   │   │   zipObjectDeep.js
│   │   │   │   zipWith.js
│   │   │   │   _apply.js
│   │   │   │   _arrayAggregator.js
│   │   │   │   _arrayEach.js
│   │   │   │   _arrayEachRight.js
│   │   │   │   _arrayEvery.js
│   │   │   │   _arrayFilter.js
│   │   │   │   _arrayIncludes.js
│   │   │   │   _arrayIncludesWith.js
│   │   │   │   _arrayLikeKeys.js
│   │   │   │   _arrayMap.js
│   │   │   │   _arrayPush.js
│   │   │   │   _arrayReduce.js
│   │   │   │   _arrayReduceRight.js
│   │   │   │   _arraySample.js
│   │   │   │   _arraySampleSize.js
│   │   │   │   _arrayShuffle.js
│   │   │   │   _arraySome.js
│   │   │   │   _asciiSize.js
│   │   │   │   _asciiToArray.js
│   │   │   │   _asciiWords.js
│   │   │   │   _assignMergeValue.js
│   │   │   │   _assignValue.js
│   │   │   │   _assocIndexOf.js
│   │   │   │   _baseAggregator.js
│   │   │   │   _baseAssign.js
│   │   │   │   _baseAssignIn.js
│   │   │   │   _baseAssignValue.js
│   │   │   │   _baseAt.js
│   │   │   │   _baseClamp.js
│   │   │   │   _baseClone.js
│   │   │   │   _baseConforms.js
│   │   │   │   _baseConformsTo.js
│   │   │   │   _baseCreate.js
│   │   │   │   _baseDelay.js
│   │   │   │   _baseDifference.js
│   │   │   │   _baseEach.js
│   │   │   │   _baseEachRight.js
│   │   │   │   _baseEvery.js
│   │   │   │   _baseExtremum.js
│   │   │   │   _baseFill.js
│   │   │   │   _baseFilter.js
│   │   │   │   _baseFindIndex.js
│   │   │   │   _baseFindKey.js
│   │   │   │   _baseFlatten.js
│   │   │   │   _baseFor.js
│   │   │   │   _baseForOwn.js
│   │   │   │   _baseForOwnRight.js
│   │   │   │   _baseForRight.js
│   │   │   │   _baseFunctions.js
│   │   │   │   _baseGet.js
│   │   │   │   _baseGetAllKeys.js
│   │   │   │   _baseGetTag.js
│   │   │   │   _baseGt.js
│   │   │   │   _baseHas.js
│   │   │   │   _baseHasIn.js
│   │   │   │   _baseIndexOf.js
│   │   │   │   _baseIndexOfWith.js
│   │   │   │   _baseInRange.js
│   │   │   │   _baseIntersection.js
│   │   │   │   _baseInverter.js
│   │   │   │   _baseInvoke.js
│   │   │   │   _baseIsArguments.js
│   │   │   │   _baseIsArrayBuffer.js
│   │   │   │   _baseIsDate.js
│   │   │   │   _baseIsEqual.js
│   │   │   │   _baseIsEqualDeep.js
│   │   │   │   _baseIsMap.js
│   │   │   │   _baseIsMatch.js
│   │   │   │   _baseIsNaN.js
│   │   │   │   _baseIsNative.js
│   │   │   │   _baseIsRegExp.js
│   │   │   │   _baseIsSet.js
│   │   │   │   _baseIsTypedArray.js
│   │   │   │   _baseIteratee.js
│   │   │   │   _baseKeys.js
│   │   │   │   _baseKeysIn.js
│   │   │   │   _baseLodash.js
│   │   │   │   _baseLt.js
│   │   │   │   _baseMap.js
│   │   │   │   _baseMatches.js
│   │   │   │   _baseMatchesProperty.js
│   │   │   │   _baseMean.js
│   │   │   │   _baseMerge.js
│   │   │   │   _baseMergeDeep.js
│   │   │   │   _baseNth.js
│   │   │   │   _baseOrderBy.js
│   │   │   │   _basePick.js
│   │   │   │   _basePickBy.js
│   │   │   │   _baseProperty.js
│   │   │   │   _basePropertyDeep.js
│   │   │   │   _basePropertyOf.js
│   │   │   │   _basePullAll.js
│   │   │   │   _basePullAt.js
│   │   │   │   _baseRandom.js
│   │   │   │   _baseRange.js
│   │   │   │   _baseReduce.js
│   │   │   │   _baseRepeat.js
│   │   │   │   _baseRest.js
│   │   │   │   _baseSample.js
│   │   │   │   _baseSampleSize.js
│   │   │   │   _baseSet.js
│   │   │   │   _baseSetData.js
│   │   │   │   _baseSetToString.js
│   │   │   │   _baseShuffle.js
│   │   │   │   _baseSlice.js
│   │   │   │   _baseSome.js
│   │   │   │   _baseSortBy.js
│   │   │   │   _baseSortedIndex.js
│   │   │   │   _baseSortedIndexBy.js
│   │   │   │   _baseSortedUniq.js
│   │   │   │   _baseSum.js
│   │   │   │   _baseTimes.js
│   │   │   │   _baseToNumber.js
│   │   │   │   _baseToPairs.js
│   │   │   │   _baseToString.js
│   │   │   │   _baseTrim.js
│   │   │   │   _baseUnary.js
│   │   │   │   _baseUniq.js
│   │   │   │   _baseUnset.js
│   │   │   │   _baseUpdate.js
│   │   │   │   _baseValues.js
│   │   │   │   _baseWhile.js
│   │   │   │   _baseWrapperValue.js
│   │   │   │   _baseXor.js
│   │   │   │   _baseZipObject.js
│   │   │   │   _cacheHas.js
│   │   │   │   _castArrayLikeObject.js
│   │   │   │   _castFunction.js
│   │   │   │   _castPath.js
│   │   │   │   _castRest.js
│   │   │   │   _castSlice.js
│   │   │   │   _charsEndIndex.js
│   │   │   │   _charsStartIndex.js
│   │   │   │   _cloneArrayBuffer.js
│   │   │   │   _cloneBuffer.js
│   │   │   │   _cloneDataView.js
│   │   │   │   _cloneRegExp.js
│   │   │   │   _cloneSymbol.js
│   │   │   │   _cloneTypedArray.js
│   │   │   │   _compareAscending.js
│   │   │   │   _compareMultiple.js
│   │   │   │   _composeArgs.js
│   │   │   │   _composeArgsRight.js
│   │   │   │   _copyArray.js
│   │   │   │   _copyObject.js
│   │   │   │   _copySymbols.js
│   │   │   │   _copySymbolsIn.js
│   │   │   │   _coreJsData.js
│   │   │   │   _countHolders.js
│   │   │   │   _createAggregator.js
│   │   │   │   _createAssigner.js
│   │   │   │   _createBaseEach.js
│   │   │   │   _createBaseFor.js
│   │   │   │   _createBind.js
│   │   │   │   _createCaseFirst.js
│   │   │   │   _createCompounder.js
│   │   │   │   _createCtor.js
│   │   │   │   _createCurry.js
│   │   │   │   _createFind.js
│   │   │   │   _createFlow.js
│   │   │   │   _createHybrid.js
│   │   │   │   _createInverter.js
│   │   │   │   _createMathOperation.js
│   │   │   │   _createOver.js
│   │   │   │   _createPadding.js
│   │   │   │   _createPartial.js
│   │   │   │   _createRange.js
│   │   │   │   _createRecurry.js
│   │   │   │   _createRelationalOperation.js
│   │   │   │   _createRound.js
│   │   │   │   _createSet.js
│   │   │   │   _createToPairs.js
│   │   │   │   _createWrap.js
│   │   │   │   _customDefaultsAssignIn.js
│   │   │   │   _customDefaultsMerge.js
│   │   │   │   _customOmitClone.js
│   │   │   │   _DataView.js
│   │   │   │   _deburrLetter.js
│   │   │   │   _defineProperty.js
│   │   │   │   _equalArrays.js
│   │   │   │   _equalByTag.js
│   │   │   │   _equalObjects.js
│   │   │   │   _escapeHtmlChar.js
│   │   │   │   _escapeStringChar.js
│   │   │   │   _flatRest.js
│   │   │   │   _freeGlobal.js
│   │   │   │   _getAllKeys.js
│   │   │   │   _getAllKeysIn.js
│   │   │   │   _getData.js
│   │   │   │   _getFuncName.js
│   │   │   │   _getHolder.js
│   │   │   │   _getMapData.js
│   │   │   │   _getMatchData.js
│   │   │   │   _getNative.js
│   │   │   │   _getPrototype.js
│   │   │   │   _getRawTag.js
│   │   │   │   _getSymbols.js
│   │   │   │   _getSymbolsIn.js
│   │   │   │   _getTag.js
│   │   │   │   _getValue.js
│   │   │   │   _getView.js
│   │   │   │   _getWrapDetails.js
│   │   │   │   _Hash.js
│   │   │   │   _hashClear.js
│   │   │   │   _hashDelete.js
│   │   │   │   _hashGet.js
│   │   │   │   _hashHas.js
│   │   │   │   _hashSet.js
│   │   │   │   _hasPath.js
│   │   │   │   _hasUnicode.js
│   │   │   │   _hasUnicodeWord.js
│   │   │   │   _initCloneArray.js
│   │   │   │   _initCloneByTag.js
│   │   │   │   _initCloneObject.js
│   │   │   │   _insertWrapDetails.js
│   │   │   │   _isFlattenable.js
│   │   │   │   _isIndex.js
│   │   │   │   _isIterateeCall.js
│   │   │   │   _isKey.js
│   │   │   │   _isKeyable.js
│   │   │   │   _isLaziable.js
│   │   │   │   _isMaskable.js
│   │   │   │   _isMasked.js
│   │   │   │   _isPrototype.js
│   │   │   │   _isStrictComparable.js
│   │   │   │   _iteratorToArray.js
│   │   │   │   _lazyClone.js
│   │   │   │   _lazyReverse.js
│   │   │   │   _lazyValue.js
│   │   │   │   _LazyWrapper.js
│   │   │   │   _ListCache.js
│   │   │   │   _listCacheClear.js
│   │   │   │   _listCacheDelete.js
│   │   │   │   _listCacheGet.js
│   │   │   │   _listCacheHas.js
│   │   │   │   _listCacheSet.js
│   │   │   │   _LodashWrapper.js
│   │   │   │   _Map.js
│   │   │   │   _MapCache.js
│   │   │   │   _mapCacheClear.js
│   │   │   │   _mapCacheDelete.js
│   │   │   │   _mapCacheGet.js
│   │   │   │   _mapCacheHas.js
│   │   │   │   _mapCacheSet.js
│   │   │   │   _mapToArray.js
│   │   │   │   _matchesStrictComparable.js
│   │   │   │   _memoizeCapped.js
│   │   │   │   _mergeData.js
│   │   │   │   _metaMap.js
│   │   │   │   _nativeCreate.js
│   │   │   │   _nativeKeys.js
│   │   │   │   _nativeKeysIn.js
│   │   │   │   _nodeUtil.js
│   │   │   │   _objectToString.js
│   │   │   │   _overArg.js
│   │   │   │   _overRest.js
│   │   │   │   _parent.js
│   │   │   │   _Promise.js
│   │   │   │   _realNames.js
│   │   │   │   _reEscape.js
│   │   │   │   _reEvaluate.js
│   │   │   │   _reInterpolate.js
│   │   │   │   _reorder.js
│   │   │   │   _replaceHolders.js
│   │   │   │   _root.js
│   │   │   │   _safeGet.js
│   │   │   │   _Set.js
│   │   │   │   _SetCache.js
│   │   │   │   _setCacheAdd.js
│   │   │   │   _setCacheHas.js
│   │   │   │   _setData.js
│   │   │   │   _setToArray.js
│   │   │   │   _setToPairs.js
│   │   │   │   _setToString.js
│   │   │   │   _setWrapToString.js
│   │   │   │   _shortOut.js
│   │   │   │   _shuffleSelf.js
│   │   │   │   _Stack.js
│   │   │   │   _stackClear.js
│   │   │   │   _stackDelete.js
│   │   │   │   _stackGet.js
│   │   │   │   _stackHas.js
│   │   │   │   _stackSet.js
│   │   │   │   _strictIndexOf.js
│   │   │   │   _strictLastIndexOf.js
│   │   │   │   _stringSize.js
│   │   │   │   _stringToArray.js
│   │   │   │   _stringToPath.js
│   │   │   │   _Symbol.js
│   │   │   │   _toKey.js
│   │   │   │   _toSource.js
│   │   │   │   _trimmedEndIndex.js
│   │   │   │   _Uint8Array.js
│   │   │   │   _unescapeHtmlChar.js
│   │   │   │   _unicodeSize.js
│   │   │   │   _unicodeToArray.js
│   │   │   │   _unicodeWords.js
│   │   │   │   _updateWrapDetails.js
│   │   │   │   _WeakMap.js
│   │   │   │   _wrapperClone.js
│   │   │   │
│   │   │   └───fp
│   │   │           add.js
│   │   │           after.js
│   │   │           all.js
│   │   │           allPass.js
│   │   │           always.js
│   │   │           any.js
│   │   │           anyPass.js
│   │   │           apply.js
│   │   │           array.js
│   │   │           ary.js
│   │   │           assign.js
│   │   │           assignAll.js
│   │   │           assignAllWith.js
│   │   │           assignIn.js
│   │   │           assignInAll.js
│   │   │           assignInAllWith.js
│   │   │           assignInWith.js
│   │   │           assignWith.js
│   │   │           assoc.js
│   │   │           assocPath.js
│   │   │           at.js
│   │   │           attempt.js
│   │   │           before.js
│   │   │           bind.js
│   │   │           bindAll.js
│   │   │           bindKey.js
│   │   │           camelCase.js
│   │   │           capitalize.js
│   │   │           castArray.js
│   │   │           ceil.js
│   │   │           chain.js
│   │   │           chunk.js
│   │   │           clamp.js
│   │   │           clone.js
│   │   │           cloneDeep.js
│   │   │           cloneDeepWith.js
│   │   │           cloneWith.js
│   │   │           collection.js
│   │   │           commit.js
│   │   │           compact.js
│   │   │           complement.js
│   │   │           compose.js
│   │   │           concat.js
│   │   │           cond.js
│   │   │           conforms.js
│   │   │           conformsTo.js
│   │   │           constant.js
│   │   │           contains.js
│   │   │           convert.js
│   │   │           countBy.js
│   │   │           create.js
│   │   │           curry.js
│   │   │           curryN.js
│   │   │           curryRight.js
│   │   │           curryRightN.js
│   │   │           date.js
│   │   │           debounce.js
│   │   │           deburr.js
│   │   │           defaults.js
│   │   │           defaultsAll.js
│   │   │           defaultsDeep.js
│   │   │           defaultsDeepAll.js
│   │   │           defaultTo.js
│   │   │           defer.js
│   │   │           delay.js
│   │   │           difference.js
│   │   │           differenceBy.js
│   │   │           differenceWith.js
│   │   │           dissoc.js
│   │   │           dissocPath.js
│   │   │           divide.js
│   │   │           drop.js
│   │   │           dropLast.js
│   │   │           dropLastWhile.js
│   │   │           dropRight.js
│   │   │           dropRightWhile.js
│   │   │           dropWhile.js
│   │   │           each.js
│   │   │           eachRight.js
│   │   │           endsWith.js
│   │   │           entries.js
│   │   │           entriesIn.js
│   │   │           eq.js
│   │   │           equals.js
│   │   │           escape.js
│   │   │           escapeRegExp.js
│   │   │           every.js
│   │   │           extend.js
│   │   │           extendAll.js
│   │   │           extendAllWith.js
│   │   │           extendWith.js
│   │   │           F.js
│   │   │           fill.js
│   │   │           filter.js
│   │   │           find.js
│   │   │           findFrom.js
│   │   │           findIndex.js
│   │   │           findIndexFrom.js
│   │   │           findKey.js
│   │   │           findLast.js
│   │   │           findLastFrom.js
│   │   │           findLastIndex.js
│   │   │           findLastIndexFrom.js
│   │   │           findLastKey.js
│   │   │           first.js
│   │   │           flatMap.js
│   │   │           flatMapDeep.js
│   │   │           flatMapDepth.js
│   │   │           flatten.js
│   │   │           flattenDeep.js
│   │   │           flattenDepth.js
│   │   │           flip.js
│   │   │           floor.js
│   │   │           flow.js
│   │   │           flowRight.js
│   │   │           forEach.js
│   │   │           forEachRight.js
│   │   │           forIn.js
│   │   │           forInRight.js
│   │   │           forOwn.js
│   │   │           forOwnRight.js
│   │   │           fromPairs.js
│   │   │           function.js
│   │   │           functions.js
│   │   │           functionsIn.js
│   │   │           get.js
│   │   │           getOr.js
│   │   │           groupBy.js
│   │   │           gt.js
│   │   │           gte.js
│   │   │           has.js
│   │   │           hasIn.js
│   │   │           head.js
│   │   │           identical.js
│   │   │           identity.js
│   │   │           includes.js
│   │   │           includesFrom.js
│   │   │           indexBy.js
│   │   │           indexOf.js
│   │   │           indexOfFrom.js
│   │   │           init.js
│   │   │           initial.js
│   │   │           inRange.js
│   │   │           intersection.js
│   │   │           intersectionBy.js
│   │   │           intersectionWith.js
│   │   │           invert.js
│   │   │           invertBy.js
│   │   │           invertObj.js
│   │   │           invoke.js
│   │   │           invokeArgs.js
│   │   │           invokeArgsMap.js
│   │   │           invokeMap.js
│   │   │           isArguments.js
│   │   │           isArray.js
│   │   │           isArrayBuffer.js
│   │   │           isArrayLike.js
│   │   │           isArrayLikeObject.js
│   │   │           isBoolean.js
│   │   │           isBuffer.js
│   │   │           isDate.js
│   │   │           isElement.js
│   │   │           isEmpty.js
│   │   │           isEqual.js
│   │   │           isEqualWith.js
│   │   │           isError.js
│   │   │           isFinite.js
│   │   │           isFunction.js
│   │   │           isInteger.js
│   │   │           isLength.js
│   │   │           isMap.js
│   │   │           isMatch.js
│   │   │           isMatchWith.js
│   │   │           isNaN.js
│   │   │           isNative.js
│   │   │           isNil.js
│   │   │           isNull.js
│   │   │           isNumber.js
│   │   │           isObject.js
│   │   │           isObjectLike.js
│   │   │           isPlainObject.js
│   │   │           isRegExp.js
│   │   │           isSafeInteger.js
│   │   │           isSet.js
│   │   │           isString.js
│   │   │           isSymbol.js
│   │   │           isTypedArray.js
│   │   │           isUndefined.js
│   │   │           isWeakMap.js
│   │   │           isWeakSet.js
│   │   │           iteratee.js
│   │   │           join.js
│   │   │           juxt.js
│   │   │           kebabCase.js
│   │   │           keyBy.js
│   │   │           keys.js
│   │   │           keysIn.js
│   │   │           lang.js
│   │   │           last.js
│   │   │           lastIndexOf.js
│   │   │           lastIndexOfFrom.js
│   │   │           lowerCase.js
│   │   │           lowerFirst.js
│   │   │           lt.js
│   │   │           lte.js
│   │   │           map.js
│   │   │           mapKeys.js
│   │   │           mapValues.js
│   │   │           matches.js
│   │   │           matchesProperty.js
│   │   │           math.js
│   │   │           max.js
│   │   │           maxBy.js
│   │   │           mean.js
│   │   │           meanBy.js
│   │   │           memoize.js
│   │   │           merge.js
│   │   │           mergeAll.js
│   │   │           mergeAllWith.js
│   │   │           mergeWith.js
│   │   │           method.js
│   │   │           methodOf.js
│   │   │           min.js
│   │   │           minBy.js
│   │   │           mixin.js
│   │   │           multiply.js
│   │   │           nAry.js
│   │   │           negate.js
│   │   │           next.js
│   │   │           noop.js
│   │   │           now.js
│   │   │           nth.js
│   │   │           nthArg.js
│   │   │           number.js
│   │   │           object.js
│   │   │           omit.js
│   │   │           omitAll.js
│   │   │           omitBy.js
│   │   │           once.js
│   │   │           orderBy.js
│   │   │           over.js
│   │   │           overArgs.js
│   │   │           overEvery.js
│   │   │           overSome.js
│   │   │           pad.js
│   │   │           padChars.js
│   │   │           padCharsEnd.js
│   │   │           padCharsStart.js
│   │   │           padEnd.js
│   │   │           padStart.js
│   │   │           parseInt.js
│   │   │           partial.js
│   │   │           partialRight.js
│   │   │           partition.js
│   │   │           path.js
│   │   │           pathEq.js
│   │   │           pathOr.js
│   │   │           paths.js
│   │   │           pick.js
│   │   │           pickAll.js
│   │   │           pickBy.js
│   │   │           pipe.js
│   │   │           placeholder.js
│   │   │           plant.js
│   │   │           pluck.js
│   │   │           prop.js
│   │   │           propEq.js
│   │   │           property.js
│   │   │           propertyOf.js
│   │   │           propOr.js
│   │   │           props.js
│   │   │           pull.js
│   │   │           pullAll.js
│   │   │           pullAllBy.js
│   │   │           pullAllWith.js
│   │   │           pullAt.js
│   │   │           random.js
│   │   │           range.js
│   │   │           rangeRight.js
│   │   │           rangeStep.js
│   │   │           rangeStepRight.js
│   │   │           rearg.js
│   │   │           reduce.js
│   │   │           reduceRight.js
│   │   │           reject.js
│   │   │           remove.js
│   │   │           repeat.js
│   │   │           replace.js
│   │   │           rest.js
│   │   │           restFrom.js
│   │   │           result.js
│   │   │           reverse.js
│   │   │           round.js
│   │   │           sample.js
│   │   │           sampleSize.js
│   │   │           seq.js
│   │   │           set.js
│   │   │           setWith.js
│   │   │           shuffle.js
│   │   │           size.js
│   │   │           slice.js
│   │   │           snakeCase.js
│   │   │           some.js
│   │   │           sortBy.js
│   │   │           sortedIndex.js
│   │   │           sortedIndexBy.js
│   │   │           sortedIndexOf.js
│   │   │           sortedLastIndex.js
│   │   │           sortedLastIndexBy.js
│   │   │           sortedLastIndexOf.js
│   │   │           sortedUniq.js
│   │   │           sortedUniqBy.js
│   │   │           split.js
│   │   │           spread.js
│   │   │           spreadFrom.js
│   │   │           startCase.js
│   │   │           startsWith.js
│   │   │           string.js
│   │   │           stubArray.js
│   │   │           stubFalse.js
│   │   │           stubObject.js
│   │   │           stubString.js
│   │   │           stubTrue.js
│   │   │           subtract.js
│   │   │           sum.js
│   │   │           sumBy.js
│   │   │           symmetricDifference.js
│   │   │           symmetricDifferenceBy.js
│   │   │           symmetricDifferenceWith.js
│   │   │           T.js
│   │   │           tail.js
│   │   │           take.js
│   │   │           takeLast.js
│   │   │           takeLastWhile.js
│   │   │           takeRight.js
│   │   │           takeRightWhile.js
│   │   │           takeWhile.js
│   │   │           tap.js
│   │   │           template.js
│   │   │           templateSettings.js
│   │   │           throttle.js
│   │   │           thru.js
│   │   │           times.js
│   │   │           toArray.js
│   │   │           toFinite.js
│   │   │           toInteger.js
│   │   │           toIterator.js
│   │   │           toJSON.js
│   │   │           toLength.js
│   │   │           toLower.js
│   │   │           toNumber.js
│   │   │           toPairs.js
│   │   │           toPairsIn.js
│   │   │           toPath.js
│   │   │           toPlainObject.js
│   │   │           toSafeInteger.js
│   │   │           toString.js
│   │   │           toUpper.js
│   │   │           transform.js
│   │   │           trim.js
│   │   │           trimChars.js
│   │   │           trimCharsEnd.js
│   │   │           trimCharsStart.js
│   │   │           trimEnd.js
│   │   │           trimStart.js
│   │   │           truncate.js
│   │   │           unapply.js
│   │   │           unary.js
│   │   │           unescape.js
│   │   │           union.js
│   │   │           unionBy.js
│   │   │           unionWith.js
│   │   │           uniq.js
│   │   │           uniqBy.js
│   │   │           uniqueId.js
│   │   │           uniqWith.js
│   │   │           unnest.js
│   │   │           unset.js
│   │   │           unzip.js
│   │   │           unzipWith.js
│   │   │           update.js
│   │   │           updateWith.js
│   │   │           upperCase.js
│   │   │           upperFirst.js
│   │   │           useWith.js
│   │   │           util.js
│   │   │           value.js
│   │   │           valueOf.js
│   │   │           values.js
│   │   │           valuesIn.js
│   │   │           where.js
│   │   │           whereEq.js
│   │   │           without.js
│   │   │           words.js
│   │   │           wrap.js
│   │   │           wrapperAt.js
│   │   │           wrapperChain.js
│   │   │           wrapperLodash.js
│   │   │           wrapperReverse.js
│   │   │           wrapperValue.js
│   │   │           xor.js
│   │   │           xorBy.js
│   │   │           xorWith.js
│   │   │           zip.js
│   │   │           zipAll.js
│   │   │           zipObj.js
│   │   │           zipObject.js
│   │   │           zipObjectDeep.js
│   │   │           zipWith.js
│   │   │           _baseConvert.js
│   │   │           _convertBrowser.js
│   │   │           _falseOptions.js
│   │   │           _mapping.js
│   │   │           _util.js
│   │   │           __.js
│   │   │
│   │   ├───lodash.includes
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───lodash.isboolean
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───lodash.isinteger
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───lodash.isnumber
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───lodash.isplainobject
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───lodash.isstring
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───lodash.once
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───math-intrinsics
│   │   │   │   .eslintrc
│   │   │   │   abs.d.ts
│   │   │   │   abs.js
│   │   │   │   CHANGELOG.md
│   │   │   │   floor.d.ts
│   │   │   │   floor.js
│   │   │   │   isFinite.d.ts
│   │   │   │   isFinite.js
│   │   │   │   isInteger.d.ts
│   │   │   │   isInteger.js
│   │   │   │   isNaN.d.ts
│   │   │   │   isNaN.js
│   │   │   │   isNegativeZero.d.ts
│   │   │   │   isNegativeZero.js
│   │   │   │   LICENSE
│   │   │   │   max.d.ts
│   │   │   │   max.js
│   │   │   │   min.d.ts
│   │   │   │   min.js
│   │   │   │   mod.d.ts
│   │   │   │   mod.js
│   │   │   │   package.json
│   │   │   │   pow.d.ts
│   │   │   │   pow.js
│   │   │   │   README.md
│   │   │   │   round.d.ts
│   │   │   │   round.js
│   │   │   │   sign.d.ts
│   │   │   │   sign.js
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   ├───constants
│   │   │   │       maxArrayLength.d.ts
│   │   │   │       maxArrayLength.js
│   │   │   │       maxSafeInteger.d.ts
│   │   │   │       maxSafeInteger.js
│   │   │   │       maxValue.d.ts
│   │   │   │       maxValue.js
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───media-typer
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───memory-pager
│   │   │       .travis.yml
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │       test.js
│   │   │
│   │   ├───merge-descriptors
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       license
│   │   │       package.json
│   │   │       readme.md
│   │   │
│   │   ├───mime-db
│   │   │       db.json
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───mime-types
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       mimeScore.js
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───minimatch
│   │   │       LICENSE
│   │   │       minimatch.js
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───mongodb
│   │   │   │   LICENSE.md
│   │   │   │   mongodb.d.ts
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───etc
│   │   │   │       prepare.js
│   │   │   │
│   │   │   ├───lib
│   │   │   │   │   admin.js
│   │   │   │   │   admin.js.map
│   │   │   │   │   bson.js
│   │   │   │   │   bson.js.map
│   │   │   │   │   change_stream.js
│   │   │   │   │   change_stream.js.map
│   │   │   │   │   collection.js
│   │   │   │   │   collection.js.map
│   │   │   │   │   connection_string.js
│   │   │   │   │   connection_string.js.map
│   │   │   │   │   constants.js
│   │   │   │   │   constants.js.map
│   │   │   │   │   db.js
│   │   │   │   │   db.js.map
│   │   │   │   │   deps.js
│   │   │   │   │   deps.js.map
│   │   │   │   │   encrypter.js
│   │   │   │   │   encrypter.js.map
│   │   │   │   │   error.js
│   │   │   │   │   error.js.map
│   │   │   │   │   explain.js
│   │   │   │   │   explain.js.map
│   │   │   │   │   index.js
│   │   │   │   │   index.js.map
│   │   │   │   │   mongo_client.js
│   │   │   │   │   mongo_client.js.map
│   │   │   │   │   mongo_client_auth_providers.js
│   │   │   │   │   mongo_client_auth_providers.js.map
│   │   │   │   │   mongo_logger.js
│   │   │   │   │   mongo_logger.js.map
│   │   │   │   │   mongo_types.js
│   │   │   │   │   mongo_types.js.map
│   │   │   │   │   read_concern.js
│   │   │   │   │   read_concern.js.map
│   │   │   │   │   read_preference.js
│   │   │   │   │   read_preference.js.map
│   │   │   │   │   sessions.js
│   │   │   │   │   sessions.js.map
│   │   │   │   │   sort.js
│   │   │   │   │   sort.js.map
│   │   │   │   │   timeout.js
│   │   │   │   │   timeout.js.map
│   │   │   │   │   transactions.js
│   │   │   │   │   transactions.js.map
│   │   │   │   │   utils.js
│   │   │   │   │   utils.js.map
│   │   │   │   │   write_concern.js
│   │   │   │   │   write_concern.js.map
│   │   │   │   │
│   │   │   │   ├───bulk
│   │   │   │   │       common.js
│   │   │   │   │       common.js.map
│   │   │   │   │       ordered.js
│   │   │   │   │       ordered.js.map
│   │   │   │   │       unordered.js
│   │   │   │   │       unordered.js.map
│   │   │   │   │
│   │   │   │   ├───client-side-encryption
│   │   │   │   │   │   auto_encrypter.js
│   │   │   │   │   │   auto_encrypter.js.map
│   │   │   │   │   │   client_encryption.js
│   │   │   │   │   │   client_encryption.js.map
│   │   │   │   │   │   errors.js
│   │   │   │   │   │   errors.js.map
│   │   │   │   │   │   mongocryptd_manager.js
│   │   │   │   │   │   mongocryptd_manager.js.map
│   │   │   │   │   │   state_machine.js
│   │   │   │   │   │   state_machine.js.map
│   │   │   │   │   │
│   │   │   │   │   └───providers
│   │   │   │   │           aws.js
│   │   │   │   │           aws.js.map
│   │   │   │   │           azure.js
│   │   │   │   │           azure.js.map
│   │   │   │   │           gcp.js
│   │   │   │   │           gcp.js.map
│   │   │   │   │           index.js
│   │   │   │   │           index.js.map
│   │   │   │   │
│   │   │   │   ├───cmap
│   │   │   │   │   │   commands.js
│   │   │   │   │   │   commands.js.map
│   │   │   │   │   │   command_monitoring_events.js
│   │   │   │   │   │   command_monitoring_events.js.map
│   │   │   │   │   │   connect.js
│   │   │   │   │   │   connect.js.map
│   │   │   │   │   │   connection.js
│   │   │   │   │   │   connection.js.map
│   │   │   │   │   │   connection_pool.js
│   │   │   │   │   │   connection_pool.js.map
│   │   │   │   │   │   connection_pool_events.js
│   │   │   │   │   │   connection_pool_events.js.map
│   │   │   │   │   │   errors.js
│   │   │   │   │   │   errors.js.map
│   │   │   │   │   │   metrics.js
│   │   │   │   │   │   metrics.js.map
│   │   │   │   │   │   stream_description.js
│   │   │   │   │   │   stream_description.js.map
│   │   │   │   │   │
│   │   │   │   │   ├───auth
│   │   │   │   │   │   │   auth_provider.js
│   │   │   │   │   │   │   auth_provider.js.map
│   │   │   │   │   │   │   aws_temporary_credentials.js
│   │   │   │   │   │   │   aws_temporary_credentials.js.map
│   │   │   │   │   │   │   gssapi.js
│   │   │   │   │   │   │   gssapi.js.map
│   │   │   │   │   │   │   mongodb_aws.js
│   │   │   │   │   │   │   mongodb_aws.js.map
│   │   │   │   │   │   │   mongodb_oidc.js
│   │   │   │   │   │   │   mongodb_oidc.js.map
│   │   │   │   │   │   │   mongo_credentials.js
│   │   │   │   │   │   │   mongo_credentials.js.map
│   │   │   │   │   │   │   plain.js
│   │   │   │   │   │   │   plain.js.map
│   │   │   │   │   │   │   providers.js
│   │   │   │   │   │   │   providers.js.map
│   │   │   │   │   │   │   scram.js
│   │   │   │   │   │   │   scram.js.map
│   │   │   │   │   │   │   x509.js
│   │   │   │   │   │   │   x509.js.map
│   │   │   │   │   │   │
│   │   │   │   │   │   └───mongodb_oidc
│   │   │   │   │   │           automated_callback_workflow.js
│   │   │   │   │   │           automated_callback_workflow.js.map
│   │   │   │   │   │           azure_machine_workflow.js
│   │   │   │   │   │           azure_machine_workflow.js.map
│   │   │   │   │   │           callback_workflow.js
│   │   │   │   │   │           callback_workflow.js.map
│   │   │   │   │   │           command_builders.js
│   │   │   │   │   │           command_builders.js.map
│   │   │   │   │   │           gcp_machine_workflow.js
│   │   │   │   │   │           gcp_machine_workflow.js.map
│   │   │   │   │   │           human_callback_workflow.js
│   │   │   │   │   │           human_callback_workflow.js.map
│   │   │   │   │   │           k8s_machine_workflow.js
│   │   │   │   │   │           k8s_machine_workflow.js.map
│   │   │   │   │   │           token_cache.js
│   │   │   │   │   │           token_cache.js.map
│   │   │   │   │   │           token_machine_workflow.js
│   │   │   │   │   │           token_machine_workflow.js.map
│   │   │   │   │   │
│   │   │   │   │   ├───handshake
│   │   │   │   │   │       client_metadata.js
│   │   │   │   │   │       client_metadata.js.map
│   │   │   │   │   │
│   │   │   │   │   └───wire_protocol
│   │   │   │   │       │   compression.js
│   │   │   │   │       │   compression.js.map
│   │   │   │   │       │   constants.js
│   │   │   │   │       │   constants.js.map
│   │   │   │   │       │   on_data.js
│   │   │   │   │       │   on_data.js.map
│   │   │   │   │       │   responses.js
│   │   │   │   │       │   responses.js.map
│   │   │   │   │       │   shared.js
│   │   │   │   │       │   shared.js.map
│   │   │   │   │       │
│   │   │   │   │       └───on_demand
│   │   │   │   │               document.js
│   │   │   │   │               document.js.map
│   │   │   │   │
│   │   │   │   ├───cursor
│   │   │   │   │       abstract_cursor.js
│   │   │   │   │       abstract_cursor.js.map
│   │   │   │   │       aggregation_cursor.js
│   │   │   │   │       aggregation_cursor.js.map
│   │   │   │   │       change_stream_cursor.js
│   │   │   │   │       change_stream_cursor.js.map
│   │   │   │   │       client_bulk_write_cursor.js
│   │   │   │   │       client_bulk_write_cursor.js.map
│   │   │   │   │       explainable_cursor.js
│   │   │   │   │       explainable_cursor.js.map
│   │   │   │   │       find_cursor.js
│   │   │   │   │       find_cursor.js.map
│   │   │   │   │       list_collections_cursor.js
│   │   │   │   │       list_collections_cursor.js.map
│   │   │   │   │       list_indexes_cursor.js
│   │   │   │   │       list_indexes_cursor.js.map
│   │   │   │   │       list_search_indexes_cursor.js
│   │   │   │   │       list_search_indexes_cursor.js.map
│   │   │   │   │       run_command_cursor.js
│   │   │   │   │       run_command_cursor.js.map
│   │   │   │   │
│   │   │   │   ├───gridfs
│   │   │   │   │       download.js
│   │   │   │   │       download.js.map
│   │   │   │   │       index.js
│   │   │   │   │       index.js.map
│   │   │   │   │       upload.js
│   │   │   │   │       upload.js.map
│   │   │   │   │
│   │   │   │   ├───operations
│   │   │   │   │   │   aggregate.js
│   │   │   │   │   │   aggregate.js.map
│   │   │   │   │   │   command.js
│   │   │   │   │   │   command.js.map
│   │   │   │   │   │   count.js
│   │   │   │   │   │   count.js.map
│   │   │   │   │   │   create_collection.js
│   │   │   │   │   │   create_collection.js.map
│   │   │   │   │   │   delete.js
│   │   │   │   │   │   delete.js.map
│   │   │   │   │   │   distinct.js
│   │   │   │   │   │   distinct.js.map
│   │   │   │   │   │   drop.js
│   │   │   │   │   │   drop.js.map
│   │   │   │   │   │   end_sessions.js
│   │   │   │   │   │   end_sessions.js.map
│   │   │   │   │   │   estimated_document_count.js
│   │   │   │   │   │   estimated_document_count.js.map
│   │   │   │   │   │   execute_operation.js
│   │   │   │   │   │   execute_operation.js.map
│   │   │   │   │   │   find.js
│   │   │   │   │   │   find.js.map
│   │   │   │   │   │   find_and_modify.js
│   │   │   │   │   │   find_and_modify.js.map
│   │   │   │   │   │   get_more.js
│   │   │   │   │   │   get_more.js.map
│   │   │   │   │   │   indexes.js
│   │   │   │   │   │   indexes.js.map
│   │   │   │   │   │   insert.js
│   │   │   │   │   │   insert.js.map
│   │   │   │   │   │   kill_cursors.js
│   │   │   │   │   │   kill_cursors.js.map
│   │   │   │   │   │   list_collections.js
│   │   │   │   │   │   list_collections.js.map
│   │   │   │   │   │   list_databases.js
│   │   │   │   │   │   list_databases.js.map
│   │   │   │   │   │   operation.js
│   │   │   │   │   │   operation.js.map
│   │   │   │   │   │   profiling_level.js
│   │   │   │   │   │   profiling_level.js.map
│   │   │   │   │   │   remove_user.js
│   │   │   │   │   │   remove_user.js.map
│   │   │   │   │   │   rename.js
│   │   │   │   │   │   rename.js.map
│   │   │   │   │   │   run_command.js
│   │   │   │   │   │   run_command.js.map
│   │   │   │   │   │   set_profiling_level.js
│   │   │   │   │   │   set_profiling_level.js.map
│   │   │   │   │   │   stats.js
│   │   │   │   │   │   stats.js.map
│   │   │   │   │   │   update.js
│   │   │   │   │   │   update.js.map
│   │   │   │   │   │   validate_collection.js
│   │   │   │   │   │   validate_collection.js.map
│   │   │   │   │   │
│   │   │   │   │   ├───client_bulk_write
│   │   │   │   │   │       client_bulk_write.js
│   │   │   │   │   │       client_bulk_write.js.map
│   │   │   │   │   │       command_builder.js
│   │   │   │   │   │       command_builder.js.map
│   │   │   │   │   │       common.js
│   │   │   │   │   │       common.js.map
│   │   │   │   │   │       executor.js
│   │   │   │   │   │       executor.js.map
│   │   │   │   │   │       results_merger.js
│   │   │   │   │   │       results_merger.js.map
│   │   │   │   │   │
│   │   │   │   │   └───search_indexes
│   │   │   │   │           create.js
│   │   │   │   │           create.js.map
│   │   │   │   │           drop.js
│   │   │   │   │           drop.js.map
│   │   │   │   │           update.js
│   │   │   │   │           update.js.map
│   │   │   │   │
│   │   │   │   └───sdam
│   │   │   │           common.js
│   │   │   │           common.js.map
│   │   │   │           events.js
│   │   │   │           events.js.map
│   │   │   │           monitor.js
│   │   │   │           monitor.js.map
│   │   │   │           server.js
│   │   │   │           server.js.map
│   │   │   │           server_description.js
│   │   │   │           server_description.js.map
│   │   │   │           server_selection.js
│   │   │   │           server_selection.js.map
│   │   │   │           server_selection_events.js
│   │   │   │           server_selection_events.js.map
│   │   │   │           srv_polling.js
│   │   │   │           srv_polling.js.map
│   │   │   │           topology.js
│   │   │   │           topology.js.map
│   │   │   │           topology_description.js
│   │   │   │           topology_description.js.map
│   │   │   │
│   │   │   └───src
│   │   │       │   admin.ts
│   │   │       │   bson.ts
│   │   │       │   change_stream.ts
│   │   │       │   collection.ts
│   │   │       │   connection_string.ts
│   │   │       │   constants.ts
│   │   │       │   db.ts
│   │   │       │   deps.ts
│   │   │       │   encrypter.ts
│   │   │       │   error.ts
│   │   │       │   explain.ts
│   │   │       │   index.ts
│   │   │       │   mongo_client.ts
│   │   │       │   mongo_client_auth_providers.ts
│   │   │       │   mongo_logger.ts
│   │   │       │   mongo_types.ts
│   │   │       │   read_concern.ts
│   │   │       │   read_preference.ts
│   │   │       │   sessions.ts
│   │   │       │   sort.ts
│   │   │       │   timeout.ts
│   │   │       │   transactions.ts
│   │   │       │   utils.ts
│   │   │       │   write_concern.ts
│   │   │       │
│   │   │       ├───bulk
│   │   │       │       common.ts
│   │   │       │       ordered.ts
│   │   │       │       unordered.ts
│   │   │       │
│   │   │       ├───client-side-encryption
│   │   │       │   │   auto_encrypter.ts
│   │   │       │   │   client_encryption.ts
│   │   │       │   │   errors.ts
│   │   │       │   │   mongocryptd_manager.ts
│   │   │       │   │   state_machine.ts
│   │   │       │   │
│   │   │       │   └───providers
│   │   │       │           aws.ts
│   │   │       │           azure.ts
│   │   │       │           gcp.ts
│   │   │       │           index.ts
│   │   │       │
│   │   │       ├───cmap
│   │   │       │   │   commands.ts
│   │   │       │   │   command_monitoring_events.ts
│   │   │       │   │   connect.ts
│   │   │       │   │   connection.ts
│   │   │       │   │   connection_pool.ts
│   │   │       │   │   connection_pool_events.ts
│   │   │       │   │   errors.ts
│   │   │       │   │   metrics.ts
│   │   │       │   │   stream_description.ts
│   │   │       │   │
│   │   │       │   ├───auth
│   │   │       │   │   │   auth_provider.ts
│   │   │       │   │   │   aws_temporary_credentials.ts
│   │   │       │   │   │   gssapi.ts
│   │   │       │   │   │   mongodb_aws.ts
│   │   │       │   │   │   mongodb_oidc.ts
│   │   │       │   │   │   mongo_credentials.ts
│   │   │       │   │   │   plain.ts
│   │   │       │   │   │   providers.ts
│   │   │       │   │   │   scram.ts
│   │   │       │   │   │   x509.ts
│   │   │       │   │   │
│   │   │       │   │   └───mongodb_oidc
│   │   │       │   │           automated_callback_workflow.ts
│   │   │       │   │           azure_machine_workflow.ts
│   │   │       │   │           callback_workflow.ts
│   │   │       │   │           command_builders.ts
│   │   │       │   │           gcp_machine_workflow.ts
│   │   │       │   │           human_callback_workflow.ts
│   │   │       │   │           k8s_machine_workflow.ts
│   │   │       │   │           token_cache.ts
│   │   │       │   │           token_machine_workflow.ts
│   │   │       │   │
│   │   │       │   ├───handshake
│   │   │       │   │       client_metadata.ts
│   │   │       │   │
│   │   │       │   └───wire_protocol
│   │   │       │       │   compression.ts
│   │   │       │       │   constants.ts
│   │   │       │       │   on_data.ts
│   │   │       │       │   responses.ts
│   │   │       │       │   shared.ts
│   │   │       │       │
│   │   │       │       └───on_demand
│   │   │       │               document.ts
│   │   │       │
│   │   │       ├───cursor
│   │   │       │       abstract_cursor.ts
│   │   │       │       aggregation_cursor.ts
│   │   │       │       change_stream_cursor.ts
│   │   │       │       client_bulk_write_cursor.ts
│   │   │       │       explainable_cursor.ts
│   │   │       │       find_cursor.ts
│   │   │       │       list_collections_cursor.ts
│   │   │       │       list_indexes_cursor.ts
│   │   │       │       list_search_indexes_cursor.ts
│   │   │       │       run_command_cursor.ts
│   │   │       │
│   │   │       ├───gridfs
│   │   │       │       download.ts
│   │   │       │       index.ts
│   │   │       │       upload.ts
│   │   │       │
│   │   │       ├───operations
│   │   │       │   │   aggregate.ts
│   │   │       │   │   command.ts
│   │   │       │   │   count.ts
│   │   │       │   │   create_collection.ts
│   │   │       │   │   delete.ts
│   │   │       │   │   distinct.ts
│   │   │       │   │   drop.ts
│   │   │       │   │   end_sessions.ts
│   │   │       │   │   estimated_document_count.ts
│   │   │       │   │   execute_operation.ts
│   │   │       │   │   find.ts
│   │   │       │   │   find_and_modify.ts
│   │   │       │   │   get_more.ts
│   │   │       │   │   indexes.ts
│   │   │       │   │   insert.ts
│   │   │       │   │   kill_cursors.ts
│   │   │       │   │   list_collections.ts
│   │   │       │   │   list_databases.ts
│   │   │       │   │   operation.ts
│   │   │       │   │   profiling_level.ts
│   │   │       │   │   remove_user.ts
│   │   │       │   │   rename.ts
│   │   │       │   │   run_command.ts
│   │   │       │   │   set_profiling_level.ts
│   │   │       │   │   stats.ts
│   │   │       │   │   update.ts
│   │   │       │   │   validate_collection.ts
│   │   │       │   │
│   │   │       │   ├───client_bulk_write
│   │   │       │   │       client_bulk_write.ts
│   │   │       │   │       command_builder.ts
│   │   │       │   │       common.ts
│   │   │       │   │       executor.ts
│   │   │       │   │       results_merger.ts
│   │   │       │   │
│   │   │       │   └───search_indexes
│   │   │       │           create.ts
│   │   │       │           drop.ts
│   │   │       │           update.ts
│   │   │       │
│   │   │       └───sdam
│   │   │               common.ts
│   │   │               events.ts
│   │   │               monitor.ts
│   │   │               server.ts
│   │   │               server_description.ts
│   │   │               server_selection.ts
│   │   │               server_selection_events.ts
│   │   │               srv_polling.ts
│   │   │               topology.ts
│   │   │               topology_description.ts
│   │   │
│   │   ├───mongodb-connection-string-url
│   │   │   │   .esm-wrapper.mjs
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           index.d.ts
│   │   │           index.js
│   │   │           index.js.map
│   │   │           redact.d.ts
│   │   │           redact.js
│   │   │           redact.js.map
│   │   │
│   │   ├───mongoose
│   │   │   │   eslint.config.mjs
│   │   │   │   index.js
│   │   │   │   LICENSE.md
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   SECURITY.md
│   │   │   │
│   │   │   ├───lib
│   │   │   │   │   aggregate.js
│   │   │   │   │   cast.js
│   │   │   │   │   collection.js
│   │   │   │   │   connection.js
│   │   │   │   │   connectionState.js
│   │   │   │   │   constants.js
│   │   │   │   │   document.js
│   │   │   │   │   driver.js
│   │   │   │   │   index.js
│   │   │   │   │   internal.js
│   │   │   │   │   model.js
│   │   │   │   │   modifiedPathsSnapshot.js
│   │   │   │   │   mongoose.js
│   │   │   │   │   options.js
│   │   │   │   │   query.js
│   │   │   │   │   queryHelpers.js
│   │   │   │   │   schema.js
│   │   │   │   │   schemaType.js
│   │   │   │   │   stateMachine.js
│   │   │   │   │   utils.js
│   │   │   │   │   validOptions.js
│   │   │   │   │   virtualType.js
│   │   │   │   │
│   │   │   │   ├───cast
│   │   │   │   │       bigint.js
│   │   │   │   │       boolean.js
│   │   │   │   │       date.js
│   │   │   │   │       decimal128.js
│   │   │   │   │       double.js
│   │   │   │   │       int32.js
│   │   │   │   │       number.js
│   │   │   │   │       objectid.js
│   │   │   │   │       string.js
│   │   │   │   │       uuid.js
│   │   │   │   │
│   │   │   │   ├───cursor
│   │   │   │   │       aggregationCursor.js
│   │   │   │   │       changeStream.js
│   │   │   │   │       queryCursor.js
│   │   │   │   │
│   │   │   │   ├───drivers
│   │   │   │   │   │   SPEC.md
│   │   │   │   │   │
│   │   │   │   │   └───node-mongodb-native
│   │   │   │   │           bulkWriteResult.js
│   │   │   │   │           collection.js
│   │   │   │   │           connection.js
│   │   │   │   │           index.js
│   │   │   │   │
│   │   │   │   ├───error
│   │   │   │   │       browserMissingSchema.js
│   │   │   │   │       bulkSaveIncompleteError.js
│   │   │   │   │       bulkWriteError.js
│   │   │   │   │       cast.js
│   │   │   │   │       createCollectionsError.js
│   │   │   │   │       divergentArray.js
│   │   │   │   │       eachAsyncMultiError.js
│   │   │   │   │       index.js
│   │   │   │   │       invalidSchemaOption.js
│   │   │   │   │       messages.js
│   │   │   │   │       missingSchema.js
│   │   │   │   │       mongooseError.js
│   │   │   │   │       notFound.js
│   │   │   │   │       objectExpected.js
│   │   │   │   │       objectParameter.js
│   │   │   │   │       overwriteModel.js
│   │   │   │   │       parallelSave.js
│   │   │   │   │       parallelValidate.js
│   │   │   │   │       serverSelection.js
│   │   │   │   │       setOptionError.js
│   │   │   │   │       strict.js
│   │   │   │   │       strictPopulate.js
│   │   │   │   │       syncIndexes.js
│   │   │   │   │       validation.js
│   │   │   │   │       validator.js
│   │   │   │   │       version.js
│   │   │   │   │
│   │   │   │   ├───helpers
│   │   │   │   │   │   arrayDepth.js
│   │   │   │   │   │   clone.js
│   │   │   │   │   │   common.js
│   │   │   │   │   │   createJSONSchemaTypeDefinition.js
│   │   │   │   │   │   each.js
│   │   │   │   │   │   firstKey.js
│   │   │   │   │   │   get.js
│   │   │   │   │   │   getConstructorName.js
│   │   │   │   │   │   getDefaultBulkwriteResult.js
│   │   │   │   │   │   getFunctionName.js
│   │   │   │   │   │   immediate.js
│   │   │   │   │   │   isAsyncFunction.js
│   │   │   │   │   │   isBsonType.js
│   │   │   │   │   │   isMongooseObject.js
│   │   │   │   │   │   isObject.js
│   │   │   │   │   │   isPOJO.js
│   │   │   │   │   │   isPromise.js
│   │   │   │   │   │   isSimpleValidator.js
│   │   │   │   │   │   minimize.js
│   │   │   │   │   │   omitUndefined.js
│   │   │   │   │   │   once.js
│   │   │   │   │   │   parallelLimit.js
│   │   │   │   │   │   pluralize.js
│   │   │   │   │   │   printJestWarning.js
│   │   │   │   │   │   processConnectionOptions.js
│   │   │   │   │   │   setDefaultsOnInsert.js
│   │   │   │   │   │   specialProperties.js
│   │   │   │   │   │   symbols.js
│   │   │   │   │   │   timers.js
│   │   │   │   │   │   updateValidators.js
│   │   │   │   │   │
│   │   │   │   │   ├───aggregate
│   │   │   │   │   │       prepareDiscriminatorPipeline.js
│   │   │   │   │   │       stringifyFunctionOperators.js
│   │   │   │   │   │
│   │   │   │   │   ├───cursor
│   │   │   │   │   │       eachAsync.js
│   │   │   │   │   │
│   │   │   │   │   ├───discriminator
│   │   │   │   │   │       applyEmbeddedDiscriminators.js
│   │   │   │   │   │       areDiscriminatorValuesEqual.js
│   │   │   │   │   │       checkEmbeddedDiscriminatorKeyProjection.js
│   │   │   │   │   │       getConstructor.js
│   │   │   │   │   │       getDiscriminatorByValue.js
│   │   │   │   │   │       getSchemaDiscriminatorByValue.js
│   │   │   │   │   │       mergeDiscriminatorSchema.js
│   │   │   │   │   │
│   │   │   │   │   ├───document
│   │   │   │   │   │       applyDefaults.js
│   │   │   │   │   │       applyTimestamps.js
│   │   │   │   │   │       applyVirtuals.js
│   │   │   │   │   │       cleanModifiedSubpaths.js
│   │   │   │   │   │       compile.js
│   │   │   │   │   │       getDeepestSubdocumentForPath.js
│   │   │   │   │   │       getEmbeddedDiscriminatorPath.js
│   │   │   │   │   │       handleSpreadDoc.js
│   │   │   │   │   │
│   │   │   │   │   ├───error
│   │   │   │   │   │       combinePathErrors.js
│   │   │   │   │   │
│   │   │   │   │   ├───indexes
│   │   │   │   │   │       applySchemaCollation.js
│   │   │   │   │   │       decorateDiscriminatorIndexOptions.js
│   │   │   │   │   │       getRelatedIndexes.js
│   │   │   │   │   │       isDefaultIdIndex.js
│   │   │   │   │   │       isIndexEqual.js
│   │   │   │   │   │       isIndexSpecEqual.js
│   │   │   │   │   │       isTextIndex.js
│   │   │   │   │   │       isTimeseriesIndex.js
│   │   │   │   │   │
│   │   │   │   │   ├───model
│   │   │   │   │   │       applyDefaultsToPOJO.js
│   │   │   │   │   │       applyHooks.js
│   │   │   │   │   │       applyMethods.js
│   │   │   │   │   │       applyStaticHooks.js
│   │   │   │   │   │       applyStatics.js
│   │   │   │   │   │       castBulkWrite.js
│   │   │   │   │   │       decorateBulkWriteResult.js
│   │   │   │   │   │       discriminator.js
│   │   │   │   │   │       pushNestedArrayPaths.js
│   │   │   │   │   │
│   │   │   │   │   ├───path
│   │   │   │   │   │       parentPaths.js
│   │   │   │   │   │       setDottedPath.js
│   │   │   │   │   │
│   │   │   │   │   ├───populate
│   │   │   │   │   │       assignRawDocsToIdStructure.js
│   │   │   │   │   │       assignVals.js
│   │   │   │   │   │       createPopulateQueryFilter.js
│   │   │   │   │   │       getModelsMapForPopulate.js
│   │   │   │   │   │       getSchemaTypes.js
│   │   │   │   │   │       getVirtual.js
│   │   │   │   │   │       leanPopulateMap.js
│   │   │   │   │   │       lookupLocalFields.js
│   │   │   │   │   │       markArraySubdocsPopulated.js
│   │   │   │   │   │       modelNamesFromRefPath.js
│   │   │   │   │   │       removeDeselectedForeignField.js
│   │   │   │   │   │       setPopulatedVirtualValue.js
│   │   │   │   │   │       skipPopulateValue.js
│   │   │   │   │   │       validateRef.js
│   │   │   │   │   │
│   │   │   │   │   ├───projection
│   │   │   │   │   │       applyProjection.js
│   │   │   │   │   │       hasIncludedChildren.js
│   │   │   │   │   │       isDefiningProjection.js
│   │   │   │   │   │       isExclusive.js
│   │   │   │   │   │       isInclusive.js
│   │   │   │   │   │       isNestedProjection.js
│   │   │   │   │   │       isPathExcluded.js
│   │   │   │   │   │       isPathSelectedInclusive.js
│   │   │   │   │   │       isSubpath.js
│   │   │   │   │   │       parseProjection.js
│   │   │   │   │   │
│   │   │   │   │   ├───query
│   │   │   │   │   │       applyGlobalOption.js
│   │   │   │   │   │       cast$expr.js
│   │   │   │   │   │       castFilterPath.js
│   │   │   │   │   │       castUpdate.js
│   │   │   │   │   │       getEmbeddedDiscriminatorPath.js
│   │   │   │   │   │       handleImmutable.js
│   │   │   │   │   │       handleReadPreferenceAliases.js
│   │   │   │   │   │       hasDollarKeys.js
│   │   │   │   │   │       isOperator.js
│   │   │   │   │   │       sanitizeFilter.js
│   │   │   │   │   │       sanitizeProjection.js
│   │   │   │   │   │       selectPopulatedFields.js
│   │   │   │   │   │       trusted.js
│   │   │   │   │   │       validOps.js
│   │   │   │   │   │
│   │   │   │   │   ├───schema
│   │   │   │   │   │       addAutoId.js
│   │   │   │   │   │       applyBuiltinPlugins.js
│   │   │   │   │   │       applyPlugins.js
│   │   │   │   │   │       applyReadConcern.js
│   │   │   │   │   │       applyWriteConcern.js
│   │   │   │   │   │       cleanPositionalOperators.js
│   │   │   │   │   │       getIndexes.js
│   │   │   │   │   │       getKeysInSchemaOrder.js
│   │   │   │   │   │       getPath.js
│   │   │   │   │   │       getSubdocumentStrictValue.js
│   │   │   │   │   │       handleIdOption.js
│   │   │   │   │   │       handleTimestampOption.js
│   │   │   │   │   │       idGetter.js
│   │   │   │   │   │       merge.js
│   │   │   │   │   │
│   │   │   │   │   ├───schematype
│   │   │   │   │   │       handleImmutable.js
│   │   │   │   │   │
│   │   │   │   │   ├───timestamps
│   │   │   │   │   │       setDocumentTimestamps.js
│   │   │   │   │   │       setupTimestamps.js
│   │   │   │   │   │
│   │   │   │   │   ├───topology
│   │   │   │   │   │       allServersUnknown.js
│   │   │   │   │   │       isAtlas.js
│   │   │   │   │   │       isSSLError.js
│   │   │   │   │   │
│   │   │   │   │   └───update
│   │   │   │   │           applyTimestampsToChildren.js
│   │   │   │   │           applyTimestampsToUpdate.js
│   │   │   │   │           castArrayFilters.js
│   │   │   │   │           decorateUpdateWithVersionKey.js
│   │   │   │   │           modifiedPaths.js
│   │   │   │   │           moveImmutableProperties.js
│   │   │   │   │           removeUnusedArrayFilters.js
│   │   │   │   │           updatedPathsByArrayFilter.js
│   │   │   │   │
│   │   │   │   ├───options
│   │   │   │   │       populateOptions.js
│   │   │   │   │       propertyOptions.js
│   │   │   │   │       saveOptions.js
│   │   │   │   │       schemaArrayOptions.js
│   │   │   │   │       schemaBufferOptions.js
│   │   │   │   │       schemaDateOptions.js
│   │   │   │   │       schemaDocumentArrayOptions.js
│   │   │   │   │       schemaMapOptions.js
│   │   │   │   │       schemaNumberOptions.js
│   │   │   │   │       schemaObjectIdOptions.js
│   │   │   │   │       schemaStringOptions.js
│   │   │   │   │       schemaSubdocumentOptions.js
│   │   │   │   │       schemaTypeOptions.js
│   │   │   │   │       schemaUnionOptions.js
│   │   │   │   │       virtualOptions.js
│   │   │   │   │
│   │   │   │   ├───plugins
│   │   │   │   │       index.js
│   │   │   │   │       saveSubdocs.js
│   │   │   │   │       sharding.js
│   │   │   │   │       trackTransaction.js
│   │   │   │   │       validateBeforeSave.js
│   │   │   │   │
│   │   │   │   ├───schema
│   │   │   │   │   │   array.js
│   │   │   │   │   │   bigint.js
│   │   │   │   │   │   boolean.js
│   │   │   │   │   │   buffer.js
│   │   │   │   │   │   date.js
│   │   │   │   │   │   decimal128.js
│   │   │   │   │   │   documentArray.js
│   │   │   │   │   │   documentArrayElement.js
│   │   │   │   │   │   double.js
│   │   │   │   │   │   index.js
│   │   │   │   │   │   int32.js
│   │   │   │   │   │   map.js
│   │   │   │   │   │   mixed.js
│   │   │   │   │   │   number.js
│   │   │   │   │   │   objectId.js
│   │   │   │   │   │   string.js
│   │   │   │   │   │   subdocument.js
│   │   │   │   │   │   symbols.js
│   │   │   │   │   │   union.js
│   │   │   │   │   │   uuid.js
│   │   │   │   │   │
│   │   │   │   │   └───operators
│   │   │   │   │           bitwise.js
│   │   │   │   │           exists.js
│   │   │   │   │           geospatial.js
│   │   │   │   │           helpers.js
│   │   │   │   │           text.js
│   │   │   │   │           type.js
│   │   │   │   │
│   │   │   │   └───types
│   │   │   │       │   arraySubdocument.js
│   │   │   │       │   buffer.js
│   │   │   │       │   decimal128.js
│   │   │   │       │   double.js
│   │   │   │       │   index.js
│   │   │   │       │   map.js
│   │   │   │       │   objectid.js
│   │   │   │       │   subdocument.js
│   │   │   │       │   uuid.js
│   │   │   │       │
│   │   │   │       ├───array
│   │   │   │       │   │   index.js
│   │   │   │       │   │   isMongooseArray.js
│   │   │   │       │   │
│   │   │   │       │   └───methods
│   │   │   │       │           index.js
│   │   │   │       │
│   │   │   │       └───documentArray
│   │   │   │           │   index.js
│   │   │   │           │   isMongooseDocumentArray.js
│   │   │   │           │
│   │   │   │           └───methods
│   │   │   │                   index.js
│   │   │   │
│   │   │   └───types
│   │   │           aggregate.d.ts
│   │   │           augmentations.d.ts
│   │   │           callback.d.ts
│   │   │           collection.d.ts
│   │   │           connection.d.ts
│   │   │           cursor.d.ts
│   │   │           document.d.ts
│   │   │           error.d.ts
│   │   │           expressions.d.ts
│   │   │           helpers.d.ts
│   │   │           index.d.ts
│   │   │           indexes.d.ts
│   │   │           inferhydrateddoctype.d.ts
│   │   │           inferrawdoctype.d.ts
│   │   │           inferschematype.d.ts
│   │   │           middlewares.d.ts
│   │   │           models.d.ts
│   │   │           mongooseoptions.d.ts
│   │   │           pipelinestage.d.ts
│   │   │           populate.d.ts
│   │   │           query.d.ts
│   │   │           schemaoptions.d.ts
│   │   │           schematypes.d.ts
│   │   │           session.d.ts
│   │   │           types.d.ts
│   │   │           utility.d.ts
│   │   │           validation.d.ts
│   │   │           virtuals.d.ts
│   │   │
│   │   ├───morgan
│   │   │   │   HISTORY.md
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───node_modules
│   │   │       ├───debug
│   │   │       │   │   .coveralls.yml
│   │   │       │   │   .eslintrc
│   │   │       │   │   .npmignore
│   │   │       │   │   .travis.yml
│   │   │       │   │   CHANGELOG.md
│   │   │       │   │   component.json
│   │   │       │   │   karma.conf.js
│   │   │       │   │   LICENSE
│   │   │       │   │   Makefile
│   │   │       │   │   node.js
│   │   │       │   │   package.json
│   │   │       │   │   README.md
│   │   │       │   │
│   │   │       │   └───src
│   │   │       │           browser.js
│   │   │       │           debug.js
│   │   │       │           index.js
│   │   │       │           inspector-log.js
│   │   │       │           node.js
│   │   │       │
│   │   │       ├───ms
│   │   │       │       index.js
│   │   │       │       license.md
│   │   │       │       package.json
│   │   │       │       readme.md
│   │   │       │
│   │   │       └───on-finished
│   │   │               HISTORY.md
│   │   │               index.js
│   │   │               LICENSE
│   │   │               package.json
│   │   │               README.md
│   │   │
│   │   ├───mpath
│   │   │   │   .travis.yml
│   │   │   │   History.md
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   SECURITY.md
│   │   │   │
│   │   │   ├───lib
│   │   │   │       index.js
│   │   │   │       stringToParts.js
│   │   │   │
│   │   │   └───test
│   │   │           .eslintrc.yml
│   │   │           index.js
│   │   │           stringToParts.js
│   │   │
│   │   ├───mquery
│   │   │   │   History.md
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   SECURITY.md
│   │   │   │
│   │   │   ├───.github
│   │   │   │       ISSUE_TEMPLATE.md
│   │   │   │       PULL_REQUEST_TEMPLATE.md
│   │   │   │
│   │   │   └───lib
│   │   │       │   env.js
│   │   │       │   mquery.js
│   │   │       │   permissions.js
│   │   │       │   utils.js
│   │   │       │
│   │   │       └───collection
│   │   │               collection.js
│   │   │               index.js
│   │   │               node.js
│   │   │
│   │   ├───ms
│   │   │       index.js
│   │   │       license.md
│   │   │       package.json
│   │   │       readme.md
│   │   │
│   │   ├───negotiator
│   │   │   │   HISTORY.md
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           charset.js
│   │   │           encoding.js
│   │   │           language.js
│   │   │           mediaType.js
│   │   │
│   │   ├───node-addon-api
│   │   │   │   common.gypi
│   │   │   │   except.gypi
│   │   │   │   index.js
│   │   │   │   LICENSE.md
│   │   │   │   napi-inl.deprecated.h
│   │   │   │   napi-inl.h
│   │   │   │   napi.h
│   │   │   │   node_addon_api.gyp
│   │   │   │   node_api.gyp
│   │   │   │   noexcept.gypi
│   │   │   │   nothing.c
│   │   │   │   package-support.json
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───tools
│   │   │           check-napi.js
│   │   │           clang-format.js
│   │   │           conversion.js
│   │   │           README.md
│   │   │
│   │   ├───node-gyp-build
│   │   │       bin.js
│   │   │       build-test.js
│   │   │       index.js
│   │   │       LICENSE
│   │   │       node-gyp-build.js
│   │   │       optional.js
│   │   │       package.json
│   │   │       README.md
│   │   │       SECURITY.md
│   │   │
│   │   ├───nodemailer
│   │   │   │   .gitattributes
│   │   │   │   .ncurc.js
│   │   │   │   .prettierignore
│   │   │   │   .prettierrc
│   │   │   │   .prettierrc.js
│   │   │   │   .release-please-config.json
│   │   │   │   CHANGELOG.md
│   │   │   │   CODE_OF_CONDUCT.md
│   │   │   │   eslint.config.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   SECURITY.txt
│   │   │   │
│   │   │   └───lib
│   │   │       │   nodemailer.js
│   │   │       │
│   │   │       ├───addressparser
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───base64
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───dkim
│   │   │       │       index.js
│   │   │       │       message-parser.js
│   │   │       │       relaxed-body.js
│   │   │       │       sign.js
│   │   │       │
│   │   │       ├───fetch
│   │   │       │       cookies.js
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───json-transport
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───mail-composer
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───mailer
│   │   │       │       index.js
│   │   │       │       mail-message.js
│   │   │       │
│   │   │       ├───mime-funcs
│   │   │       │       index.js
│   │   │       │       mime-types.js
│   │   │       │
│   │   │       ├───mime-node
│   │   │       │       index.js
│   │   │       │       last-newline.js
│   │   │       │       le-unix.js
│   │   │       │       le-windows.js
│   │   │       │
│   │   │       ├───punycode
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───qp
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───sendmail-transport
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───ses-transport
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───shared
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───smtp-connection
│   │   │       │       data-stream.js
│   │   │       │       http-proxy-client.js
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───smtp-pool
│   │   │       │       index.js
│   │   │       │       pool-resource.js
│   │   │       │
│   │   │       ├───smtp-transport
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───stream-transport
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───well-known
│   │   │       │       index.js
│   │   │       │       services.json
│   │   │       │
│   │   │       └───xoauth2
│   │   │               index.js
│   │   │
│   │   ├───nodemon
│   │   │   │   .prettierrc.json
│   │   │   │   index.d.ts
│   │   │   │   jsconfig.json
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───bin
│   │   │   │       nodemon.js
│   │   │   │       windows-kill.exe
│   │   │   │
│   │   │   ├───doc
│   │   │   │   └───cli
│   │   │   │           authors.txt
│   │   │   │           config.txt
│   │   │   │           help.txt
│   │   │   │           logo.txt
│   │   │   │           options.txt
│   │   │   │           topics.txt
│   │   │   │           usage.txt
│   │   │   │           whoami.txt
│   │   │   │
│   │   │   └───lib
│   │   │       │   index.js
│   │   │       │   nodemon.js
│   │   │       │   spawn.js
│   │   │       │   version.js
│   │   │       │
│   │   │       ├───cli
│   │   │       │       index.js
│   │   │       │       parse.js
│   │   │       │
│   │   │       ├───config
│   │   │       │       command.js
│   │   │       │       defaults.js
│   │   │       │       exec.js
│   │   │       │       index.js
│   │   │       │       load.js
│   │   │       │
│   │   │       ├───help
│   │   │       │       index.js
│   │   │       │
│   │   │       ├───monitor
│   │   │       │       index.js
│   │   │       │       match.js
│   │   │       │       run.js
│   │   │       │       signals.js
│   │   │       │       watch.js
│   │   │       │
│   │   │       ├───rules
│   │   │       │       add.js
│   │   │       │       index.js
│   │   │       │       parse.js
│   │   │       │
│   │   │       └───utils
│   │   │               bus.js
│   │   │               clone.js
│   │   │               colour.js
│   │   │               index.js
│   │   │               log.js
│   │   │               merge.js
│   │   │
│   │   ├───normalize-path
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───object-assign
│   │   │       index.js
│   │   │       license
│   │   │       package.json
│   │   │       readme.md
│   │   │
│   │   ├───object-inspect
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package-support.json
│   │   │   │   package.json
│   │   │   │   readme.markdown
│   │   │   │   test-core-js.js
│   │   │   │   util.inspect.js
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   ├───example
│   │   │   │       all.js
│   │   │   │       circular.js
│   │   │   │       fn.js
│   │   │   │       inspect.js
│   │   │   │
│   │   │   └───test
│   │   │       │   bigint.js
│   │   │       │   circular.js
│   │   │       │   deep.js
│   │   │       │   element.js
│   │   │       │   err.js
│   │   │       │   fakes.js
│   │   │       │   fn.js
│   │   │       │   global.js
│   │   │       │   has.js
│   │   │       │   holes.js
│   │   │       │   indent-option.js
│   │   │       │   inspect.js
│   │   │       │   lowbyte.js
│   │   │       │   number.js
│   │   │       │   quoteStyle.js
│   │   │       │   toStringTag.js
│   │   │       │   undef.js
│   │   │       │   values.js
│   │   │       │
│   │   │       └───browser
│   │   │               dom.js
│   │   │
│   │   ├───on-finished
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───on-headers
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───once
│   │   │       LICENSE
│   │   │       once.js
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───parseurl
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───path-to-regexp
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   Readme.md
│   │   │   │
│   │   │   └───dist
│   │   │           index.d.ts
│   │   │           index.js
│   │   │           index.js.map
│   │   │
│   │   ├───picomatch
│   │   │   │   CHANGELOG.md
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           constants.js
│   │   │           parse.js
│   │   │           picomatch.js
│   │   │           scan.js
│   │   │           utils.js
│   │   │
│   │   ├───proxy-addr
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───pstree.remy
│   │   │   │   .travis.yml
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───lib
│   │   │   │       index.js
│   │   │   │       tree.js
│   │   │   │       utils.js
│   │   │   │
│   │   │   └───tests
│   │   │       │   index.test.js
│   │   │       │
│   │   │       └───fixtures
│   │   │               index.js
│   │   │               out1
│   │   │               out2
│   │   │
│   │   ├───punycode
│   │   │       LICENSE-MIT.txt
│   │   │       package.json
│   │   │       punycode.es6.js
│   │   │       punycode.js
│   │   │       README.md
│   │   │
│   │   ├───qs
│   │   │   │   .editorconfig
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   LICENSE.md
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   ├───dist
│   │   │   │       qs.js
│   │   │   │
│   │   │   ├───lib
│   │   │   │       formats.js
│   │   │   │       index.js
│   │   │   │       parse.js
│   │   │   │       stringify.js
│   │   │   │       utils.js
│   │   │   │
│   │   │   └───test
│   │   │           empty-keys-cases.js
│   │   │           parse.js
│   │   │           stringify.js
│   │   │           utils.js
│   │   │
│   │   ├───range-parser
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───raw-body
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───readdirp
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───router
│   │   │   │   HISTORY.md
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           layer.js
│   │   │           route.js
│   │   │
│   │   ├───safe-buffer
│   │   │       index.d.ts
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───safer-buffer
│   │   │       dangerous.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       Porting-Buffer.md
│   │   │       Readme.md
│   │   │       safer.js
│   │   │       tests.js
│   │   │
│   │   ├───semver
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   preload.js
│   │   │   │   range.bnf
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───bin
│   │   │   │       semver.js
│   │   │   │
│   │   │   ├───classes
│   │   │   │       comparator.js
│   │   │   │       index.js
│   │   │   │       range.js
│   │   │   │       semver.js
│   │   │   │
│   │   │   ├───functions
│   │   │   │       clean.js
│   │   │   │       cmp.js
│   │   │   │       coerce.js
│   │   │   │       compare-build.js
│   │   │   │       compare-loose.js
│   │   │   │       compare.js
│   │   │   │       diff.js
│   │   │   │       eq.js
│   │   │   │       gt.js
│   │   │   │       gte.js
│   │   │   │       inc.js
│   │   │   │       lt.js
│   │   │   │       lte.js
│   │   │   │       major.js
│   │   │   │       minor.js
│   │   │   │       neq.js
│   │   │   │       parse.js
│   │   │   │       patch.js
│   │   │   │       prerelease.js
│   │   │   │       rcompare.js
│   │   │   │       rsort.js
│   │   │   │       satisfies.js
│   │   │   │       sort.js
│   │   │   │       valid.js
│   │   │   │
│   │   │   ├───internal
│   │   │   │       constants.js
│   │   │   │       debug.js
│   │   │   │       identifiers.js
│   │   │   │       lrucache.js
│   │   │   │       parse-options.js
│   │   │   │       re.js
│   │   │   │
│   │   │   └───ranges
│   │   │           gtr.js
│   │   │           intersects.js
│   │   │           ltr.js
│   │   │           max-satisfying.js
│   │   │           min-satisfying.js
│   │   │           min-version.js
│   │   │           outside.js
│   │   │           simplify.js
│   │   │           subset.js
│   │   │           to-comparators.js
│   │   │           valid.js
│   │   │
│   │   ├───send
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───serve-static
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───setprototypeof
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───side-channel
│   │   │   │   .editorconfig
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───side-channel-list
│   │   │   │   .editorconfig
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   list.d.ts
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───side-channel-map
│   │   │   │   .editorconfig
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───side-channel-weakmap
│   │   │   │   .editorconfig
│   │   │   │   .eslintrc
│   │   │   │   .nycrc
│   │   │   │   CHANGELOG.md
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   tsconfig.json
│   │   │   │
│   │   │   ├───.github
│   │   │   │       FUNDING.yml
│   │   │   │
│   │   │   └───test
│   │   │           index.js
│   │   │
│   │   ├───sift
│   │   │   │   index.d.ts
│   │   │   │   index.js
│   │   │   │   MIT-LICENSE.txt
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   sift.csp.min.js
│   │   │   │   sift.csp.min.js.map
│   │   │   │   sift.min.js
│   │   │   │   sift.min.js.map
│   │   │   │
│   │   │   ├───es
│   │   │   │       index.js
│   │   │   │       index.js.map
│   │   │   │
│   │   │   ├───es5m
│   │   │   │       index.js
│   │   │   │       index.js.map
│   │   │   │
│   │   │   ├───lib
│   │   │   │       core.d.ts
│   │   │   │       index.d.ts
│   │   │   │       index.js
│   │   │   │       index.js.map
│   │   │   │       operations.d.ts
│   │   │   │       utils.d.ts
│   │   │   │
│   │   │   └───src
│   │   │           core.ts
│   │   │           index.ts
│   │   │           operations.ts
│   │   │           utils.ts
│   │   │
│   │   ├───simple-update-notifier
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───build
│   │   │   │       index.d.ts
│   │   │   │       index.js
│   │   │   │
│   │   │   └───src
│   │   │           borderedText.ts
│   │   │           cache.spec.ts
│   │   │           cache.ts
│   │   │           getDistVersion.spec.ts
│   │   │           getDistVersion.ts
│   │   │           hasNewVersion.spec.ts
│   │   │           hasNewVersion.ts
│   │   │           index.spec.ts
│   │   │           index.ts
│   │   │           isNpmOrYarn.ts
│   │   │           types.ts
│   │   │
│   │   ├───sparse-bitfield
│   │   │       .npmignore
│   │   │       .travis.yml
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │       test.js
│   │   │
│   │   ├───statuses
│   │   │       codes.json
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───supports-color
│   │   │       browser.js
│   │   │       index.js
│   │   │       license
│   │   │       package.json
│   │   │       readme.md
│   │   │
│   │   ├───to-regex-range
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───toidentifier
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───touch
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───bin
│   │   │           nodetouch.js
│   │   │
│   │   ├───tr46
│   │   │   │   index.js
│   │   │   │   LICENSE.md
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           mappingTable.json
│   │   │           regexes.js
│   │   │           statusMapping.js
│   │   │
│   │   ├───type-is
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───undefsafe
│   │   │   │   .jscsrc
│   │   │   │   .jshintrc
│   │   │   │   .travis.yml
│   │   │   │   example.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   ├───.github
│   │   │   │   └───workflows
│   │   │   │           release.yml
│   │   │   │
│   │   │   └───lib
│   │   │           undefsafe.js
│   │   │
│   │   ├───unpipe
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───validator
│   │   │   │   index.js
│   │   │   │   LICENSE
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   validator.js
│   │   │   │   validator.min.js
│   │   │   │
│   │   │   ├───es
│   │   │   │   │   index.js
│   │   │   │   │
│   │   │   │   └───lib
│   │   │   │       │   alpha.js
│   │   │   │       │   blacklist.js
│   │   │   │       │   contains.js
│   │   │   │       │   equals.js
│   │   │   │       │   escape.js
│   │   │   │       │   isAbaRouting.js
│   │   │   │       │   isAfter.js
│   │   │   │       │   isAlpha.js
│   │   │   │       │   isAlphanumeric.js
│   │   │   │       │   isAscii.js
│   │   │   │       │   isBase32.js
│   │   │   │       │   isBase58.js
│   │   │   │       │   isBase64.js
│   │   │   │       │   isBefore.js
│   │   │   │       │   isBIC.js
│   │   │   │       │   isBoolean.js
│   │   │   │       │   isBtcAddress.js
│   │   │   │       │   isByteLength.js
│   │   │   │       │   isCreditCard.js
│   │   │   │       │   isCurrency.js
│   │   │   │       │   isDataURI.js
│   │   │   │       │   isDate.js
│   │   │   │       │   isDecimal.js
│   │   │   │       │   isDivisibleBy.js
│   │   │   │       │   isEAN.js
│   │   │   │       │   isEmail.js
│   │   │   │       │   isEmpty.js
│   │   │   │       │   isEthereumAddress.js
│   │   │   │       │   isFloat.js
│   │   │   │       │   isFQDN.js
│   │   │   │       │   isFullWidth.js
│   │   │   │       │   isHalfWidth.js
│   │   │   │       │   isHash.js
│   │   │   │       │   isHexadecimal.js
│   │   │   │       │   isHexColor.js
│   │   │   │       │   isHSL.js
│   │   │   │       │   isIBAN.js
│   │   │   │       │   isIdentityCard.js
│   │   │   │       │   isIMEI.js
│   │   │   │       │   isIn.js
│   │   │   │       │   isInt.js
│   │   │   │       │   isIP.js
│   │   │   │       │   isIPRange.js
│   │   │   │       │   isISBN.js
│   │   │   │       │   isISIN.js
│   │   │   │       │   isISO15924.js
│   │   │   │       │   isISO31661Alpha2.js
│   │   │   │       │   isISO31661Alpha3.js
│   │   │   │       │   isISO31661Numeric.js
│   │   │   │       │   isISO4217.js
│   │   │   │       │   isISO6346.js
│   │   │   │       │   isISO6391.js
│   │   │   │       │   isISO8601.js
│   │   │   │       │   isISRC.js
│   │   │   │       │   isISSN.js
│   │   │   │       │   isJSON.js
│   │   │   │       │   isJWT.js
│   │   │   │       │   isLatLong.js
│   │   │   │       │   isLength.js
│   │   │   │       │   isLicensePlate.js
│   │   │   │       │   isLocale.js
│   │   │   │       │   isLowercase.js
│   │   │   │       │   isLuhnNumber.js
│   │   │   │       │   isMACAddress.js
│   │   │   │       │   isMagnetURI.js
│   │   │   │       │   isMailtoURI.js
│   │   │   │       │   isMD5.js
│   │   │   │       │   isMimeType.js
│   │   │   │       │   isMobilePhone.js
│   │   │   │       │   isMongoId.js
│   │   │   │       │   isMultibyte.js
│   │   │   │       │   isNumeric.js
│   │   │   │       │   isOctal.js
│   │   │   │       │   isPassportNumber.js
│   │   │   │       │   isPort.js
│   │   │   │       │   isPostalCode.js
│   │   │   │       │   isRFC3339.js
│   │   │   │       │   isRgbColor.js
│   │   │   │       │   isSemVer.js
│   │   │   │       │   isSlug.js
│   │   │   │       │   isStrongPassword.js
│   │   │   │       │   isSurrogatePair.js
│   │   │   │       │   isTaxID.js
│   │   │   │       │   isTime.js
│   │   │   │       │   isULID.js
│   │   │   │       │   isUppercase.js
│   │   │   │       │   isURL.js
│   │   │   │       │   isUUID.js
│   │   │   │       │   isVariableWidth.js
│   │   │   │       │   isVAT.js
│   │   │   │       │   isWhitelisted.js
│   │   │   │       │   ltrim.js
│   │   │   │       │   matches.js
│   │   │   │       │   normalizeEmail.js
│   │   │   │       │   rtrim.js
│   │   │   │       │   stripLow.js
│   │   │   │       │   toBoolean.js
│   │   │   │       │   toDate.js
│   │   │   │       │   toFloat.js
│   │   │   │       │   toInt.js
│   │   │   │       │   trim.js
│   │   │   │       │   unescape.js
│   │   │   │       │   whitelist.js
│   │   │   │       │
│   │   │   │       └───util
│   │   │   │               algorithms.js
│   │   │   │               assertString.js
│   │   │   │               checkHost.js
│   │   │   │               includesArray.js
│   │   │   │               includesString.js
│   │   │   │               merge.js
│   │   │   │               multilineRegex.js
│   │   │   │               nullUndefinedCheck.js
│   │   │   │               toString.js
│   │   │   │               typeOf.js
│   │   │   │
│   │   │   └───lib
│   │   │       │   alpha.js
│   │   │       │   blacklist.js
│   │   │       │   contains.js
│   │   │       │   equals.js
│   │   │       │   escape.js
│   │   │       │   isAbaRouting.js
│   │   │       │   isAfter.js
│   │   │       │   isAlpha.js
│   │   │       │   isAlphanumeric.js
│   │   │       │   isAscii.js
│   │   │       │   isBase32.js
│   │   │       │   isBase58.js
│   │   │       │   isBase64.js
│   │   │       │   isBefore.js
│   │   │       │   isBIC.js
│   │   │       │   isBoolean.js
│   │   │       │   isBtcAddress.js
│   │   │       │   isByteLength.js
│   │   │       │   isCreditCard.js
│   │   │       │   isCurrency.js
│   │   │       │   isDataURI.js
│   │   │       │   isDate.js
│   │   │       │   isDecimal.js
│   │   │       │   isDivisibleBy.js
│   │   │       │   isEAN.js
│   │   │       │   isEmail.js
│   │   │       │   isEmpty.js
│   │   │       │   isEthereumAddress.js
│   │   │       │   isFloat.js
│   │   │       │   isFQDN.js
│   │   │       │   isFullWidth.js
│   │   │       │   isHalfWidth.js
│   │   │       │   isHash.js
│   │   │       │   isHexadecimal.js
│   │   │       │   isHexColor.js
│   │   │       │   isHSL.js
│   │   │       │   isIBAN.js
│   │   │       │   isIdentityCard.js
│   │   │       │   isIMEI.js
│   │   │       │   isIn.js
│   │   │       │   isInt.js
│   │   │       │   isIP.js
│   │   │       │   isIPRange.js
│   │   │       │   isISBN.js
│   │   │       │   isISIN.js
│   │   │       │   isISO15924.js
│   │   │       │   isISO31661Alpha2.js
│   │   │       │   isISO31661Alpha3.js
│   │   │       │   isISO31661Numeric.js
│   │   │       │   isISO4217.js
│   │   │       │   isISO6346.js
│   │   │       │   isISO6391.js
│   │   │       │   isISO8601.js
│   │   │       │   isISRC.js
│   │   │       │   isISSN.js
│   │   │       │   isJSON.js
│   │   │       │   isJWT.js
│   │   │       │   isLatLong.js
│   │   │       │   isLength.js
│   │   │       │   isLicensePlate.js
│   │   │       │   isLocale.js
│   │   │       │   isLowercase.js
│   │   │       │   isLuhnNumber.js
│   │   │       │   isMACAddress.js
│   │   │       │   isMagnetURI.js
│   │   │       │   isMailtoURI.js
│   │   │       │   isMD5.js
│   │   │       │   isMimeType.js
│   │   │       │   isMobilePhone.js
│   │   │       │   isMongoId.js
│   │   │       │   isMultibyte.js
│   │   │       │   isNumeric.js
│   │   │       │   isOctal.js
│   │   │       │   isPassportNumber.js
│   │   │       │   isPort.js
│   │   │       │   isPostalCode.js
│   │   │       │   isRFC3339.js
│   │   │       │   isRgbColor.js
│   │   │       │   isSemVer.js
│   │   │       │   isSlug.js
│   │   │       │   isStrongPassword.js
│   │   │       │   isSurrogatePair.js
│   │   │       │   isTaxID.js
│   │   │       │   isTime.js
│   │   │       │   isULID.js
│   │   │       │   isUppercase.js
│   │   │       │   isURL.js
│   │   │       │   isUUID.js
│   │   │       │   isVariableWidth.js
│   │   │       │   isVAT.js
│   │   │       │   isWhitelisted.js
│   │   │       │   ltrim.js
│   │   │       │   matches.js
│   │   │       │   normalizeEmail.js
│   │   │       │   rtrim.js
│   │   │       │   stripLow.js
│   │   │       │   toBoolean.js
│   │   │       │   toDate.js
│   │   │       │   toFloat.js
│   │   │       │   toInt.js
│   │   │       │   trim.js
│   │   │       │   unescape.js
│   │   │       │   whitelist.js
│   │   │       │
│   │   │       └───util
│   │   │               algorithms.js
│   │   │               assertString.js
│   │   │               checkHost.js
│   │   │               includesArray.js
│   │   │               includesString.js
│   │   │               merge.js
│   │   │               multilineRegex.js
│   │   │               nullUndefinedCheck.js
│   │   │               toString.js
│   │   │               typeOf.js
│   │   │
│   │   ├───vary
│   │   │       HISTORY.md
│   │   │       index.js
│   │   │       LICENSE
│   │   │       package.json
│   │   │       README.md
│   │   │
│   │   ├───webidl-conversions
│   │   │   │   LICENSE.md
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │
│   │   │   └───lib
│   │   │           index.js
│   │   │
│   │   ├───whatwg-url
│   │   │   │   index.js
│   │   │   │   LICENSE.txt
│   │   │   │   package.json
│   │   │   │   README.md
│   │   │   │   webidl2js-wrapper.js
│   │   │   │
│   │   │   └───lib
│   │   │           encoding.js
│   │   │           Function.js
│   │   │           infra.js
│   │   │           percent-encoding.js
│   │   │           URL-impl.js
│   │   │           url-state-machine.js
│   │   │           URL.js
│   │   │           urlencoded.js
│   │   │           URLSearchParams-impl.js
│   │   │           URLSearchParams.js
│   │   │           utils.js
│   │   │           VoidFunction.js
│   │   │
│   │   └───wrappy
│   │           LICENSE
│   │           package.json
│   │           README.md
│   │           wrappy.js
│   │
│   └───src
│       │   app.js
│       │   server.js
│       │
│       ├───config
│       │       db.js
│       │       mail.js
│       │       razorpay.js
│       │
│       ├───constants
│       │       roles.js
│       │
│       ├───controllers
│       │       auth.controller.js
│       │       course.controller.js
│       │       notification.controller.js
│       │       order.controller.js
│       │       payment.controller.js
│       │       service.controller.js
│       │       user.controller.js
│       │
│       ├───middleware
│       │       auth.middleware.js
│       │       error.middleware.js
│       │       role.middleware.js
│       │
│       ├───models
│       │       Course.js
│       │       Enrollment.js
│       │       Notification.js
│       │       Order.js
│       │       Payment.js
│       │       Service.js
│       │       User.js
│       │       WalletTransaction.js
│       │
│       ├───routes
│       │       auth.routes.js
│       │       course.routes.js
│       │       notification.routes.js
│       │       order.routes.js
│       │       payment.routes.js
│       │       payment.webhook.js
│       │       service.routes.js
│       │
│       ├───utils
│       │       calculatePlatformFee.js
│       │       sendmail.js
│       │
│       └───validators
│               auth.validator.js
│               order.validator.js
│               payment.validator.js
│               service.validatior.js
│
└───STB-Frontend
    │   about.html
    │   blog-detail.html
    │   blog.html
    │   client-dashboard.html
    │   contact.html
    │   earner-dashboard.html
    │   footer.html
    │   home.html
    │   learner-dashboard.html
    │   learner-detail.html
    │   learner-player.html
    │   learner-zone.html
    │   marketplace.html
    │   navbar.html
    │   privacy.html
    │   profile.html
    │   signup-login.html
    │   terms.html
    │
    ├───assetes
    │   ├───fonts
    │   ├───icon
    │   ├───images
    │   └───videos
    ├───css
    │   │   about.css
    │   │   blog.css
    │   │   client-dashboard.css
    │   │   contact.css
    │   │   earner-dashboard.css
    │   │   home.css
    │   │   learner.css
    │   │   marketplace.css
    │   │   privacy.css
    │   │   profile.css
    │   │   signup.css
    │   │   style.css
    │   │   terms.css
    │   │
    │   └───components
    │           cards.css
    │           footer.css
    │           navbar.css
    │
    ├───data
    │       courses.json
    │
    ├───images
    │   │   hero-image.png
    │   │   logo.png
    │   │
    │   ├───blogs
    │   │       blog1.jpg
    │   │       blog2.jpg
    │   │       blog3.jpg
    │   │
    │   ├───learners
    │   │       ai.png
    │   │       computer.png
    │   │       earning.png
    │   │       graphic-design.png
    │   │       smartphone.png
    │   │
    │   └───marketplace
    │       │   chef.png
    │       │   cleaning.png
    │       │   creative-services.png
    │       │   home-tutors.png
    │       │   installation.png
    │       │   maid.png
    │       │   repair.png
    │       │
    │       ├───cleaning
    │       │       ac-cleaning.png
    │       │       bathroom.png
    │       │       cooler-cleaning.png
    │       │       full-house.png
    │       │       hall.png
    │       │       kitchen.png
    │       │       water-tank.png
    │       │
    │       ├───creative-services
    │       │       content-writing.png
    │       │       digital-marketing.png
    │       │       logo-design.png
    │       │       long-video-editing.png
    │       │       poster-design.png
    │       │       short-video-editing.png
    │       │       social-media-management.png
    │       │       social-media-post.png
    │       │
    │       ├───installation
    │       │       ac-installation.png
    │       │       fan-installation.png
    │       │       lightboard.png
    │       │
    │       └───repair
    │               ac-repair.png
    │               bike-repair.png
    │               car-repair.png
    │               cooler-repair.png
    │               electrician.png
    │               fan-repair.png
    │               mixer.png
    │               painter.png
    │               plumbing.png
    │               refrigerator.png
    │               washing-machine.png
    │
    └───js
        │   blog-detail.js
        │   blog.js
        │   client-dashboard.js
        │   contact.js
        │   earner-dashboard.js
        │   home.js
        │   learner-dashboard.js
        │   learner-detail.js
        │   learner-player.js
        │   learner.js
        │   main.js
        │   marketplace.js
        │   profile.js
        │   signup.js
        │
        └───utils
                api.js
                form-validation.js
                helpers.js
---

## 🔐 Authentication Flow

* User registers (Client / Earner)
* Password hashed (bcrypt)
* JWT issued on login
* Protected routes use auth middleware

No token = no access. Simple.

---

## 💳 Payment Flow (Razorpay)

1. Client creates an order
2. Razorpay order generated (server-side)
3. Payment completed on frontend
4. Razorpay webhook hits backend
5. Signature verified
6. Order status updated in DB

If webhook fails → payment is NOT trusted.

---

## ⚙️ Environment Variables

Create a `.env` file in backend root:

```
PORT=5000
MONGO_URI=mongodb+srv://skilltobill469_db_user:stb469@khushi.ezlifwq.mongodb.net/stb?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

No `.env` = app won’t run. Don’t be careless.

---

## ▶️ How to Run Locally

### Backend

```
npm install
npm run dev
```

### Frontend

```
npm install
npm start
```

Backend runs on `http://skilltobill-backend.onrender.com:5000`

---

## 📌 Current Status

* ✅ Auth system
* ✅ User roles (Client / Earner)
* ✅ Service module
* ✅ Order flow
* ✅ Razorpay integration
* ⏳ UI polish
* ⏳ Community features

This is an MVP. Stop expecting perfection.

---

## 🧠 Founder Note (Reality Check)

SkillToBill is being built with **limited resources**, **real constraints**, and **no fake hype**.

The goal right now:

* Validate
* Get users
* Improve fast

Scale comes later. Ego doesn’t.

---

## 📄 License

Private project. All rights reserved.

---
