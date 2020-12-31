require(process.env.UPPERCASE_PATH + '/node.index.js');

BOOT({
	
	CONFIG : {
		defaultBoxName : 'YourServerNowHot',
		isDevMode : true
	},
	
	NODE_CONFIG : {
		// 테스트 목적이기 때문에 CPU 클러스터링 기능을 사용하지 않습니다.
		isSingleCoreMode : true,
		
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
	}
});
