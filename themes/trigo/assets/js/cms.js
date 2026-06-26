/*!
SPDX-License-Identifier: MIT
SPDX-FileCopyrightText: 2026 FreeCAD
SPDX-FileNotice: Part of the Trigo theme for Hugo.
*/

/*
CMS custom Editor Components:
- Register components for Hugo shortcodes.
- Define fields, pattern, fromBlock, toBlock, and toPreview.

Note: See Sveltia CMS docs for info: https://sveltiacms.app/en/docs/api/editor-components
TODO: investigate and fix <video> and PDF <iframe> as the preview does not work for now. Maybe bug on Sveltia side.
*/


CMS.init();

CMS.registerEditorComponent({
  id: 'video',
  label: 'Video file',
  icon: 'video_file',
  fields: [
    { name: 'src', label: 'Video file', widget: 'file' },
    { name: 'poster', label: 'Poster image (optional)', widget: 'image', required: false },
    { name: 'caption', label: 'Caption (optional)', widget: 'string', required: false },
  ],
  pattern:
    /{{< video src="(?<src>.*?)"(?: poster="(?<poster>.*?)")?(?: caption="(?<caption>.*?)")? >}}/m,

  fromBlock: ({ groups: { src, poster, caption } = {} }) => ({
    src,
    poster: poster || undefined,
    caption: caption || undefined,
  }),

  toBlock: ({ src, poster, caption }) =>
    `{{< video src="${src}"${poster ? ` poster="${poster}"` : ''}${caption ? ` caption="${caption}"` : ''} >}}`,

  toPreview: ({ src, poster, caption }) =>
    `<figure style="max-width:80%;border-radius:var(--sui-textbox-border-radius);background:var(--sui-secondary-background-color);">
      <video preload="metadata" controls playsinline ${poster ? `poster="${poster}"` : ''}>
        <source src="${src}">Video tag not supported in browser.
      <video>
      ${caption ? `<figcaption>${caption}</figcaption>` : ''}
    </figure>`
});

CMS.registerEditorComponent({
  id: 'youtube',
  label: 'YouTube',
  icon: 'youtube_activity',
  mode: 'dialog',
  summary: '▶ YouTube: {{ id }}',
  fields: [
    { name: 'id', label: 'Youtube ID', widget: 'string' },
  ],
  pattern: /{{< youtube id="(?<id>.*?)" >}}/m,

  fromBlock: ({ groups: { id } = {} }) => ({
    id,
  }),

  toBlock: ({ id }) =>
    `{{< youtube id="${id}" >}}`,

  toPreview: ({ id }) =>
    `<div style="max-width:80%;border-radius:var(--sui-textbox-border-radius);position:relative;padding-top:56.25%;">
      <iframe src="https://www.youtube-nocookie.com/embed/${id}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allowfullscreen allow="encrypted-media; picture-in-picture"></iframe>
    </div>`
});

CMS.registerEditorComponent({
  id: 'peertube',
  label: 'PeerTube',
  icon: 'video_library',
  mode: 'dialog',
  summary: '✱ PeerTube: {{ url }}',
  fields: [
    { name: 'url', label: 'PeerTube URL', widget: 'string' },
    { name: 'start', label: 'Start time (optional)', widget: 'string', required: false, hint: 'E.g. 42s, 1m10s' },
    { name: 'stop', label: 'Stop time (optional)', widget: 'string', required: false, hint: 'E.g. 90s, 2m30s' },
  ],
  pattern:
    /{{< peertube url="(?<url>.*?)"(?: start="(?<start>.*?)")?(?: stop="(?<stop>.*?)")? >}}/m,

  fromBlock: ({ groups } = {}) => ({
    url: groups?.url,
    start: groups?.start || undefined,
    stop: groups?.stop || undefined,
  }),

  toBlock: ({ url, start, stop }) =>
    `{{< peertube url="${url}"${start ? ` start="${start}"` : ''}${stop ? ` stop="${stop}"` : ''} >}}`,

  toPreview: ({ url }) =>
    `<div style="max-width:80%;border-radius:var(--sui-textbox-border-radius);position:relative;padding-top:56.25%;">
      <iframe src="${url}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allowfullscreen></iframe>
    </div>`
});

CMS.registerEditorComponent({
  id: 'button',
  label: 'Button',
  icon: 'buttons_alt',
  mode: 'dialog',
  summary: '★ Button: {{ label }}',
  fields: [
    { name: 'url', label: 'URL', widget: 'string' },
    { name: 'label', label: 'Label', widget: 'string' },
    { name: 'icon', label: 'Icon (optional)', widget: 'string', required: false, hint: 'See the icons assets gallery for possible values (just use the filename, no svg extension).' },
    { name: 'css_class', label: 'CSS class (optional)', widget: 'string', required: false },
  ],
  pattern:
    /{{< button url="(?<url>.*?)"(?: label="(?<label>.*?)")?(?: icon="(?<icon>.*?)")?(?: css_class="(?<css_class>.*?)")? >}}/m,

  fromBlock: ({ groups }) => ({
    url: groups?.url,
    label: groups?.label,
    icon: groups?.icon || undefined,
    css_class: groups?.css_class || undefined,
  }),

  toBlock: ({ url, label, icon, css_class }) =>
    `{{< button url="${url}" label="${label}"${icon ? ` icon="${icon}"` : ''}${css_class ? ` css_class="${css_class}"` : ''} >}}`,

  toPreview: ({ url, label, icon }) =>
    `<a href="${url}" style="display:block;width:fit-content;margin:0.75rem auto;padding:0.75rem 1.5rem;background:var(--sui-primary-accent-color);color:white;border-radius:var(--sui-button-medium-border-radius);text-decoration:none;">
      ${icon ? `<span style="opacity:0.8;margin-right:0.5rem;">[★ ${icon}]</span>${label}` : `${label}`}
    </a>`
});

