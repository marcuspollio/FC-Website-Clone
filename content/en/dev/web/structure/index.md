---
title: Structure and organization
description: How to organize the website files.
weight: 3
---


## Directory Structure

By default, Hugo looks for Markdown files in the `/content` directory, and the structure of the directory determines the final output structure of your website.

Take this site as an example:

{{< tree >}}
  {{< branch label="/content" >}}
    {{< leaf label="_index.md  ← / (homepage)" >}}
    {{< branch label="docs" state="open" >}}
      {{< leaf label="_index.md  ← /docs/" >}}
      {{< branch label="getting-started" >}}
        {{< leaf label="index.md  ← /docs/getting-started/" >}}
      {{< /branch >}}
      {{< branch label="guide" >}}
        {{< leaf label="_index.md  ← /docs/guide/" >}}
        {{< leaf label="organize-files.md  ← /docs/guide/organize-files/" >}}
      {{< /branch >}}
    {{< /branch >}}
    {{< branch label="blog" state="open" >}}
      {{< leaf label="_index.md  ← /blog/" >}}
      {{< leaf label="post.md  ← /blog/post/" >}}
      {{< branch label="article" >}}
        {{< leaf label="index.md  ← /docs/article/" >}}
      {{< /branch >}}
    {{< /branch >}}
  {{< /branch >}}
{{< /tree >}}

Each `_index.md` file is the index page for the corresponding section. The other Markdown files are regular pages, placed directly in the section directory, or nested in their own sub-directory.

### Configure Content Directory

By default, the root `/content` directory is used by Hugo to build the site.
If you need to use a different directory for content, for example `/docs`, this can be done by setting the [`contentDir`](https://gohugo.io/getting-started/configuration/#contentdir) parameter in the site configuration `hugo.yaml`.


## Resources

In addition to text content, Hugo supports a wide range of additional resources, such as images, animations, vector graphics, videos, PDF, JSON, CSV, and many more medias and data formats.

> [!NOTE]
> For the FreeCAD website, page bundles are used, so it is easier to organize large amount of content and resources in a nested structure.
>
> Additionally, each language is organized into its own root content directory (e.g `/content/en/`). Resources only need to go into the default language site (`en` for English), as other languages are linked automatically.

### Page bundles

To add resources, the easiest way is to place these files together in the same directory as the Markdown file.

The [page bundles][page-bundles] feature of Hugo allows to organize content and resource files neatly. To achieve that, turn the `my-page.md` file into a directory `my-page`, put the content into a Markdown file named `index.md`, and put the resource files inside the `my-page` directory.

For example, add an image file `image.webp` alongside the `my-page.md` file:

{{< tree >}}
  {{< branch label="content" >}}
    {{< branch label="section" >}}
        {{< leaf label="my-page.md" >}}
        {{< leaf label="image.webp" >}}
    {{< /branch >}}
  {{< /branch >}}
{{< /tree >}}

Then, can use the following Markdown syntax to add the image to the content:

```markdown {file="content/en/section/my-page/index.md"}
![alt](image.webp "title")
```

### Static and Assets

Alternatively, it is possible to place resources in the `static` and `assets` root directories, which will make the resources available for all pages:

{{< tree >}}
  {{< branch label="static" >}}
    {{< branch label="images" >}}
        {{< leaf label="image.webp" >}}
    {{< /branch >}}
  {{< /branch >}}
  {{< branch label="content" >}}
    {{< branch label="section" >}}
        {{< leaf label="my-page.md" >}}
    {{< /branch >}}
  {{< /branch >}}
{{< /tree >}}

> [!NOTE]
> The path for a resource in the static directory begins with a slash `/`.

```markdown {file="content/section/my-page.md"}
![alt](/images/image.webp "title")
```

[page-bundles]: https://gohugo.io/content-management/page-bundles/#leaf-bundles
