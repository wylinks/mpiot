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

