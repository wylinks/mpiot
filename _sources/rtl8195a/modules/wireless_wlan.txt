:mod:`wireless.WLAN` -- module to access wireless WLAN
"""""""""

Constructor
***********
.. class:: wireless.WLAN(mode)
    
   Constructor to create a `WLAN` object

Methods
*******

.. method:: wifi.scan()
   
   To scan all available networks

   .. code-block:: python

      >>> from wireless import WLAN
      >>> wifi = WLAN(mode=WLAN.STA)
      >>> for i in range(10):
      ...     ap_list = wifi.scan()
      ...     for ap in ap_list:
      ...           print("ssid = %s, bssid = %s, rssi = %d, channel = %d" % (ap.ssid, ap.bssid, ap.rssi, ap.channel))

.. method:: wifi.connect(ssid, auth=(security_type, password))

   To connect to a WiFi AP. When connection success, return `None`. If connection failed, raise an ecception: OSError

   .. code-block:: python

      >>> from wireless import WLAN
      >>> wifi = WLAN(mode=WLAN.STA)
      >>> try:
      ...     wifi.connect("YOUR_SSID", auth=(WLAN.WPA2_AES_PSK, "YOUR_PASSWORD"))
      ... except OSError as e:
      ...     print("access point auth failed")
      ...     print(e)

.. method:: wifi.disconnect()

   To disconnect from the WiFi AP

.. method:: wifi.mac()
   
   To get mac adddress from WiFi SoC, return a string

   .. code-block:: python
      
      >>> from wireless import WLAN
      >>> wifi = WLAN(mode.WLAN.STA)
      >>> wifi.mac()
      '28:c2:dd:dd:42:7d'

.. method:: wifi.rssi()

   To get current RSSI value, return an int

   .. code-block:: python
      
      >>> from wireless import WLAN
      >>> wifi = WLAN(mode.WLAN.STA)
      >>> wifi.connect("YOUR_SSID", auth=(WLAN.WPA2_AES_PSK, "YOUR_PASSWORD"))
      >>> wifi.rssi()
      -48


Constants
*********

wifi mode
^^^^^^^^^
    .. data:: WIFI.MODE_STA  
    .. data:: WIFI.MODE_AP (not test yet)
    .. data:: WIFI.MODE_STA_AP (not test yet)
    .. data:: WIFI.MODE_PROMISC (not test yet)

security type
^^^^^^^^^^^^^

    .. data:: WIFI.SECURITY_OPEN
    .. data:: WIFI.SECURITY_WEP_PSK
    .. data:: WIFI.SECURITY_WEP_SHARED
    .. data:: WIFI.SECURITY_WPA_TKIP_PSK
    .. data:: WIFI.SECURITY_WPA_AES_PSK
    .. data:: WIFI.SECURITY_WPA2_TKIP_PSK
    .. data:: WIFI.SECURITY_WPA2_AES_PSK
    .. data:: WIFI.SECURITY_WPA_MIXED_PSK
    .. data:: WIFI.SECURITY_WPA_WPA2_MIXED
    .. data:: WIFI.SECURITY_WPS_OPEN
    .. data:: WIFI.SECURITY_WPS_SECURE
