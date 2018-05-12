

function ChangeList(){
  var userChoice = {};
  userChoice['food'] = ['Service', 'Cooked Poperly', 'Price', 'Product not as advertised'];
  userChoice['payment'] = ['Payment', 'Pricing', 'Over tip charge', 'Product not as advertised'];

  function ChangeList() {
      var opList = document.getElementById("ctype");
      var probList = document.getElementById("prob");
      var selOp = opList.options[opList.selectedIndex].value;
      while (probList.options.length) {
          probList.remove(0);
      }
      var ops = userChoice[selOp];
      if (ops) {
          var i;
          for (i = 0; i < ops.length; i++) {
              var op = new Option(ops[i], i);
              probList.options.add(op);
          }
      }
  }}
  }
}
