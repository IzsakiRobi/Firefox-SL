# Firefox SL Companion

This WebExtension adds the top inset required by Firefox-SL's content-under-toolbar effect. It uses 52px for one horizontal tab or vertical tabs, and 90px for multiple horizontal tabs.

Install the signed `SL-Companion.xpi` from the Firefox-SL v1.3 release. The extension does not sample page colors or collect data.

The helper cannot modify privileged Firefox pages, Reader View, the PDF viewer or restricted Mozilla domains. Sites with fixed headers, inner scrolling containers or unusual root layouts may still need site-specific handling.

To use Firefox-SL without content under the toolbar, set the Boolean preference `sl.content-under-toolbar.disabled` to `true` in `about:config`; the helper can then be removed.
