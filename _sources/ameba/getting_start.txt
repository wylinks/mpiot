***************
Getting started
***************

要使用MicroPython@Ameba 之前，需要先將韌體燒錄至開發板內。

燒錄方式可參考 :ref:`realtek-ameba-board-rtl8195am`

Basic Usage 
###########

首先將MicroUSB Cable 接上開發板，透過終端機程式, ex: minicom, putty 或 TeraTerm, 設定包率為8N1, 38400，並連進開發板。
試著按幾次Enter，你會在畫面看到:

.. code-block:: python

   >>> 
   >>> 
   >>> 

按開發板上的reset鍵，你也可以看到開機畫面。

.. code-block:: python

    Mounting Ramfs, ramfs size = 102400
    Mounting Flashfs
    Mount flash to vfs done
    main.py not found
    MicroPython v1.8.7-979-g9fb2a76 on 2017-05-09; AmebaBoard with RTL8195A
    >>> 

.. note:: 

   Ctrl+B 可以重啟REPL (不做硬體重置)

   Ctrl+E 可進入paste mode。在此模式貼上程式碼後輸入Ctrl+D，MicroPython會執行你所貼上的程式碼。

Hardware Control
################

目前支援功能：

+------------+--------------------------+
|  function  |        module            |
+============+==========================+
|     GPIO   | :mod:`umachine.Pin`      |
+------------+--------------------------+
|     I2C    | :mod:`umachine.I2C`      |
+------------+--------------------------+
|   LOGUART  | :mod:`umachine.LOGUART`  |
+------------+--------------------------+
|     UART   | :mod:`umachine.UART`     |
+------------+--------------------------+
|     SPI    | :mod:`umachine.SPI`      |
+------------+--------------------------+
|     RTC    | :mod:`umachine.RTC`      |
+------------+--------------------------+
|  Watchdog  | :mod:`umachine.WDT`      |
+------------+--------------------------+
|     ADC    | :mod:`umachine.ADC`      |
+------------+--------------------------+
|     DAC    | :mod:`umachine.DAC`      |
+------------+--------------------------+
|   CRYPTO   | :mod:`umachine.CRYPTO`   |
+------------+--------------------------+
|   TIMER    | :mod:`umachine.TIMER`    |
+------------+--------------------------+
|   PWM      | :mod:`umachine.PWM`      |
+------------+--------------------------+

硬體控制可以參考下圖方格所定義的名稱。ex: PA_1, PA_2, PD_5 ...

.. image:: images/Ameba_pin_Def.png

控制GPIO僅需要幾行程式碼。

.. code-block:: python

   # To control I/O output
   >>> from umachine import Pin
   >>> pin1 = Pin("PA_1", mode=Pin.OUT)
   >>> pin1.toggle()
   >>> pin1.value(1)
   >>> pin1.value(0)
   # To read I/O's value
   >>> pin2 = Pin("PC_0", mode=Pin.IN, pull=Pin.OPEN_DRAIN)
   >>> pin2.value()
   1

Networking
##########

MicroPython\@RTL8195AM 支援的無線功能有：

* WLAN (WiFi)
* NFC (comming soon)

WLAN
****

WLAN 支援STA, AP 以及STA_AP模式。

但目前還無法實現真正的Access Point功能(wan to local network)，主要原因是內建的Lwip 不支援network interface間路由功能。

WLAN 基本功能
============

WLAN 可以讀取mac address，亦可以讀取目前RSSi數值。

.. code-block:: python

   >>> from uwireless import WLAN
   >>> wlan = WLAN(mode=WLAN.STA)
   >>> wlan.off()
   >>> wlan.on(WLAN.STA)
   >>> wlan.mac()
   '28:c2:dd:dd:42:7d'
   >>> wlan.rssi()
   0

一個掃描周圍WiFi SSID的例子。

