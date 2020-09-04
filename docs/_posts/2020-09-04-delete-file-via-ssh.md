---
title: Delete a file on remote machine via SSH by using a Shell Script
sidebar: false
tags: [Linux, Terminal]
categories:
  - Linux
date: 2020-09-04 15:20:00
---

usually, when i have to delete a file on a remote machine via a Shell Script

flow manually:

```
ssh username@domain.com
```

...then at domain:

```
cd ./some/where
rm some_file.war
```

## but, i can pass the ssh clinet a command to execute in place of starting a shell by appending it to ssh commnad.

just

```
ssh username@domain.com 'rm /some/wher/some_file.war'
```

:tada::tada::tada:
