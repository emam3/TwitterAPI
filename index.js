import { twitterClient } from "./twitterClient.js";


const postTweet = async (pageNumber) => {
    try {
      const newTweet = await twitterClient.v2.tweet(`Test Twitter API ${new Date().toLocaleString()}`);
      console.log('newTweet data :', newTweet);

      // const path = `./${pageNumber}.png`;
      // const mediaId = await twitterClient.v1.uploadMedia(path, { mimeType: (await fileTypeFromFile(path)).mime });
      // const newTweet = await twitterClient.v2.tweet(``, { media: { media_ids: [mediaId] } });
      // console.log('newTweet :', newTweet);
    } catch (e) {
      console.log(e)
    }
}

// export const tweet = async (pageNumber) => {
//   await pageToJpg(pageNumber);
//   setTimeout(()=>postTweet(pageNumber), 10000)
// }