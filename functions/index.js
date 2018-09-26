const functions = require('firebase-functions');
const RSS = require('rss');
const moment = require('moment');
const YouTube = require('simple-youtube-api');
const ytKey = functions.config().yt.key;
const youtube = new YouTube(ytKey);
const cors = require('cors')({
    origin: true,
  });

const mostRecentPlaylistId = 'PL3KbuH7aoKJa3DBkWZmEJz1GDCaN9Y2Dt';
const mostPopularPlaylistId = 'PL3KbuH7aoKJYT4QffoCG_UaI5CkapuVni';
const testOlliePlaylistId = 'PL_sR00hS1MF8FHTLLJuRBZtI2RbN9p0-r';
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.mostRecent = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        youtube.getPlaylistByID(mostRecentPlaylistId).then(results => {
            results.getVideos().then(videos => {
                res.send(videos);
            })
            .catch(console.log);
        })
        .catch(console.log);
    });
});

exports.mostPopular = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        youtube.getPlaylistByID(mostPopularPlaylistId).then(results => {
            results.getVideos().then(videos => {
                res.send(videos);
            })
            .catch(console.log);
        })
        .catch(console.log);
    });
});

exports.rssFeed = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        youtube.getPlaylistByID(testOlliePlaylistId).then(results => {
            results.getVideos().then(videos => {

                const feed = new RSS({
                    title: 'If No Can',
                    description: 'Variety power hour of three millenials figuring out lifes can and no cans',
                    feed_url: 'https://us-central1-cloudfunctionstest-95896.cloudfunctions.net/rssFeed',
                    site_url: 'https://ifnocan.com/',
                    managingEditor: 'TJ Cooper',
                    webMaster: 'TJ Cooper',
                    copyright: 'copyright 2018 ifnocan',
                    language: 'en-US',
                    pubDate: moment(videos[0].raw.snippet.publishedAt).format('ddd, DD MMM YYYY HH:mm:ss ZZ')
                });

                const maxLength = videos.length > 20 ? 20: videos.length;

                for(let i=0; i < maxLength; i++) {

                    const podItem = {
                        title: videos[i].raw.snippet.title,
                        url: `https://youtu.be/${videos[i].raw.snippet.resourceId.videoId}`,
                        description: videos[i].raw.snippet.description,
                        guid: `https://youtu.be/${videos[i].raw.snippet.resourceId.videoId}`,
                        author: 'contact@ifnocan.com',
                        categories: ['Podcasting', 'Personal Journals'],
                        date: moment(videos[i].raw.snippet.publishedAt).format('ddd, DD MMM YYYY HH:mm:ss ZZ'), 
                    };

                    feed.item(podItem);

                }
                const xml = feed.xml({indent: true});
                res.send(xml);
            })
            .catch(console.log);
        })
        .catch(console.log);
    })
});
