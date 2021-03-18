
/*teclas*/
var upperCase= new RegExp('[A-Z]');
var lowerCase= new RegExp('[a-z]');

function CaixaCaracterBotao(botao){
  if ($(botao).text().match(upperCase)){
  $(botao).text($(botao).text().toLowerCase());
  $(botao).addClass("darken-4");
  return 'l';
}
  else if ($(botao).text().match(lowerCase)){
  $(botao).text($(botao).text().toUpperCase());
  $(botao).removeClass("darken-4");
  return 'u';
}
}

$('#m1-A').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('A', function(){}, function(){});
  else
  bluetoothSerial.write('a', function(){}, function(){});
});
$('#m1-B').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('B', function(){}, function(){});
  else
  bluetoothSerial.write('b', function(){}, function(){});});
$('#m1-C').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('C', function(){}, function(){});
  else
  bluetoothSerial.write('c', function(){}, function(){});
});
$('#m1-D').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('D', function(){}, function(){});
  else
  bluetoothSerial.write('d', function(){}, function(){});
});
$('#m1-E').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('E', function(){}, function(){});
  else
  bluetoothSerial.write('e', function(){}, function(){});
});
$('#m1-seta-esquerda').click(function(){
  bluetoothSerial.write('<', function(){}, function(){});
});
$('#m1-seta-direita').click(function(){
  bluetoothSerial.write('>', function(){}, function(){});
});



$('#m2-F').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('F', function(){}, function(){});
  else
  bluetoothSerial.write('f', function(){}, function(){});
});
$('#m2-G').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('G', function(){}, function(){});
  else
  bluetoothSerial.write('g', function(){}, function(){});
});
$('#m2-H').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('H', function(){}, function(){});
  else
  bluetoothSerial.write('h', function(){}, function(){});
});
$('#m2-I').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('I', function(){}, function(){});
  else
  bluetoothSerial.write('i', function(){}, function(){});
});
$('#m2-J').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('J', function(){}, function(){});
  else
  bluetoothSerial.write('j', function(){}, function(){});
});

$('#m2-baixo').on("touchstart",function(){
  bluetoothSerial.write('-', function(){}, function(){});
}).on("touchend",function(){
  bluetoothSerial.write('.', function(){}, function(){});
});
$('#m2-cima').on("touchstart",function(){
  bluetoothSerial.write('+', function(){}, function(){});
}).on("touchend",function(){
  bluetoothSerial.write('.', function(){}, function(){});
});
$('#m2-esquerda').on("touchstart",function(){
  bluetoothSerial.write('/', function(){}, function(){});
}).on("touchend",function(){
  bluetoothSerial.write('=', function(){}, function(){});
});
$('#m2-direita').on("touchstart",function(){
  bluetoothSerial.write('*', function(){}, function(){});
}).on("touchend",function(){
  bluetoothSerial.write('=', function(){}, function(){});
});

$("#m2Velocidade").change(function(){
  var valorVelocidade = $(this).val();
  bluetoothSerial.write(valorVelocidade, function(){}, function(){});
})
