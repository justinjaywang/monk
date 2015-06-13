**Monk** is a simple, unadorned [Hexo](http://hexo.io/) theme. It is deliberately designed for a focused reading experience.

### Installation

Monk uses Less to compile the CSS, so you'll need to install the [Less renderer](https://github.com/hexojs/hexo-renderer-less) in your Hexo project.

``` bash
npm install hexo-renderer-less --save
```

Next, add the theme source to your `themes/` directory. You can either

1. clone the theme repository or 
2. add the theme repository as a submodule within another git project.

``` bash
git clone https://github.com/justinjaywang/monk.git themes/monk
```

``` bash
git submodule add https://github.com/justinjaywang/monk.git themes/monk
```

Finally, edit your Hexo project's configuration file, `_config.yml`, and set `theme` as `monk`.

### Configuration

- Set the blog title in `languages/default.yml`. You can also customize the navigation labels here.
- Add your Google Analytics tracking ID in the theme configuration file.
- Set the number of posts per page in your Hexo project configuration file.

### Update

Pull from the theme repository.

``` bash
cd themes/monk
git pull
```
