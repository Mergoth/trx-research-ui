TRX Research UI
===============
Frontend - приложение на ExtJS, должно быть расположено внутри каталога - Sencha CMD Workspace.
Backend - Java-приложение на Camel для проксирования запросов в сервисы.

Установка и настройка Sencha CMD
--------------------------------
Инструмент компиляции production-сборки и запуска development-стенда на ruby (необходимо установить).

1. Руководство по установке Sencha CMD http://docs-origin.sencha.com/cmd/5.x/intro_to_cmd.html
2. Создать Workspace (исходники ExtJS будут скачены автоматически с ключем -ext):

        sencha generate workspace -ext /home/{user}/git/extjs-nspk

3. В каталог Workspace склонировать репозиторий.
4. Создать симлинк для пакета с темой:

        cd ~/git/extjs-nspk/packages
        ln -s /home/{user}/git/extjs-nspk/trxresearchui/nspk-theme
//TODO нужен репозиторий для релизов пакетов Sencha


Настройка Maven для фронтенда
-----------------------------
В settings.xml в тег properties добавить:

        <sencha.cmd.home>/home/{user}/opt/Sencha/Cmd</sencha.cmd.home>
        <sencha.workspace>/home/{user}/git/extjs-nspk</sencha.workspace>

Development-стенд для фронтенда
-------------------------------
Эмуляция API выполняется классами в каталоге sim. Статические файлы раздает с файловой системы Sencha CMD (необходим рестарт при изменении app.json)

        sencha app watch

Production-сборка
-----------------
Установка в локальный maven-репозиторий:

        mvn clean install

Установка во Fuse
-----------------
        features:install camel-jackson
        install -s mvn:su.msk.jet.nspk/trx-research-ui-backend/1.0.0-SNAPSHOT
        install -s mvn:su.msk.jet.nspk/trx-research-ui-frontend/1.0.0-SNAPSHOT
