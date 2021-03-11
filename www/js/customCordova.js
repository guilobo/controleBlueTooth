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
      "<td><a mac='"+device.id+"' class='waves-effect waves-light btn blue darken-3'>conectar</a></td>"+
      "</tr>")
    })
    $("#tabela-bluetooth").find('a').click(function(){
      var botaoClicado = this;
      bluetoothSerial.isConnected(
        function(){
          M.toast({html: 'Desconectando do dispositvo ' + device.name});
          bluetoothSerial.disconnect();
        },
      function(){
        var mac = $(botaoClicado).attr('mac');
        M.toast({html: 'Tentando conectar no mac: '+ mac});
        bluetoothSerial.connect(mac, function(){M.toast({html: 'Conectado no dispositvo '}); $('#conectar-bluetooth').addClass('.modal-close');}, function(){M.toast({html: 'Falha na conexão'})});
      });

    });

  });
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
      $('#configuracao').removeClass('red');
      $('#configuracao').addClass('green');

      $('#bluetooth').html("bluetooth_connected");
    },
    function() {
      $('#configuracao').addClass('red');
      $('#configuracao').removeClass('green');

      $('#bluetooth').html("bluetooth_disabled");
    }
  );
}, 1000);
