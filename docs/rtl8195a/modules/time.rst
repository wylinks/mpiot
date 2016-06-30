:mod:`time` -- a module to handle RTC and delay
"""""""""

.. classmethod:: time.localtime(now)
   
   To **get** or **set** current RTC time.

   :param tuple now: To set the current time format is **(year, month, dom, hour, minute, second, dow, days after new year)**

   :return: tuple or None

   .. code-block:: python

      >>> import time
      >>> time.localtime()
      (2136, 1, 6, 7, 0, 31, 3, 6)
      >>> now = (2015, 1, 13, 23, 33, 35, 5, 50)
      >>> time.localtime(now)
      >>> time.localtime()
      (2015, 1, 13, 23, 33, 35, 5, 50)

.. classmethod:: time.sleep(seconds)

   To delay for n seconds

   :param int seconds: seconds
   :return: None

   .. code-block:: python

      >>> import time
      >>> for i in range(100):
      ...     time.sleep(1)
      ...     print("delay counter is %d" % i)

.. classmethod:: time.ctime()

   To get current time in string format

   :return: str


.. classmethod:: time.sleep_ms(milliseconds)

   To delay for n milliseconds

   :param int milliseconds: milliseconds
   :return: None

   .. code-block:: python

     >>> import time
     >>> for i in range(100):
     ...     time.sleep_ms(100)
     ...     print("delay counter is %d" % i)

.. classmethod:: wifi.sleep_us(microseconds)
   
   To delay for n microseconds

   :param int microseconds: microseconds
   :return: None

   .. code-block:: python

     >>> import time
     >>> for i in range(100000):
     ...     time.sleep_us(100)
     ...     print("delay counter is %d" % i)
