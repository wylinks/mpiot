:mod:`lwip` -- module to handle RTC and delay
"""""""""

This module is only workable when you connect to an AP!

Methods
*******

.. method:: lwip.reset()

   To reset the lwip stack. However, it might hang, so dont use it.

   .. code-block:: python

      >>> import lwip
      >>> lwip.reset()

.. method:: lwip.callback()

    TBD

.. method:: lwip.print_pcbs()

    TBD

.. method:: lwip.getaddrinfo(hostname, port)

   .. code-block:: python

    To discovery the service with hostname and port number, you will get an IP and port

    >>> import lwip
    >>> lwip.getaddrinfo("www.google.com", 80)
    [(2, 1, 0, '', ('74.125.203.147', 80))]
    >>> lwip.getaddrinfo("www.google.com", 80)
    [(2, 1, 0, '', ('176.58.119.26', 80))]

Constructor
***********
.. class:: lwip.socket(lwip.AF_INET, lwip.SOCK_STREAM)
    
   Constructor to create a `socket` object, default domain is AF_INET and type is SOCK_STREAM

   .. code-block:: python
   
      # create a tcp socket
      >>> s = lwip.socket()
      # create a udp socket
      >>> s = lwip.socket(lwip.AF_INET, lwip.SOCK_DGRAM)

Methods
*******

.. method:: socket.connect((ipaddr, port))
   
   To connect to a host with assign tuple = (ipaddr, port), for example: ("192.168.14.133", 80).
   tuple can be fetch by the lwip.getaddrinfo(hostname, port)

   .. code-block:: python

      >>> import lwip
      >>> s = lwip.socket()
      >>> target = lwip.getaddrinfo("www.google.com", 80)[0][-1]
      >>> s.connect(target)


.. method:: socket.bind((ipaddr, port))

   To bind on the assign ipaddr and port, in most case, ipaddr can be assign "0.0.0.0".

   .. code-block:: python

      >>> import lwip
      >>> server_ip = ("0.0.0.0", 8080)
      >>> s = lwip.socket()
      >>> s.bind(server_ip)

.. method:: socket.listen(backlog)

   To listen on socket, backlog is the maxium client connection number

   .. code-block:: python

      >>> import lwip
      >>> server_ip = ("0.0.0.0", 8080)
      >>> s = lwip.socket()
      >>> s.bind(server_ip)
      >>> s.listen(5)


.. method:: socket.accept()
   
   To wait a client connection, it's a blocking method

   Once a client is incomming, it will return a tuple (socket, addr_info)

   .. code-block:: python

     >>> import lwip
     >>> server_ip = ("0.0.0.0", 8080)
     >>> s = lwip.socket()
     >>> s.bind(server_ip)
     >>> s.listen(5)
     >>> cliend_sock, client_addr = s.accept()
     
     program will be blocked until a connection incomming

     >>> client_sock
     <socket state=2 timeout=-1 incoming=0 remaining=0>
     >>> client_addr
     ('192.168.14.101', 51360)

     Now you can send/recv the client socket

     >>> client_sock.send("hello! client")
     >>> client_sock.recv(10)

.. method:: socket.accept()
   
   To close a socket

   .. code-block:: python

      >>> s.close()

.. method:: socket.send(bytearray)

   To send a byte stream

   .. code-block:: python

      >>> s.send(b'hello')

.. method:: socket.recv(bytes)

   To recieve a number of stream, in default, it's a blocking method, you can use socket.settimeout and socket.setblocking to be a non blocking recv

   .. code-block:: python

      >>> data = s.recv(5)
      b'hello'

.. method:: socket.settimeout(timeout)

   To set the socket timeout, unit is msec

   .. code-block:: python

      >>> s.settimeout(1000)
      timeout is 1000 msecs

.. method:: socket.setblocking(enable)

   To set the socket blocking mode, 0 is non-blocking and 1 is blocking

   .. code-block:: python

      >>> s.setblocking(0)
