async function inset(windowId) {
  if ((await browser.browserSettings.verticalTabs.get({})).value) return 52;
  const tabs = await browser.tabs.query({ windowId });
  return tabs.filter(tab => !tab.hidden).length > 1 ? 90 : 52;
}

async function update(windowId) {
  const value = await inset(windowId);
  const tabs = await browser.tabs.query({ windowId });
  for (const tab of tabs) {
    browser.tabs.sendMessage(tab.id, { type: "inset", value }).catch(() => {});
  }
}

browser.runtime.onMessage.addListener((message, sender) => {
  if (message.type === "inset" && sender.tab) return inset(sender.tab.windowId);
});

browser.tabs.onCreated.addListener(tab => update(tab.windowId));
browser.tabs.onRemoved.addListener((tabId, info) => setTimeout(() => update(info.windowId)));
browser.tabs.onAttached.addListener((tabId, info) => update(info.newWindowId));
browser.tabs.onDetached.addListener((tabId, info) => update(info.oldWindowId));
browser.tabs.onActivated.addListener(info => update(info.windowId));
browser.browserSettings.verticalTabs.onChange.addListener(async () => {
  for (const window of await browser.windows.getAll()) update(window.id);
});
