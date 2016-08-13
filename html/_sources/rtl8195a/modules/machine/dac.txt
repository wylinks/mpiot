Class `DAC`
^^^^^^^^^^^

.. class:: DAC(unit=0, resolution=10)

   Constructor to create :class:`machine.DAC` object. Only unit 0 is available.

        +------+------+
        | unit | DAC  |
        +======+======+
        |  0   | DA_0 |
        +------+------+

   .. code-block:: python

      >>> from machine import DAC
      >>> dac = DAC(resolution=12)
      >>> for i in range(pow(2, 12)):
      ...     dac.write(i)

Methods
*******

.. method:: DAC.write(value)

   Write digital value to DAC. 

   :param int value: digital value depends on your resolution.
   :return: None

.. note:: 
    DAC voltage range is 0 ~ 3.3V.
