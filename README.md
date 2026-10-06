# Firefox-SL v1.5

**Compatible with Firefox 154+ · Optimized for Firefox 157.**

A Safari-like Firefox theme for macOS, with translucent toolbars and menus.

<p align="center">
  <a href="Screens/Main-Window.png"><img src="Screens/Main-Window.png" alt="Firefox-SL main window" width="32%"></a>
  <a href="Screens/URL-Bar.png"><img src="Screens/URL-Bar.png" alt="Firefox-SL URL bar" width="32%"></a>
  <a href="Screens/Download-Box.png"><img src="Screens/Download-Box.png" alt="Firefox-SL download box" width="32%"></a>
</p>

## Install

1. Download and extract [Firefox-SL-v1.5.zip](https://github.com/IzsakiRobi/Firefox-SL/releases/download/v1.5/Firefox-SL-v1.5.zip).
2. In `about:profiles`, open the active profile's **Root Directory** using **Show in Finder**.
3. Quit Firefox, back up any existing `chrome` folder, then copy the extracted `chrome` folder into the profile root.
4. In `about:config`, set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true` and `browser.nova.enabled` to `false`.
5. Fully restart Firefox.

The Home page's Nova design can remain enabled with `browser.newtabpage.activity-stream.nova.enabled` set to `true`.

To disable content appearing under the translucent toolbar, create the Boolean preference `sl.content-under-toolbar.disabled` in `about:config` and set it to `true`, then restart Firefox.
