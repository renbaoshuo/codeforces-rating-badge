// const AllowedReferrer = 'baoshuo.ren'; // ['baoshuo.ren', 'baoshuo.blog'] multiple domains is supported in array format

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * Get badge color
 * @param {number} rating 
 */
function getBadgeColor(rating) {
    if (rating >= 2400) return "ff0000";
    if (rating >= 2100) return "ff8c00";
    if (rating >= 1900) return "aa00aa";
    if (rating >= 1600) return "0000ff";
    if (rating >= 1400) return "03a89e";
    if (rating >= 1200) return "008000";
    return "808080";
}

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    let needBlock = false;
    if (typeof AllowedReferrer !== 'undefined' && AllowedReferrer !== null && AllowedReferrer) {
        let _AllowedReferrer = AllowedReferrer;
        if (!Array.isArray(AllowedReferrer)) _AllowedReferrer = [_AllowedReferrer];
        const rAllowedReferrer = new RegExp(_AllowedReferrer.join('|'), 'g');
        needBlock = (!rAllowedReferrer.test(ref_host)) ? true : false;
        console.log(_AllowedReferrer, rAllowedReferrer, ref_host);
    }
    if (needBlock) {
        return new Response('403 Forbidden', {
            headers: { 'Content-Type': 'text/html' },
            status: 403,
            statusText: 'Forbidden'
        });
    }
    const { searchParams } = new URL(request.url);
    let username = searchParams.get('username');
    if (username !== null && username !== '') {
        const response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`, { method: 'GET' });
        const data = await response.json();
        return new Response('', {
            status: 302,
            headers: {
                location: `https://img.shields.io/badge/${username.replace(/-/g, '--').replace(/_/g, '__')}-${data.result[0].rank}%20%20${data.result[0].rating}-${getBadgeColor(data.result[0].rating)}.svg?longCache=true&style=for-the-badge&logo=Codeforces&link=https://codeforces.com/profile/${username}`
            }
        });
    }
    return new Response('', {
        status: 302,
        headers: {
            location: `https://github.com/renbaoshuo/codeforces-rating-badge`
        }
    });
}
