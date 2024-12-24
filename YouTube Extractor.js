
/**
 * This console scripts aims to get the timestamps of a YouTube video in the HH:MM:ss format.
 * 
 */
(() => {
    const items = document.querySelectorAll("#panels ytd-macro-markers-list-renderer ytd-macro-markers-list-item-renderer");
    let str = "";
    for (const item of items) {
        const infoContainer = item.querySelector("#endpoint #details");
        if (!infoContainer) continue;
        const [title, length] = [infoContainer.querySelector("h4"), infoContainer.querySelector("#time")];
        if (!title || !length) continue;
        str += `${length.textContent} - ${title.textContent}\n`;
    }
    Object.assign(document.createElement("a"), {
        href: URL.createObjectURL(new Blob([str])),
        download: `${document.querySelector("#title h1 yt-formatted-string, h2")?.textContent} [${(new URLSearchParams(window.location.search)).get("v")}] [Timestamps].txt`
    }).click();
})()