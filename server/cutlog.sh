#!/bin/sh

CURPATH=pwd
LOGPATH=$CURPATH/logs
ERRORLOGPATH=$LOGPATH/error
INFOLOGPATH=$LOGPATH/info

errorLogFile=$ERRORLOGPATH/error.log
infoLogFile=$INFOLOGPATH/info.log

yesterday=date -d last-day '+%Y%m%d'

errorLogOfLastDay=$ERRORLOGPATH/$yesterday'.log'
infoLogOfLastDay=$INFOLOGPATH/$yesterday'.log'

mv $errorLogFile $errorLogOfLastDay
mv $infoLogFile $infoLogOfLastDay

touch $errorLogFile $infoLogFile

npm start
