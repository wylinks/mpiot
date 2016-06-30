:mod:`hardware` -- a module to access hardware
""""""""""""""""""""""""""""""""""""""""""""""

Class `Pin`
^^^^^^^^^^^

.. class:: hardware.Pin(id, dir=Pin.IN, pull=Pin.OPEN_DRAIN)

   Constructor to create a :class:`hardware.Pin` object

   :param str id: pin's name, refer to this plot.
   :param int dir: I/O direction, refer to :ref:`pin_direction`
   :param int pull: I/O drain , refer to :ref:`pin_drain`
   :return: :class:`hardware.Pin` object

   .. code-block:: python

      >>> from hardware import Pin
      >>> import time
      >>> test_pin = Pin("PA_1", dir=Pin.IN, pull=Pin.OPEN_DRAIN)
      >>> test_pin.value()
      0
      >>> test_pin_2 = Pin("PA_0", dir=Pin.OUT, pull=Pin.PULL_UP)
      >>> test_pin_2.toggle()
      >>> test_pin_2.value(0)
      >>> for i in range(1000):
      ...     test_pin_2.toggle()
      ...     time.sleep_ms(100)
    
Methods
*******
.. method:: pin.id()
    
   To get pin's id 

   :return: str

.. method:: pin.dir()
    
   To get pin's I/O direction.

   :return: int

        * 1 = :data:`Pin.OUT`
        * 0 = :data:`Pin.IN`

.. method:: pin.value(value)
   
   To get or set pin's I/O status

   :param bool value: I/O level
        
        * 1 = high
        * 0 = low

   :return: bool

   .. code-block:: python

      >>> from hardware import Pin
      >>> test_pin = Pin("PA_1", dir=Pin.IN)
      >>> test_pin.value(0)
      >>> test_pin.value()
      0
      >>> test_pin.value(1)
      >>> test_pin.value()
      1

   .. note::
      Pin's voltage level can only be 0 ~ 3.3V.

.. method:: pin.toggle()
    
   To toggle pin's I/O level

Constants
*********

.. _pin_direction:

pin direction
*************
    .. attribute:: Pin.IN
    .. attribute:: Pin.OUT

.. _pin_drain:

pin drain
*********
    .. attribute:: Pin.PULL_NONE
    .. attribute:: Pin.PULL_UP
    .. attribute:: Pin.PULL_DOWN
    .. attribute:: Pin.PULL_DRAIN


Class `I2C`
^^^^^^^^^^^

.. class:: hardware.I2C (id, type, baudrate)

   Constructor to create a :class:`hardware.I2C` object, MASTER mode only

   :param int id: 

           * id = 0 => SDA (PD_4) SCL (PD_5)
           * id = 1 => SDA (PD_7) SCL (PD_6) 
           * id = 2 => SDA (PC_4) SCL (PC_5)
           * id = 3 => SDA (PB_3) SCL (PB_2)

   :param int type: I2C type, MASTER only.
   :param int baudrate: I2C Hz
   :return: :class:`hardware.I2C` object
    
   .. code-block:: python

      >>> from hardware import I2C
      >>> device = I2C(0, I2C.MASTER, baudrate=200000)
      >>> print(device)

Methods
*******
.. method:: I2C.reset()
    
   To reset SoC's I2C core, not the slave device

.. method:: I2C.readfrom(addr, nbytes, stop=True)
    
   To read value from device with n bytes, user can handle the stop bit by assigning `stop=False/True`

   :param hex addr: slave device's address
   :param int nbytes: to read n bytes
   :param bool stop: to generate the stop bit or not
   :return: received data
   :rtype: bytearray

   .. code-block:: python

      >>> from hardware import I2C
      >>> device = I2C(0, I2C.MASTER)
      >>> result = device.readfrom(0x50, 4)
      >>> print(result)
      >>> print(result[0])
      >>> print(result[1])
      >>> print(result[2])
      >>> print(result[3])

.. method:: I2C.writeto(addr, buf, stop=True)
   
   To send buffer to slave device, user can handle the stop bit by assigning `stop=False/True`

   :param hex addr: slave device's address
   :param btearray buf: content
   :param bool stop: to generate the stop bit or not
   :return: bytes write

   .. code-block:: python

      >>> from hardware import I2C
      >>> device = I2C(0, I2C.MASTER)
      >>> device.writeto(0x50, 0xAA, stop=True)
      >>> buffer = b'12345'
      >>> device.writeto(0x50, buffer, stop=False)
      5

Constants
#########

I2C mode
********
    .. attribute:: I2C.MASTER
