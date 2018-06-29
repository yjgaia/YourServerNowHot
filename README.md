# Your Server Now Hot
CPU나 메모리, 디스크 사용률이 90%가 넘는지 1분에 한번씩 체크하여 넘으면 메일을 보내주는 애플리케이션

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
	"receiverAddress" : "hanul@hanul.me"
}
```

## 실행
```
node YourServerNowHot.js
```
```
forever start YourServerNowHot.js
```

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)