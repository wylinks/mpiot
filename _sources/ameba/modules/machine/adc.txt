Class `ADC`
^^^^^^^^^^^

.. class:: ADC(unit=0)

   Constructor to create :class:`machine.ADC` object. 

        +------+------+
        | unit | DAC  |
        +======+======+
        |  0   | AD_0 |
        +------+------+
        |  1   | AD_1 |
        +------+------+
        |  2   | AD_2 |
        +------+------+

   .. code-block:: python

      >>> from machine import ADC
      >>> dac = DAC(1)
      >>> value = adc.read()

Methods
*******

.. method:: DAC.read()

   Read digital value from ADC.

   :return: int 

.. note:: 
    External analog voltage should less than 3.3V.
