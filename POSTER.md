# POSTER ĐỒ ÁN CƠ SỞ NGÀNH

## Xây dựng hệ thống RealtyFlow CRM quản lý môi giới và giao dịch bất động sản

**Người thực hiện**: Mai Văn Tuyến  
**Giáo viên hướng dẫn**: TS. Nguyễn Nhứt Lam  
**Thời gian thực hiện**: 12/07/2026 - 06/09/2026  

---

## 1. Giới thiệu đề tài

Trong lĩnh vực bất động sản, môi giới thường phải xử lý nhiều thông tin như khách hàng tiềm năng, nhu cầu mua bán, lịch hẹn xem nhà, cơ hội giao dịch, hợp đồng và báo cáo doanh số. Nếu các dữ liệu này được quản lý rời rạc bằng tin nhắn, bảng tính hoặc ghi chú cá nhân, việc theo dõi và chăm sóc khách hàng dễ bị thiếu sót.

Đề tài **RealtyFlow CRM** được thực hiện nhằm xây dựng một prototype hệ thống CRM hỗ trợ quản lý quy trình làm việc của môi giới bất động sản. Hệ thống giúp tổ chức dữ liệu theo từng module, hỗ trợ người dùng theo dõi lead, khách hàng, pipeline, giao dịch và báo cáo trong một giao diện quản trị thống nhất.

---

## 2. Mục tiêu nghiên cứu

- Phân tích bài toán quản lý môi giới bất động sản.
- Xác định các nhóm chức năng cần có trong hệ thống CRM.
- Thiết kế giao diện prototype phục vụ quản lý lead, khách hàng, pipeline và giao dịch.
- Khởi tạo backend API bằng ASP.NET Core Web API.
- Xây dựng nền tảng ban đầu để có thể mở rộng thành hệ thống hoàn chỉnh trong tương lai.

---

## 3. Phương pháp thực hiện

Đề tài được thực hiện theo phương pháp kết hợp giữa nghiên cứu lý thuyết và xây dựng prototype. Trước hết, nhóm tiến hành tìm hiểu mô hình CRM, nghiệp vụ môi giới bất động sản và nhu cầu quản lý dữ liệu trong quá trình bán hàng. Sau đó, hệ thống được chia thành các module chức năng để dễ phân tích, thiết kế và hiện thực.

Frontend được xây dựng bằng **Next.js, React và TypeScript** nhằm tạo giao diện quản trị trực quan. Backend được xây dựng bằng **ASP.NET Core Web API .NET 8** để mô phỏng khả năng cung cấp dữ liệu cho frontend thông qua REST API. Trong phạm vi prototype, hệ thống sử dụng dữ liệu mẫu để trình bày giao diện, mô phỏng nghiệp vụ và kiểm thử luồng hoạt động cơ bản.

---

## 4. Công nghệ sử dụng

| Thành phần | Công nghệ |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Backend | ASP.NET Core Web API, .NET 8 |
| Giao tiếp dữ liệu | REST API |
| Dữ liệu prototype | Dữ liệu mẫu |
| Tài liệu | Word, PDF, PowerPoint |

---

## 5. Các module chính

| Module | Chức năng chính |
|---|---|
| Tổng quan CRM | Hiển thị dashboard, chỉ số vận hành và công việc trong ngày. |
| Lead Center | Tiếp nhận lead, chấm điểm lead và phân công cho môi giới. |
| Khách hàng | Lưu hồ sơ khách hàng, nhu cầu, ngân sách và lịch sử chăm sóc. |
| Hoạt động | Theo dõi cuộc gọi, tin nhắn, lịch hẹn và nhiệm vụ. |
| Cơ hội và Pipeline | Quản lý cơ hội bán hàng theo từng giai đoạn. |
| Đặt cọc và giao dịch | Theo dõi hợp đồng, trạng thái hồ sơ và hoa hồng. |
| Báo cáo | Tổng hợp số liệu lead, doanh số và hiệu suất môi giới. |

---

## 6. Kết quả đạt được

Sau quá trình thực hiện, đề tài đã xây dựng được prototype hệ thống RealtyFlow CRM với giao diện quản trị rõ ràng, có khả năng mô phỏng các chức năng quan trọng của một hệ thống CRM bất động sản. Frontend đã thể hiện được sidebar điều hướng, dashboard, danh sách module, bảng lead, pipeline dạng kanban, lịch hẹn và bảng giao dịch.

Backend đã được khởi tạo bằng ASP.NET Core Web API, có cấu hình CORS và các endpoint mẫu như kiểm tra trạng thái hệ thống và trả về danh sách bất động sản mẫu. Kết quả này chứng minh tính khả thi của việc xây dựng hệ thống theo mô hình frontend/backend tách biệt.

---

## 7. Hạn chế

- Dữ liệu hiện tại chủ yếu là dữ liệu mẫu.
- Chưa có cơ sở dữ liệu thật.
- Chưa hoàn thiện chức năng đăng nhập và phân quyền chi tiết.
- Chưa có đầy đủ các thao tác thêm, sửa, xóa cho lead, khách hàng và giao dịch.
- Báo cáo hiện chưa được tính toán từ dữ liệu vận hành thực tế.

---

## 8. Hướng phát triển

Trong tương lai, hệ thống có thể được mở rộng bằng cách bổ sung cơ sở dữ liệu, xây dựng đầy đủ API CRUD, thêm chức năng đăng nhập, phân quyền người dùng, quản lý sản phẩm bất động sản, đồng bộ lịch hẹn và phát triển báo cáo động. Ngoài ra, hệ thống có thể tích hợp thêm thông báo, tìm kiếm nâng cao, phân tích hiệu suất môi giới và triển khai lên môi trường cloud để phục vụ sử dụng thực tế.

---

## 9. Kết luận

Đề tài đã hoàn thành mục tiêu xây dựng prototype hệ thống RealtyFlow CRM phục vụ quản lý môi giới và giao dịch bất động sản. Mặc dù còn một số hạn chế, hệ thống đã thể hiện được ý tưởng tổng thể, cấu trúc chức năng và nền tảng kỹ thuật cần thiết để tiếp tục phát triển thành sản phẩm hoàn chỉnh.

