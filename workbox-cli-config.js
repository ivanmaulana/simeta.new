module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{woff2,svg,woff,ttf,eot,jpg,png,js,map,html}"
  ],
  "swDest": "dist/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
    ],
    "maximumFileSizeToCacheInBytes": 5000000
};
