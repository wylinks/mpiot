Class `UART`
^^^^^^^^^^^

.. class:: UART (unit=0, baudrate=9600, bits=8, stop=1, parity=UART.ParityNone, timeout=0, timeout_char=0, pins=("PA_7", "PA_6"))

   Constructor to create a :class:`machine.UART` object.

   :param int unit: unit
   :param int baudrate: baudrate
   :param int bits: bits
   :param int stop: numbers of stop bit
   :param const parity: parity
   :param int timeout: timeout
   :param char timeout_char: timeout_char
   :param tuple pins: alternative pins (TX, RX)
   :return: :class:`machine.UART` object

        +------+------+------+
        | unit |  TX  |  RX  |
        +======+======+======+
        |  0   | PA_7 | PA_6 |
        +------+------+------+
        |  0   | PC_3 | PC_0 |
        +------+------+------+
        |  0   | PE_0 | PE_3 |
        +------+------+------+
        |  2   | PA_4 | PA_0 |
        +------+------+------+
        |  2   | PD_7 | PD_4 |
        +------+------+------+
        
   .. code-block:: python

      >>> from machine import UART
      >>> device = UART(2, baudrate=115200, pins=("PA_4", "PD_4"))
      >>> print(device)

Methods
*******

.. method:: UART.init()

   Init UART unit.

   :return: None

.. method:: UART.deinit()
   
   Deinit UART unit.

   :return: None

.. method:: UART.write(buf)

   Send buffer through UART.

   :param bytearray buf: buffer 
   :return: bytes send

.. method:: UART.read(nbytes)

   Receive bytes from UART.

   :param int nbytes: bytes to be received.
   :return: data

.. method:: UART.readall()

   Receive all data from UART.

   :return: data


.. method:: UART.readline()

   Receive data until carrage return.

   :return: data


Constants
#########

.. attribute:: UART.ParityNone
.. attribute:: UART.ParityOdd
.. attribute:: UART.ParityEven
.. attribute:: UART.ParityForced1
.. attribute:: UART.ParityForced0
