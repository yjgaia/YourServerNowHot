# Your Server Now Hot
CPU나 메모리, 디스크 사용률이 90%가 넘는지 1분에 한번씩 체크하여 넘으면 메일을 보내주는 애플리케이션입니다.

## 설치하기
```
git clone https://github.com/Hanul/YourServerNowHot
```

## 설정
[UMAIL 문서](https://github.com/Hanul/UMAIL)를 참고하여 `mailconfig.json` 파일을 수정합니다.
```javascript
{
	"host" : "smtp.gmail.com",
	"port" : 465,
	"isSecure" : true,
	"username" : "sender@hanul.me",
	"password" : "ENTER YOUR PASSWORD",

	"senderName" : "BTNcafe Contact",
	"senderAddress" : "sender@hanul.me",
	"receiverAddress" : "hanul@hanul.me",
	
	"serverName" : "My Server"
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