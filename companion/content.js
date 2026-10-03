async function updateInset() {
  try {
    const value = await browser.runtime.sendMessage({ type: "inset" });
    if (Number.isFinite(value)) document.documentElement.style.setProperty("border-top-width", `${value}px`, "important");
  } catch {}
}

browser.runtime.onMessage.addListener(message => {
  if (message.type === "inset") updateInset();
});

updateInset();
setInterval(() => {
  if (!document.hidden) updateInset();
}, 500);
document.addEventListener("visibilitychange", updateInset);
