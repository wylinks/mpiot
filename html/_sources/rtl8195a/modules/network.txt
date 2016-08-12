:mod:`network` -- a module to handle low level networking 
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""

.. classmethod:: network.dhcp_request(timeout)
   
   To request an IP from your AP, only workable in :data:`WLAN.STA` and :data:`WLAN.STA_AP` mode.

   :param int timeout: To assign the dhcp request timeout.
   :raises OSError: if dhcp request timeout or request failed.
   :return: None

   .. code-block:: python

      >>> from wireless import WLAN
      >>> import network
      >>> wifi = WLAN(mode=WLAN.STA)
      >>> wifi.connect("YOUR-SSID", auth=(WLAN.WPA2_AES_PSK, "YOUR-PASSWORD"))
      >>> network.dhcp_request(100)
      >>> 

.. method:: network.dhcp_renew()

   To renew your ip's lease. It's not a workable method, so don't use.

.. method:: network.dhcp_release()

   To release your ip's lease. It's not a workable method, so don't use.

.. method:: network.dhcp_inform()
   
   To inform AP your ip. It's not a workable method, so don't use.

.. method:: network.dhcp_state()

   To check the DHCP request state. It's not a workable method, so don't use.
   
.. method:: network.dhcp_stop()

   To stop the DHCP request. It's not a workable method, so don't use.
