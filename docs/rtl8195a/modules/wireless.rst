:mod:`wireless` -- module to access wireless functions
"""""""""

Constructor
***********
.. class:: wireless.WIFI(mode)
    
   Constructor to create a `WIFI` object

Methods
*******

.. method:: wifi.scan()
   
   To scan all available networks

.. method:: wifi.connect(ssid, auth=(`securoty type`, psk))

   To connect to a WiFi AP

.. method:: wifi.disconnect()

   To disconnect from the WiFi AP

.. method:: wifi.mac()
   
   To get mac adddress of WiFi SoC

.. method:: wifi.rssi()

   To get current RSSI value


Constants
*********

.. data:: WIFI.MODE_STA
.. data:: WIFI.MODE_AP
.. data:: WIFI.MODE_STA_AP
.. data:: WIFI.MODE_PROMISC
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
