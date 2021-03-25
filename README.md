## 算法

### 1、排序算法及相关复杂度

## 网络协议

### 1、TCP/IP五层与OSI七层网络模型

### 2、http1.x和http2.x

### 3、http和https协议

#### http

​	http超文本传输协议(Hyper Text Transfer Protocol)，基于TCP/IP通信协议，一般用于B/S架构。

#### http特点

1. http协议支持客户端/服务端模式，也是一种请求/响应模式的协议。
2. 简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。
3. 灵活：HTTP允许传输任意类型的数据对象。传输的类型由Content-Type加以标记。
4. 无连接：限制每次连接只处理一个请求。服务器处理完请求，并收到客户的应答后，即断开连接，但是却不利于客户端与服务器保持会话连接，为了弥补这种不足，产生了两项记录http状态的技术，一个叫做Cookie,一个叫做Session。
5. 无状态：无状态是指协议对于事务处理没有记忆，后续处理需要前面的信息，则必须重传。

#### http报文

​	请求报文：

- 请求行：包括请求方法、URL、协议/版本
- 请求头(Request Header)
- 请求正文

​	响应报文：

- 状态行：请求状态
- 响应头(Response Header)
- 响应正文

#### 常见请求方法

- GET: 请求指定的页面信息，并返回实体主体。
- POST: 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。
- HEAD: 类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头
- PUT: 从客户端向服务器传送的数据取代指定的文档的内容。
- DELETE: 请求服务器删除指定的页面。

#### GET和POST的区别

- 都包含请求头请求行，post多了请求body。
- get多用来查询，请求参数放在url中，不会对服务器上的内容产生作用。post用来提交，如把账号密码放入body中。
- GET是直接添加到URL后面的，直接就可以在URL中看到内容，而POST是放在报文内部的，用户无法直接看到。
- GET提交的数据长度是有限制的，因为URL长度有限制，具体的长度限制视浏览器而定。而POST没有。

#### 响应状态码

分类：

- 1XX- 信息型，服务器收到请求，需要请求者继续操作。
- 2XX- 成功型，请求成功收到，理解并处理。
- 3XX - 重定向，需要进一步的操作以完成请求。
- 4XX - 客户端错误，请求包含语法错误或无法完成请求。
- 5XX - 服务器错误，服务器在处理请求的过程中发生了错误

常见状态码：

- 200 OK - 客户端请求成功
- 301 - 资源（网页等）被永久转移到其它URL
- 302 - 临时跳转
- 304 - 协商缓存
- 400 Bad Request - 客户端请求有语法错误，不能被服务器所理解
- 401 Unauthorized - 请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
- 404 - 请求资源不存在，可能是输入了错误的URL
- 500 - 服务器内部发生了不可预期的错误
- 503 Server Unavailable - 服务器当前不能处理客户端的请求，一段时间后可能恢复正常。

#### https

​	https协议(HyperText Transfer Protocol over Secure Socket Layer)，一般理解为HTTP+SSL/TLS，通过 SSL证书来验证服务器的身份，并为浏览器和服务器之间的通信进行加密。

​	SSL（Secure Socket Layer，安全套接字层）：1994年为 Netscape 所研发，SSL 协议位于 TCP/IP 协议与各种应用层协议之间，为数据通讯提供安全支持。

​	TLS（Transport Layer Security，传输层安全）：其前身是 SSL，它最初的几个版本（SSL 1.0、SSL 2.0、SSL 3.0）由网景公司开发，1999年从 3.1 开始被 IETF 标准化并改名，发展至今已经有 TLS 1.0、TLS 1.1、TLS 1.2 三个版本。SSL3.0和TLS1.0由于存在安全漏洞，已经很少被使用到。TLS 1.3 改动会比较大，目前还在草案阶段，目前使用最广泛的是TLS 1.1、TLS 1.2。

#### http存在问题

- 请求信息明文传输，容易被窃听截取。
- 数据的完整性未校验，容易被篡改
- 没有验证对方身份，存在冒充危险

#### https传输流程

使用非对称加密 去加密 对称加密的密钥，通过对称加密进行密文通信。

