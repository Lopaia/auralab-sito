// auralabstudio.com, auralabstudio.it e www.auralabstudio.it → www.auralabstudio.com
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.hostname = "www.auralabstudio.com";
    return Response.redirect(url.toString(), 301);
  },
};
