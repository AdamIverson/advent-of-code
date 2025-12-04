var AdventOfCode = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // 2025/Day 2/input.txt
  var input_default;
  var init_input = __esm({
    "2025/Day 2/input.txt"() {
      input_default = "9100-11052,895949-1034027,4408053-4520964,530773-628469,4677-6133,2204535-2244247,55-75,77-96,6855-8537,55102372-55256189,282-399,228723-269241,5874512-6044824,288158-371813,719-924,1-13,496-645,8989806846-8989985017,39376-48796,1581-1964,699387-735189,85832568-85919290,6758902779-6759025318,198-254,1357490-1400527,93895907-94024162,21-34,81399-109054,110780-153182,1452135-1601808,422024-470134,374195-402045,58702-79922,1002-1437,742477-817193,879818128-879948512,407-480,168586-222531,116-152,35-54";
    }
  });

  // 2025/Day 2/index.ts
  var require_index = __commonJS({
    "2025/Day 2/index.ts"() {
      init_input();
      var rawData = input_default.split(",");
      var nummies = [];
      var data = [...rawData.map((item) => item.split("-").map(Number))];
      for (const item of data) {
        for (let i = item[0]; i <= item[1]; i++) {
          if (i[0] !== 0) {
            if (item.length % 2 === 0) {
              nummies.push(i.toString());
            }
          }
        }
      }
      var invalidNummies = [];
      nummies.forEach((item) => {
        let frontHalf = item.slice(0, item.length / 2);
        let backHalf = item.slice(item.length / 2, item.length);
        if (frontHalf === backHalf) {
          invalidNummies.push(item);
        }
      });
      var finalNummies = invalidNummies.reduce((acc, item) => acc + Number(item), 0);
      console.log("finalNummies:", finalNummies);
    }
  });
  return require_index();
})();