![preview](https://pic4.zhimg.com/v2-a994fbf3094d737814fe01c2b919477b_r.jpg)

1. 首先客户端通过URL访问服务器建立SSL连接。
2. 服务端收到客户端请求后，会将网站支持的证书信息（证书中包含公钥）传送一份给客户端。
3. 客户端的服务器开始协商SSL连接的安全等级，也就是信息加密的等级。
4. 客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站。
5. 服务器利用自己的私钥解密出会话密钥。
6. 服务器利用会话密钥加密与客户端之间的通信

#### 对称加密和非对称加密

对称加密：加密和解密使用的是同一把钥匙。

​	优点：算法简单，加密解密容易，效率高，执行快。

​	缺点：相对来说不算特别安全，只有一把钥匙，密文如果被拦截，且密钥也被劫持，那么，信息很容易被破译。

非对称加密： 使用不同的密钥进行加密和解密，公钥（Public Key）和私钥（Private Key）。公钥和私钥是成对的存在，如果对原文使用公钥加密，则只能使用对						应的私钥才能解密。

​	优点：安全，即使密文被拦截、公钥被获取，但是无法获取到私钥，也就无法破译密文。作为接收方，务必要保管好自己的密钥。

​	缺点：加密算法及其复杂，安全性依赖算法与密钥，而且加密和解密效率很低。

#### 数字证书和数字签名

数字证书：由权威机构Certificate Authority发行的，又称之为证书授权，简称为：CA。类似于现实生活中的居民身份证，绑定了公钥及其持有者的真实身份，是一段含有证书持有者身份信息并经过认证中心审核签发的电子数据。

数字签名：指将摘要信息使用接收者的公钥进行加密，与密文一起发送给接收者。接收者使用自己的私钥对摘要信息进行解密，然后使用Hash函数对收到的密文产生一个摘要信息，然后将摘要信息与发送着传输过来解密后的摘要信息对比是否一致。如果一致，则表明数据信息没有被篡改。

数字签名能够验证收到的信息的完整性，避免中途信息被劫持篡改或丢失。对方可以根据数字签名来判断获取到的数据信息时候是最原始的数据。

#### https缺点

- HTTPS协议多次握手，导致页面的加载时间延长近50%；
- HTTPS连接缓存不如HTTP高效，会增加数据开销和功耗；
- 申请SSL证书需要钱，功能越强大的证书费用越高。
- SSL涉及到的安全算法会消耗 CPU 资源，对服务器资源消耗较大。

#### http和htttps异同

- HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理。
- http和https使用连接方式不同，默认端口也不一样，http是80，https是443。

### 4、网络安全

### 5、http缓存

![img](https://upload-images.jianshu.io/upload_images/4845448-39248bf4a3b45c3e?imageMogr2/auto-orient/strip|imageView2/2/format/webp)



​	**常见的http缓存只能缓存get请求响应的资源，对于其他类型的响应则无能为力**

#### http缓存分类

​	根据是否需要重新向服务器发起请求来分类，可分为(强制缓存，协商缓存) 。

​	根据是否可以被单个或者多个用户使用来分类，可分为(私有缓存，共享缓存) 

​	强制缓存如果生效，不需要再和服务器发生交互，而协商缓存不管是否生效，都需要与服务端发生交互。

![img](https://upload-images.jianshu.io/upload_images/4845448-ab0e961921da5694?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

#### 强缓存

​	强制缓存在缓存数据未失效的情况下（即Cache-Control的max-age没有过期或者Expires的缓存时间没有过期），那么就会直接使用浏览器的缓存数据，不会再向服务器发送任何请求。强制缓存生效时，http状态码为200。

![img](https://upload-images.jianshu.io/upload_images/4845448-217723260f75ed90?imageMogr2/auto-orient/strip|imageView2/2/format/webp) 	

在chrome浏览器中返回的200状态会有两种情况：
 1、from memory cache
 (从内存中获取/一般缓存更新频率较高的js、图片、字体等资源)

2、from disk cache
 (从磁盘中获取/一般缓存更新频率较低的js、css等资源)

这两种情况是chrome自身的一种缓存策略，这也是为什么chrome浏览器响应的快的原因。其他浏览返回的是已缓存状态，没有标识是从哪获取的缓存。

#### 协商缓存

​		当第一次请求时服务器返回的响应头中没有Cache-Control和Expires或者Cache-Control和Expires过期还或者它的属性设置为no-cache时(即不走强缓存)，那么浏览器第二次请求时就会与服务器进行协商，与服务器端对比判断资源是否进行了修改更新。

​		如果服务器端的资源没有修改，那么就会返回**304状态码**，告诉浏览器可以使用缓存中的数据，这样就减少了服务器的数据传输压力。如果数据有更新就会返回**200状态码**，服务器就会返回更新后的资源并且将缓存信息一起返回。

​		跟协商缓存相关的header头属性有（ETag/If-Not-Match 、Last-Modified/If-Modified-Since），**请求头和响应头需要成对出现**

![img](https://upload-images.jianshu.io/upload_images/4845448-a22cef109d00aa79?imageMogr2/auto-orient/strip|imageView2/2/w/800/format/webp)

​		协商缓存的执行流程是这样的：当浏览器第一次向服务器发送请求时，会在响应头中返回协商缓存的头属性：ETag和Last-Modified,其中ETag返回的是一个hash值，Last-Modified返回的是GMT格式的最后修改时间。然后浏览器在第二次发送请求的时候，会在请求头中带上与ETag对应的If-Not-Match，其值就是响应头中返回的ETag的值，Last-Modified对应的If-Modified-Since。服务器在接收到这两个参数后会做比较，如果返回的是304状态码，则说明请求的资源没有修改，浏览器可以直接在缓存中取数据，否则，服务器会直接返回数据。

**注意：**
 ETag/If-Not-Match是在HTTP/1.1出现的，主要是解决以下问题：

(1)、Last-Modified标注的最后修改只能精确到秒级，如果某些文件在1秒钟以内，被修改多次的话，它将不能准确标注文件的修改时间

(2)、如果某些文件被修改了，但是内容并没有任何变化，而Last-Modified却改变了，导致文件没法使用缓存

(3)、有可能存在服务器没有准确获取文件修改时间，或者与代理服务器时间不一致等情形

#### 浏览器首次和再次发送http请求的执行流程图

![img](https://upload-images.jianshu.io/upload_images/4845448-4b270d197649b733?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

![img](https://upload-images.jianshu.io/upload_images/4845448-d2cac3511e372486?imageMogr2/auto-orient/strip|imageView2/2/format/webp)



#### 私有缓存和共享缓存

私有缓存只能用于单独的用户：Cache-Control: Private（浏览器级缓存）

共享缓存可以被多个用户使用: Cache-Control: Public （代理级缓存）

#### http缓存好处

- 减少了冗余的数据传输，节省了网费。
- 缓解了服务器的压力， 大大提高了网站的性能
- 加快了客户端加载网页的速度

#### 如何使用http缓存

​	一般需要缓存的资源有html页面和其他静态资源

​	1、html页面缓存的设置主要是在<head>标签中嵌入<meta>标签，这种方式只对页面有效，对页面上的资源无效

​		1.1、html页面禁用缓存的设置如下：

```javascript
// 仅有IE浏览器才识别的标签，不一定会在请求字段加上Pragma，但的确会让当前页面每次都发新请求
<meta http-equiv="pragma" content="no-cache">
// 仅有IE浏览器才识别的标签，该方式仅仅作为知会IE缓存时间的标记，你并不能在请求或响应报文中找到Expires字段    
<meta http-equiv="expires" content="0">
// 其他主流浏览器识别的标签
<meta http-equiv="cache-control" content="no-cache">
```

​		1.2、html设置缓存如下：

```javascript
// 仅有IE浏览器才识别的标签
<meta http-equiv="Expires" content="Mon, 20 Aug 2018 23:00:00 GMT" />
// 其他主流浏览器识别的标签
<meta http-equiv="Cache-Control" content="max-age=7200" />
```

​	2、静态资源的缓存一般是在web服务器上配置的，常用的web服务器有：nginx、apache。具体的配置这里不做详细介绍，大家自行查阅。

#### HTTP缓存的几个注意点

1、强缓存情况下，只要缓存还没过期，就会直接从缓存中取数据，就算服务器端有数据变化，也不会从服务器端获取了，这样就无法获取到修改后的数据。决解的办法有：在修改后的资源加上随机数,确保不会从缓存中取。

例如：
 [http://www.kimshare.club/kim/common.css?v=22324432](https://links.jianshu.com/go?to=http%3A%2F%2Fwww.kimshare.club%2Fkim%2Fcommon.css%3Fv%3D22324432)
 [http://www.kimshare.club/kim/common.2312331.css](https://links.jianshu.com/go?to=http%3A%2F%2Fwww.kimshare.club%2Fkim%2Fcommon.2312331.css)

2、尽量减少304的请求，因为我们知道，协商缓存每次都会与后台服务器进行交互，所以性能上不是很好。从性能上来看尽量多使用强缓存。

3、与缓存相关的几个header属性有：Vary、Date/Age。

Vary：表示服务端会以什么基准字段来区分、筛选缓存版本。

​		 	在服务端有着这么一个地址，如果是IE用户则返回针对IE开发的内容，否则返回另一个主流浏览器版本的内容。
 			格式：Vary: User-Agent
​	 		知会代理服务器需要以 User-Agent 这个请求首部字段来区别缓存版本，防止传递给客户端的缓存不正确。

Date/Age：区分其收到的资源是否命中了代理服务器的缓存。

​			Date 理所当然是原服务器发送该资源响应报文的时间（GMT格式），如果你发现 Date 的时间与“当前时间”差别较大，或者连续F5刷新发现 Date 的值都没变化，则说明你当前请求是命中了代理服务器的缓存。
 		   Age 也是响应报文中的首部字段，它表示该文件在代理服务器中存在的时间（秒），如文件被修改或替换，Age会重新由0开始累计。

### 6、websocket

### 7、cookie、session、与token

## 浏览器

### 1、浏览器渲染机制

### 2、垃圾回收

### 3、浏览器缓存

![img](https://upload-images.jianshu.io/upload_images/4845448-f0cd7f084e812844?imageMogr2/auto-orient/strip|imageView2/2/w/674/format/webp)

## HTML

### 1、html语义化

## CSS

### 1、flex布局

### 2、grid布局

## JavaScript

### 1、事件循环

## TypeScript

### 1、类型检测

## Nodejs

### 1、中间件洋葱模型

### 2、事件循环

## Vue

### 1、响应式原理

## React

### 1、函数式组件和类式组件

### 2、Hooks

## uni-app

### 1、移动端

### 2、小程序

## 前端工程化与发展

### 1、webpack

### 2、性能优化

cdn分发网络

### 3、单页面应用

### 4、屏幕自适应

​	rem、em   @media    postcss



