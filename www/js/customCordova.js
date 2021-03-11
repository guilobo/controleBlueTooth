$('#abre-bluetooth').click(function(){
  bluetoothSerial.showBluetoothSettings();
})

$('#configuracao').click(function(){
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
     M.toast({html: 'Tentando conectar no mac: '+ mac});
    bluetoothSerial.connect(mac, function(){M.toast({html: 'Conectado no dispositvo '})}, function(){M.toast({html: 'Falha na conexão'})});
  })
}, function(){});

})

/* Desliga o Bluetooth logo que fechar o app */
document.addEventListener("pause", onPause, false);
function onPause() {
    bluetoothSerial.disconnect();
}

/* Verifica conexão com o Bluetooth */

setInterval(function(){
  bluetoothSerial.isConnected(
    function() {
        $('#configuracao').removeClass('.red');
        $('#configuracao').addClass('.green');

        $('#bluetooth').html("bluetooth_connected");
    },
    function() {
      $('#configuracao').addClass('.red');
      $('#configuracao').removeClass('.green');

      $('#bluetooth').html("bluetooth_disabled");
    }
);
<<<<<<< HEAD
=======
}, 1000);
>>>>>>> 7eee4c24bd0a1efa85aa67cff884eb181a9751be
