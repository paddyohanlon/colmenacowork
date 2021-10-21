# Página de web de La Colmena

La Colmena será un espacio de coworking rural, situado en Prado del Rey, Cádiz, Andalucía, abriendo sus puertas en 2021.

Web hecho con [Jekyll](https://jekyllrb.com/).

## Translations

Jekyll has been made multilingual mostly following [this approach](https://sylvaindurand.org/making-jekyll-multilingual/).

## Social images

- 1200px wide x 628px high.

## Featured images

Images the appear at the top of blog posts.

- @1x: 568px wide x 379px high. (`image-name.jpg`)
- @2x: 1136px wide x 757px high. (`image-name@2x.jpg`)

## Front matter

`keywords:` is included for the primary keyword a post is aimed at. E.g. `que es un freelance` would only appear on the Spanish version of the post for this keyword, the English translation would not have that meta attribute. The attribute is informational only, it is not used in templates.

`canonical_url:` should appear on all English pages. E.g. `canonical_url: https://colmenacowork.es/que-es-un-freelance-guia-completa`

## Running locally

Install Jekyll:

```
gem install bundler jekyll
```

Serve locally:

```bash
bundle exec jekyll serve
```

Build for production:

```bash
bundle exec jekyll build
```
