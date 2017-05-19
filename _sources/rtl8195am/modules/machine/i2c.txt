Class `I2C`
^^^^^^^^^^^

.. class:: I2C (unit=0, mode=I2C.MASTER, baudrate=100000, pins=("PD_5", "PD_4"))

   Constructor to create a :class:`machine.I2C` object, MASTER mode only

   :param int unit: unit
   :param const mode: I2C mode, MASTER only.
   :param int baudrate: operating Hz
   :param tuple pins: alternative pins (SDL, SDA)
   :return: :class:`machine.I2C` object

        +------+------+------+
        | unit | SCL  | SDA  |
        +======+======+======+
        |  0   | PD_5 | PD_4 |
        +------+------+------+
        |  1   | PD_6 | PD_7 |
        +------+------+------+
        |  1   | PC_5 | PC_4 |
        +------+------+------+
        |  2   | PE_0 | PE_1 |
        +------+------+------+
        |  3   | PB_2 | PB_3 |
        +------+------+------+
        |  3   | PE_2 | PE_3 |
        +------+------+------+
        |  3   | PE_4 | PE_5 |
        +------+------+------+
        
    
   .. code-block:: python

      >>> from machine import I2C
      >>> device = I2C(1, I2C.MASTER, baudrate=200000, pins=("PD_6", "PC_4"))
      >>> print(device)

Methods
*******
.. method:: I2C.reset()
    
   Reset I2C core.

   :return: None

.. method:: I2C.recv(nbytes, addr, stop=True)
    
   Read value from device with n bytes, user can handle the stop bit by assigning `stop=False/True`

   :param int nbytes: to read n bytes
   :param hex addr: slave device's address
   :param bool stop: to generate the stop bit or not
   :return: received data
   :rtype: bytearray

   .. code-block:: python

      >>> from machine import I2C
      >>> device = I2C(0, I2C.MASTER)
      >>> result = device.recv(4, 0x50)
      >>> print(result)
      >>> print(result[0])
      >>> print(result[1])
      >>> print(result[2])
      >>> print(result[3])

.. method:: I2C.send(buf, addr, stop=True)
   
   Send buffer to slave device, user can handle the stop bit by assigning `stop=False/True`

   :param btearray buf: content
   :param hex addr: slave device's address
   :param bool stop: to generate the stop bit or not
   :return: bytes write

   .. code-block:: python

      >>> from machine import I2C
      >>> device = I2C(0, I2C.MASTER)
      >>> device.send(0xAA, 0x50, stop=True)
      1
      >>> byte_list = [0x01, 0x02, 0x03, 0x04, 0x05]
      >>> buffer = bytearray(byte_list)
      >>> device.send(buffer, 0x50, stop=False)
      5

.. method:: I2C.mem_read(nbytes, addr, mem_addr, addr_size=8)
    
   Read memory value inside the device with n bytes. Some I2C device are 16 bits addressing, so user can assign addr_size=16 for that.

   :param int nbytes: to read n bytes
   :param hex addr: slave device's address
   :param hex mem_addr: memory offset inside the device
   :param int addr_size: 8 bits or 16 bits addressing
   :return: received data
   :rtype: bytearray

.. method:: I2C.mem_write(buf, addr, mem_addr, addr_size=8)
   
   Write memory value inside the device. Some I2C device are 16 bitsaddressing, so user can assign addr_size=16 for that.

   :param bytearray buf: content
   :param hex addr: slave device's address
   :param hex mem_addr: memory offset inside the device
   :param int addr_size: 8 bits or 16 bits addressing
   :return: bytes write

Constants
#########

I2C mode
********
    .. attribute:: I2C.MASTER

