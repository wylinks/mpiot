:mod:`hardware.Pin` -- module to access hardware GPIO
"""""""""

Constructor
***********
.. class:: hardware.Pin (id, ...)

    Constructor to create a `Pin` object
    
Methods
*******
.. method:: pin.id()
    
   To get pin'id 

   .. code-block:: python

      >>> from hardware import Pin
      >>> test_pin = Pin("PA_1")
      >>> test_pin.id()
      'PA_1"


.. method:: pin.dir()
    
   To get pin's I/O direction, 1 = Pin.OUT, 0 = Pin.IN

   .. code-block:: python

      >>> from hardware import Pin
      >>> test_pin = Pin("PA_1")
      >>> test_pin.dir()
      0

.. method:: pin.value(value)
   
   To get or set pin's I/O status

   .. code-block:: python

      >>> from hardware import Pin
      >>> test_pin = Pin("PA_1", dir=Pin.IN)
      >>> test_pin.value()
      1

   .. note::
      Pin's voltage level can only be 0 ~ 3.3V

.. method:: pin.toggle()
    
   To toggle pin's I/O level

   .. code-block:: python

      >>> from hardware import Pin
      >>> import time
      >>> test_pin = Pin("PA_1", dir=Pin.OUT)
      >>> for i in range(1000):
      ...     time.sleep(1)
      ...     test_pin.toggle()
Constants
*********

pin direction
^^^^^^^^^^^^^
    .. data:: Pin.IN
    .. data:: Pin.OUT

pin drain
^^^^^^^^^
    .. data:: Pin.PULL_NONE
    .. data:: Pin.PULL_UP
    .. data:: Pin.PULL_DOWN
    .. data:: Pin.PULL_DRAIN

