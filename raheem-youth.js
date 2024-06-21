function serveVideo() {
    const videoBit = document.getElementById('video__container');

    if (window.innerWidth <= 500) {
        videoBit.innerHTML =
            '<video controls playsinline poster="assets/raheem-kids-video-ph-sq.jpeg" preload="none" width="100%" height="auto" class="image--rounded-border"><source src="assets/raheem-bts-portrait.mp4" type="video/mp4"><track kind="captions" src="assets/raheem-bts-video.vtt" srclang="en"></video>';
    } else {
        videoBit.innerHTML =
            '<video controls playsinline poster="assets/raheem-kids-video-ph-fw.jpeg" preload="none" width="100%" height="auto" class="image--rounded-border"><source src="assets/raheem-bts-landscape.mp4" type="video/mp4"><track kind="captions" src="assets/raheem-bts-video.vtt" srclang="en">Your browser does not support the video tag.</video>';
    }
}
window.onload = serveVideo;
window.onresize = serveVideo;
