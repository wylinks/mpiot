Class `SDIO`
^^^^^^^^^^^

.. class:: SDIO()

   Constructor to create :class:`machine.SDIO` object.

   .. code-block:: python

      >>> from machine import SDIO
      >>> sdio = SDIO()
      >>> import os
      >>> os.mount(sdiom "/sd")
      >>> os.list("/sd")
      >>> f = open("/sd/text.txt")
      >>> f.write("hello!!!")
      >>> f.close()
