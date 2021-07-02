let moduleLog = function () {
   let log = (message) => {
      console.log('log:' + message);
   }
   return {
      log: log
   }
}();

module.exports = moduleLog;