.. code-block:: python

   >>> ap_list = list()
   >>> def my_wlan_scan_ap_report(ap_info):
   ...     ap_list.append(ap_info)
   >>> def my_wlan_scan_ap_done():
   ...     print("WLAN scan done")
   >>> wlan.event_handler(WLAN.EVENT_SCAN_RESULT_REPORT, my_wlan_scan_ap_report)
   >>> wlan.event_handler(WLAN.EVENT_SCAN_DONE, my_wlan_scan_ap_done)
   >>> wlan.scan(WLAN.SCAN_TYPE_ACTIVE, WLAN.BSS_TYPE_ANY)
   >>> print(ap_list)
   >>> wlan.event_handler(WLAN.EVENT_SCAN_RESULT_REPORT, None)
   >>> wlan.event_handler(WLAN.EVENT_SCAN_DONE, None)

.. note:: 

   縮排很重要，1格縮排為4個空格。

TCP/IP功能是透過Lwip stack 所完成的，使用網路功能必須要先經過3個步驟。

1 設定WLAN為STA mode, AP mode 或 STA_AP mode。

2 WiFi 連線與安全性認證

3 選擇使用DHCP 索取IP或是設定固定IP

Station mode 範例
================

以下是一個使用Station mode 去連另外一台AP的範例，並透過socket 模組去進行DNS query。

.. code-block:: python

   >>> from uwireless import WLAN
   >>> wifi = WLAN(mode=WLAN.STA)   # station mode
   >>> WLAN.   # press TAB to auto complete
   scan            start_ap        rssi            mac
   rf              channel         promisc_level   connect
   disconnect      on              off             wifi_is_running
   interface       is_connect_to_ap                event_handler
   read            readinto        readline        STA
   AP              STA_AP          PROMISC         OPEN
   WEP_PSK         WEP_SHARED      WPA_TKIP_PSK    WPA_AES_PSK
   WPA2_TKIP_PSK   WPA2_AES_PSK    WPA2_MIXED_PSK  WPA_WPA2_MIXED
   EVENT_CONNECT   EVENT_DISCONNECT
   EVENT_FOURWAY_HANDSHAKE_DONE    EVENT_SCAN_RESULT_REPORT
   EVENT_SCAN_DONE                 EVENT_RECONNECTION_FAIL
   EVENT_SEND_ACTION_DONE          EVENT_RX_MGNT   EVENT_STA_ASSOC
   EVENT_STA_DISASSOC              EVENT_WPS_FINISH
   EVENT_EAPOL_RECVD               EVENT_NO_NETWORK
   EVENT_BEACON_AFTER_DHCP         SCAN_TYPE_ACTIVE
   SCAN_TYPE_PASSIVE               SCAN_TYPE_PROHIBITED_CHANNELS
   BSS_TYPE_INFRASTRUCTURE         BSS_TYPE_ADHOC  BSS_TYPE_ANY
   PROMISC_DISABLE                 PROMISC_ENABLE  PROMISC_ENABLE_1
   PROMISC_ENABLE_2                PROMISC_ENABLE_3
   PROMISC_FILTER_MATCHING         PROMISC_FILTER_NOT_MATCHING
   >>> def _wlan_default_connect_callback():
   ...    print("wlan connected")
   >>> def _wlan_default_disconnect_callback():
   ...    print("wlan disconnected")
   >>> wlan.event_handler(WLAN.EVENT_CONNECT, _wlan_default_connect_callback)
   >>> wlan.event_handler(WLAN.EVENT_DISCONNECT, _wlan_default_disconnect_callback)
   >>> try:
   ...    ssid = "YOUR-SSID"
   ...    password = "YOUR-PASSWORD"
   ...    security = WLAN.WPA2_AES_PSK
   ...    wlan.connect(ssid=ssid, auth=(security, password))
   ... except OSError as e:
   ...    print("connect to %s failed, cause %s" % (ssid, e))

   RTL8195A[Driver]: set ssid [YOUR_SSID] 

   RTL8195A[Driver]: start auth to xx:xx:xx:xx:xx:xx
   
   RTL8195A[Driver]: auth success, start assoc
   
   RTL8195A[Driver]: association success(res=3)
   
   RTL8195A[Driver]: set pairwise key to hw: alg:4(WEP40-1 WEP104-5 TKIP-2 AES-4)
   
   RTL8195A[Driver]: set group key to hw: alg:4(WEP40-1 WEP104-5 TKIP-2 AES-4) keyid:1
   wlan connected

