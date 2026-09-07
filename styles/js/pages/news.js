/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(
    null, 
    charadex.page.news, 
    (arr) => {

      let pageUrl = charadex.url.getPageUrl(charadex.page.news.sitePage);
      for (let title of arr) {

        // Make the tags pretty and actually work <3
        title.tags = title.tags ? title.tags.split(',') : [];
        let fancyTagArr = [];
        if (title.tags.length >= 1) {
          for (let tag of title.tags) {
            fancyTagArr.push(`<a href="${charadex.url.addUrlParameters(pageUrl, {tags: tag.trim()})}">#${tag.trim()}</a>`);
          }
        }
        title.fancytags = fancyTagArr.join(' ');

      }
      
    }
  );
  charadex.tools.loadPage('.softload', 500);
});