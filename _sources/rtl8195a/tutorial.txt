********
Tutorial
********

要使用MicroPython之前，你需要先將MicroPython@RTL8195A 的韌體燒錄至開發板內。

燒錄方式可參考 :ref:`how_to_install_micropython`

Basic Usage 
###########

首先將MicroUSB Cable 接上開發板，透過終端機程式, ex: minicom, putty 或 TeraTerm, 設定包率為8N1, 115200，並連進開發板。
試著按幾次Enter，你會在畫面看到:

.. code-block:: python

   >>> 
   >>> 
   >>> 

按開發板上的reset鍵，你也可以看到開機畫面。

.. code-block:: python

    =========================================================

    ROM Version: 0.2

    Build ToolChain Version: gcc version 4.8.3 (Realtek ASDK-4.8.3p1 Build 2003) 

    =========================================================
    Check boot type form eFuse
    SPI Initial
    Image1 length: 0x36e4, Image Addr: 0x10000bc8
    Image1 Validate OK, Going jump to Image1
    ===== Enter Image 1 ====
    SDR Controller Init

    load NEW fw 0
    Flash Image2:Addr 0xb000, Len 351472, Load to SRAM 0x10006000
    Image3 length: 0x1beb0, Image3 Addr: 0x30000000
    Img2 Sign: RTKWin, InfaStart @ 0x10006019 
    ===== Enter Image 2 ====
    Starting main task
    Starting executing main.py
    MicroPython v1.8.1-42-g5a23590-dirty on 2016-06-18; Ameba Board with RT8195A
    Type "help()" for more information.
    >>> 

.. note:: 

   Ctrl+D 可以reset開發板。

   Ctrl+B 可以重啟REPL (不做HW reset)

   Ctrl+E 可進入paste mode。在此模式貼上程式碼後輸入Ctrl+D，MicroPython會執行你所貼上的程式碼。


Numerical Operation
###################

目前支援整數及浮點數運算

.. code-block:: python

   >>> 1 + 1
   2
   >>> 1 * 2 
   2
   >>> 4e2
   400.0
   >>> 3 % 2
   1
   >>> 2 / 3
   0.6666667
   >>> 123456/999999
   0.1234561
   >>> 1.3e3
   1300.0

另也有math 模組可供使用，幫助你做基本數學運算。

.. code-block:: python
   
   >>> import math
   >>> math.
   __name__        e               pi              sqrt
   pow             exp             log             cos
   sin             tan             acos            asin
   atan            atan2           ceil            copysign
   fabs            floor           fmod            frexp
   ldexp           modf            isfinite        isinf
   isnan           trunc           radians         degrees
   >>> math.
   >>> math.pi
   3.141593
   >>> math.sin(math.degrees(90))
   -0.9540797
   >>> math.pow(2, 3)
   8.0


Hardware Control
################

硬體控制可以參考下圖方格所定義的名稱。ex: PA_1, PA_2, PD_5 ...

.. image:: images/Ameba_pin_Def.png

.. code-block:: python

   # To control I/O output
   >>> from machine import Pin
   >>> pin1 = Pin("PA_1", dir=Pin.OUT)
   >>> pin1.toggle()
   >>> pin1.value(1)
   >>> pin1.value(0)
   # To read I/O's value
   >>> pin2 = Pin("PC_0", dir=Pin.IN, pull=Pin.OPEN_DRAIN)
   >>> pin2.value()
   1

Filesystem
##########

RTL8195A 實體上有1MB的Flash空間，micropython 直譯器約略500KB，剩下的500KB 都會被格式化為FATFS，可供使用者存放小量資料及.py檔。

使用者可以使用os 模組及Standard I/O 存取filesystem (硬碟名稱為 /flash)

