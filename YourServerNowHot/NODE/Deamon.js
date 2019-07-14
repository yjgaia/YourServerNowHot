YourServerNowHot.Deamon = OBJECT({
	
	init : () => {
		
		DISTRIBUTE_PROCESS({
			tag : 'Your Server Now Hot'
		}, () => {
			
			let serverName = NODE_CONFIG.YourServerNowHot.serverName;
			let mailConfig = NODE_CONFIG.YourServerNowHot.mail;
			
			UMAIL.CONNECT_TO_MAIL_SERVER(mailConfig, (_sendMail) => {
				
				let sendMail = (title, content) => {
					_sendMail({
						senderName : mailConfig.senderName,
						senderAddress : mailConfig.senderAddress,
						receiverAddress : mailConfig.receiverAddress,
						title : title,
						content : content + '\n\nBy https://github.com/Hanul/YourServerNowHot'
					});
				};
				
				// 1분에 한번씩 CPU와 메모리, 디스크 사용률을 체크
				INTERVAL(60, RAR(() => {
					
					EACH(CPU_USAGES(), (cpuUsage) => {
						if (cpuUsage > 90) {
							sendMail(serverName + '의 CPU 사용률이 ' + cpuUsage + '%에 육박하였습니다.', 'CPU 사용률이 ' + cpuUsage + '%에 육박하였습니다.\n' + serverName + '을(를) 체크하시기 바랍니다.');
						}
					});
					
					MEMORY_USAGE((memoryUsage) => {
						if (memoryUsage > 90) {
							sendMail(serverName + '의 메모리 사용률이 ' + memoryUsage + '%에 육박하였습니다.', '메모리 사용률이 ' + memoryUsage + '%에 육박하였습니다.\n' + serverName + '을(를) 체크하시기 바랍니다.');
						}
					});
					
					DISK_USAGE((diskUsage) => {
						if (diskUsage > 90) {
							sendMail(serverName + '의 디스크 사용률이 ' + diskUsage + '%에 육박하였습니다.', '디스크 사용률이 ' + diskUsage + '%에 육박하였습니다.\n' + serverName + '을(를) 체크하시기 바랍니다.');
						}
					});
				}));
				
				console.log(CONSOLE_GREEN('Your Server Now Hot이 실행중입니다...'));
			});
		});
	}
});