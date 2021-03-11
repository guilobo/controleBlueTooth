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
      "<td><a name='"+device.name+"' mac='"+device.id+"' class='waves-effect waves-light btn blue darken-3'>conectar</a></td>"+
      "</tr>")
    })
    $("#tabela-bluetooth").find('a').click(function(){
      var botao_clicado = this;
      var bt_conectado = false;
      var name = $(botao_clicado).attr('name');
      var mac = $(botao_clicado).attr('mac');
      // Se já está conectado, então desconecta
      bluetoothSerial.isConnected(
        function(){
          bt_conectado = true;
        },
        // Se não, conceta no dispositivo
        function(){
          bt_conectado = false;
          });

          if(bt_conectado){
            var text_desconect = 'Desconectando do dispositvo ' + name;
            M.toast({html: text_desconect});
            bluetoothSerial.disconnect();
          }
            var conexao_mac = 'Tentando conectar no mac: '+ mac;
            M.toast({html: conexao_mac});
            bluetoothSerial.connect(mac,
              function(){
                var text_conect = 'Conectado no dispositvo ' + name;
                M.toast({html: text_conect});
                $('#menu-bt').addClass('.modal-close');
              },
              function(){
                M.toast({html: 'Falha na conexão'})
              });


        });
      });
    });

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
