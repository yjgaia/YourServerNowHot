# Your Server Now Hot
CPU나 메모리, 디스크 사용률이 90%가 넘는지 1분에 한번씩 체크하여 넘으면 메일을 보내주는 애플리케이션입니다.

## 설치하기
```
git clone https://github.com/Hanul/YourServerNowHot
```

## 설정
[UMAIL 문서](https://github.com/Hanul/UMAIL)를 참고하여 `YourServerNowHot.js` 파일의 아래 부분을 수정합니다.
```javascript
YourServerNowHot : {
	
	serverName : 'My Server',
	
	mail : {
		host : 'smtp.gmail.com',
		port : 465,
		isSecure : true,
		username : 'sender@hanul.me',
		password : 'ENTER YOUR PASSWORD',
	
		senderName : 'BTNcafe Contact',
		senderAddress : 'sender@hanul.me',
		receiverAddress : 'hanul@hanul.me'
	}
	
	// checkURL 설정을 하게되면 이 URL에 요청을 보내 오류가 반환되면 메일을 보내줍니다.
	// checkURL : 'http://localhost:8888/check'

	// jobs 설정을 통해 서버에 무리가 발생할 때 실행할 명령들을 작성합니다.
	/* jobs : [{
		type : 'request',
		url : 'http://other-server.com:8080/server-now-hot'
	}, {
		type : 'command',
		delay : 10, // 10초 뒤 실행
		folderPath : '/home/dev',
		commands : [
			'forever restartall'
		]
	}] */
}
```

## 실행
```
node YourServerNowHot.js
```
```
forever start YourServerNowHot.js
```

이제 CPU나 메모리, 디스크 사용률이 90%가 넘으면 다음과 같은 메일이 오게됩니다.

```
제목: My Server의 CPU 사용률이 98%에 육박하였습니다.
내용: CPU 사용률이 98%에 육박하였습니다.
My Server을(를) 체크하시기 바랍니다.
```

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)