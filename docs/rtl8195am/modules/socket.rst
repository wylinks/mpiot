:mod:`socket` --a module to handle DNS query and low level socket
"""""""""
.. classmethod:: socket.reset()

   To reset the lwip stack. However, it might hang, so don't use it.

   :return: None

.. classmethod:: socket.callback()

    TBD

.. classmethod:: socket.print_pcbs()

    TBD

.. method:: socket.getaddrinfo(hostname, port)

    Discovery the service with hostname and port.

   :param str hostname: hostname, ex: www.google.com, www.facebook.com
   :param int port: service port
   :return: lists of tuple

   .. code-block:: python

    >>> import socket
    >>> socket.getaddrinfo("www.google.com", 80)
    [(2, 1, 0, '', ('74.125.203.147', 80))]
    >>> socket.getaddrinfo("www.facebook.com", 80)
    [(2, 1, 0, '', ('176.58.119.26', 80))]

Class `socket`
^^^^^^^^^^^^^

.. class:: socket.socket(domain=socket.AF_INET, type=socket.SOCK_STREAM, proto=socket.IPPRORO_TCP)
    
   Constructor to create a :class:`socket.socket` object.

   :param const domain: domain 
   :param const type: type
   :param const proto: proto

   .. code-block:: python
   
      # create a tcp socket
      >>> s = socket.socket()
      # create a udp socket
      >>> s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

Methods
*******

.. method:: socket.connect(server)
   
   Connect to a host with an assign tuple: (ipaddr, port).

   Tuple can be acquired by the :class:`socket.getaddrinfo`

   :param tuple server: server ip and service port. ex: ("192.168.13.101", 8080)

.. method:: socket.bind(server)

   Bind on the specific ipaddr and port, in most case, ipaddr is "0.0.0.0".

   :param tuple server: server ip and service port. ex: ("0.0.0.0", 8080)

.. method:: socket.listen(backlog)

   Listen on a socket, backlog is the maxium client connection number.

   :param int backlog: maxium client connections

.. method:: socket.close()
    
   To close a socket

.. method:: socket.accept()
   
   Wait for a incomming client, it's a blocking method

   Once a client is incomming, it will return a tuple (socket, addr_info)

   .. code-block:: python

     >>> import socket
     >>> server_ip = ("0.0.0.0", 8080)
     >>> s = socket.socket()
     >>> s.bind(server_ip)
     >>> s.listen(5)
     >>> cliend_sock, client_addr = s.accept()
     
     # program will be blocked until a connection incomming.

     >>> client_sock
     <socket state=2 timeout=-1 incoming=0 remaining=0>
     >>> client_addr
     ('192.168.14.101', 51360)

     # Now you can send/recv the client socket

     >>> client_sock.send("hello! client")
     >>> client_sock.recv(10)
     >>> client_sock.close()

.. method:: socket.send(data)

   Send bytes of stream

   :param bytearray data: Bytearray to be sent

   .. code-block:: python

      >>> s.send(b'hello')

.. method:: socket.recv(num)

   To recieve bytes of stream, in default, it's a blocking method, you can use socket.settimeout or socket.setblocking to be a non blocking recv

   :param int num: Numbers of bytes to be received.

   .. code-block:: python

      >>> data = s.recv(5)
      b'hello'

.. method:: socket.settimeout(timeout)

   To set the socket timeout (unit: msec)

   :param int timeout: timeout value

   .. code-block:: python

      >>> s.settimeout(1000)
      timeout is 1000 msecs

.. method:: socket.setblocking(enable)

   To set the socket blocking mode, 0 is non-blocking and 1 is blocking

   :param bool enable: mode

   .. code-block:: python

      >>> s.setblocking(0)

.. method:: socket.setsockopt()

   Set the socket option.

   TBD

Constants
#########

    .. attribute:: socket.AF_INET
    .. attribute:: socket.AF_INET6
    .. attribute:: socket.SOCK_STREAM
    .. attribute:: socket.SOCK_DGRAM
    .. attribute:: socket.SOCK_RAW
    .. attribute:: socket.SOL_SOCKET
    .. attribute:: socket.SO_REUSEADDR
