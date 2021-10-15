function findBC() {

  let input = {
    a: prompt('In a² + b² = c², enter in "a."'),
  };

  let b = input.a;

  let c = input.a + "√2"

  alert('a = ' + input.a + ', b = ' + b + ', c = ' + c);

}

function findAC() {
  let input = {
    b: prompt('In a² + b² = c², enter in "b."'),
  };

  let a = input.b;

  let c = input.b + "√2"

  alert('a = ' + a + ', b = ' + input.b + ', c = ' + c);
}

function findAB() {
  let input = {
    c: prompt('In a² + b² = c², enter in "c" (radical 2 = √2).'),
  };

  let a;
  let b;

  // /'√2'/g.test(input.c)
  // input.c.indexOf('√2') > -1

  if (input.c.indexOf('√2') > -1) {
    b = input.c.replace('√2', ' ');
    a = input.c.replace('√2', ' ');
  }
  else {
    b = input.c + '√2 / 2';
    a = input.c + '√2 / 2';
  }


  alert('a = ' + a + ', b = ' + b + ', c = ' + input.c + ' (this may be able to be simplied further, just divide the number on top by two and leave the radical)');

}