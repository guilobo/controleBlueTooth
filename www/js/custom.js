
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
$('#m3-O').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('O', function(){}, function(){});
  else
  bluetoothSerial.write('o', function(){}, function(){});
});
$('#m3-P').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('P', function(){}, function(){});
  else
  bluetoothSerial.write('p', function(){}, function(){});
});
$('#m3-Q').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('Q', function(){}, function(){});
  else
  bluetoothSerial.write('q', function(){}, function(){});
});
$('#m3-R').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('R', function(){}, function(){});
  else
  bluetoothSerial.write('r', function(){}, function(){});
});
$('#m3-S').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('S', function(){}, function(){});
  else
  bluetoothSerial.write('s', function(){}, function(){});
});
$('#m3-T').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('T', function(){}, function(){});
  else
  bluetoothSerial.write('t', function(){}, function(){});
});
$('#m3-U').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('U', function(){}, function(){});
  else
  bluetoothSerial.write('u', function(){}, function(){});
});
$('#m3-V').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('V', function(){}, function(){});
  else
  bluetoothSerial.write('v', function(){}, function(){});
});

$('#m3-parenteses').change(function(){
  if ($("#m3-parenteses:checked").length)
  bluetoothSerial.write(')', function(){}, function(){});
  else
  bluetoothSerial.write('(', function(){}, function(){});
});
$('#m3-colchetes').change(function(){
  if ($("#m3-colchetes:checked").length)
  bluetoothSerial.write(']', function(){}, function(){});
  else
  bluetoothSerial.write('[', function(){}, function(){});
});
$('#m3-chaves').change(function(){
  if ($("#m3-chaves:checked").length)
  bluetoothSerial.write('}', function(){}, function(){});
  else
  bluetoothSerial.write('{', function(){}, function(){});
});
$('#m3-doisPontos').change(function(){
  if ($("#m3-doisPontos:checked").length)
  bluetoothSerial.write(';', function(){}, function(){});
  else
  bluetoothSerial.write(':', function(){}, function(){});
});
$('#m3-K').change(function(){
  if ($("#m3-K:checked").length)
  bluetoothSerial.write('K', function(){}, function(){});
  else
  bluetoothSerial.write('k', function(){}, function(){});
});
$('#m3-L').change(function(){
  if ($("#m3-L:checked").length)
  bluetoothSerial.write('L', function(){}, function(){});
  else
  bluetoothSerial.write('l', function(){}, function(){});
});
$('#m3-M').change(function(){
  if ($("#m3-M:checked").length)
  bluetoothSerial.write('M', function(){}, function(){});
  else
  bluetoothSerial.write('m', function(){}, function(){});
});
$('#m3-N').change(function(){
  if ($("#m3-N:checked").length)
  bluetoothSerial.write('N', function(){}, function(){});
  else
  bluetoothSerial.write('n', function(){}, function(){});
});


$("#m2Velocidade").change(function(){
  var valorVelocidade = $(this).val();
  bluetoothSerial.write(valorVelocidade, function(){}, function(){});
})

var clicksNoBtConf = 0;
$("#botaoMenuConfig").click(function(){
  if (clicksNoBtConf > 0 && ultimoDispositivo != '0'){
    var conexao_mac = 'Tentando conectar no : '+ ultimoDispositivo;
    M.toast({html: conexao_mac});
    bluetoothSerial.connect(ultimoDispositovoMac,
      function(){
      },
      function(){
        if(!desconectando){M.toast({html: 'Falha na conexão'})}
      });
  }else {
    clicksNoBtConf++;
  }
})

  //Console do controle4
  $("#botao-enviar").click(function(){
    var textoEnvia = $.parseHTML($("#campo-enviar").val() + "\n");
    $("#terminal").append(textoEnvia);

    //Scroll automático
    var textarea = document.getElementById('terminal');
    textarea.scrollTop = textarea.scrollHeight;

    //limpa campo de enviar mensagem
    $("#campo-enviar").val('');

  })

  //limpa console
  $("#limpar-terminal").click(function(){
    $("#terminal").html('');
})
