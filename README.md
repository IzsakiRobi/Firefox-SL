# Firefox-SL

<p align="center">
  <a href="Screens/Main-Window.png"><img src="Screens/Main-Window.png" alt="Firefox-SL main window" width="32%"></a>
  <a href="Screens/URL-Bar.png"><img src="Screens/URL-Bar.png" alt="Firefox-SL URL bar" width="32%"></a>
  <a href="Screens/Download-Box.png"><img src="Screens/Download-Box.png" alt="Firefox-SL download box" width="32%"></a>
</p>

Firefox-SL is a Safari-like Firefox chrome theme for macOS.

## Version

v1.2

## Contents

- `userChrome.css`
- `userContent.css`
- `Icons/`

## Install

1. Download and extract `Firefox-SL-v1.2.zip` from the [latest release](https://github.com/IzsakiRobi/Firefox-SL/releases/latest).
2. Enter `about:profiles` in the Firefox address bar.
3. Find the profile currently in use (usually `default-release`). Under **Root Directory**, click **Open Folder** on Windows/Linux or **Show in Finder** on macOS.
4. Quit Firefox.
5. If the profile already contains a `chrome` folder, rename or copy it as a backup.
6. Copy the extracted `chrome` folder directly into the profile's root directory.
7. Start Firefox.

Firefox custom styles require `toolkit.legacyUserProfileCustomizations.stylesheets` to be enabled in `about:config`.

## Downloads button

The downloads button appears while a download is active, remains visible for completion notifications and errors, then hides after a successful download. Its toolbar slot stays reserved while hidden, preventing the address bar and Flexible Space items from shifting. The behavior is scoped to the main navigation toolbar and is independent of the surrounding button arrangement.
