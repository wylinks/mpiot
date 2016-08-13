Class `WDT`
^^^^^^^^^^^

.. class:: WDT()

   Constructor to create a :class:`machine.RTC` object.

   :return: :class:`machine.RTC` object

Methods
*******

.. method:: WDT.start(msecs)

   Start the watchdog with specific msecs.

   :param int msec: watchdog timeout. (unit: msecs)
   :return: None

.. method:: WDT.stop()

   Stop the watchdog.

   :return: None

.. method:: WDT.refresh()

   Feed the watchdog.

   :return: None

   .. code-block:: python

    >>> from machine import WDT
    >>> wdt = WDT()
    >>> wdt.start(5000)
    # to start watchdog with timeout 5000 msecs
    >>> wdt.refresh()
    >>> wdt.stop()
   
