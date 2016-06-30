:mod:`wireless` -- a module to access wireless functions
""""""""""""""""""""""""""""""""""""""""""""""""""""""""

class `WLAN`
^^^^^^^^^^^

Constructor
###########

.. class:: WLAN(mode=WLAN.AP, ssid="mpiot-ap", auth=(WLAN.WPA2_AES_PSK, "1234567890"), channel=6)
    
   Constructor to create a `WLAN` object, support STA (station), AP and STA_AP cocurrency mode.

   :param const mode: wlan mode, available modes please see :ref:`wlan-mode-list`
   :param str ssid: your ssid in :data:`WLAN.AP` and :data:`WLAN.STA_AP` modes.
   :param tuple auth: your security type and password in :data:`WLAN.AP` and :data:`WLAN.STA_AP` modes. available security types please see :ref:`wlan-security-types`
   :param int channel: wifi channel in :data:`WLAN.AP` and :data:`WLAN.STA_AP` modes.
   :raises ValueError: if channel is not at the range of 1 ~ 11.
   :return: wlan object

   :data:`WLAN.STA` mode example, you can connect to an AP

   .. code-block:: python
        
        >>> from wireless import WLAN
        >>> wifi = WLAN(mode=WLAN.STA)
        >>> try:
        ...     wifi.connect("TARGET-SSID", auth=(WLAN.WPA2_AES_PSK, "TARGET-PASSWORD"))
        ... except OSError:
        ...     print("connection failed")

   :data:`WLAN.AP` mode example, you are in AP mode only.

   .. code-block:: python

        >>> from wireless import WLAN
        >>> wifi = WLAN(mode=WLAN.AP, ssid="your-ap-ssid", auth=(WLAN.WPA_AES_PSK, "your-ap-password"), channel=3) 

   :data:`WLAN.STA_AP` mode example, you are in AP mode (use your PC to scan the WiFi) and also you can connect a nearby AP at the same time.

   .. code-block:: python

        >>> from wireless import WLAN
        >>> wifi = WLAN(mode=WLAN.AP, ssid="your-ap-ssid", auth=(WLAN.WPA_AES_PSK, "your-ap-password"), channel=3) 
        >>> try:
        ...     wifi.connect("TARGET-SSID", auth=(WLAN.WPA2_AES_PSK, "TARGET-PASSWORD"))
        ... except OSError:
        ...     print("connection failed")
        

.. method:: WLAN.scan()
   
   To scan all available networks nearby.

   (workable in mode :data:`WLAN.STA`, :data:`WLAN.AP`, :data:`WLAN.STA_AP`, :data:`WLAN.P2P` and :data:`WLAN.PROMISC`)

   :return: lists of tuple

   .. code-block:: python

      >>> from wireless import WLAN
      >>> wifi = WLAN(mode=WLAN.STA)
      >>> for i in range(10):
      ...     ap_list = wifi.scan()
      ...     for ap in ap_list:
      ...           print("ssid = %s, bssid = %s, rssi = %d, channel = %d" % (ap.ssid, ap.bssid, ap.rssi, ap.channel))

.. method:: WLAN.connect(ssid, auth)

   To connect to a WiFi AP.

   :param str ssid: your target AP ssid
   :param tuple auth: your target security type and password
   :raise OSError:  
                        1. wrong ssid, security type or password
                        2. you are in :data:`WLAN.AP` mode
   :return: None

   .. code-block:: python

      >>> from wireless import WLAN
      >>> wifi = WLAN(mode=WLAN.STA)
      >>> try:
      ...     wifi.connect("YOUR_SSID", auth=(WLAN.WPA2_AES_PSK, "YOUR_PASSWORD"))
      ... except OSError as e:
      ...     print("access point auth failed")
      ...     print(e)

.. method:: WLAN.disconnect()

   To disconnect from the WiFi AP, but WiFi is still on.

   :return: None

.. method:: WLAN.mac()
   
   To get mac adddress from WiFi SoC.

   :return: str

   .. code-block:: python
      
      >>> from wireless import WLAN
      >>> wifi = WLAN(mode.WLAN.STA)
      >>> wifi.mac()
      '28:c2:dd:dd:42:7d'

.. method:: WLAN.rssi()

   To get current RSSI value.

   :return: int

   .. code-block:: python
      
      >>> from wireless import WLAN
      >>> wifi = WLAN(mode.WLAN.STA)
      >>> wifi.connect("YOUR_SSID", auth=(WLAN.WPA2_AES_PSK, "YOUR_PASSWORD"))
      >>> wifi.rssi()
      -48

.. method:: WLAN.on()

   To turn the WiFi hardware.

   :raise OSError: if turn on wifi hardware failed
   :return: None

.. method:: WLAN.off()

   To turn off the WiFi hardware

   :raise OSError: if turn off wifi hardware failed
   :return: None


Constants
###########

.. _wlan-mode-list:

wifi mode
*********
    .. attribute:: WLAN.STA  
    .. attribute:: WLAN.AP 
    .. attribute:: WLAN.STA_AP
    .. attribute:: WLAN.P2P (not test yet)
    .. attribute:: WLAN.PROMISC (not test yet)

.. _wlan-security-types:

security type
*************

    .. attribute:: WLAN.OPEN
    .. attribute:: WLAN.WEP_PSK
    .. attribute:: WLAN.WEP_SHARED
    .. attribute:: WLAN.WPA_TKIP_PSK
    .. attribute:: WLAN.WPA_AES_PSK
    .. attribute:: WLAN.WPA2_TKIP_PSK
    .. attribute:: WLAN.WPA2_AES_PSK
    .. attribute:: WLAN.WPA_MIXED_PSK
    .. attribute:: WLAN.WPA_WPA2_MIXED
    .. attribute:: WLAN.WPS_OPEN
    .. attribute:: WLAN.WPS_SECURE
