var Language = new XMLHttpRequest();
Language.open('GET','http://api.countrylayer.com/v2/lang/en?access_key=f266d498bbd2ebc08dded9ec8347d149');
Language.send();
Language.onload = function () {
     console.log(JSON.parse(this.response));
    
}