.. code-block:: python

   >>> import os
   >>> os.listdir("/")
   ['flash']
   >>> os.listdir("/flash")
   ['main.py']
   >>> os.mkdir("test_dir")
   >>> os.listdir("/flash")
   ['main.py', 'test_dir']
   >>> os.chdir("test_dir")         # to change current directory
   >>> os.getcwd()                  # to get current directory
   '/flash/test_dir'
   >>> os.chdir("/flash")
   >>> os.rename("test_dir", "test_dir2")       # rename file or directory
   >>> os.listdir("/flash")
   ['main.py', 'test_dir2']
   >>> os.rmdir("test_dir2")
   >>> os.listdir("/flash")
   ['main.py']

   Now doing the file open/close/seek/read/write

   >>> my_file = open("main.py", "r")
   >>> my_file.readall()
   '# main.py -- put your code here! The script in main.py will be executed when boot up !\r\n'
   >>> my_file.readall()
   ''
   >>> my_file.seek(0)
   0
   >>> my_file.readall()
   '# main.py -- put your code here! The script in main.py will be executed when boot up !\r\n'
   >>> my_file.close()
   >>> new_file = open("text.txt", "w")
   >>> new_file.write('hello!!!! this is a test file')
   29
   >>> new_file.close()
   >>> os.listdir("/flash")
   ['main.py', 'text.txt']
   >>> os.remove("/flash/text.txt")

Start up script
###############

filesystem 內有個main.py檔很重要，開發板每次重新開機都會執行main.py，所以使用者可以將主要程式碼放在main.py內，讓開發板上電後自動執行script。

.. code-block:: python

   >>> f = open("test.py", "w")
   >>> f.write("print('hello, this is a test script')")
   >>> f.close()
   >>> import test     # this is the test.py module
   hello, this is a test script

.. note::

   main.py 誤刪的話，可以透過ftp補回來。

Third-party libraries support
#############################

任何在filesystem 內檔案名稱為.py結尾或含有__init__.py資料夾，皆可以透過import 導入至micropython。

RTC and delay
#############

內建time 模組可讀取開發板上RTC時間，以及使用second, millisecond 及microsecond 等級的delay

.. code-block:: python
   
   >>> import time
   >>> time.localtime()         # to read current RTC time
   (2036, 1, 6, 8, 10, 51, 3, 6)
   >>> now = (2016, 6, 19, 13, 30, 40, 0, 0)
   >>> time.localtime(now)      # to set the current RTC time
   >>> for i in range(1000):
   ...     now = time.localtime()
   ...     hour = now[3]
   ...     minute = now[4]
   ...     second = now[5]
   ...     print("now is %d:%d:%d" % (hour, minute, second))
   
   Now it will show your RTC time ...

   >>> time.sleep(1)
   >>> for i in range(100):
   ...     time.sleep_ms(500)
   ...     print("delay counter = %d" % i)

Wireless
########

RTL8195A 的無線功能有WLAN(WiFi) 跟NFC，目前僅支援WLAN，NFC之後會新增。

.. code-block:: python

   >>> from wireless import WLAN
   >>> wifi = WLAN(mode=WLAN.STA)
   >>> wifi.mac()
   '28:c2:dd:dd:42:7d'
   >>> wifi.scan()
   []
   >>> def scan_your_wifi_around_you():
   ...     wifi_list = wifi.scan()
   ...     if wifi_list is not None:
   ...         for i in wifi_list:
   ...             print("SSID is %s, BSSID is %s, channel is %d and security type is %d" % (i.ssid, i.bssid, i.channel, i.security))
   ...     else:
   ...         print("scan nothing")
   >>> scan_your_wifi_around_you()
   >>> for i in range(100):
   ...     scan_your_wifi_around_you()

.. note:: 

   縮排很重要，1格縮排為4個空格。

Networking
##########

網路功能是透過Lwip stack 所達到，使用網路功能必須要先經過3個步驟。

* 設定WLAN為Station mode, AP mode 或 STA_AP mode (hybrid mode)。

.. code-block:: python

   >>> from wireless import WLAN
   >>> wifi = WLAN(mode=WLAN.STA)   # station mode

* WiFi 連線與安全性認證

.. code-block:: python
   
   >>> WLAN.   # press TAB to auto complete
   scan            rssi            mac             connect
   disconnect      STA             AP              STA_AP
   PROMISC         P2P             OPEN            WEP_PSK
   WEP_SHARED      WPA_TKIP_PSK    WPA_AES_PSK     WPA2_TKIP_PSK
   WPA2_AES_PSK    WPA2_MIXED_PSK  WPA_WPA2_MIXED  WPS_OPEN
   WPS_SECURE
   >>> WLAN.      # Choose your AP's security type
   >>> wifi.connect("YOUR-SSID", auth=(WLAN.WPA2_AES_PSK, "YOUR-PASSWORD"))

* 透過DHCP 索取IP或是固定IP

