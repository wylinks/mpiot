.. intro::

Introduction
=================================

MicroPython 是什麼? 
"""""""""""""""""""

MicroPython 是可以讓資源較少的微處理機(例如：ARM Cortex-M3/M4 等)上運行Python 3語法的直譯器。
在沒有搭載作業系統的開發板，皆是遵循傳統的開發方式：建立開發環境，撰寫程式，編譯程式，程式燒錄。當開發者遇到程式碼上的問題(例如：邏輯問題，語法出錯或是指標使用錯誤等)，往往需要進行反覆性的編譯，燒錄並測試，增加開發時間。
相較於編譯式的程式語言，直譯器會提供一個交互式的開發環境：REPL，方便開發者進行除錯及驗證邏輯，例如

.. code-block:: bash

   >>> import sys
   >>> print("this is a test")
   >>> print(sys.path)

當開發者透過REPL完成除錯及驗證，並將程式流程撰寫成一份草稿檔(.py)。

.. code-block:: python

   #!/bin/env python3
   # this is main.py
   import sys
   def main():
       print("This is a test")
       print(sys.path)
   
   def __name__ == "__main__":
       main()

便可呼叫直譯器執行您的程式碼。

.. code-block:: bash

   user$ python main.py
   This is a test

MicroPython 有什麼好處？
"""""""""""""""""""""""

MicroPython 其直譯式語言的特性，

* 語法簡單，支援Python 3
* 支援物件導向，協助您撰寫乾淨的程式碼
* Python 模組化特性，讓您寫過的程式碼重構性高

您所使用的開發板若支援網路功能的話，更可能有以下的便利性：

* 遠端除錯
* OTA支援，遠端更新您的Script

MicroPython 怎麼控制周邊硬體 ？
""""""""""""""""""""""""""""""

運行在微處理機上的MicroPython，一定會提供硬體控制的方式給開發者。

例如Ameba Dev board 若要使用GPIO功能，可參考以下範例：

.. code-block:: python

   >>> from hardware import Pin
   >>> led = Pin("PA_1")  # PA_1 is the pin name
   >>> led.toggle()
   >>> led.value(1)
   >>> led.value(0)

或是使用Ameba Dev Board的WiFi功能，亦可參考以下範例：

.. code-block:: python

   >>> from wireless import WIFI
   >>> wifi = WIFI(mode=WIFI.MODE_STA)
   >>> wifi.scan()
   ... it will scan all the SSID ...
   >>> wifi.connect("xxxSSIDxxx", auth=(WIFI.SECURITY_WEP_PSK, "xxxKEYxxx"))
   >>> wifi.rssi()

.. note::
   目前所有支援MicroPython的開發板，幾乎是由不同人(團隊)所移植的，所以其模組名稱也不盡相同。例如我所移植的Ameba Dev Board控制GPIO的模組：hardware.Pin，在MicroPython 原作者的pyboard命名為pyb.Pin。所以建議使用不同開發板前，先確認好不同作者的命名方式。

MicroPython 跟 IoT 有什麼關係？
""""""""""""""""""""""""""""""

.. rubric:: 縮短IoT 應用的開發時間 

MicorPython 本身並不是專門為IoT 所設計的程式語言，它本質上僅是一個讓低資源的微處理機能夠運行Python語法。

但是隨著近幾年IoT 產業蓬勃發展，IoT 應用越來越偏向可大規模佈建，耗電量要求越來越低，成本也要求要越來越低，導致大部分可搭載Linux的SoC，例如ARM A7/A8 並不適合大規模佈建的IoT應用。

最近市場開始推出適合推模佈建的WiFi SoC，例如TI CC3200，樂鑫ESP8266，瑞昱RTL8195A或是聯發科的MT7688等。然而，上述除了MT7688，其他SoC皆無法支援網路功能強大的Linux，在開發方式來說，仍屬於上述的編譯式程式語言：編譯，燒錄並反覆測試，容易增加開發者的困擾。

.. rubric:: 安全地遠端更新程式與大規模佈建

相較於編譯式語言的特性，在IoT 物聯網應用上搭載直譯器會相當適合大規模佈建，也就是俗稱的OTA功能。傳統的OTA功能，仍是屬於相當危險的更新方式，Bootloader 負責從網路接收binary stream，並將數十Kb至數百Kb的Binary儲存於RAM中並進行CRC校驗。以上過程，以一些大廠所提供的solution皆相當穩定。但是大廠不一定會考慮靠使用者本身可能會犯的錯誤：更新到可能產生死機的程式碼，一當進入while loop內部，除了手動重置外，就很難讓機器進入bootloader mode 去等待更新。

而MicroPython 的好處在於，若您使用的開發板支援網路功能，便可透過網路將開發者撰寫好的草稿檔(可能也才10幾K)下載下來並執行，期間MicroPython 直譯器仍是處於活動狀態，開發者可以透過程式避免下載到會產生死機的程式碼。舉個例子來說，

.. code-block:: python

   f = open("/flash/main_script.py", "w")
   firmware = http.get("http://www.YOUR_OTA_SERVER.com/?=fw")
   f.write(firmware.body)
   f.close()
   
   import main_script
   
   test_result = main_script.test()
   
   if test_result == TRUE:
       print("OTA SUCCESS")
   else:
       print("OTA FAILED")


.. warning::
   以上這個範例只是概念性的解說，尚未合乎目前任何開發板的功能。請勿直接複製貼上。

.. rubric:: 遠端除錯

像是有搭載網路功能強大的Linux的開發板，開發者皆可以透過telnet 或是SSH等方式遠端連線進去除錯，但是不支援Linux 的WiFi SoC 當其應用已經實際運作時，開發者若遇到問題是相當難遠端解決問題的。

所以若是開發板有支援直譯器的話，開發者可以將開發板的REPL 與網路功能做結合，日後產品實際運作出現狀況時，便可以立即遠端連線REPL進行除錯。

如何開始？
"""""""""

目前Upstream的MicroPython支援相當多款開發板，若有興趣可至 `MicroPython Github`_ 查看

.. _MicroPython Github: https://github.com/micropython/micropython

而以下的Github 是我從MicroPython fork出來的，未來會是專攻具有聯網功能的開發板，例如Realtek Ameba Dev Board，TI CC3200 SimpleLink等。

`Cwyark MicroPython Github`_

.. _Cwyark MicroPython Github: https://github.com/cwyark/micropython

目前我的Repository 支援以下開發板，請點選以下連結開始，或是在左方菜單點選您有興趣的開發板使用方式。
