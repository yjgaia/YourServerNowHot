# UMAIL
UPPERCASE BOX for sending mail

## 사용법
```javascript
// 메일 서버에 접속합니다.
UMAIL.CONNECT_TO_MAIL_SERVER({
	host : 'smtp.gmail.com',
	port : 465,
	isSecure : true,
	username : 'sender@hanul.me',
	password : 'ENTER YOUR PASSWORD'
}, function(sendMail) {

	// 메일을 보냅니다.
	sendMail({
		senderName : 'BTNcafe Contact',
		senderAddress : 'sender@hanul.me',
		receiverAddress : 'hanul@hanul.me',
		title : 'Hello,',
		content : 'World!'
	});
});
```

## Gmail 사용 시
Gmail 사용 시 외부 애플리케이션에서 사용할 수 있도록 이하 경로에서 `보안 수준이 낮은 앱의 액세스`를 `사용`으로 변경해야 합니다. 변경 후 반영이 되는데 시간이 걸립니다. 대략 20분 후 확인해 보시기 바랍니다.

https://www.google.com/settings/security/lesssecureapps

## 윈도우에서 테스트 시 Avast 안티바이러스 프로그램이 켜져있으면 종료합니다.
Avast 안티바이러스 프로그램이 임의 메일 전송을 차단하기 때문에, 프로그램을 종료하시거나 감시 제어를 사용하지 않음으로 설정하여야 합니다.

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)
