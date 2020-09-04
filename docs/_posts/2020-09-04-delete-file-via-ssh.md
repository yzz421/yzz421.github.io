---
title: delete a file on remote machine via SSH by using a Shell Script
sidebar: auto
tags: [Linux, Terminal]
categories:
  - Linux
date: 2020-09-04 15:20:00
---

## Delete a file on remote machine via SSH by using a Shell Script

usually, when i have to delete a file on a remote machine via a Sheel Script

flow manually:

```
ssh username@domain.com
```

...then at domain:

```
cd ./some/where
rm some_file.war
```

## But i can pass the ssh clinet a command to execute in place of starting a shell by appending it to ssh commnad.

just

```
ssh username@domain.com 'rm /some/wher/some_file.war'
```

:tada::tada::tada:
