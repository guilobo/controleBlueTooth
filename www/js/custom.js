
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
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('A', function(){}, function(){});
  enviarDisplay('A');
 }else{
  bluetoothSerial.write('a', function(){}, function(){});
  enviarDisplay('a');
  }
});
$('#m1-B').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('B', function(){}, function(){});
 enviarDisplay('B');
}else{
  bluetoothSerial.write('b', function(){}, function(){});
  enviarDisplay('b');
}});
$('#m1-C').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('C', function(){}, function(){});
 enviarDisplay('C');
}else{
  bluetoothSerial.write('c', function(){}, function(){});
  enviarDisplay('c');
}
});
$('#m1-D').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('D', function(){}, function(){});
 enviarDisplay('D');
}else{
  bluetoothSerial.write('d', function(){}, function(){});
  enviarDisplay('d');
}
});
$('#m1-E').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('E', function(){}, function(){});
 enviarDisplay('E');
}else{
  bluetoothSerial.write('e', function(){}, function(){});
  enviarDisplay('e');
}
});
$('#m1-seta-esquerda').click(function(){
  bluetoothSerial.write('<', function(){}, function(){});
  enviarDisplay('<');
});
$('#m1-seta-direita').click(function(){
  bluetoothSerial.write('>', function(){}, function(){});
  enviarDisplay('>');
});



$('#m2-F').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('F', function(){}, function(){});
 enviarDisplay('F');
}else{
  bluetoothSerial.write('f', function(){}, function(){});
  enviarDisplay('f');
}
});
$('#m2-G').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('G', function(){}, function(){});
 enviarDisplay('G');
}else{
  bluetoothSerial.write('g', function(){}, function(){});
  enviarDisplay('g');
}
});
$('#m2-H').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('H', function(){}, function(){});
 enviarDisplay('H');
}else{
  bluetoothSerial.write('h', function(){}, function(){});
  enviarDisplay('h');
}
});
$('#m2-I').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('I', function(){}, function(){});
 enviarDisplay('I');
}else{
  bluetoothSerial.write('i', function(){}, function(){});
  enviarDisplay('i');
}
});
$('#m2-J').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('J', function(){}, function(){});
 enviarDisplay('J');
}else{
  bluetoothSerial.write('j', function(){}, function(){});
  enviarDisplay('j');
}
});
$('#m2-baixo').on("touchstart",function(){
  bluetoothSerial.write('-', function(){}, function(){});
  enviarDisplay('-');
}).on("touchend",function(){
  bluetoothSerial.write('.', function(){}, function(){});
  enviarDisplay('.');
});
$('#m2-cima').on("touchstart",function(){
  bluetoothSerial.write('+', function(){}, function(){});
  enviarDisplay('+');
}).on("touchend",function(){
  bluetoothSerial.write('.', function(){}, function(){});
  enviarDisplay('.');
});
$('#m2-esquerda').on("touchstart",function(){
  bluetoothSerial.write('/', function(){}, function(){});
  enviarDisplay('/');
}).on("touchend",function(){
  bluetoothSerial.write('=', function(){}, function(){});
  enviarDisplay('=');
});
$('#m2-direita').on("touchstart",function(){
  bluetoothSerial.write('*', function(){}, function(){});
  enviarDisplay('*');
}).on("touchend",function(){
  bluetoothSerial.write('=', function(){}, function(){});
  enviarDisplay('=');
});

$("#m2Velocidade").change(function(){
  var valorVelocidade = $(this).val();
  bluetoothSerial.write(valorVelocidade, function(){}, function(){});
})


$('#m3-O').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('O', function(){}, function(){});
  enviarDisplay('O');
}else{
  bluetoothSerial.write('o', function(){}, function(){});
  enviarDisplay('o');
}
});
$('#m3-P').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('P', function(){}, function(){});
  enviarDisplay('P');
}else{
  bluetoothSerial.write('p', function(){}, function(){});
  enviarDisplay('p');
}
});
$('#m3-Q').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('Q', function(){}, function(){});
  enviarDisplay('Q');
}else{
  bluetoothSerial.write('q', function(){}, function(){});
  enviarDisplay('q');
}
});
$('#m3-R').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('R', function(){}, function(){});
  enviarDisplay('R');
}else{
  bluetoothSerial.write('r', function(){}, function(){});
  enviarDisplay('r');
}
});
$('#m3-S').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('S', function(){}, function(){});
  enviarDisplay('S');
}else{
  bluetoothSerial.write('s', function(){}, function(){});
  enviarDisplay('s');
}
});
$('#m3-T').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('T', function(){}, function(){});
  enviarDisplay('T');
}else{
  bluetoothSerial.write('t', function(){}, function(){});
  enviarDisplay('t');
}
});
$('#m3-U').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('U', function(){}, function(){});
  enviarDisplay('U');
}else{
  bluetoothSerial.write('u', function(){}, function(){});
  enviarDisplay('u');
}
});
$('#m3-V').click(function(){
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l'){
  bluetoothSerial.write('V', function(){}, function(){});
  enviarDisplay('V');
}else{
  bluetoothSerial.write('v', function(){}, function(){});
  enviarDisplay('v');
}
});

