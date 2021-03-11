$('#abre-bluetooth').click(function(){

  bluetoothSerial.showBluetoothSettings();
})

$('#configuracoes-bt').click(function(){
  M.toast({html: 'abrindo configs'});
  $("#tabela-bluetooth").html("");
bluetoothSerial.list(function(devices) {
  devices.forEach(function(device) {
      $("#tabela-bluetooth").append("<tr>"+
        "<td>"+device.name+"</td>"+
        "<td>"+device.id+"</td>"+
        "<td><a mac='"+device.id+"' class='waves-effect waves-light btn'>conectar</a></td>"+
      "</tr>")
  })
  $("#tabela-bluetooth").find('a').click(function(){
    var mac = $(this).attr('mac');
     M.toast({html: 'tentando conectar no mac: '+ mac});
    bluetoothSerial.connect(mac, function(){M.toast({html: 'deu certo'})}, function(){M.toast({html: 'nao deu certo'})});
  })
}, function(){});

})
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
  var estadoCaixaAtual = CaixaCaracterBotao(this);
  if (estadoCaixaAtual == 'l')
  bluetoothSerial.write('A', function(){}, function(){});
  else
  bluetoothSerial.write('a', function(){}, function(){});
});
