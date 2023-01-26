# 2.0 - 2.11

framework scoketIO => 실시간, 양방향, event 기반의 통신을 가능하게 함.

프론트와 백엔드 간 실시간 통신을 가능하게 해주는 프레임워크 또는 라이브러리

뭐가 다른거야? framework 라는 점 !

또한, websocket으로 하지 못하더라도
HTTP long-polling을 사용해서라도 websocket을 사용할 수 있다

이걸 설치함으로써 이벤트로부터 자유로워 졌다!

send 말고 emit!!

전에는 message 하나(string)만 전송할 수 있었지만 socketIO는 뭐든 전송이 가능하다.

함수는 마지막에 전송할 수 있다!