.. code-block:: python
   
   >>> from network import ip
   >>> local_ip = ip()
   >>> local_ip
   ip(ip=192.168.3.2 ,netmask=255.255.255.0 ,gateway=192.168.3.1 ,dhcp)

整合以上步驟可以參考以下範例程式。

.. code-block:: python
   
   >>> from wireless import WLAN
   >>> from network import ip
   >>> import lwip
   >>> wifi = WLAN(mode=WLAN.STA)    # declare a wifi object
   
   Initializing WIFI ...
   WIFI initialized
   >>> try:
   ...     wifi.connect("YOUR_SSID", auth=(WLAN.WPA2_AES_PSK, "22238392abcd"))   # connect to an AP with security
   ... except OSError as e:
   ...     print("wifi connect failed!")
   ...     print(e)

   RTL8195A[Driver]: set ssid [YOUR_SSID] 

   RTL8195A[Driver]: start auth to xx:xx:xx:xx:xx:xx
   
   RTL8195A[Driver]: auth success, start assoc
   
   RTL8195A[Driver]: association success(res=3)
   
   RTL8195A[Driver]: set pairwise key to hw: alg:4(WEP40-1 WEP104-5 TKIP-2 AES-4)
   
   RTL8195A[Driver]: set group key to hw: alg:4(WEP40-1 WEP104-5 TKIP-2 AES-4) keyid:1

   >>> local_ip = ip()   # create an ip object to handle a low level ip 
   >>> local_ip
   ip(ip=192.168.3.2 ,netmask=255.255.255.0 ,gateway=192.168.3.1 ,dhcp) 
   # default static is 192.168.3.2/24, gw is 192.168.3.1
   >>> local_ip.dhcp_request(100)    # 100 is the dhcp timeout(msec)
   >>> local_ip
   ip(ip=192.168.14.100 ,netmask=255.255.255.0 ,gateway=192.168.14.1 ,dhcp)
   # ip information has changed
   >>> lwip.getaddrinfo("www.google.com", 80)  # query ip through your DNS
   [(2, 1, 0, '', ('74.125.203.104', 80))]

TCP/UDP Client Example
^^^^^^^^^^^^^^^^^^

使用網路功能前，先確認你開發板有連上AP。

假設192.168.14.101 有個tcp server 或udp server

.. code-block:: python

   >>> import lwip
   >>> s = lwip.socket()                                # if you are a tcp client
   >>> s = lwip.socket(lwip.AF_INET, lwip.SOCK_DGRAM)   # if you are a udp client
   >>> target = ("192.168.14.100", 9090)
   >>> s.connect(target)
   >>> s.send(b'hello !!!!')
   >>> s.recv(10)
   b'hallo back !!!'
   >>> s.close()

TCP/UDP Server Example
^^^^^^^^^^^^^^^^^^

使用網路功能前，先確認你開發板有連上AP。

.. code-block:: python

   >>> import lwip
   >>> s = lwip.socket()                                # if you are a tcp server
   >>> s = lwip.socket(lwip.AF_INET, lwip.SOCK_DGRAM)   # if you are a udp server
   >>> target = ("0.0.0.0", 9090)    # ip = 0.0.0.0 means any ip will be accept
   >>> s.bind(target)
   >>> s.listen(5)              # backlog is the maxium client number
   >>> for i in range(100):
   ...     client_socket, client_ipaddr = s.accept()      # socket.accept() is a blocking method, so use it careful
   ...     print(client_socket)
   ...     print(client_ipaddr)
   ...     client_socket.send(b' hello!!!! client, closing')
   ...     data = client_socket.recv(10)
   ...     print("You received %s" % data)
   ...     client_socket.socket()
   >>> s.close() 

.. note::

   開發板只要連上網路後，可透過外部PC去ping 開發板。若你DHCP後不知道開發板的IP，可使用一些掃描工具例如：nmap -sP 192.168.xx.xx/24 去掃描看開發板的IP是多少。

Internal FTP server
###################

BJ4，只要你的開發板連上網路後，且你知道開發版的IP為何。就可以透過ftp client ex:FileZilla 連到開發板內部的filesystem 做檔案存取。

可方便開發者更新main.py，放入自己寫的module。亦可以不用一直做DAP燒錄，節省開發時間，甚至可以realtime的透過網路更新你的程式碼。

.. note::

   目前測試FileZilla可用，以及MACOS/Linux 的ftp command 可用，但不保證其他FTP client 可用。

What's next ?
*************



