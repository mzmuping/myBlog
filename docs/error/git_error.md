### github 提交失败
```js
> git push -u origin master

fatal: unable to access 'https://github.com/mzmuping/mutil-web.git/': OpenSSL SSL_read: Connection was reset, errno 10054
```
解除ssl验证后，再次git即可

```js
> git config --global http.sslVerify "false"
> git push 或者 git push --set-upstream origin master
```
###  git报错ssh

输入git pull

报错：

```
 ssh: connect to host github.com port 22: Connection timed out fatal: Could not read from remote repository.
```

- 首先输入以下命令检查SSH是否能够连接成功（ssh后面有空格）

```js
ssh -T git@github.com
```
发现报错:

```
ssh: connect to host github.com port 22: Connection timed out
```

####  解决方案

- 在C盘——用户——你的主机名文件夹中找到.ssh文件夹；（此前配置SSH时会生成该文件夹）
- 在.ssh文件夹中新建文件 config,不带后缀（可以新建文本文档，去掉.txt后缀）
- 使用notepad++（或其他方式）打开config文件，输入以下内容，保存后即可

```
Host github.com
User YourEmail（你的邮箱）
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
```

**再次执行**
```
ssh -T git@github.com
```
会出现以下提示，输入yes回车即可
```
The authenticity of host '[ssh.github.com]:443 ([20.205.243.160]:443)' can't be established.
ECDSA key fingerprint is SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM.
Are you sure you want to continue connecting (yes/no/[fingerprint])?yes

Warning: Permanently added '[ssh.github.com]:443,[20.205.243.160]:443' (ECDSA) to the list of known hosts.
ssh_dispatch_run_fatal: Connection to 20.205.243.160 port 443: Connection timed out
```

再次执行ssh -T git@github.com，发现验证通过
```
ssh -T git@github.com
```
```
Hi mzmuping! You've successfully authenticated, but GitHub does not provide shell access.
```
完成以上步骤后，再次上传代码到GitHub就不会报错了
