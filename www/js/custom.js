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

$('#m1-A').click(function(){
  if ($('#m1-A').text()=="A"){
  $('#m1-A').html("a");
  $('#m1-A').addClass("darken-4")
}
  else if ($('#m1-A').text()=="a"){
  $('#m1-A').html("A");
  $('#m1-A').removeClass("darken-4")
}
  bluetoothSerial.write('N', function(){}, function(){});
})
