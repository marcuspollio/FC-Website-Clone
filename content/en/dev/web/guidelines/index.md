---
title: Guidelines
description: Guidelines for contributing to the website.
weight: 2
---


Is it recommended to use the [Content Management System](cms) to add, edit and delete content, such as pages, translations, and resources, as it provides a user-friendly interface, adequate settings and pre-configured forms that facilitate the contributing workflow.

Nevertheless, please read the few following guidelines to ensure contributions are in line with the project's standards and help make the process easier and efficient for everyone involved.


## Text

- Texts use a clear, concise, straightforward and inclusive language that welcomes readers from diverse backgrounds and communities (e.g. non-tech, skills, cultures).
- A friendly and supportive tone is used reflecting the free and open-source community collaborative spirit.
- Texts should be easy to translate. If in doubt, ask a translator.
- Texts focus on user benefits in practical and relatable terms that highlight how FreeCAD contribute to solving real-world challenges (e.g. design, engineering, community, free and open-source development).
- Prefer using the active voice when possible (e.g. subject is the agent: "subject does action", instead of passive voice where subject is recipient: "action is done by subject") and break complex ideas into simpler and digestible explanations.
- Use dedicated Markdown and shortcode features to enhance the content, layout, and text with adequate formant and style.
- Sometimes an illustration is worth a thousand words.


## Translations

To improve translations and add locales, see the dedicated [locales page](locales).

Current supported languages are defined in the general site configuration `config/_default/languages.yaml`.

Content translations are stored in separate content root directories, e.g. `/content/en/` and `/content/zh/`. Page resources such as images, videos, and more, only need to be placed in the default language site (`en` for English), using the [page bundle](https://gohugo.io/content-management/page-bundles/) approach, as they are automatically linked among languages.

Translations of the Theme are handled by translations tables in `themes/trigo/i18n`.

Before a new language is enabled, the main navigation pages (Homepage, Features, Download, News, Community, Documentation and Donate) and the Theme strings must be translated. If willing to add a new language, use the provided [feature issue](https://github.com/FreeCAD/Website/issues) template indicating who will translate and who will proof-read/review.

The [CMS](cms#manage-translations) allows to edit and add translated content easily, based on the original English content, and provides automatic online translation services via API keys.


## Illustrations

- Images in hero cover and page content are used to illustrate the page message and purpose, and additionally highlight related and successful projects.
- Texts in illustrations are avoided if possible for translation reasons. Attribution and license are respected at all times. If photos depict human beings, a consent agreement is submitted accordingly.
- It is highly recommended to add illustrations files along the page Markdown file in the same directory, using the [page bundle](https://gohugo.io/content-management/page-bundles/) approach, so they can be processed by the static site generator templates. For internal resources, relative links are used instead of absolute links.
- Caption and alternate text are provided when adequate:

```md
![alternative text for image](img.webp “image caption”)
```

Please avoid adding links to images (e.g. `[![alt](img.webp)](link)`) as the Markdown parser and render hooks mix HTML block-level with inline elements, which is invalid. Use the `figure` shortcode instead, or add links to nearby heading, text or caption.

A minimum width of about 2000 pixels is recommended. A square or landscape format ratio of 2:1 maximum are recommended. The WebP graphics file format is recommended, with a compression quality of about 80%. Animated GIF and WEBP files are supported, the latter being recommended. AVIF is currently not supported. Media metadata can be stripped, as they are currently not used.

The theme templates resize and crop images at build time depending on their use. The Content Management System also resizes uploaded images at the correct resolution. In most cases, content contributors only need to add one WebP file about 2000px wide.

Several theme [shortcodes](shortcodes) are available to enhance the layout and arrangement of multiple illustrations.


## Theme and configuration

To tweak or enhance the Trigo theme and the FreeCAD website configuration, see the dedicated [theme page](theme) and the [theme ReadMe](https://github.com/FreeCAD/Website/tree/main/themes/trigo#readme).


## Licensing

The whole FreeCAD website repository is licensed under the [GNU Lesser General Public License Version 2.1](https://github.com/FreeCAD/Website/blob/main/LICENSE "Read the license text").

### Content

Content of the website is licensed under [Creative Commons Attribution ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/ "Read the license"). By default, it is copyrighted by and attributed to "FreeCAD". If they wish so, authors can specify the respective attribution for the content they produce. For Markdown files, the attribution is specified in the `author` field of the Front Matter.

By submitting Pull Requests to this repository, make sure who is the author of the content. Make sure rights to share under the CC-BY-SA 4.0 license and original author mention are respected. Also note that sharing images with people is subject to obtaining appropriate consent.

### FreeCAD branded resources

The trademark of FreeCAD branded resources (e.g. FreeCAD logo) is registered and owned by the [FreeCAD Project Association](https://fpa.freecad.org/handbook "Read the FPA Handbook").

### Trigo Theme for Hugo

The `Trigo` Theme is licensed under the [MIT License](https://github.com/FreeCAD/Website/blob/main/themes/trigo/LICENSE "Read the license text").