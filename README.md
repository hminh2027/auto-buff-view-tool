# Buff Views Tool
*A selfmade tool for auto sending requests without being ip blocked by website*

Input:
- file txt chứa các proxy (host + port) (bao gồm alive và die và mình sẽ phải lọc và lưu vào file riêng, có thể làm button khi muốn lọc) (do app nhỏ nên không cần nhiều proxy, không cần phải get từ các websites) -> file đã lọc bỏ duplicate và die
- file txt chứa các url link bài viết (lọc regex lấy id)
- file config
- file env

Output:
- file txt chứa proxies đã lọc
- file txt chứa lịch sử buff

Chức năng:
- lưu state app có đang buff hay không (check timer), cho phép dừng buff (cleartimer)
- lọc proxies
- chủ yếu làm việc với file txt để bỏ các bước thủ công
- đặt số view buff (làm việc với for)
- chế độ buff focus 1 bài/tất cả/random
- dự tính thời gian và lượng views tương ứng sau khi buff
- lưu lịch sử buff views (ra file txt dạng key:value)
- hẹn giờ buff chia đều trong ngày (!để sau)