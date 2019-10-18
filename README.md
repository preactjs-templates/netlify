# netlify
A preactjs and netlify CMS template.

![Lighthouse-Badge](https://img.shields.io/badge/lighthouse-100%2F100-brightgreen.svg)

## Documentation
- This is the netlify template for [preact-cli](https://github.com/developit/preact-cli).
- [For Preact](https://preactjs.com/): General information about how to work with Preact, not specific to this template

## Usage

``` bash
$ npm install -g preact-cli
$ preact create netlify my-project
$ cd my-project
$ npm install
$ npm run dev
```

Development server runs on port `8080`. If the default port is already in use on your machine it will start the development server on a random port.

## Commands

- `npm run start`: Runs `serve` or `dev`, depending on `NODE_ENV` value. Defaults to `dev server`

- `npm run dev`: Run a development, HMR server

- `npm run build`: Production-ready build

- `npm run lint`: Pass JavaScript files using ESLint

- `npm run test`: Run Jest and [`preact-render-spy`](https://github.com/mzgoddard/preact-render-spy) for your tests

### How to setup Netlify CMS

- Deploy on netlify using the CLI or the Netlify bot for [github](https://app.netlify.com/start).

- Enable Git gateway https://docs.netlify.com/visitor-access/git-gateway/.

- Enable Identity for your app https://docs.netlify.com/visitor-access/identity/.

- For most Blogs, change (Identity > Settings > Registration preferences) to invite only.

- Invite yourself to the Identity tab in Netlify console.

- Accept the invite from you mail.

- Done 👍🏻.

*Note:* Go to `https://<your-domain>/admin` in order to access Netlify CMS.


### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `preact-cli`:

``` bash
preact create username/repo my-project
```
