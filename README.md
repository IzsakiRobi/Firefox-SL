> [!IMPORTANT]
> Firefox 157 users must set `browser.nova.enabled` to `false` and `toolkit.legacyUserProfileCustomizations.stylesheets` to `true` in `about:config`, then fully restart Firefox.

# Firefox-SL

<p align="center">
  <a href="Screens/Main-Window.png"><img src="Screens/Main-Window.png" alt="Firefox-SL main window" width="32%"></a>
  <a href="Screens/URL-Bar.png"><img src="Screens/URL-Bar.png" alt="Firefox-SL URL bar" width="32%"></a>
  <a href="Screens/Download-Box.png"><img src="Screens/Download-Box.png" alt="Firefox-SL download box" width="32%"></a>
</p>

Firefox-SL is a Safari-like Firefox chrome theme for macOS.

## Version

v1.3

## What's new in v1.3

- Updated for Firefox 157.
- Refined translucent toolbar, URL bar and popup menu styling.
- Updated toolbar icons.
- Improved menu spacing, corner radii, hover states and toolbar button alignment.
- Added optional content-under-toolbar support with the signed SL Companion helper.
- Kept restricted Firefox pages below the translucent toolbar without helper access.
- Fixed duplicated or stale toolbar spacing after a full Firefox restart.

## Install

1. Download and extract [Firefox-SL-v1.3.zip](https://github.com/IzsakiRobi/Firefox-SL/releases/download/v1.3/Firefox-SL-v1.3.zip).
2. Open `about:profiles` in Firefox.
3. Find the profile in use, then click **Show in Finder** next to **Root Directory**.
4. Quit Firefox and back up any existing `chrome` folder.
5. Copy the extracted `chrome` folder into the profile root.
6. Open `about:config`, set `browser.nova.enabled` to `false`, and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`.
7. Start Firefox again.

## SL Companion helper

The theme's content-under-toolbar effect requires the signed SL Companion extension. Install it from the separate [SL-Companion.xpi download](https://github.com/IzsakiRobi/Firefox-SL/releases/download/v1.3/SL-Companion.xpi), or open the copy included in the installed `chrome` folder with Firefox and approve the installation prompt.

Without the helper, normal webpages can begin underneath the toolbar. If you do not want this effect, open `about:config`, create the Boolean preference `sl.content-under-toolbar.disabled`, and set it to `true`.

The helper adds the required top inset to ordinary webpages. Firefox internal pages, Reader View, the PDF viewer and restricted Mozilla pages cannot be modified by the extension.

## Downloads button

The downloads button appears while a download is active, remains visible for completion notifications and errors, then hides after a successful download. Its toolbar position stays reserved while hidden, so the address bar does not shift.

## Included files

- `userChrome.css`
- `userContent.css`
- `toolbar-content.css`
- `Icons/`
- `SL-Companion.xpi`
- `companion/` extension source