CMS.registerEditorComponent({
  id: 'details',
  label: 'Details',
  icon: 'top_panel_open',
  fields: [
    { name: 'summary', label: 'Summary', widget: 'string', default: 'Details' },
    { name: 'open', label: 'Open', widget: 'boolean', default: true },
    { name: 'content', label: 'Content', widget: 'richtext' },
  ],
  pattern:
    /{{< details summary="(?<summary>.*?)"(?: open="(?<open>.*?)")? >}}\s*(?<content>[\s\S]+?)\s*{{< \/details >}}/m,

  toBlock: ({ summary, open, content }) =>
    `{{< details summary="${summary}"${open ? ` open="true"` : ''} >}}
${content}
{{< /details >}}`,

  toPreview: ({ summary, open, content }) =>
    `<details ${open ? 'open' : ''} style="background:var(--sui-secondary-background-color);border-radius:var(--sui-textbox-border-radius);">
      <summary style="padding:0.75rem;background:var(--sui-tertiary-background-color);border-radius:var(--sui-button-medium-border-radius);">${summary || '(no summary)'}</summary>
      <div style="padding:0.75rem;">${content}</div>
    </details>`,
});

CMS.registerEditorComponent({
  id: 'pdf',
  label: 'PDF',
  icon: 'picture_as_pdf',
  mode: 'dialog',
  summary: '❖ PDF: {{ path }}',
  fields: [
    { name: 'path', label: 'PDF File', widget: 'file' },
    { name: 'title', label: 'Title (optional)', widget: 'string', required: false },
  ],
  pattern:
    /{{<\s*pdf(?:\s+path="(?<path>.*?)")?(?:\s+title="(?<title>.*?)")?\s*>}}/m,

  fromBlock: ({ groups }) => ({
    path: groups?.path || '',
    title: groups?.title || '',
  }),

  toBlock: ({ path, title }) =>
    `{{< pdf path="${path}"${title ? ` title="${title}"` : ''} >}}`,

  toPreview: ({ path, title }) =>
    `<div style="max-width:80%;border-radius:var(--sui-textbox-border-radius);background:var(--sui-secondary-background-color);overflow:hidden;">
      <iframe src="${path}" style="width:100%;max-height:15rem;border:0" loading="lazy"></iframe>
    </div>`,
});

CMS.registerEditorComponent({
  id: 'block',
  label: 'Block layout',
  icon: 'add_box',
  fields: [
    { name: 'title', label: 'Title (optional)', widget: 'string', required: false },
    { name: 'content', label: 'Content', widget: 'richtext' },
    { name: 'css_class', label: 'CSS class (optional)', widget: 'string', required: false },
    { name: 'title_class', label: 'Title CSS class (optional)', widget: 'string', required: false },
    { name: 'content_class', label: 'Content CSS class (optional)', widget: 'string', required: false },
  ],
  pattern:
    /{{< block(?: title="(?<title>.*?)")?(?: css_class="(?<css_class>.*?)")?(?: title_class="(?<title_class>.*?)")?(?: content_class="(?<content_class>.*?)")? >}}\s*(?<content>[\s\S]+?)\s*{{< \/block >}}/m,

  toBlock: ({ title, content, css_class, title_class, content_class }) =>
    `{{< block${title ? ` title="${title}"` : ''}${css_class ? ` css_class="${css_class}"` : ''}${title_class ? ` title_class="${title_class}"` : ''}${content_class ? ` content_class="${content_class}"` : ''} >}}
${content}
{{< /block >}}`,

  toPreview: ({ title, content }) =>
    `<div style="margin:0.75rem auto;padding:0.75rem;background:var(--sui-secondary-background-color);border-radius:var(--sui-textbox-border-radius);">
      ${title ? `<h3 style="margin:0.75rem auto;text-align:center;">${title}</h3>` : ''}
      <div>${content}</div>
    </div>`,
});

CMS.registerEditorComponent({
  id: 'group',
  label: 'Group layout',
  icon: 'cards',
  fields: [
    { name: 'content', label: 'Content', widget: 'richtext' },
    { name: 'css_class', label: 'CSS class (optional)', widget: 'string', required: false },
  ],
  pattern:
    /{{< group(?: css_class="(?<css_class>.*?)")? >}}\s*(?<content>[\s\S]+?)\s*{{< \/group >}}/m,

  toBlock: ({ content, css_class }) =>
    `{{< group${css_class ? ` css_class="${css_class}"` : ''} >}}
${content}
{{< /group >}}`,

  toPreview: ({ content }) =>
    `<div style="margin:0.75rem auto;padding:0.75rem;background:var(--sui-primary-background-color);border-radius:var(--sui-textbox-border-radius);">
      ${content}
    </div>`,
});