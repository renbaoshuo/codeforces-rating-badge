# Codeforces Rating Badge

## Demo

![](https://cfrating.rbs.workers.dev/?username=renbaoshuo)

## Deploy

Login into Cloudflare Dashboard and enter `Workers` App. Create a new script, delete default code in the editor, and then copy [the `woker.js` content](https://github.com/renbaoshuo/codeforces-rating-badge/blob/master/worker.js) into the editor.

Optional: After saving the workers script, you can register a route for the scripts.

## Usage

Just insert the link into your website as an image, like this: `<img src="https://cfrating.rbs.workers.dev/?username=renbaoshuo">`

Do not forget to replace the default configuration with your own!

## Advanced

If you want to restrict your workers only for your website, all you need to do is to edit a few lines of your workers:

- Launch Cloudflare Workers Editor again.
- You can see some commented out code at the first line like this:

```javascript
// const AllowedReferrer = 'baoshuo.ren';
```

- replace your domain with `baoshuo.ren`, then remove `//`.

> **Notice**: set `AllowedReferrer` value to `baoshuo.ren` means all the subdomains of `baoshuo.ren` will be allowed as well.

## Author

**Codeforces Rating Badge** © [Baoshuo](https://github.com/renbaoshuo), Released under the [MIT](https://github.com/renbaoshuo/codeforces-rating-badge/blob/master/LICENSE) License.<br>
Authored and maintained by Baoshuo with help from contributors ([list](https://github.com/renbaoshuo/codeforces-rating-badge/graphs/contributors)).

> [Personal Website](https://baoshuo.ren) · [Blog](https://blog.baoshuo.ren) · GitHub [@renbaoshuo](https://github.com/renbaoshuo) · Twitter [@renbaoshuo](https://twitter.com/renbaoshuo)
