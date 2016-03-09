:mod:`hardware` -- module to access hardware peripherals
"""""""""

Constructor
***********
.. class:: hardware.Pin (id, ...)

    Constructor to create a `Pin` object
    
Method
******
.. method:: pin.id()
    
   Get pin'id 

.. method:: pin.dir()
    
   Get pin's I/O direction

.. method:: pin.value(value)
   
   Get or set pin's value

   .. note::
      Pin's voltage can only be 0 ~ 3.3V

.. method:: pin.toggle()
    
   Toggle pin's value

Constant
********

.. data:: Pin.IN
.. data:: Pin.OUT
.. data:: Pin.PULL_NONE
.. data:: Pin.PULL_UP
.. data:: Pin.PULL_DOWN
.. data:: Pin.PULL_DRAIN

