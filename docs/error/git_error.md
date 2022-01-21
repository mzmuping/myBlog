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

希望成功