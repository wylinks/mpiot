************
Introduction
************

Realtek Ameba board
###################

Realtek Ameba board 是瑞昱科技所推出的開發板，支援Arduino IDE (需下載Ameba SDK)，其官方網站在 這裡_

.. _這裡: http://www.amebaiot.com/en/

Pin definitions
***************

.. image:: images/Ameba_pin_Def.png


How to install MicroPython
**************************

第一次要在Ameba board 使用MicroPython，必須將包裝好直譯器的韌體燒錄至開發板內。Ameba board 為Mbed enable 的開發板，其韌體燒錄方式非常簡單，可使用Drag and Drop的方式。

而包裝直譯器的韌體檔案位在我的repository內，可直接點選以下連結下載。

https://github.com/cwyark/micropython/releases/download/v1.8alpha/ram_all.bin

下載的檔案名稱為ram_all.bin，將此檔案燒錄至開發板即可使用MicroPython for RTL8195A。各作業系統燒錄方式可參考如下。

For Windows 
^^^^^^^^^^^

* 將Ameba board 透過micro usb cable 連接至PC。
* 安裝驅動程式MBED CMSIS DAP Driver for Windows。
  https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe
* 安裝完成後，會在"我的電腦"看到一個名稱為MBED的可卸除式磁碟機。
* 點擊此可卸除式磁碟機後進入，並將ram_all.bin複製至此，此時會看到Ameba board上中間的綠燈快速閃爍，此時為燒錄韌體中，請勿拔除電源。
* 待綠燈不再閃爍時，將Ameba board 重新上電，即完成燒錄。

For OSX
^^^^^^^

* 將Ameba board 透過micro usb cable 連接至MAC。
* 開啟終端機並輸入以下指令

.. code-block:: bash

   cp {folder}/ram_all.bin /Volumes/MBED/;sync

* 等到Ameba上的綠燈完全停止閃爍後，重新上電，即完成燒錄。

.. note::  
   {folder}請替換成您ram_all.bin存放的路徑。

For Linux
^^^^^^^^^

* 將Ameba board 透過micro usb cable 連接至PC。
* 開啟終端機並輸入以下指令

.. code-block:: bash

   cp {folder}/ram_all.bin /media/{user}/MBED/;sync

* 等到Ameba上的綠燈完全停止閃爍後，重新上電，即完成燒錄。

.. note::  
   {folder}請替換成您ram_all.bin存放的路徑。其中{user}會因不同電腦而異。


How to use MicroPython
**********************

MicroPython in Ameba 可透過serial port 進入REPL環境，建議使用Putty，TeraTerm或Minicom等序列埠終端機進行com port 連線。

.. note::
   預設序列埠設定為 115200 8N1 

First example
*************

當透過終端機連進Ameba後，可試著按Enter確認REPL是否正常運作。

.. code-block:: bash
   
   >>>

您可以在REPL下進行Python 語法的輸入了！

.. code-block:: python

   >>> import sys
   >>> print(sys.version)
   3.4.0
   >>> for i in range(5):
   ...     print(i)
   ...
   1
   2
   3
   4
   5
   >>>
    
.. note:: 

   小技巧：第5行的...   print(i)中間空格REPL會自動幫你做縮排，若要結束編輯先將游標退至行頭後按Enter。

What's next ?
*************



