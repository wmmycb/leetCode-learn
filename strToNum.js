/** 
 * 罗马数字转换为整数
 * 
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M, 分别对应数字：1，5， 10， 50，100，500，1000。
 * 例如， 罗马数字 2 写做 II ，即 为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做 XXVII, 即为 XX + V + II 。
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。
 * 数字 1 在数字 5 的左边，所表示的数等于 大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。
 * 
 * 这个特殊的规则只适用于以下六种情况： 
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。 
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。 
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 */

function strToNum(str) {
  const strMap = {
    i:{
      num: 1,
      index: 0
    },
    v:{
      num: 5,
      index: 1
    },
    x:{
      num: 10,
      index: 2
    },
    l:{
      num: 50,
      index:3
    },
    c:{
      num: 100,
      index: 4
    },
    d:{
      num: 500,
      index: 5
    },
    m:{
      num: 1000,
      index: 6
    }
  }

  const nums = str.split('').map(item => {
    return strMap[item]
  })

  console.log(Object.keys(strMap))

  console.log(nums);
}

strToNum('xl')