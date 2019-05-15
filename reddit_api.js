/**
 * Reddit API wrapper for the browser (https://git.io/Mw39VQ)
 * @author Sahil Muthoo <sahil.muthoo@gmail.com> (https://www.sahilm.com)
 * @license MIT
 */
!function (window) { "use strict"; function listing(on, extras) { return extras = extras || [], withFilters(on, ["after", "before", "count", "limit", "show"].concat(extras)) } function fetch(on) { return { fetch: function (res, err) { getJSON(redditUrl(on), res, err) } } } function withFilters(on, filters) { var ret = {}; on.params = on.params || {}, filters = filters || []; for (var without = function (object, key) { var ret = {}; for (var prop in object) object.hasOwnProperty(prop) && prop !== key && (ret[prop] = object[prop]); return ret }, i = 0; i < filters.length; i++)ret[filters[i]] = function (f) { return "show" === f ? function () { return on.params[f] = "all", without(this, f) } : function (arg) { return on.params[f] = arg, without(this, f) } }(filters[i]); return ret.fetch = function (res, err) { getJSON(redditUrl(on), res, err) }, ret } function redditUrl(on) { var url = "https://www.reddit.com/"; if (void 0 !== on.subreddit && (url += "r/" + on.subreddit + "/"), url += on.resource + ".json", function (object) { var ret = []; for (var prop in object) object.hasOwnProperty(prop) && ret.push(prop); return ret }(on.params).length > 0) { var qs = []; for (var param in on.params) on.params.hasOwnProperty(param) && qs.push(encodeURIComponent(param) + "=" + encodeURIComponent(on.params[param])); url += "?" + qs.join("&") } return url } function getJSON(url, res, err) { get(url, function (data) { res(JSON.parse(data)) }, err) } function get(url, res, err) { var xhr = new XMLHttpRequest; xhr.open("GET", url, !0), xhr.onload = function () { return res(xhr.response) }, xhr.onerror = function () { if (void 0 !== err) return err(xhr.response) }, xhr.send() } var reddit = window.reddit = {}; reddit.hot = function (subreddit) { return listing({ subreddit: subreddit, resource: "hot" }) }, reddit.top = function (subreddit) { return listing({ subreddit: subreddit, resource: "top" }, ["t"]) }, reddit.controversial = function (subreddit) { return listing({ subreddit: subreddit, resource: "controversial" }, ["t"]) }, reddit.new = function (subreddit) { return listing({ subreddit: subreddit, resource: "new" }) }, reddit.about = function (subreddit) { return fetch({ subreddit: subreddit, resource: "about" }) }, reddit.random = function (subreddit) { return fetch({ subreddit: subreddit, resource: "random" }) }, reddit.info = function (subreddit) { return withFilters({ subreddit: subreddit, resource: "api/info" }, ["id", "limit", "url"]) }, reddit.comments = function (article, subreddit) { return withFilters({ subreddit: subreddit, resource: "comments/" + article }, ["comment", "context", "depth", "limit", "sort"]) }, reddit.recommendedSubreddits = function (srnames) { return withFilters({ resource: "api/recommend/sr/" + srnames }, ["omit"]) }, reddit.subredditsByTopic = function (query) { return fetch({ resource: "api/subreddits_by_topic", params: { query: query } }) }, reddit.search = function (query, subreddit) { return withFilters({ subreddit: subreddit, resource: "search", params: { q: query } }, ["after", "before", "count", "limit", "restrict_sr", "show", "sort", "syntax", "t"]) }, reddit.searchSubreddits = function (query) { return listing({ resource: "subreddits/search", params: { q: query } }) }, reddit.popularSubreddits = function () { return listing({ resource: "subreddits/popular" }) }, reddit.newSubreddits = function () { return listing({ resource: "subreddits/new" }) }, reddit.aboutUser = function (username) { return fetch({ resource: "user/" + username + "/about" }) } }(window);