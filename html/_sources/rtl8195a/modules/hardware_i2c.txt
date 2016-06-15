:mod:`hardware.I2C` -- module to access hardware I2C
"""""""""

Constructor
***********
.. class:: hardware.I2C (id, type, baudrate)

    Constructor to create a `I2C` object, MASTER mode only

    * id = 0 => SDA (PD_4) SCL (PD_5)
    * id = 1 => SDA (PD_7) SCL (PD_6) 
    * id = 2 => SDA (PC_4) SCL (PC_5)
    * id = 3 => SDA (PB_3) SCL (PB_2)
    
   .. code-block:: python

      >>> from hardware import I2C
      >>> device = I2C(0, I2C.MASTER, baudrate=200000)
      >>> print(device)

Methods
*******
.. method:: i2c.reset()
    
   To reset SoC's I2C, not the slave device

   .. code-block:: python

      >>> from hardware import I2C
      >>> device = I2C(0, I2C.MASTER)
      >>> device.reset()


.. method:: i2c.readfrom(addr, nbytes, stop=True)
    
   To read value from device with nbytes, user can handle the stop bit by assign `stop=False/True`

   .. code-block:: python

      >>> from hardware import I2C
      >>> device = I2C(0, I2C.MASTER)
      >>> result = device.readfrom(0x50, 4)
      >>> print(result)
      >>> print(result[0])
      >>> print(result[1])
      >>> print(result[2])
      >>> print(result[3])

.. method:: pin.writeto(addr, buf, stop=True)
   
   To send buffer to device, user can handle the stop bit by assign `stop=False/True`

   .. code-block:: python

      >>> from hardware import I2C
      >>> device = I2C(0, I2C.MASTER)
      >>> device.writeto(0x50, 0xAA, stop=True)
      >>> buffer = b'12345'
      >>> device.writeto(0x50, buffer, stop=False)
      5

Constants
*********

I2C mode
^^^^^^^^^^^^^
    .. data:: I2C.MASTER

