# Website

モブ猫ショップのドキュメントサイト。  
`docusaurus` を使っています。

### 開発環境

`WSL` + `docker` + `devContainer` で開けます。  
ローカルの `~/.bash_aliases` を使うので、ファイルだけは作成します。

```
$ touch ~/.bash_aliases
```

`node.js` があればローカルでも開けます。

### ローカル開発

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

ビルドは `github actions` にやってもらうので不要。

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

デプロイは `github actions` にやってもらうので不要。

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
