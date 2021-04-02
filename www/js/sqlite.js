
var db = null;

var ultimaTab;
var ultimoDispositivo;
var ultimoDispositovoMac;


document.addEventListener('deviceready', function() {
console.log("Dispositivo pronto");
  db = window.sqlitePlugin.openDatabase({
    name: 'my.db',
    location: 'default',
  });
  db.transaction(function(tx) {
    M.toast({html: "executando DB"});
  tx.executeSql('CREATE TABLE IF NOT EXISTS config (id integer primary key, ultimaTab, ultimoDispositivo, ultimoDispositovoMac)');
  console.log("tabela criada se nao estia ja");
});
function CarregaDadosIniciais (){
  console.log("carregando dados iniciasi");
  db.executeSql('SELECT * FROM config order by id desc', [], function(rs) {
     if(rs.rows.length == 0){
       M.toast({html: "nem uma linha, crianco nova"});
       db.transaction(function(tx) {
         tx.executeSql("INSERT into config (id,ultimaTab,ultimoDispositivo,ultimoDispositovoMac) VALUES ('1','controle1','0','0')", []);
       }, function(error) {
         M.toast({html: "Erro no insert"});
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
  CarregaDadosIniciais();
});
function AtualizaAUltimaAba(aba){
  db.transaction(function(tx) {
    M.toast({html: "Update da aba"});
    tx.executeSql("UPDATE config set ultimaTab = '"+aba+"' where id = 1", []);
  }, function(error) {
    M.toast({html: "Erro no update aba"});
  }, function() {
    //Materialize.toast('UPDATE database OK', 3000, 'rounded red center-align');
  });
};

function AtualizaOUltimoDispositivo(nome,mac){
  db.transaction(function(tx) {
    M.toast({html: "Update do bt"});
    tx.executeSql("UPDATE config set ultimoDispositivo = '"+nome+"',ultimoDispositovoMac = '"+mac+"' where id = 1", []);
  }, function(error) {
    M.toast({html: "Erro no update bt"});
  }, function() {
    //Materialize.toast('UPDATE database OK', 3000, 'rounded red center-align');
  });
}