$('#m3-parenteses').change(function(){
  if ($("#m3-parenteses:checked").length){
  bluetoothSerial.write(')', function(){}, function(){});
  enviarDisplay(')');
}else{
  bluetoothSerial.write('(', function(){}, function(){});
  enviarDisplay('()');
}
});
$('#m3-colchetes').change(function(){
  if ($("#m3-colchetes:checked").length){
  bluetoothSerial.write(']', function(){}, function(){});
  enviarDisplay(']');
}else{
  bluetoothSerial.write('[', function(){}, function(){});
  enviarDisplay('[');
}
});
$('#m3-chaves').change(function(){
  if ($("#m3-chaves:checked").length){
  bluetoothSerial.write('}', function(){}, function(){});
  enviarDisplay('}');
}else{
  bluetoothSerial.write('{', function(){}, function(){});
  enviarDisplay('{');
}
});
$('#m3-doisPontos').change(function(){
  if ($("#m3-doisPontos:checked").length){
  bluetoothSerial.write(';', function(){}, function(){});
  enviarDisplay(';');
}else{
  bluetoothSerial.write(':', function(){}, function(){});
  enviarDisplay(':');
}
});
$('#m3-K').change(function(){
  if ($("#m3-K:checked").length){
  bluetoothSerial.write('K', function(){}, function(){});
  enviarDisplay('K');
}else{
  bluetoothSerial.write('k', function(){}, function(){});
  enviarDisplay('k');
}
});
$('#m3-L').change(function(){
  if ($("#m3-L:checked").length){
  bluetoothSerial.write('L', function(){}, function(){});
  enviarDisplay('L');
}else{
  bluetoothSerial.write('l', function(){}, function(){});
  enviarDisplay('l');
}
});
$('#m3-M').change(function(){
  if ($("#m3-M:checked").length){
  bluetoothSerial.write('M', function(){}, function(){});
  enviarDisplay('M');
}else{
  bluetoothSerial.write('m', function(){}, function(){});
  enviarDisplay('m');
}
});
$('#m3-N').change(function(){
  if ($("#m3-N:checked").length){
  bluetoothSerial.write('N', function(){}, function(){});
  enviarDisplay('N');
}else{
  bluetoothSerial.write('n', function(){}, function(){});
  enviarDisplay('n');
}
});


$("#m2Velocidade").change(function(){
  var valorVelocidade = $(this).val();
  bluetoothSerial.write(valorVelocidade, function(){}, function(){});
  enviarDisplay($(this).val())
})

//botaoReconectar
$("#reconectar-bt").click(function(){
  if (ultimoDispositivo != '0'){
    var conexao_mac = 'Tentando conectar no : '+ ultimoDispositivo;
    M.toast({html: conexao_mac});
    bluetoothSerial.connect(ultimoDispositovoMac,
      function(){
        actionButtom.close();
      },
      function(){
        if(!desconectando){M.toast({html: 'Falha na conexão'})}
      });
  }else {
  }
});

function enviarDisplay(dadoEnviado){
   dadoEnviado = (typeof dadoEnviado !== 'undefined') ? dadoEnviado : $("#campo-enviar").val();
  var currentdate = new Date();
  var time =  currentdate.getHours() + ":"
              + currentdate.getMinutes() + ":"
              + currentdate.getSeconds();

  var textoEnvia = $.parseHTML(time + " -> " + dadoEnviado + "\n");
  $("#terminal").prepend(textoEnvia);

  //Scroll automático
  //var textarea = document.getElementById('terminal');
  //textarea.scrollTop = textarea.scrollHeight;

  //Enviar os dados pela serial
  bluetoothSerial.write($("#campo-enviar").val(), function(){}, function(){});

  //limpa campo de enviar mensagem
  $("#campo-enviar").val('');
}

  //Console do controle4
  $("#botao-enviar").click(function(){
    enviarDisplay();
  });

$('#form-enviar').submit(function(e){
  e.preventDefault();
  enviarDisplay();
});


  //limpa console
$("#limpar-terminal").click(function(){
    $("#terminal").html('');

});

//Recebe dados da serial
setInterval(function(){
bluetoothSerial.read(function (data) {
  var time =  currentdate.getHours() + ":"
              + currentdate.getMinutes() + ":"
              + currentdate.getSeconds();

  M.toast({html: 'Recebido dados da serial read'});

  var textoEnvia = $.parseHTML(time + " <- " + data + "\n");
  $("#terminal").prepend(textoEnvia);

  //Scroll automático
  //var textarea = document.getElementById('terminal');
  //textarea.scrollTop = textarea.scrollHeight;
}, function(){} );
},100)
