
var db = null;
document.addEventListener('deviceready', function() {
  db = window.sqlitePlugin.openDatabase({name: 'conf.db', location: 'default'});

  db.transaction(function(tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS config (id integer primary key, ultimaTab, ultimoDispositivo, ultimoDispositovoMac)');
});
});

var ultimaTab;
var ultimoDispositivo;
var ultimoDispositovoMac;

function CarregaDadosIniciais (){
  db.executeSql('SELECT * FROM config order by id desc', [], function(rs) {
     if(rs.rows.length == 0){
       db.transaction(function(tx) {
         tx.executeSql("INSERT into config (ultimaTab,ultimoDispositivo,ultimoDispositovoMac) VALUES ('controle1','0','0')", []);
       }, function(error) {
       }, function() {
         //Materialize.toast('UPDATE database OK', 3000, 'rounded red center-align');
       });
     }
 var resultado = "";
    ultimaTab = rs.rows.item(0).ultimaTab;
    ultimoDispositivo = rs.rows.item(0).ultimoDispositivo;
    ultimoDispositovoMac = rs.rows.item(0).ultimoDispositovoMac;
    //abre a tab correta e devini o botão reconectar
    tabs.select(ultimaTab);
  });

  }

function AtualizaAUltimaAba(aba){
  db.transaction(function(tx) {
    tx.executeSql("UPDATE config set ultimaTab = '"+aba+"' where id = 1", []);
  }, function(error) {
  }, function() {
    //Materialize.toast('UPDATE database OK', 3000, 'rounded red center-align');
  });
};

function AtualizaOUltimoDispositivo(nome,mac){
  db.transaction(function(tx) {
    tx.executeSql("UPDATE config set ultimoDispositivo = '"+nome+"',ultimoDispositovoMac = '"+mac+"' where id = 1", []);
  }, function(error) {
  }, function() {
    //Materialize.toast('UPDATE database OK', 3000, 'rounded red center-align');
  });
}
