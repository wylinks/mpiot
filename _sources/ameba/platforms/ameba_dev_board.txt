Realtek Ameba board (RTL8195AM)
###################

Realtek Ameba board (RTL8195AM) 是瑞昱科技所推出的開發板，官方支援Arduino IDE開發，其官方網站在 這裡_

.. _這裡: http://www.amebaiot.com/en/

Pin definitions
***************

.. image:: ../images/Ameba_pin_Def.png

How to install MicroPython
**************************

第一次要在Ameba board 使用MicroPython，必須將包裝好直譯器的韌體燒錄至開發板內。Ameba board 為Mbed Enabled 的開發板，其韌體燒錄方式非常簡單，可使用Drag and Drop的方式。

但經過實驗發現，使用滑鼠Drag and Drop的方式，很容易燒錄錯誤，似乎是檔案搬移過程中，檔案內部有些資訊被更動到，導致MBED容易燒錄失敗。

所以建議各作業系統以輸入指令作為更新方式。

For Windows 
^^^^^^^^^^^

* 將Ameba board 透過micro usb cable 連接至PC。
* 安裝驅動程式MBED CMSIS DAP Driver for Windows。
  https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe
* 安裝完成後，會在"我的電腦"看到一個名稱為MBED的可卸除式磁碟機，請記住這個硬碟名稱，等下輸入指令會用到。
* 開啟PowerShell後，並輸入以下指令（**請注意，以下指令行末{H}需要改成你電腦上MBED所出現的硬碟名稱**）。

.. code-block:: powershell

   Invoke-WebRequest https://goo.gl/gwqZIZ -outFile $env:temp\ram_all.bin;cp $env:temp\ram_all.bin {H}:\

* 此時會看到Ameba board上中間的綠燈快速閃爍，此時為燒錄韌體中，請勿拔除電源。
* 待綠燈不再閃爍時，將Ameba board 重新上電，即完成燒錄。

For OSX
^^^^^^^

* 將Ameba board 透過micro usb cable 連接至Mac。
* 開啟終端機並輸入以下指令

.. code-block:: bash

   wget https://goo.gl/gwqZIZ -O ram_all.bin;cp ram_all.bin /Volumes/MBED/;sync

* 等到Ameba上的綠燈完全停止閃爍後，重新上電，即完成燒錄。

For Linux
^^^^^^^^^

* 將Ameba board 透過micro usb cable 連接至PC。
* 開啟終端機並輸入以下指令

.. code-block:: bash

   wget https://goo.gl/gwqZIZ -O ram_all.bin;cp ram_all.bin /media/$(whoami)/MBED/;sync

* 等到Ameba上的綠燈完全停止閃爍後，重新上電，即完成燒錄。


How to use MicroPython
**********************

MicroPython in Ameba 可透過serial port 進入REPL環境，建議使用Putty，TeraTerm或Minicom等序列埠終端機進行com port 連線。

.. note::
   預設序列埠設定為 38400 8N1 

