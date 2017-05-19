:mod:`uvc` -- a module to control UVC camera
"""""""""
.. classmethod:: uvc.init()

   Init the UVC camera.

   :return: None

.. classmethod:: uvc.deinit()

   Deinit the UVC camera.

   :return: None

.. classmethod:: uvc.enable()
   
   Enable the camera and start refreshing frame.

   :return: None

.. classmethod:: uvc.disable()

   Disable the camera and stop refreshing capture.

   :return: None

.. classmethod:: uvc.format(uvc.FMT_MJPEG, width=240, height=320)
   
   Set the format of frame.

   :param const type: frame type, MJPEG or H264
   :param int width: frame width
   :param int height: frame height

.. classmethod:: uvc.enqueue()

   To notify UVC camera capture one frame.

   :return: None

.. classmethod:: uvc.dequeue()

   To fetch the frame size on next capture.

   :return: number of bytes

.. classmethod:: uvc.frame(buf)
    
   Copy the frame buffer to bytearray.

   :param bytearray buf: frame buffer
   :return: None


   .. code-block:: python
      
      >>> import uvc
      >>> try:
      ...     uvc.init()
      ...     uvc.format(uvc,FMT_MJPEG, width=240, height=320)
      ...     uvc.enable()
      ... except OSError:
      ...     print("init uvc camera failed")
      >>> uvc.enqueue()
      >>> frame = bytearray(uvc.dequeue()) >>> uvc.frame(frame)
      # now it will copy UVC frame to frame buffer.
      >>> f = open("test.jpg", "w")
      >>> f.write(frame)
      >>> f.close()

Constants
#########

frame type
**********
    .. attribute:: uvc.FMT_MJPEG
    .. attribute:: uvc.FMT_H264
