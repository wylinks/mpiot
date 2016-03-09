:mod:`hardware` -- module to access hardware peripherals
"""""""""

Constructor
***********
.. class:: hardware.Pin (name, ...)

    Constructor to create a `Pin` object
    
Method
******

.. method:: pin.value(value)
   
   Set pin's value

   .. note::
      Pin's voltage can only be 0 ~ 3.3V

.. method:: pin.toggle()
    
   Toggle pin's value
