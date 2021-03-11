$('#abre-bluetooth').click(function(){
  bluetoothSerial.showBluetoothSettings();
})

$('#configuracao').click(function(){
  $("#tabela-bluetooth").html("");
  bluetoothSerial.list(function(devices) {
    devices.forEach(function(device) {
      $("#tabela-bluetooth").append("<tr>"+
      "<td><span class='badge'>1</span>"+device.name+"</td>"+
      "<td>"+device.id+"</td>"+
      "<td><a name='"+device.name+"' mac='"+device.id+"' class='waves-effect waves-light btn blue darken-3'>conectar</a></td>"+
      "</tr>")
    })
    $("#tabela-bluetooth").find('a').click(function(){
      var botao_clicado = this;
      var bt_conectado = false;
      var desconectando = false;
      var name = $(botao_clicado).attr('name');
      var mac = $(botao_clicado).attr('mac');
      // Se já está conectado, então desconecta
      bluetoothSerial.isConnected(
        function(){
          bt_conectado = true;
          desconectando = true;
        },
        // Se não, conecta no dispositivo
        function(){
          bt_conectado = false;
          });

          if(bt_conectado){
            var text_desconect = 'Desconectando do dispositvo ' + name;
            M.toast({html: text_desconect});
            bluetoothSerial.disconnect(M.toast({html: 'Dispositivo desconectado' },function(){}));
          }
              var conexao_mac = 'Tentando conectar no mac: '+ mac;
              M.toast({html: conexao_mac});
              bluetoothSerial.connect(mac,
                function(){
                  $('#menu-bt').addClass('modal-close');
                },
                function(){
                  if(!desconectando){M.toast({html: 'Falha na conexão'})}
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
    var conectadoOld = false;
    var conectado = false;
    setInterval(function(){
      bluetoothSerial.isConnected(
        function() {
          conectado = true;
          $('#configuracao').removeClass('red');
          $('#configuracao').addClass('green');
          $('#bluetooth').html("bluetooth_connected");
          if (conectadoOld != conectado){
          conectadoOld = conectado;
          var text_conect = 'Conectado no dispositvo ';
          $('#menu-bt').addClass('modal-close');
          M.toast({html: text_conect});
        }
        },
        function() {
          conectado = false;
          if (conectadoOld != conectado){
            conectadoOld = conectado;
            var text_conect = 'Dispositvo desconectado';
            M.toast({html: text_conect});
          }

          $('#configuracao').addClass('red');
          $('#configuracao').removeClass('green');

          $('#bluetooth').html("bluetooth_disabled");
        }
      );
    }, 1000);
