function serveVideo() {
    const videoBit = document.getElementById('video__container');

    if (window.innerWidth <= 500) {
        videoBit.innerHTML =
            '<video crossorigin="anonymous" controls playsinline poster="https://cdn.media.amplience.net/i/clarks/db-uk-raheem-kids-video-ph-sq-wk30-ss23?w=400&fmt=auto" preload="none" width="100%" height="auto" class="image--rounded-border"><source src="https://cdn.media.amplience.net/v/clarks/db-uk-raheem-bts-portrait-wk31-ss23/webm_720p" type="video/webm"><source src="https://cdn.media.amplience.net/v/clarks/db-uk-raheem-bts-portrait-wk31-ss23/mp4_720p" type="video/mp4"><track kind="captions" src="https://clarks.a.bigcontent.io/v1/static/raheem-bts-video-wk31-ss23" srclang="en">Your browser does not support the video tag.</video>';
    } else {
        videoBit.innerHTML =
            '<video crossorigin="anonymous" controls playsinline poster="https://cdn.media.amplience.net/i/clarks/db-uk-raheem-kids-video-ph-fw-wk30-ss23?w=1440&fmt=auto" preload="none" width="100%" height="auto" class="image--rounded-border"><source src="https://cdn.media.amplience.net/v/clarks/db-uk-raheem-bts-landscape-wk31-ss23/webm_720p" type="video/webm"><source src="https://cdn.media.amplience.net/v/clarks/db-uk-raheem-bts-landscape-wk31-ss23/mp4_720p" type="video/mp4"><track kind="captions" src="https://clarks.a.bigcontent.io/v1/static/raheem-bts-video-wk31-ss23" srclang="en">Your browser does not support the video tag.</video>';
    }
}
window.onload = serveVideo;
window.onresize = serveVideo;
