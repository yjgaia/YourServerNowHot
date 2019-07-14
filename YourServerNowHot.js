require(process.env.UPPERCASE_PATH + '/LOAD.js');

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
		}
	}
});
