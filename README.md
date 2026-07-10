> [!NOTE]
> This new unified FreeCAD website is in a WIP migration phase.
> The current official website repository is still [FreeCAD-Homepage](https://github.com/FreeCAD/FreeCAD-Homepage) for now.


# FreeCAD website

[Contributions](#contributions) •
[Structure](#structure) •
[CMS](#cms) •
[Theme](#theme) •
[Tips](#tips) •
[License](#license)


Welcome to the source of the [FreeCAD website](https://www.freecad.org)!

The content, assets, theme code and style are all gathered in this repository. The site is statically generated thanks to [Hugo](https://gohugo.io/), a fast and flexible static site generator written in Golang.

The [website documentation](https://freecad.github.io/Website/dev/web) in the Development handbook provides usage explanations and guidelines with many detailed examples.

For other parts of FreeCAD web ecosystem, head to:

- [FreeCAD software source](https://github.com/FreeCAD/FreeCAD)
- [FreeCAD Wiki](https://wiki.freecad.org/)
- [FreeCAD Developers Handbook](https://freecad.github.io/DevelopersHandbook/) and [its source](https://github.com/FreeCAD/DevelopersHandbook)
- [FreeCAD Forum](https://forum.freecad.org/)
- [FreeCAD Project Association](https://fpa.freecad.org/) and [its source](https://github.com/FreeCAD/FPA)


## Contributions

Contributions are always welcome!

The FreeCAD website source is freely accessible and open just like FreeCAD.

When contributing to the website, keep in mind that it acts as the public face of the FreeCAD organization and community. Substantial changes must be discussed beforehand via its usual communication channels (e.g. [GitHub](https://github.com/FreeCAD/Website/issues), [Matrix chat](https://matrix.to/#/#FreeCAD_FreeCAD:gitter.im), [Forum](https://forum.freecad.org/)). [FreeCAD's code of conduct](https://github.com/FreeCAD/Website/blob/main/CODE_OF_CONDUCT.md) must be observed at any time.

Contributions of all kinds are welcome: content, translations, bug fixes, theme improvements, testing, documentation, bug reports, and more... Depending on the scope, some basic know-how of Git, Markdown, HTML, CSS, Javascript, YAML/JSON and Hugo template syntax is recommended. Create appropriate [feature issues](https://github.com/FreeCAD/Website/issues) to discuss substantial changes before submitting Pull Requests. Also use the appropriate [Pull Request template](https://github.com/FreeCAD/Website/pulls) and make sure reviewers are assigned.

Please read the [Website introduction and Guidelines](https://freecad.github.io/Website/dev/web/start).

For bug report, use the provided [bug issues](https://github.com/FreeCAD/Website/issues) template.

Thank you!


## Structure

### Use and navigation overview

The website uses a simple folder-based structure. The Homepage links to main sections (e.g. Features, Download, News) which may contain sub-sections (e.g. Release notes, User documentation). All content is stored in files and the structure is kept to a minimum number of levels for ease.

The website is multilingual, with English being the default language. Available translated content in any enabled language is accessible using the language dropdown in the header.

A light and dark chroma version of the Theme is available on the sun/moon icon on the top header.

### Technical overview

[Hugo](https://gohugo.io), the static site generator used, takes the plain-text content (typically Markdown) and data files (typically CSV, JSON, XML and YAML), marries them to an appropriate set of templates and produces a complete set of HTML pages (with CSS and Javascript) that can be served by any generic standalone web server.

To understand how Hugo works, read its [Official documentation](https://gohugo.io/documentation/).


## CMS

A server-less Content Management System is available to manage content easily. It is based on the [Sveltia CMS](https://github.com/sveltia/sveltia-cms) project. A single JavaScript interacts with the Git repository of the website. It can be used locally on supported web browsers (currently only Chromium-based) or via a GitHub PAT login. Pages, translations and resources such as illustrations can be added, edited or deleted directly from the content panel of available collections.

Learn more [how to use the CMS](https://freecad.github.io/Website/dev/web/cms) for the FreeCAD website.


## Theme

The custom-made Trigo Theme is used. It is included directly in the `themes/trigo` directory. Read its [own documentation](https://freecad.github.io/Website/dev/web/theme) to find out more.


## License

This repository is licensed under the [GNU Lesser General Public License Version 2.1](https://github.com/FreeCAD/Website/blob/main/LICENSE "Read the license text").

### Content

Content of the website is licensed under [Creative Commons Attribution ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/ "Read the license"). By default, it is copyrighted by and attributed to "FreeCAD". If they wish so, authors can specify the respective attribution for the content they produce. For Markdown files, the attribution is specified in the `author` field of the Front Matter.

By submitting Pull Requests to this repository, make sure who is the author of the content. Make sure rights to share under the CC-BY-SA 4.0 license and original author mention are respected. Also note that sharing images with people is subject to obtaining appropriate consent.

### FreeCAD branded resources

The trademark of FreeCAD branded resources (e.g. FreeCAD logo) is registered and owned by the [FreeCAD Project Association](https://fpa.freecad.org/handbook "Read the FPA Handbook").

### Trigo Theme for Hugo

The `Trigo` Theme is licensed under the [MIT License](https://github.com/FreeCAD/Website/blob/main/themes/trigo/LICENSE "Read the license text").
