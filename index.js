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

AkamaiBeaconParser.prototype.streamName = this.payload.aw;
AkamaiBeaconParser.prototype.deliveryType = this.payload.ax;
AkamaiBeaconParser.prototype.playerReferrer = this.payload.ag;
AkamaiBeaconParser.prototype.title = this.payload.tt;
AkamaiBeaconParser.prototype.category = this.payload.cg;
AkamaiBeaconParser.prototype.playerType = this.payload.pd;

module.exports = AkamaiBeaconParser;
