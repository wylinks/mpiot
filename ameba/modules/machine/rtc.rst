Class `RTC`
^^^^^^^^^^^

.. class:: RTC()

   Constructor to create a :class:`machine.RTC` object.

   :return: :class:`machine.RTC` object

Methods
*******

.. method:: RTC.datetime([now])

   Get or set RTC current datetime.

   format is (year, month, month of day, week of day, hour, minute, second, seconds from 2000/01/01 00:00:00)

   :param tuple now: format is 
   :return: current datetime


   .. code-block:: python

    >>> from machine import RTC
    >>> rtc = RTC()
    >>> now = rtc.datetime()
    >>> current_time = (2016, 3, 0, 28, 15, 11, 40, 0)
    # To set current datetime to 2016/03/28 15:11:40, week of day
    # and seconds from 2000/01/01 00:00:00 can be blank.
    >>> rtc.datetime(current_time)