目前為止你已經連至AP了，現在你要選擇使用DHCP索取IP，或者是使用固定IP。

若是要使用DHCP索取IP:

.. code-block:: python

   >>> # first check if connect to AP
   >>> timeout = 1000
   >>> while timeout:
   ...    utime.sleep_ms(1)
   ...    if wlan.is_connect_to_ap() is True:
   ...        return
   ...    timeout -= 1
   >>> sta_netif = wifi.interface(0)
   >>> sta_netif.dhcp_request(10) # timeout = 10 secs
   >>> print(sta_netif)
   NETIF(ip=192.168.14.100 ,netmask=255.255.255.0 ,gateway=192.168.14.1)
   >>> import usocket as socket
   >>> socket.getaddrinfo("www.google.com", 80)
   [(2, 1, 0, '', ('74.125.203.104', 80))]

或是你要使用固定IP：

.. code-block:: python

   >>> sta_netif = wifi.interface(0)
   >>> sta_netif.ip(("192.168.14.100", "255.255.255.0", "192.168.14.1"))
   >>> print(sta_netif)

AP mode 範例
============

或者，你也可以將Micropython\@RTL8195AM 設定成AP mode

.. code-block:: python

   >>> from uwireless import WLAN
   >>> wlan = WLAN(mode=WLAN.AP)
   >>> ap_netif = wlan.interface(0)
   >>> ap_netif.ip(("192.168.4.1", "255.255.255.0", "192.168.4.1"))
   >>> wlan.start_ap(ssid="mpiot-ap", auth=(WLAN.WPA2_AES_PSK, "1234567890"))

現在使用你的電腦去掃描周圍的WiFi訊號，應該可以看到mpiot-ap的ssid。

.. image:: images/mpiot-ssid.png

STA_AP mode 範例
================

MicorPython\@Ameba 支援混合模式(STA + AP)。

.. code-block:: python
  
   >>> from uwireless import WLAN
   >>> wlan = WLAN(mode.WLAN.STA_AP)
   >>> sta_netif = wlan.interface(0)
   >>> ap_netif = wlan.interface(1)
   >>> try:
   ...    wlan.connect(ssid="TARGET-SSID", auth=(WLAN.WPA_AES_PSK, "TARGET-PASSWORD"))
   ... except OSError:
   ...    print("station mode connect failed")
   >>> 

   RTL8195A[Driver]: set ssid [YOUR_SSID] 

   RTL8195A[Driver]: start auth to xx:xx:xx:xx:xx:xx
   
   RTL8195A[Driver]: auth success, start assoc
   
   RTL8195A[Driver]: association success(res=3)
   
   RTL8195A[Driver]: set pairwise key to hw: alg:4(WEP40-1 WEP104-5 TKIP-2 AES-4)
   
   RTL8195A[Driver]: set group key to hw: alg:4(WEP40-1 WEP104-5 TKIP-2 AES-4) keyid:1

   >>> print(sta_netif)
   >>> sta_netif.dhcp_request(100)
   NETIF(ip=192.168.14.100 ,netmask=255.255.255.0 ,gateway=192.168.14.1)
   >>> # not start your AP
   >>> wlan.start_ap(ssid="thisisatest", auth=(WLAN.WPA_AES_PSK, "1234567890"))

現在使用你的電腦去掃描周圍的WiFi訊號，應該就可以看到thisisatest這個ssid，且使用密碼1234567890即可登入。

.. note::

    Lwip 若收到ICMP request，會回ICMP echo。換句話說，你可以ping到開發版。
