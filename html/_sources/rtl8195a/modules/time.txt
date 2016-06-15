:mod:`time` -- module to handle RTC and delay
"""""""""

Constructor
***********
.. class:: time()
    
   Constructor to create a `time` object

Methods
*******

.. method:: time.localtime((year, month, day, hour, minute, second, dayof week dats after new year))
   
   To get or set current RTC time , format is tuple: (year, month, day, hour, minute, second, day of week, days after new year)

   .. code-block:: python

      >>> import time
      >>> time.localtime()
      (2136, 1, 6, 7, 0, 31, 3, 6)
      >>> now = (2015, 1, 13, 23, 33, 35, 5, 50)
      >>> time.localtime(now)
      >>> time.localtime()
      (2015, 1, 13, 23, 33, 35, 5, 50)

.. method:: time.sleep(sec)

   To delay for n seconds

   .. code-block:: python

      >>> import time
      >>> for i in range(100):
      ...     time.sleep(1)
      ...     print("delay counter is %d" % i)

.. method:: time.sleep_ms(msec)

   To delay for n milliseconds

   .. code-block:: python

     >>> import time
     >>> for i in range(100):
     ...     time.sleep_ms(100)
     ...     print("delay counter is %d" % i)

.. method:: wifi.sleep_us()
   
   To delay for n microseconds

   .. code-block:: python

     >>> import time
     >>> for i in range(100000):
     ...     time.sleep_us(100)
     ...     print("delay counter is %d" % i)
