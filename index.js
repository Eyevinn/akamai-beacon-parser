var AkamaiBeaconParser = function() {
  this.payload = {};
  this.customdata = {};
};

AkamaiBeaconParser.prototype.parse = function(string) {
  const re = /^(.*\.gif)\?(.*)$/;
  var res = re.exec(string);
  if (res) {
    var pixel = res[1];
    var datastr = res[2];
    var dataarr = datastr.split("~");
    dataarr.forEach((function(data) {
      var d = data.split("=");
      var key = d[0], value = d[1];
      if (key) {
        this.payload[key] = value;
        if (/^_cd/.test(key)) {
          this.customdata[key] = value;
        }
      }
    }).bind(this));  
  }
}

AkamaiBeaconParser.prototype.customdata = this.customdata;
AkamaiBeaconParser.prototype.payload = this.payload;

AkamaiBeaconParser.prototype.streamName = function() { return this.payload.aw; };
AkamaiBeaconParser.prototype.deliveryType = function() { return this.payload.ax; };
AkamaiBeaconParser.prototype.playerReferrer = function() { return this.payload.ag; };
AkamaiBeaconParser.prototype.title = function() { return this.payload.tt; };
AkamaiBeaconParser.prototype.category = function() { return this.payload.cg; };
AkamaiBeaconParser.prototype.playerType = function() { return this.payload.pd; };

module.exports = AkamaiBeaconParser;
