:mod:`time` -- a module to handle time and delay
"""""""""
.. classmethod:: time.time()

   Get current time since 2000/01/01 00:00:00 (unit: seconds)

   :return: int

.. classmethod:: time.localtime([sec])
   
   Get current time or convert [sec] to tuple format.

   format is (year, month, day of month, hour, minute, day of week, days after years)

   :param int sec: seconds to be converted

   :return: tuple 

   .. code-block:: python

      >>> import time
      >>> now = time.localtime()
      (2036, 2, 6, 6, 42, 40, 2, 37)
      >>> time.mktime(now)
      1139208160

.. note::

   You can use ``machine.RTC`` to set the RTC time.

.. classmethod:: time.ctime()

   Get current time in string format

   :return: str

.. classmethod:: time.mktime(tuple)

   Convert tuple time into seconds.

   :return: int

   .. code-block:: python

      >>> import time
      >>> time.localtime()
      (2036, 2, 6, 6, 42, 40, 2, 37)
      >>> secs = 60
      >>> time.localtime(secs)
      (2000, 1, 1, 0, 4, 3, 5, 1)

.. classmethod:: time.sleep(seconds)

   To delay for n seconds

   :param int seconds: seconds
   :return: None

.. classmethod:: time.sleep_ms(milliseconds)

   To delay for n milliseconds

   :param int milliseconds: milliseconds
   :return: None

.. classmethod:: time.sleep_us(microseconds)
   
   To delay for n microseconds

   :param int microseconds: microseconds
   :return: None

   .. code-block:: python

     >>> import time
     >>> for i in range(100000):
     ...     time.sleep_us(100)
     ...     print("delay counter is %d" % i)
