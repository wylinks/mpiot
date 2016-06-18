:mod:`network.ip` -- module to handle low level ip 
"""""""""

Constructor
***********
.. class:: network.ip()
    
   Constructor to create a `ip` object

Methods
*******

.. method:: ip.dhcp_request(timeout)
   
   To request an IP from your AP, only workable when you board is connect to an AP.

   .. code-block:: python

      >>> from wireless import WLAN
      >>> wifi = WLAN(mode=WLAN.STA)
      >>> wifi.connect("YOUR-SSID", auth=(WLAN.WPA2_AES_PSK, "YOUR-PASSWORD"))
      >>> from network import ip
      >>> local_ip = ip()
      >>> local_ip.dhcp_request(100)

.. method:: ip.dhcp_renew()

   To renew your ip's lease. It's not a workable method, so don't use.

.. method:: ip.dhcp_release()

   To release your ip's lease. It's not a workable method, so don't use.

.. method:: ip.dhcp_inform()
   
   To inform your AP. It's not a workable method, so don't use.

.. method:: ip.dhcp_inform()

   To check the DHCP request state. It's not a workable method, so don't use.
   
.. method:: ip.dhcp_inform()

   To stop the DHCP request. It's not a workable method, so don't use.
