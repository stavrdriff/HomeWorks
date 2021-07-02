

let news = class News {
   constructor(title, date, content) {
      this.title = title;
      this.date = date;
      this.content = content;
   }
   print() {
      document.write(this.title);
      document.write(this.date);
      document.write(this.content);
   }
   get content() {
      return this._content
   }
   set content(value) {
      if (value.length < 10) {
         value = prompt('input text of content')
      }
      this._content = value;
   }
};

module.exports = news;