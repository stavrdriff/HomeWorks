import "../css/style.css";
import news from "./news";

let app = (function () {
   console.log('blablabla');
   let getContent = require('./content');
   let getModuleLog = require('./log');
   let getModuleNews = require('./news')

   let news1 = new getModuleNews('Title', '28.06.21', 'Lorem20dsafadsfdsa adfsdfds wefdsfsd')

   news1.print()

   getModuleLog.log(getContent);
   console.log(getModuleNews);

   return {
      content: getContent,
      log: getModuleLog,
   }


})();

export default app;