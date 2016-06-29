var AkamaiBeaconParser = require('./index.js');

var parser = new AkamaiBeaconParser();
parser.parse("http://ma176-r.analytics.edgesuite.net/9.gif?a=P~b=d584b63d942bd9390~c=10d8a5fd-54c0-663c-5f8d-47fa898cf563~d=6564341~e=4~g=0~k=088176b8-6027-00d1-fddf-ab7712c04dae~m=PL~w=605788~ag=www.tv4play.se~ah=www.tv4play.se~ak=HTML5~al=Mac%20OS~am=L~aw=http://lb-usp-hls-live.cmore.se/live/232156.isml/2219145.m3u8~ax=T~ay=3.10.4~cg=live~dx=299.997~pd=TV4%20html5.drm~sa=Desktop~sh=livekanaler~tt=TV4~vv=1.0~xd=727a94ffeda223e6db658c32d92b561d~v=2095~x=288394~y=286430~z=0~aa=lb-usp-hls-live.cmore.se~ac=232156.isml/2219145.m3u8~ap=5786~aq=0~ba=900~bb=-~cl=0~da=0~dd=1~de=11101~dg=1~dh=1023~dj=P(586176:592672),R(586176:603773),S(586176:603258-587:604281)~ea=20~en=TV4~fd=0~fe=0~fi=-:0:288394::1~fk=S:0,Q:0,D:0~gc=0~gh=0~sc=livekanaler~_cd_4505=2219145~_cd_4506=tv4~_cd_4507=Long%20Form~_cd_4508=livekanaler,live%20tv4,livekanal%20tv4%20premium,~_cd_4509=true~_cd_4510=vimond~_cd_4512=SVOD030~_cd_4523=~_cd_4525=TV4_2219145~_cd_4544=6564341~");

console.log("Custom data: ", parser.customdata);
console.log("Payload: ", parser.payload);

