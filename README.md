# RealtyFlow CRM - Đồ án cơ sở ngành

## Giới thiệu

Thư mục này chứa mã nguồn và tài liệu cho đề tài **RealtyFlow CRM**, một prototype hệ thống quản lý môi giới và giao dịch bất động sản. Đề tài tập trung mô phỏng các nghiệp vụ chính của một hệ thống CRM bất động sản như quản lý lead, khách hàng, nhân sự môi giới, lịch hẹn, pipeline bán hàng, giao dịch và báo cáo.

Project được tổ chức theo hướng tách riêng frontend và backend:

- **Frontend**: xây dựng bằng Next.js, React và TypeScript.
- **Backend**: xây dựng bằng ASP.NET Core Web API trên nền tảng .NET 8.
- **Tài liệu đồ án**: gồm báo cáo, slide thuyết trình, poster, tài liệu tham khảo và các file phục vụ bảo vệ đồ án.

## Cấu trúc thư mục

```text
.
├── src/
│   ├── frontend/        # Giao diện CRM bằng Next.js, React, TypeScript
│   └── backend/         # ASP.NET Core Web API
├── thesis/
│   ├── abs/             # Slide thuyết trình
│   ├── doc/             # File Word báo cáo và bìa
│   ├── pdf/             # Bản PDF báo cáo
│   └── ref/             # Tài liệu tham khảo PDF
├── POSTER.md            # Nội dung poster giới thiệu đề tài
├── README.md            # File giới thiệu thư mục và hướng dẫn sử dụng
└── .gitignore           # Cấu hình bỏ qua file build và file tạm
```

## Các module chính của hệ thống

| Module | Mục đích |
|---|---|
| Tổng quan CRM | Hiển thị dashboard, chỉ số vận hành, lịch hẹn và công việc cần xử lý. |
| Tài khoản và phân quyền | Quản lý tài khoản, vai trò và quyền truy cập của người dùng. |
| Nhân sự môi giới | Quản lý thông tin nhân viên, nhóm kinh doanh, khu vực phụ trách và KPI. |
| Lead Center | Tiếp nhận, theo dõi, chấm điểm và phân công lead cho môi giới. |
| Khách hàng | Lưu hồ sơ khách hàng, nhu cầu, ngân sách và lịch sử chăm sóc. |
| Hoạt động | Theo dõi cuộc gọi, tin nhắn, lịch hẹn, công việc và nhắc việc. |
| Cơ hội và Pipeline | Quản lý cơ hội bán hàng theo từng giai đoạn bằng dạng kanban. |
| Xem nhà và thương lượng | Điều phối lịch xem nhà, ghi nhận phản hồi và hỗ trợ thương lượng. |
| Đặt cọc và giao dịch | Theo dõi hợp đồng, trạng thái hồ sơ, công chứng và hoa hồng. |
| Báo cáo | Tổng hợp số liệu lead, tỷ lệ chuyển đổi, doanh số và hiệu suất môi giới. |

## Công nghệ sử dụng

- Next.js
- React
- TypeScript
- ASP.NET Core Web API
- .NET 8
- REST API
- Dữ liệu mẫu phục vụ prototype

## Hướng dẫn chạy frontend

Di chuyển vào thư mục frontend:

```bash
cd src/frontend
```

Cài đặt thư viện:

```bash
npm install
```

Chạy môi trường phát triển:

```bash
npm run dev
```

Sau đó mở trình duyệt tại:

```text
http://localhost:3000
```

## Hướng dẫn chạy backend

Di chuyển vào thư mục backend:

```bash
cd src/backend
```

Chạy API:

```bash
dotnet run
```

Một số endpoint mẫu:

```text
GET /api/health
GET /api/listings
```

## Tài liệu đồ án

Các tài liệu chính nằm trong thư mục `thesis/`:

- `thesis/doc/`: file Word báo cáo và bìa.
- `thesis/pdf/`: bản PDF báo cáo.
- `thesis/abs/`: slide thuyết trình.
- `thesis/ref/`: tài liệu tham khảo dạng PDF.

## Thông tin đồ án

- **Tên đề tài**: Xây dựng website bất động sản / RealtyFlow CRM
- **Người thực hiện**: Mai Văn Tuyến
- **Giáo viên hướng dẫn**: TS. Nguyễn Nhứt Lam
- **Mục tiêu**: Xây dựng prototype hệ thống CRM hỗ trợ quản lý môi giới và giao dịch bất động sản.

