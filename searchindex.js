Search.setIndex({envversion:46,filenames:["index","intro","platform","rtl8195a/api","rtl8195a/intro","rtl8195a/modules/machine","rtl8195a/modules/machine/adc","rtl8195a/modules/machine/dac","rtl8195a/modules/machine/i2c","rtl8195a/modules/machine/pin","rtl8195a/modules/machine/spi","rtl8195a/modules/machine/uart","rtl8195a/modules/network","rtl8195a/modules/socket","rtl8195a/modules/time","rtl8195a/modules/wireless","rtl8195a/start","rtl8195a/tutorial"],objects:{"":{I2C:[8,1,1,""],UART:[11,1,1,""],WLAN:[15,1,1,""]},I2C:{MASTER:[8,0,1,""],mem_read:[8,2,1,""],mem_write:[8,2,1,""],recv:[8,2,1,""],reset:[8,2,1,""],send:[8,2,1,""]},Pin:{IN:[9,0,1,""],OUT:[9,0,1,""],PULL_DOWN:[9,0,1,""],PULL_DRAIN:[9,0,1,""],PULL_NONE:[9,0,1,""],PULL_UP:[9,0,1,""]},UART:{ParityEven:[11,0,1,""],ParityForced0:[11,0,1,""],ParityForced1:[11,0,1,""],ParityNone:[11,0,1,""],ParityOdd:[11,0,1,""],deinit:[11,2,1,""],init:[11,2,1,""],read:[11,2,1,""],readall:[11,2,1,""],readline:[11,2,1,""],write:[11,2,1,""]},WLAN:{AP:[15,0,1,""],OPEN:[15,0,1,""],P2P:[15,0,1,""],PROMISC:[15,0,1,""],STA:[15,0,1,""],STA_AP:[15,0,1,""],WEP_PSK:[15,0,1,""],WEP_SHARED:[15,0,1,""],WPA2_AES_PSK:[15,0,1,""],WPA2_TKIP_PSK:[15,0,1,""],WPA_AES_PSK:[15,0,1,""],WPA_MIXED_PSK:[15,0,1,""],WPA_TKIP_PSK:[15,0,1,""],WPA_WPA2_MIXED:[15,0,1,""],WPS_OPEN:[15,0,1,""],WPS_SECURE:[15,0,1,""],connect:[15,2,1,""],disconnect:[15,2,1,""],is_connect_to_ap:[15,2,1,""],mac:[15,2,1,""],off:[15,2,1,""],on:[15,2,1,""],rssi:[15,2,1,""],scan:[15,2,1,""]},hardware:{Pin:[9,1,1,""]},machine:{reset:[5,3,1,""]},network:{dhcp_inform:[12,2,1,""],dhcp_release:[12,2,1,""],dhcp_renew:[12,2,1,""],dhcp_request:[12,3,1,""],dhcp_state:[12,2,1,""],dhcp_stop:[12,2,1,""]},pin:{dir:[9,2,1,""],id:[9,2,1,""],toggle:[9,2,1,""],value:[9,2,1,""]},socket:{AF_INET6:[13,0,1,""],AF_INET:[13,0,1,""],SOCK_DGRAM:[13,0,1,""],SOCK_RAW:[13,0,1,""],SOCK_STREAM:[13,0,1,""],SOL_SOCKET:[13,0,1,""],SO_REUSEADDR:[13,0,1,""],accept:[13,2,1,""],bind:[13,2,1,""],callback:[13,3,1,""],close:[13,2,1,""],connect:[13,2,1,""],getaddrinfo:[13,2,1,""],listen:[13,2,1,""],print_pcbs:[13,3,1,""],recv:[13,2,1,""],send:[13,2,1,""],setblocking:[13,2,1,""],setsockopt:[13,2,1,""],settimeout:[13,2,1,""],socket:[13,1,1,""]},time:{ctime:[14,3,1,""],localtime:[14,3,1,""],mktime:[14,3,1,""],sleep:[14,3,1,""],sleep_ms:[14,3,1,""],sleep_us:[14,3,1,""],time:[14,3,1,""]}},objnames:{"0":["py","attribute","Python \u5c6c\u6027"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","classmethod","Python class method"]},objtypes:{"0":"py:attribute","1":"py:class","2":"py:method","3":"py:classmethod"},terms:{"0x01":8,"0x02":8,"0x03":8,"0x04":8,"0x05":8,"0x10000bc8":17,"0x10006000":17,"0x10006019":17,"0x1beb0":17,"0x30000000":17,"0x36e4":17,"0x50":8,"0xaa":8,"0xb000":17,"1\u683c\u7e2e\u6392\u70ba4\u500b\u7a7a\u683c":17,"22238392abcd":17,"3\u8a9e\u6cd5\u7684\u76f4\u8b6f\u5668":1,"3e3":17,"3p1":17,"4e2":17,"8alpha":4,"8n1":4,"\u4e00\u5b9a\u6703\u63d0\u4f9b\u786c\u9ad4\u63a7\u5236\u7684\u65b9\u5f0f\u7d66\u958b\u767c\u8005":1,"\u4e00\u7576\u9032\u5165while":1,"\u4e0a\u8ff0\u9664\u4e86mt7688":1,"\u4e0a\u904b\u884cpython":1,"\u4e0b\u8f09\u4e0b\u4f86\u4e26\u57f7\u884c":1,"\u4e0b\u8f09\u7684\u6a94\u6848\u540d\u7a31\u70baram_al":4,"\u4e0d\u505ahw":17,"\u4e14\u4f60\u77e5\u9053\u958b\u767c\u7248\u7684ip\u70ba\u4f55":17,"\u4e26\u4e0d\u9069\u5408\u5927\u898f\u6a21\u4f48\u5efa\u7684iot\u61c9\u7528":1,"\u4e26\u5c07\u6578\u5341kb\u81f3\u6578\u767ekb\u7684binary\u5132\u5b58\u65bcram\u4e2d\u4e26\u9032\u884ccrc\u6821\u9a57":1,"\u4e26\u5c07\u7a0b\u5f0f\u6d41\u7a0b\u64b0\u5beb\u6210\u4e00\u4efd\u8349\u7a3f\u6a94":1,"\u4e26\u5c07ram_al":4,"\u4e26\u9023\u9032\u958b\u767c\u677f":17,"\u4e2d\u9593\u7a7a\u683crepl\u6703\u81ea\u52d5\u5e6b\u4f60\u505a\u7e2e\u6392":4,"\u4e5f\u5c31\u662f\u4fd7\u7a31\u7684ota\u529f\u80fd":1,"\u4ea6\u53ef\u4ee5\u4e0d\u7528\u4e00\u76f4\u505adap\u71d2\u9304":17,"\u4ea6\u53ef\u53c3\u8003\u4ee5\u4e0b\u7bc4\u4f8b":1,"\u4ecd\u5c6c\u65bc\u4e0a\u8ff0\u7684\u7de8\u8b6f\u5f0f\u7a0b\u5f0f\u8a9e\u8a00":1,"\u4ecd\u662f\u5c6c\u65bc\u76f8\u7576\u5371\u96aa\u7684\u66f4\u65b0\u65b9\u5f0f":1,"\u4ee5\u4e00\u4e9b\u5927\u5ee0\u6240\u63d0\u4f9b\u7684solution\u7686\u76f8\u7576\u7a69\u5b9a":1,"\u4ee5\u4e0a\u9019\u500b\u7bc4\u4f8b\u53ea\u662f\u6982\u5ff5\u6027\u7684\u89e3\u8aaa":1,"\u4ee5\u4e0a\u904e\u7a0b":1,"\u4ee5\u53ca\u4f7f\u7528second":17,"\u4ee5\u53camaco":17,"\u4efb\u4f55\u5728filesystem":17,"\u4f46\u4e0d\u4fdd\u8b49\u5176\u4ed6ftp":17,"\u4f46\u662f\u4e0d\u652f\u63f4linux":1,"\u4f46\u662f\u5927\u5ee0\u4e0d\u4e00\u5b9a\u6703\u8003\u616e\u9760\u4f7f\u7528\u8005\u672c\u8eab\u53ef\u80fd\u6703\u72af\u7684\u932f\u8aa4":1,"\u4f46\u662f\u96a8\u8457\u8fd1\u5e7e\u5e74iot":1,"\u4f60\u4e5f\u53ef\u4ee5\u770b\u5230\u958b\u6a5f\u756b\u9762":17,"\u4f60\u6703\u5728\u756b\u9762\u770b\u5230":17,"\u4f60\u9700\u8981\u5148\u5c07micropython":17,"\u4f7f\u7528\u7db2\u8def\u529f\u80fd\u524d":17,"\u4f7f\u7528\u7db2\u8def\u529f\u80fd\u5fc5\u9808\u8981\u5148\u7d93\u904e3\u500b\u6b65\u9a5f":17,"\u4f7f\u7528\u8005\u53ef\u4ee5\u4f7f\u7528o":17,"\u4f7f\u7528micropython":4,"\u4f8b\u5982":1,"\u4f8b\u5982\u6211\u6240\u79fb\u690d\u7684ameba":1,"\u4f8b\u5982ameba":1,"\u4f8b\u5982arm":1,"\u4f8b\u5982realtek":1,"\u4f8b\u5982ti":1,"\u4fbf\u53ef\u4ee5\u7acb\u5373\u9060\u7aef\u9023\u7ddarepl\u9032\u884c\u9664\u932f":1,"\u4fbf\u53ef\u547c\u53eb\u76f4\u8b6f\u5668\u57f7\u884c\u60a8\u7684\u7a0b\u5f0f\u78bc":1,"\u4fbf\u53ef\u900f\u904e\u7db2\u8def\u5c07\u958b\u767c\u8005\u64b0\u5beb\u597d\u7684\u8349\u7a3f\u6a94":1,"\u5047\u8a2d192":17,"\u505a\u6a94\u6848\u5b58\u53d6":17,"\u50b3\u7d71\u7684ota\u529f\u80fd":1,"\u50cf\u662f\u6709\u642d\u8f09\u7db2\u8def\u529f\u80fd\u5f37\u5927\u7684linux\u7684\u958b\u767c\u677f":1,"\u5148\u78ba\u8a8d\u4f60\u958b\u767c\u677f\u6709\u9023\u4e0aap":17,"\u5148\u78ba\u8a8d\u597d\u4e0d\u540c\u4f5c\u8005\u7684\u547d\u540d\u65b9\u5f0f":1,"\u5167\u5efatime":17,"\u5167\u6709\u500bmain":17,"\u5167\u6a94\u6848\u540d\u7a31\u70ba":17,"\u5176\u4e2d":4,"\u5176\u4ed6soc\u7686\u7121\u6cd5\u652f\u63f4\u7db2\u8def\u529f\u80fd\u5f37\u5927\u7684linux":1,"\u5176\u5b98\u65b9\u7db2\u7ad9\u5728":4,"\u5176\u652f\u63f4arduino":4,"\u5176\u76f4\u8b6f\u5f0f\u8a9e\u8a00\u7684\u7279\u6027":1,"\u5176\u97cc\u9ad4\u71d2\u9304\u65b9\u5f0f\u975e\u5e38\u7c21\u55ae":4,"\u5269\u4e0b\u7684500kb":17,"\u5354\u52a9\u60a8\u64b0\u5beb\u4e7e\u6de8\u7684\u7a0b\u5f0f\u78bc":1,"\u5373\u5b8c\u6210\u71d2\u9304":4,"\u539f\u4f5c\u8005\u7684pyboard\u547d\u540d\u70bapyb":1,"\u53bb\u6383\u63cf\u770b\u958b\u767c\u677f\u7684ip\u662f\u591a\u5c11":17,"\u53bb\u7b49\u5f85\u66f4\u65b0":1,"\u53c3\u6578":[8,9,11,12,13,14,15],"\u53camicrosecond":17,"\u53e6\u4e5f\u6709math":17,"\u53ea\u8981\u4f60\u7684\u958b\u767c\u677f\u9023\u4e0a\u7db2\u8def\u5f8c":17,"\u53ef\u4ee5\u900f\u904eftp\u88dc\u56de\u4f86":17,"\u53ef\u4ee5\u91cd\u555frepl":17,"\u53ef\u4ee5reset\u958b\u767c\u677f":17,"\u53ef\u4f7f\u7528\u4e00\u4e9b\u6383\u63cf\u5de5\u5177\u4f8b\u5982":17,"\u53ef\u4f7f\u7528drag":4,"\u53ef\u4f9b\u4f7f\u7528\u8005\u5b58\u653e\u5c0f\u91cf\u8cc7\u6599\u53ca":17,"\u53ef\u53c3\u8003\u4ee5\u4e0b\u7bc4\u4f8b":1,"\u53ef\u65b9\u4fbf\u958b\u767c\u8005\u66f4\u65b0main":17,"\u53ef\u7528":17,"\u53ef\u76f4\u63a5\u9ede\u9078\u4ee5\u4e0b\u9023\u7d50\u4e0b\u8f09":4,"\u53ef\u80fd\u4e5f\u624d10\u5e7ek":1,"\u53ef\u8a66\u8457\u6309enter\u78ba\u8a8drepl\u662f\u5426\u6b63\u5e38\u904b\u4f5c":4,"\u53ef\u900f\u904e\u5916\u90e8pc\u53bbping":17,"\u53ef\u900f\u904eserial":4,"\u53ef\u9032\u5165past":17,"\u5404\u4f5c\u696d\u7cfb\u7d71\u71d2\u9304\u65b9\u5f0f\u53ef\u53c3\u8003\u5982\u4e0b":4,"\u5718\u968a":1,"\u5728\u6b64\u6a21\u5f0f\u8cbc\u4e0a\u7a0b\u5f0f\u78bc\u5f8c\u8f38\u5165ctrl":17,"\u5728\u6c92\u6709\u642d\u8f09\u4f5c\u696d\u7cfb\u7d71\u7684\u958b\u767c\u677f":1,"\u5728\u958b\u767c\u65b9\u5f0f\u4f86\u8aaa":1,"\u5728iot":1,"\u5728micropython":1,"\u589e\u52a0\u958b\u767c\u6642\u9593":1,"\u5982\u4f55\u958b\u59cb":0,"\u5b58\u53d6filesystem":17,"\u5b83\u672c\u8cea\u4e0a\u50c5\u662f\u4e00\u500b\u8b93\u4f4e\u8cc7\u6e90\u7684\u5fae\u8655\u7406\u6a5f\u80fd\u5920\u904b\u884cpython\u8a9e\u6cd5":1,"\u5b89\u5168\u5730\u9060\u7aef\u66f4\u65b0\u7a0b\u5f0f\u8207\u5927\u898f\u6a21\u4f48\u5efa":1,"\u5b89\u88dd\u5b8c\u6210\u5f8c":4,"\u5b89\u88dd\u9a45\u52d5\u7a0b\u5f0fmbed":4,"\u5bb9\u6613\u589e\u52a0\u958b\u767c\u8005\u7684\u56f0\u64fe":1,"\u5be6\u9ad4\u4e0a\u67091mb\u7684flash\u7a7a\u9593":17,"\u5c07\u6b64\u6a94\u6848\u71d2\u9304\u81f3\u958b\u767c\u677f\u5373\u53ef\u4f7f\u7528micropython":4,"\u5c07ameba":4,"\u5c0e\u5165\u81f3micropython":17,"\u5c0e\u81f4\u5927\u90e8\u5206\u53ef\u642d\u8f09linux\u7684soc":1,"\u5c0f\u6280\u5de7":4,"\u5c1a\u672a\u5408\u4e4e\u76ee\u524d\u4efb\u4f55\u958b\u767c\u677f\u7684\u529f\u80fd":1,"\u5c31\u53ef\u4ee5\u900f\u904eftp":17,"\u5c31\u5f88\u96e3\u8b93\u6a5f\u5668\u9032\u5165bootload":1,"\u5e6b\u52a9\u4f60\u505a\u57fa\u672c\u6578\u5b78\u904b\u7b97":17,"\u5e7e\u4e4e\u662f\u7531\u4e0d\u540c\u4eba":1,"\u5efa\u7acb\u958b\u767c\u74b0\u5883":1,"\u5efa\u8b70\u4f7f\u7528putti":4,"\u5f80\u5f80\u9700\u8981\u9032\u884c\u53cd\u8986\u6027\u7684\u7de8\u8b6f":1,"\u5f85\u7da0\u71c8\u4e0d\u518d\u9583\u720d\u6642":4,"\u5fc5\u9808\u5c07\u5305\u88dd\u597d\u76f4\u8b6f\u5668\u7684\u97cc\u9ad4\u71d2\u9304\u81f3\u958b\u767c\u677f\u5167":4,"\u600e\u9ebc\u63a7\u5236\u5468\u908a\u786c\u9ad4":0,"\u60a8\u53ef\u4ee5\u5728repl\u4e0b\u9032\u884cpython":4,"\u60a8\u6240\u4f7f\u7528\u7684\u958b\u767c\u677f\u82e5\u652f\u63f4\u7db2\u8def\u529f\u80fd\u7684\u8a71":1,"\u61c9\u7528\u7684\u958b\u767c\u6642\u9593":1,"\u61c9\u7528\u8d8a\u4f86\u8d8a\u504f\u5411\u53ef\u5927\u898f\u6a21\u4f48\u5efa":1,"\u6210\u672c\u4e5f\u8981\u6c42\u8981\u8d8a\u4f86\u8d8a\u4f4e":1,"\u6211\u7684\u96fb\u8166":4,"\u6216":17,"\u6216\u662f\u4f7f\u7528ameba":1,"\u6216\u662f\u5728\u5de6\u65b9\u83dc\u55ae\u9ede\u9078\u60a8\u6709\u8208\u8da3\u7684\u958b\u767c\u677f\u4f7f\u7528\u65b9\u5f0f":1,"\u6216\u662fssh\u7b49\u65b9\u5f0f\u9060\u7aef\u9023\u7dda\u9032\u53bb\u9664\u932f":1,"\u6216udp":17,"\u6240\u4ee5\u4f7f\u7528\u8005\u53ef\u4ee5\u5c07\u4e3b\u8981\u7a0b\u5f0f\u78bc\u653e\u5728main":17,"\u6240\u4ee5\u5176\u6a21\u7d44\u540d\u7a31\u4e5f\u4e0d\u76e1\u76f8\u540c":1,"\u6240\u4ee5\u5efa\u8b70\u4f7f\u7528\u4e0d\u540c\u958b\u767c\u677f\u524d":1,"\u6240\u4ee5\u82e5\u662f\u958b\u767c\u677f\u6709\u652f\u63f4\u76f4\u8b6f\u5668\u7684\u8a71":1,"\u6240\u79fb\u690d\u7684":1,"\u6240\u8a2d\u8a08\u7684\u7a0b\u5f0f\u8a9e\u8a00":1,"\u6240\u9054\u5230":17,"\u6309\u958b\u767c\u677f\u4e0a\u7684reset\u9375":17,"\u63a5\u4e0a\u958b\u767c\u677f":17,"\u641c\u5c0b\u9801\u9762":0,"\u64b0\u5beb\u7a0b\u5f0f":1,"\u652f\u63f4\u4ee5\u4e0b\u958b\u767c\u677f":1,"\u652f\u63f4\u7269\u4ef6\u5c0e\u5411":1,"\u652f\u63f4python":1,"\u653e\u5165\u81ea\u5df1\u5beb\u7684modul":17,"\u6574\u5408\u4ee5\u4e0a\u6b65\u9a5f\u53ef\u4ee5\u53c3\u8003\u4ee5\u4e0b\u7bc4\u4f8b\u7a0b\u5f0f":17,"\u65b9\u4fbf\u958b\u767c\u8005\u9032\u884c\u9664\u932f\u53ca\u9a57\u8b49\u908f\u8f2f":1,"\u65e5\u5f8c\u7522\u54c1\u5be6\u969b\u904b\u4f5c\u51fa\u73fe\u72c0\u6cc1\u6642":1,"\u662f\u4ec0\u9ebc":0,"\u662f\u53ef\u4ee5\u8b93\u8cc7\u6e90\u8f03\u5c11\u7684\u5fae\u8655\u7406\u6a5f":1,"\u662f\u6211\u5f9emicropython":1,"\u662f\u745e\u6631\u79d1\u6280\u6240\u63a8\u51fa\u7684\u958b\u767c\u677f":4,"\u66f4\u53ef\u80fd\u6709\u4ee5\u4e0b\u7684\u4fbf\u5229\u6027":1,"\u66f4\u65b0\u5230\u53ef\u80fd\u7522\u751f\u6b7b\u6a5f\u7684\u7a0b\u5f0f\u78bc":1,"\u6700\u8fd1\u5e02\u5834\u958b\u59cb\u63a8\u51fa\u9069\u5408\u63a8\u6a21\u4f48\u5efa\u7684wifi":1,"\u6703\u56e0\u4e0d\u540c\u96fb\u8166\u800c\u7570":4,"\u6703\u5728":4,"\u6709\u4ec0\u9ebc\u597d\u8655":0,"\u6709\u4ec0\u9ebc\u95dc\u4fc2":0,"\u6709\u500btcp":17,"\u671f\u9593micropython":1,"\u672a\u4f86\u6703\u662f\u5c08\u653b\u5177\u6709\u806f\u7db2\u529f\u80fd\u7684\u958b\u767c\u677f":1,"\u672c\u8eab\u4e26\u4e0d\u662f\u5c08\u9580\u70baiot":1,"\u67e5\u770b":1,"\u6a02\u946besp8266":1,"\u6a21\u7d44\u5316\u7279\u6027":1,"\u6a21\u7d44\u53castandard":17,"\u6a21\u7d44\u53ef\u4f9b\u4f7f\u7528":17,"\u6a21\u7d44\u53ef\u8b80\u53d6\u958b\u767c\u677f\u4e0artc\u6642\u9593":17,"\u6a21\u7d44\u7d22\u5f15":0,"\u6b64\u6642\u6703\u770b\u5230ameba":4,"\u6b64\u6642\u70ba\u71d2\u9304\u97cc\u9ad4\u4e2d":4,"\u70bambed":4,"\u7136\u800c":1,"\u71d2\u9304\u4e26\u53cd\u8986\u6e2c\u8a66":1,"\u71d2\u9304\u4e26\u6e2c\u8a66":1,"\u71d2\u9304\u65b9\u5f0f\u53ef\u53c3\u8003":17,"\u7269\u806f\u7db2\u61c9\u7528\u4e0a\u642d\u8f09\u76f4\u8b6f\u5668\u6703\u76f8\u7576\u9069\u5408\u5927\u898f\u6a21\u4f48\u5efa":1,"\u745e\u6631rtl8195a\u6216\u662f\u806f\u767c\u79d1\u7684mt7688\u7b49":1,"\u751a\u81f3\u53ef\u4ee5realtime\u7684\u900f\u904e\u7db2\u8def\u66f4\u65b0\u4f60\u7684\u7a0b\u5f0f\u78bc":17,"\u7522\u696d\u84ec\u52c3\u767c\u5c55":1,"\u7576\u5176\u61c9\u7528\u5df2\u7d93\u5be6\u969b\u904b\u4f5c\u6642":1,"\u7576\u900f\u904e\u7d42\u7aef\u6a5f\u9023\u9032ameba\u5f8c":4,"\u7576\u958b\u767c\u8005\u900f\u904erepl\u5b8c\u6210\u9664\u932f\u53ca\u9a57\u8b49":1,"\u7576\u958b\u767c\u8005\u9047\u5230\u7a0b\u5f0f\u78bc\u4e0a\u7684\u554f\u984c":1,"\u7684\u597d\u8655\u5728\u65bc":1,"\u7684\u7121\u7dda\u529f\u80fd\u6709wlan":17,"\u7684\u958b\u767c\u677f":4,"\u7684\u97cc\u9ad4\u71d2\u9304\u81f3\u958b\u767c\u677f\u5167":17,"\u7684ftp":17,"\u7684wifi":1,"\u7686\u53ef\u4ee5\u900f\u904eimport":17,"\u7686\u662f\u9075\u5faa\u50b3\u7d71\u7684\u958b\u767c\u65b9\u5f0f":1,"\u76ee\u524d\u50c5\u652f\u63f4wlan":17,"\u76ee\u524d\u6211\u7684repositori":1,"\u76ee\u524d\u6240\u6709\u652f\u63f4micropython\u7684\u958b\u767c\u677f":1,"\u76ee\u524d\u652f\u63f4\u6574\u6578\u53ca\u6d6e\u9ede\u6578\u904b\u7b97":17,"\u76ee\u524d\u6e2c\u8a66filezilla\u53ef\u7528":17,"\u76ee\u524dupstream\u7684micropython\u652f\u63f4\u76f8\u7576\u591a\u6b3e\u958b\u767c\u677f":1,"\u76f4\u8b6f\u5668\u4ecd\u662f\u8655\u65bc\u6d3b\u52d5\u72c0\u614b":1,"\u76f4\u8b6f\u5668\u6703\u63d0\u4f9b\u4e00\u500b\u4ea4\u4e92\u5f0f\u7684\u958b\u767c\u74b0\u5883":1,"\u76f4\u8b6f\u5668\u7d04\u7565500kb":17,"\u76f8\u8f03\u65bc\u7de8\u8b6f\u5f0f\u7684\u7a0b\u5f0f\u8a9e\u8a00":1,"\u76f8\u8f03\u65bc\u7de8\u8b6f\u5f0f\u8a9e\u8a00\u7684\u7279\u6027":1,"\u770b\u5230\u4e00\u500b\u540d\u7a31\u70bambed\u7684\u53ef\u5378\u9664\u5f0f\u78c1\u789f\u6a5f":4,"\u786c\u789f\u540d\u7a31\u70ba":17,"\u786c\u9ad4\u63a7\u5236\u53ef\u4ee5\u53c3\u8003\u4e0b\u5716\u65b9\u683c\u6240\u5b9a\u7fa9\u7684\u540d\u7a31":17,"\u7a0b\u5f0f\u71d2\u9304":1,"\u7b2c5\u884c\u7684":4,"\u7b2c\u4e00\u6b21\u8981\u5728ameba":4,"\u7b49":1,"\u7b49\u5230ameba\u4e0a\u7684\u7da0\u71c8\u5b8c\u5168\u505c\u6b62\u9583\u720d\u5f8c":4,"\u7b49\u7d1a\u7684delai":17,"\u7bc0\u7701\u958b\u767c\u6642\u9593":17,"\u7d22\u53d6ip\u6216\u662f\u56fa\u5b9aip":17,"\u7d22\u5f15":0,"\u7db2\u8def\u529f\u80fd\u662f\u900f\u904elwip":17,"\u7de8\u8b6f":1,"\u7de8\u8b6f\u7a0b\u5f0f":1,"\u7e2e\u6392\u5f88\u91cd\u8981":17,"\u7e2e\u77ediot":1,"\u800c\u4ee5\u4e0b\u7684github":1,"\u800c\u5305\u88dd\u76f4\u8b6f\u5668\u7684\u97cc\u9ad4\u6a94\u6848\u4f4d\u5728\u6211\u7684repository\u5167":4,"\u800cmicropython":1,"\u8017\u96fb\u91cf\u8981\u6c42\u8d8a\u4f86\u8d8a\u4f4e":1,"\u8207\u7db2\u8def\u529f\u80fd\u505a\u7d50\u5408":1,"\u8209\u500b\u4f8b\u5b50\u4f86\u8aaa":1,"\u82e5\u4f60dhcp\u5f8c\u4e0d\u77e5\u9053\u958b\u767c\u677f\u7684ip":17,"\u82e5\u60a8\u4f7f\u7528\u7684\u958b\u767c\u677f\u652f\u63f4\u7db2\u8def\u529f\u80fd":1,"\u82e5\u6709\u8208\u8da3\u53ef\u81f3":1,"\u82e5\u8981\u4f7f\u7528gpio\u529f\u80fd":1,"\u82e5\u8981\u7d50\u675f\u7de8\u8f2f\u5148\u5c07\u6e38\u6a19\u9000\u81f3\u884c\u982d\u5f8c\u6309enter":4,"\u8981\u4f7f\u7528micropython\u4e4b\u524d":17,"\u8a2d\u5b9a\u5305\u7387\u70ba8n1":17,"\u8a2d\u5b9awlan\u70bastat":17,"\u8a66\u8457\u6309\u5e7e\u6b21enter":17,"\u8a9e\u6cd5\u51fa\u932f\u6216\u662f\u6307\u6a19\u4f7f\u7528\u932f\u8aa4\u7b49":1,"\u8a9e\u6cd5\u7684\u8f38\u5165\u4e86":4,"\u8a9e\u6cd5\u7c21\u55ae":1,"\u8aa4\u522a\u7684\u8a71":17,"\u8acb\u52ff\u62d4\u9664\u96fb\u6e90":4,"\u8acb\u52ff\u76f4\u63a5\u8907\u88fd\u8cbc\u4e0a":1,"\u8acb\u66ff\u63db\u6210\u60a8ram_al":4,"\u8acb\u9ede\u9078\u4ee5\u4e0b\u9023\u7d50\u958b\u59cb":1,"\u8b93\u60a8\u5beb\u904e\u7684\u7a0b\u5f0f\u78bc\u91cd\u69cb\u6027\u9ad8":1,"\u8b93\u958b\u767c\u677f\u4e0a\u96fb\u5f8c\u81ea\u52d5\u57f7\u884cscript":17,"\u8ca0\u8cac\u5f9e\u7db2\u8def\u63a5\u6536binari":1,"\u8ddf":0,"\u8ddfnfc":17,"\u8fd4\u56de":[5,8,9,11,12,13,14,15],"\u8fd4\u56de\u985e\u5225":8,"\u900f\u904e\u7d42\u7aef\u6a5f\u7a0b\u5f0f":17,"\u900f\u904edhcp":17,"\u900f\u904emicro":4,"\u9019\u88e1":4,"\u9023\u5230\u958b\u767c\u677f\u5167\u90e8\u7684filesystem":17,"\u9023\u63a5\u81f3mac":4,"\u9023\u63a5\u81f3pc":4,"\u9023\u7dda":4,"\u9023\u7dda\u8207\u5b89\u5168\u6027\u8a8d\u8b49":17,"\u9032\u5165repl\u74b0\u5883":4,"\u904b\u884c\u5728\u5fae\u8655\u7406\u6a5f\u4e0a\u7684micropython":1,"\u9060\u7aef\u66f4\u65b0\u60a8\u7684script":1,"\u9060\u7aef\u9664\u932f":1,"\u908f\u8f2f\u554f\u984c":1,"\u90fd\u6703\u88ab\u683c\u5f0f\u5316\u70bafatf":17,"\u91cd\u65b0\u4e0a\u96fb":4,"\u958b\u555f\u7d42\u7aef\u6a5f\u4e26\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4":4,"\u958b\u767c\u677f":17,"\u958b\u767c\u677f\u53ea\u8981\u9023\u4e0a\u7db2\u8def\u5f8c":17,"\u958b\u767c\u677f\u6bcf\u6b21\u91cd\u65b0\u958b\u6a5f\u90fd\u6703\u57f7\u884cmain":17,"\u958b\u767c\u8005\u53ef\u4ee5\u5c07\u958b\u767c\u677f\u7684repl":1,"\u958b\u767c\u8005\u53ef\u4ee5\u900f\u904e\u7a0b\u5f0f\u907f\u514d\u4e0b\u8f09\u5230\u6703\u7522\u751f\u6b7b\u6a5f\u7684\u7a0b\u5f0f\u78bc":1,"\u958b\u767c\u8005\u7686\u53ef\u4ee5\u900f\u904etelnet":1,"\u958b\u767c\u8005\u82e5\u9047\u5230\u554f\u984c\u662f\u76f8\u7576\u96e3\u9060\u7aef\u89e3\u6c7a\u554f\u984c\u7684":1,"\u9664\u4e86\u624b\u52d5\u91cd\u7f6e\u5916":1,"\u9700\u4e0b\u8f09ameba":4,"\u9810\u8a2d\u5e8f\u5217\u57e0\u8a2d\u5b9a\u70ba":4,"\u9996\u5148\u5c07microusb":17,"\u9ede\u64ca\u6b64\u53ef\u5378\u9664\u5f0f\u78c1\u789f\u6a5f\u5f8c\u9032\u5165":4,"__main__":1,"__name__":[1,17],"bin\u5b58\u653e\u7684\u8def\u5f91":4,"bin\u8907\u88fd\u81f3\u6b64":4,"board\u4e0a\u4e2d\u9593\u7684\u7da0\u71c8\u5feb\u901f\u9583\u720d":4,"board\u63a7\u5236gpio\u7684\u6a21\u7d44":1,"board\u7684wifi\u529f\u80fd":1,"byte":[8,11,13],"case":13,"char":11,"class":3,"const":[8,11,13,15],"default":[13,17],"drop\u7684\u65b9\u5f0f":4,"fork\u51fa\u4f86\u7684":1,"function":3,"import":[1,4,8,9,11,12,13,14,15,17],"int":[8,9,11,12,13,14,15],"loop\u5167\u90e8":1,"micropython\u6703\u57f7\u884c\u4f60\u6240\u8cbc\u4e0a\u7684\u7a0b\u5f0f\u78bc":17,"new":17,"nfc\u4e4b\u5f8c\u6703\u65b0\u589e":17,"ota\u652f\u63f4":1,"py\u5167":17,"py\u6a94":17,"py\u6a94\u5f88\u91cd\u8981":17,"py\u7d50\u5c3e\u6216\u542b\u6709__init__":17,"py\u8cc7\u6599\u593e":17,"return":[11,13],"simplelink\u7b49":1,"static":17,"teraterm\u6216minicom\u7b49\u5e8f\u5217\u57e0\u7d42\u7aef\u6a5f\u9032\u884ccom":4,"true":[1,8],"try":[15,17],accept:[13,17],access:3,aco:17,acquir:13,adc:[3,5],adddress:15,addr:[8,17],addr_info:13,addr_siz:8,address:8,af_inet6:13,af_inet:[13,17],after:14,alg:17,all:[1,11,15],also:15,altern:[8,11],ameba:1,ani:17,ap_list:15,api:0,arm:1,asdk:17,asin:17,assign:[8,12,13],assoc:17,associ:17,atan2:17,atan:17,auth:[1,12,15,17],auto:17,avail:15,back:17,backlog:[13,17],basic:16,baudrat:[8,11],below:2,bin:[1,4],bind:[13,17],bit:[8,11],bitsaddress:8,bj4:17,block:[13,17],board:1,bodi:1,bool:[8,9,13,15],boot:17,bootload:1,bssid:[15,17],btearrai:8,buf:[8,11],buffer:[8,11],build:17,byte_list:8,bytearrai:[8,11,13],cabl:[4,17],callback:13,can:[8,9,13,14,15],care:17,carrag:11,cc3200:1,ceil:17,chang:17,channel:[15,17],charact:15,chdir:17,check:[12,15,17],choos:17,classmethod:[5,12,13,14],cliend_sock:13,client:13,client_addr:13,client_ipaddr:17,client_sock:13,client_socket:17,close:[1,13,17],cmsi:4,cocurr:15,code:17,com:[1,4,13,17],command:17,complet:17,connect:[1,12,13,15,17],constant:3,constructor:[3,8,9,11,13],content:8,control:16,convert:14,copysign:17,core:8,cortex:1,counter:[14,17],creat:[8,9,11,13,15,17],ctime:14,ctrl:17,current:[14,15,17],cwyark:[1,4],dac:[3,5],dai:14,dap:4,data:[8,11,13,17],declar:17,def:[1,17],degre:17,deinit:11,delai:3,dev:1,develop:4,devic:[8,11],dhcp:[12,17],dhcp_inform:12,dhcp_releas:12,dhcp_renew:12,dhcp_request:[12,17],dhcp_state:12,dhcp_stop:12,dir:[9,17],directori:17,dirti:17,disconnect:[15,17],discoveri:13,domain:13,don:[12,13],download:4,driver:[4,17],efus:17,els:[1,17],enabl:[4,13],enter:17,env:1,except:[15,17],execut:17,exp:17,fab:17,facebook:13,fail:[1,12,15,17],fals:8,file:17,filesystem:16,filezilla:17,firmwar:1,flash:[1,17],floor:17,fmod:17,folder:4,form:17,format:14,frexp:17,from:[1,8,9,11,12,15,17],ftp:16,g5a23590:17,gatewai:17,gcc:17,gener:8,get:[1,9,14,15,17],getaddrinfo:[13,17],getcwd:17,github:[1,4],googl:[13,17],group:17,hallo:17,handl:[3,8],hang:13,hardwar:[1,3],hello:[13,17],help:17,here:17,hex:8,high:9,host:13,hostnam:13,hour:[14,17],howev:13,http:[1,4],hybrid:17,i2c:[3,5],imag:17,image1:17,image2:17,image3:17,img2:17,incom:13,infastart:17,inform:[12,17],init:[11,17],initi:17,insid:8,intern:16,introduct:0,ipaddr:13,ipproro_tcp:13,is_connect_to_ap:15,isfinit:17,isinf:17,isnan:17,jump:17,kei:17,keyid:17,larger:15,ldexp:17,leas:12,led:1,len:17,length:[15,17],level:[3,9],librari:16,list:[2,13,15],listdir:17,listen:[13,17],load:17,local_ip:17,localtim:[14,17],log:17,low:[3,9],lwip:[13,17],mac:[15,17],machin:3,main:[1,17],main_script:1,master:8,math:17,maxium:[13,17],mbed:4,mbedwinserial_16466:4,mean:17,media:4,mem_addr:8,mem_read:8,mem_writ:8,memori:8,method:3,micorpython:1,microsecond:14,might:13,millisecond:[14,17],minicom:17,minut:[14,17],mkdir:17,mktime:14,mode:1,mode_sta:1,modf:17,modul:3,month:14,more:17,most:13,mpiot:15,msec:[13,17],my_fil:17,name:[1,9],nbyte:[8,11],nearbi:15,netmask:17,network:3,new_fil:17,nmap:17,non:13,none:[5,8,11,12,13,14,15,17],noth:17,now:[13,14,17],num:13,number:[11,13,17],numer:16,object:[8,9,11,13,15,17],off:15,offset:8,onc:13,onli:[8,9,12,15],open:[1,15,17],open_drain:[9,17],oper:[8,16],option:13,org:4,oserror:[12,15,17],ota:1,out:[9,17],output:17,p2p:[15,17],pa_0:[9,11],pa_1:[1,9,17],pa_2:17,pa_4:11,pa_6:11,pa_7:11,pairwis:17,pariti:11,parityeven:11,parityforced0:11,parityforced1:11,paritynon:11,parityodd:11,parti:16,password:[12,15,17],path:1,pb_2:8,pb_3:8,pc_0:[11,17],pc_3:11,pc_4:8,pc_5:8,pd_4:[8,11],pd_5:[8,17],pd_6:8,pd_7:[8,11],pe_0:[8,11],pe_1:8,pe_2:8,pe_3:[8,11],pe_4:8,pe_5:8,pin1:17,pin2:17,pin:[1,3],platform:0,plot:9,point:15,port:[4,13],pow:17,press:17,print:[1,4,8,11,14,15,17],print_pcb:13,program:13,promisc:[15,17],proto:13,pull:[9,17],pull_down:9,pull_drain:9,pull_non:9,pull_up:9,put:17,putti:17,python3:1,python:1,queri:3,radian:17,rais:[12,15],ram_al:4,rang:[4,9,14,15,17],read:[8,11,17],readal:[11,17],readlin:11,realtek:[0,2],receiv:[8,11,13,17],reciev:13,recv:[8,13,17],refer:0,releas:[4,12],remain:13,remov:17,renam:17,renew:12,repl:1,request:12,reset:[5,8,13,17],result:8,rmdir:17,rom:17,rssi:[1,15,17],rt8195a:17,rtc:[14,16],rtkwin:17,rtl8195a:[0,2,4],same:15,scan:[1,15,17],scan_your_wifi_around_y:17,scl:8,script:16,sda:8,sdk:4,sdl:8,sdr:17,sec:14,second:[14,17],security_wep_psk:1,seek:17,send:[8,11,13,17],sent:13,server:[13,16],server_ip:13,servic:13,set:[9,13,14,17],setblock:13,setsockopt:13,settimeout:13,show:17,sign:17,sin:17,sinc:14,slave:8,sleep:[14,17],sleep_m:[9,14,17],sleep_u:14,so_reuseaddr:13,soc:1,sock_dgram:[13,17],sock_raw:13,sock_stream:13,socket:3,sol_socket:13,some:8,specif:13,spi:[3,5],sqrt:17,sram:17,ssid:[1,12,15,17],sta:[12,15,17],sta_ap:[12,15,17],stack:[13,17],start:16,state:[12,13],station:[15,17],statu:9,still:15,stop:[8,11,12],str:[9,13,14,15],stream:[1,13],string:14,success:[1,17],support:[2,15,16],sync:4,tab:17,tan:17,target:[15,17],task:17,tbd:13,tcp:13,teraterm:17,test:[1,15,17],test_dir2:17,test_dir:17,test_pin:9,test_pin_2:9,test_result:1,text:17,than:15,thi:[1,9,17],third:16,through:[11,17],time:[3,9],timeout:[11,12,13,17],timeout_char:11,tkip:17,toggl:[1,9,17],toolchain:17,trunc:17,tupl:[8,11,13,14,15],turn:15,tutori:[0,16],txt:17,type:13,uart:[3,5],udp:13,unit:[8,11,13,14],until:[11,13],usag:16,usb:4,user:[1,4,8],valid:17,valu:[1,8,9,13,15,17],valueerror:15,version:[4,17],voltag:9,volum:4,wait:13,week:14,wep104:17,wep40:17,wep_psk:[15,17],wep_shar:[15,17],when:17,wifi:[1,12],wifi_list:17,wireless:[1,3,12],wlan:[3,12],workabl:[12,15],wpa2_aes_psk:[12,15,17],wpa2_mixed_psk:17,wpa2_tkip_psk:[15,17],wpa_aes_psk:[15,17],wpa_mixed_psk:15,wpa_tkip_psk:[15,17],wpa_wpa2_mix:[15,17],wps_open:[15,17],wps_secur:[15,17],write:[1,8,11,17],wrong:15,www:[1,13,17],xxxkeyxxx:1,xxxssidxxx:1,year:14,yet:15,you:[13,14,15,17],your:[12,15,17],your_ota_serv:1,your_password:15,your_ssid:[15,17]},titles:["Style guide for MicroPython with IoT","Introduction","Platform Guides","API Referances","Introduction","<code class=\"docutils literal\"><span class=\"pre\">machine</span></code> &#8211; a module to access hardware","Class <cite>ADC</cite>","Class <cite>DAC</cite>","Class <cite>I2C</cite>","Class <cite>Pin</cite>","Class <cite>SPI</cite>","Class <cite>UART</cite>","<code class=\"docutils literal\"><span class=\"pre\">network</span></code> &#8211; a module to handle low level networking","<code class=\"docutils literal\"><span class=\"pre\">socket</span></code> &#8211;a module to handle DNS query and low level socket","<code class=\"docutils literal\"><span class=\"pre\">time</span></code> &#8211; a module to handle time and delay","<code class=\"docutils literal\"><span class=\"pre\">wireless</span></code> &#8211; a module to access wireless functions","Realtek RTL8195A","Tutorial"],titleterms:{"\u5982\u4f55\u958b\u59cb":1,"\u600e\u9ebc\u63a7\u5236\u5468\u908a\u786c\u9ad4":1,"\u662f\u4ec0\u9ebc":1,"\u6709\u4ec0\u9ebc\u597d\u8655":1,"\u6709\u4ec0\u9ebc\u95dc\u4fc2":1,"\u8ddf":1,"class":[5,6,7,8,9,10,11,13,15],"function":15,access:[5,15],adc:6,ameba:4,api:3,basic:17,board:4,client:17,constant:[8,9,11,13,15],constructor:15,control:17,dac:7,definit:4,delai:[14,17],direct:9,drain:9,exampl:[4,17],filesystem:17,first:4,ftp:17,guid:[0,2],handl:[12,13,14],hardwar:[5,17],how:4,i2c:8,indic:0,instal:4,intern:17,introduct:[1,4],iot:[0,1],level:[12,13],librari:17,linux:4,low:[12,13],machin:5,method:[8,9,11,13,15],micropython:[0,1,4],mode:[8,15],modul:[5,12,13,14,15],network:[12,17],next:4,numer:17,oper:17,osx:4,parti:17,pin:[4,9],platform:2,queri:13,realtek:[4,16],refer:3,rtc:17,rtl8195a:16,script:17,secur:15,server:17,socket:13,spi:10,start:17,style:0,support:17,tabl:0,tcp:17,third:17,time:14,tutori:17,type:15,uart:11,udp:17,usag:17,what:4,wifi:15,window:4,wireless:[15,17],wlan:15}})