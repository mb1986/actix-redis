var N=null,E="",T="t",U="u",searchIndex={};
var R=["string","redisactor","result","to_string","try_from","try_into","borrow_mut","borrow","type_id","typeid","to_owned","clone_into","equivalent","formatter","respvalue","samesite","SameSite","RespError","RespValue","RedisActor","RedisSession"];

searchIndex["actix_redis"]={"doc":"Redis integration for Actix framework.","i":[[4,R[16],"actix_redis","The `SameSite` cookie attribute.",N,N],[13,"Strict",E,"The \"Strict\" `SameSite` attribute.",0,N],[13,"Lax",E,"The \"Lax\" `SameSite` attribute.",0,N],[13,"None",E,"No `SameSite` attribute.",0,N],[4,R[17],E,E,N,N],[13,"Internal",E,"A non-specific internal error that prevented an operation…",1,N],[13,"IO",E,"An IO error occurred",1,N],[13,"RESP",E,"A RESP parsing/serialising error occurred",1,N],[13,"Remote",E,"A remote error",1,N],[13,"EndOfStream",E,"End of stream - a connection is broken, or could not be…",1,N],[13,"Unexpected",E,"An unexpected error. In this context \"unexpected\" means…",1,N],[4,R[18],E,"A single RESP value, this owns the data that is read/to-be…",N,N],[13,"Nil",E,E,2,N],[13,"Array",E,"Zero, one or more other `RespValue`s.",2,N],[13,"BulkString",E,"A bulk string. In Redis terminology a string is a…",2,N],[13,"Error",E,"An error from the Redis server",2,N],[13,"Integer",E,"Redis documentation defines an integer as being a signed…",2,N],[13,"SimpleString",E,E,2,N],[3,"Command",E,"Command for send data to Redis",N,N],[12,"0",E,E,3,N],[3,R[19],E,"Redis comminucation actor",N,N],[3,R[20],E,"Use redis as session storage.",N,N],[4,"Error",E,"General purpose actix redis error",N,N],[13,"Redis",E,E,4,N],[13,"NotConnected",E,"Receiving message during reconnecting",4,N],[13,"Disconnected",E,"Cancel all waters when connection get dropped",4,N],[11,"start",E,"Start new `Supervisor` with `RedisActor`.",5,[[[R[0]],["into",[R[0]]]],[[R[1]],["addr",[R[1]]]]]],[11,"new",E,"Create new redis session backend",6,[[[R[0]],["into",[R[0]]]],["redissession"]]],[11,"ttl",E,"Set time to live in seconds for session value",6,[[["u16"]],["self"]]],[11,"cookie_name",E,"Set custom cookie name for session id",6,[[["str"]],["self"]]],[11,"cookie_path",E,"Set custom cookie path",6,[[["str"]],["self"]]],[11,"cookie_domain",E,"Set custom cookie domain",6,[[["str"]],["self"]]],[11,"cookie_secure",E,"Set custom cookie secure If the `secure` field is set, a…",6,[[["bool"]],["self"]]],[11,"cookie_max_age",E,"Set custom cookie max-age",6,[[["duration"]],["self"]]],[11,"cookie_same_site",E,"Set custom cookie SameSite",6,[[[R[15]]],["self"]]],[11,R[3],E,E,0,[[["self"]],[R[0]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[10],E,E,0,[[["self"]],[T]]],[11,R[11],E,E,0,[[[T],["self"]]]],[11,R[4],E,E,0,[[[U]],[R[2]]]],[11,R[5],E,E,0,[[],[R[2]]]],[11,R[6],E,E,0,[[["self"]],[T]]],[11,R[7],E,E,0,[[["self"]],[T]]],[11,R[8],E,E,0,[[["self"]],[R[9]]]],[11,R[12],E,E,0,[[["self"],["k"]],["bool"]]],[11,"vzip",E,E,0,[[],["v"]]],[11,R[3],E,E,1,[[["self"]],[R[0]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[4],E,E,1,[[[U]],[R[2]]]],[11,R[5],E,E,1,[[],[R[2]]]],[11,R[6],E,E,1,[[["self"]],[T]]],[11,R[7],E,E,1,[[["self"]],[T]]],[11,R[8],E,E,1,[[["self"]],[R[9]]]],[11,"as_fail",E,E,1,[[["self"]],["fail"]]],[11,"vzip",E,E,1,[[],["v"]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[10],E,E,2,[[["self"]],[T]]],[11,R[11],E,E,2,[[[T],["self"]]]],[11,R[4],E,E,2,[[[U]],[R[2]]]],[11,R[5],E,E,2,[[],[R[2]]]],[11,R[6],E,E,2,[[["self"]],[T]]],[11,R[7],E,E,2,[[["self"]],[T]]],[11,R[8],E,E,2,[[["self"]],[R[9]]]],[11,R[12],E,E,2,[[["self"],["k"]],["bool"]]],[11,"vzip",E,E,2,[[],["v"]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[4],E,E,3,[[[U]],[R[2]]]],[11,R[5],E,E,3,[[],[R[2]]]],[11,R[6],E,E,3,[[["self"]],[T]]],[11,R[7],E,E,3,[[["self"]],[T]]],[11,R[8],E,E,3,[[["self"]],[R[9]]]],[11,"vzip",E,E,3,[[],["v"]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[4],E,E,5,[[[U]],[R[2]]]],[11,R[5],E,E,5,[[],[R[2]]]],[11,R[6],E,E,5,[[["self"]],[T]]],[11,R[7],E,E,5,[[["self"]],[T]]],[11,R[8],E,E,5,[[["self"]],[R[9]]]],[11,"vzip",E,E,5,[[],["v"]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[4],E,E,6,[[[U]],[R[2]]]],[11,R[5],E,E,6,[[],[R[2]]]],[11,R[6],E,E,6,[[["self"]],[T]]],[11,R[7],E,E,6,[[["self"]],[T]]],[11,R[8],E,E,6,[[["self"]],[R[9]]]],[11,"into_transform",E,E,6,[[],[T]]],[11,"vzip",E,E,6,[[],["v"]]],[11,R[3],E,E,4,[[["self"]],[R[0]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[4],E,E,4,[[[U]],[R[2]]]],[11,R[5],E,E,4,[[],[R[2]]]],[11,R[6],E,E,4,[[["self"]],[T]]],[11,R[7],E,E,4,[[["self"]],[T]]],[11,R[8],E,E,4,[[["self"]],[R[9]]]],[11,"vzip",E,E,4,[[],["v"]]],[11,"fmt",E,E,2,[[["self"],[R[13]]],[["error"],[R[2],["error"]]]]],[11,"fmt",E,E,1,[[["self"],[R[13]]],[["error"],[R[2],["error"]]]]],[11,"from",E,E,2,[[["usize"]],[R[14]]]],[11,"from",E,E,1,[[["error"]],["error"]]],[11,"from",E,E,1,[[["senderror"]],["error"]]],[11,"from",E,E,2,[[],[R[14]]]],[11,"from",E,E,1,[[["canceled"]],["error"]]],[11,"from",E,E,2,[[["vec",["u8"]],["u8"]],[R[14]]]],[11,"from",E,E,2,[[[R[0]]],[R[14]]]],[11,"from",E,E,2,[[[R[0]]],[R[14]]]],[11,"from",E,E,2,[[["str"]],[R[14]]]],[11,"from_resp_int",E,E,2,[[[R[14]]],[[R[2],[R[14],"error"]],[R[14]],["error"]]]],[11,"eq",E,E,2,[[["self"],[R[14]]],["bool"]]],[11,"ne",E,E,2,[[["self"],[R[14]]],["bool"]]],[11,"description",E,E,1,[[["self"]],["str"]]],[11,"cause",E,E,1,[[["self"]],[["option",["error"]],["error"]]]],[11,"fmt",E,E,1,[[["self"],[R[13]]],[["error"],[R[2],["error"]]]]],[11,"clone",E,E,2,[[["self"]],[R[14]]]],[11,"fmt",E,E,0,[[["self"],[R[13]]],[["error"],[R[2],["error"]]]]],[11,"eq",E,E,0,[[["self"],[R[15]]],["bool"]]],[11,"fmt",E,E,0,[[["self"],[R[13]]],[["error"],[R[2],["error"]]]]],[11,"hash",E,E,0,[[["self"],["__h"]]]],[11,"clone",E,E,0,[[["self"]],[R[15]]]],[11,"from",E,E,4,[[["error"]],["error"]]],[11,"fmt",E,E,3,[[["self"],[R[13]]],[R[2]]]],[11,"fmt",E,E,4,[[["self"],[R[13]]],[R[2]]]],[11,"fmt",E,E,4,[[["self"],[R[13]]],[R[2]]]],[11,"started",E,E,5,[[["self"],["context"]]]],[11,"restarting",E,E,5,[[["self"]]]],[11,"handle",E,E,5,[[["self"],["command"]]]],[11,"error",E,E,5,[[["self"],["resperror"]],["running"]]],[11,"handle",E,E,5,[[["self"],[R[14]]]]],[11,"error",E,E,5,[[["self"],["error"]],["running"]]],[11,"new_transform",E,E,6,[[["self"],["s"]]]],[11,"is_strict",E,"Returns `true` if `self` is `SameSite::Strict` and `false`…",0,[[],["bool"]]],[11,"is_lax",E,"Returns `true` if `self` is `SameSite::Lax` and `false`…",0,[[],["bool"]]],[11,"is_none",E,"Returns `true` if `self` is `SameSite::None` and `false`…",0,[[],["bool"]]],[11,"append",E,"Convenience function for building dynamic Redis commands…",2,[[["vec"]],[R[14]]]]],"p":[[4,R[16]],[4,R[17]],[4,R[18]],[3,"Command"],[4,"Error"],[3,R[19]],[3,R[20]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);