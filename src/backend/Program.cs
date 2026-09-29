var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<CrmRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy
            .WithOrigins("http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("Frontend");

app.MapGet("/api/health", () => Results.Ok(new
{
    status = "ok",
    service = "Real Estate CRM API",
    checkedAt = DateTimeOffset.UtcNow
}));

var crm = app.MapGroup("/api/crm");

crm.MapGet("/navigation", (CrmRepository repository) => Results.Ok(repository.GetNavigation()));
crm.MapGet("/pages", (CrmRepository repository) => Results.Ok(repository.Pages));
crm.MapGet("/pages/{slug}", (string slug, CrmRepository repository) =>
{
    var page = repository.GetPage(slug);
    return page is null ? Results.NotFound() : Results.Ok(page);
});
crm.MapGet("/dashboard", (CrmRepository repository) => Results.Ok(repository.Dashboard));
crm.MapGet("/leads", (CrmRepository repository) => Results.Ok(repository.Leads));
crm.MapGet("/pipeline", (CrmRepository repository) => Results.Ok(repository.PipelineColumns));
crm.MapGet("/tasks", (CrmRepository repository) => Results.Ok(repository.Tasks));
crm.MapGet("/transactions", (CrmRepository repository) => Results.Ok(repository.Transactions));
crm.MapGet("/workspaces/{slug}", (string slug, CrmRepository repository) =>
{
    var workspace = repository.GetWorkspace(slug);
    return workspace is null ? Results.NotFound() : Results.Ok(workspace);
});

app.MapGet("/api/listings", () =>
{
    var listings = new[]
    {
        new Listing(1, "Can ho 2PN Thao Dien", "Quan 2, TP.HCM", 4200000000),
        new Listing(2, "Nha pho trung tam", "Quan 1, TP.HCM", 12500000000),
        new Listing(3, "Dat nen khu do thi", "Thu Duc, TP.HCM", 3200000000)
    };

    return Results.Ok(listings);
})
.WithName("GetListings");

app.Run();

record Listing(int Id, string Title, string Location, decimal Price);
record Metric(string Label, string Value, string Change);
record CrmPage(string Slug, string Title, string Purpose, string[] Modules, Metric[] Metrics, string[] Workflow, string[] Components);
record Lead(string Name, string Source, string Need, string Budget, int Score, string Owner, string Status);
record PipelineColumn(string Title, string Value, string Amount, string[] Items);
record Transaction(string Code, string Customer, string Product, string Stage, string Commission);
record CrmTask(string Time, string Title);
record NavigationItem(string Slug, string Title);

class CrmRepository
{
    public CrmPage[] Pages { get; } =
    {
        new(
            "",
            "Tổng quan CRM",
            "Dashboard cá nhân, nhóm và cảnh báo vận hành trong ngày.",
            new[] { "Dashboard cá nhân", "Dashboard nhóm", "Nhắc việc", "Báo cáo nhanh" },
            new[] { new Metric("Lead mới", "326", "+18%"), new Metric("Việc quá hạn", "12", "-6"), new Metric("Lịch hẹn hôm nay", "28", "+9") },
            new[] { "Nhận cảnh báo ưu tiên", "Xem KPI cá nhân", "Theo dõi KPI nhóm", "Đi tới tác vụ cần xử lý" },
            new[] { "MetricGrid", "TaskPanel", "LeadTable", "KanbanBoard", "TransactionTable" }
        ),
        new(
            "tai-khoan-phan-quyen",
            "Tài khoản & phân quyền",
            "Quản trị người dùng, vai trò, quyền truy cập và nhật ký bảo mật.",
            new[] { "Quản lý tài khoản", "Vai trò & quyền", "Phân quyền dữ liệu", "Nhật ký truy cập" },
            new[] { new Metric("Tài khoản hoạt động", "84", "+4"), new Metric("Vai trò", "7", "ổn định"), new Metric("Sự kiện bảo mật", "18", "-11%") },
            new[] { "Tạo tài khoản", "Gán vai trò", "Giới hạn dữ liệu theo nhóm", "Kiểm tra lịch sử truy cập" },
            new[] { "UserList", "RoleMatrix", "PermissionScopePanel", "AuditLogTable" }
        ),
        new(
            "nhan-su-moi-gioi",
            "Nhân sự môi giới",
            "Quản lý hồ sơ nhân viên, năng lực, chỉ tiêu và trạng thái làm việc.",
            new[] { "Nhân viên môi giới", "Nhóm kinh doanh", "KPI môi giới", "Phân vùng phụ trách" },
            new[] { new Metric("Môi giới", "64", "+3"), new Metric("Nhóm kinh doanh", "8", "ổn định"), new Metric("Hoàn thành KPI", "78%", "+5%") },
            new[] { "Cập nhật hồ sơ", "Xếp nhóm kinh doanh", "Gán khu vực", "Theo dõi hiệu suất" },
            new[] { "BrokerDirectory", "TeamBoard", "KpiScorecard", "TerritoryAssignment" }
        ),
        new(
            "lead-center",
            "Lead Center",
            "Tiếp nhận, chuẩn hóa, chống trùng, chấm điểm và phân công lead.",
            new[] { "Tiếp nhận Lead", "Nguồn Lead", "Chấm điểm Lead", "Chống trùng Lead", "Phân công Lead" },
            new[] { new Metric("Lead mới", "326", "+18%"), new Metric("Lead trùng", "31", "-8%"), new Metric("SLA phân công", "12 phút", "-3 phút") },
            new[] { "Tiếp nhận đa nguồn", "Kiểm tra trùng", "Chấm điểm tự động", "Phân công theo năng lực" },
            new[] { "LeadIntakeForm", "SourceClassifier", "DuplicateGuard", "LeadScoringPanel", "AssignmentQueue" }
        ),
        new(
            "khach-hang",
            "Khách hàng",
            "Lưu hồ sơ khách hàng, nhu cầu, ngân sách và lịch sử chăm sóc.",
            new[] { "Hồ sơ khách hàng", "Nhu cầu khách hàng", "Ngân sách", "Lịch sử chăm sóc" },
            new[] { new Metric("Hồ sơ đang chăm sóc", "1,248", "+42"), new Metric("Nhu cầu mới", "96", "+14%"), new Metric("Khách VIP", "57", "+6") },
            new[] { "Mở hồ sơ", "Ghi nhận nhu cầu", "Xác thực ngân sách", "Lưu lịch sử chăm sóc" },
            new[] { "CustomerProfile", "DemandMatrix", "BudgetPanel", "CareTimeline" }
        ),
        new(
            "hoat-dong",
            "Hoạt động",
            "Theo dõi cuộc gọi, tin nhắn, lịch hẹn, công việc và nhắc việc.",
            new[] { "Hoạt động liên hệ", "Lịch hẹn", "Công việc", "Nhắc việc" },
            new[] { new Metric("Cuộc gọi hôm nay", "148", "+21"), new Metric("Lịch hẹn", "28", "+9"), new Metric("Việc quá hạn", "12", "-6") },
            new[] { "Ghi log liên hệ", "Đặt lịch hẹn", "Tạo công việc", "Nhận nhắc việc đúng hạn" },
            new[] { "ContactActivityLog", "AppointmentCalendar", "TaskBoard", "ReminderCenter" }
        ),
        new(
            "co-hoi-pipeline",
            "Cơ hội & Pipeline",
            "Quản lý cơ hội bán hàng theo giai đoạn bằng pipeline/kanban.",
            new[] { "Cơ hội bán hàng", "Pipeline", "Kanban", "Dự báo doanh thu" },
            new[] { new Metric("Cơ hội mở", "74", "+11"), new Metric("Pipeline", "360 tỷ", "+12%"), new Metric("Tỷ lệ thắng", "22%", "+2.4%") },
            new[] { "Tạo cơ hội", "Kéo thả kanban", "Cập nhật xác suất", "Dự báo doanh thu" },
            new[] { "OpportunityList", "PipelineKanban", "DealForecast", "StageAutomation" }
        ),
        new(
            "xem-nha-thuong-luong",
            "Xem nhà & thương lượng",
            "Điều phối lịch xem nhà, ghi nhận phản hồi và quản lý thương lượng.",
            new[] { "Lịch xem nhà", "Phản hồi khách", "Thương lượng", "Đề xuất giá" },
            new[] { new Metric("Lượt xem nhà", "46", "+8"), new Metric("Phản hồi tích cực", "61%", "+7%"), new Metric("Đang thương lượng", "9", "+2") },
            new[] { "Đặt lịch xem", "Gửi xác nhận", "Ghi phản hồi", "Mở thương lượng" },
            new[] { "ViewingScheduler", "VisitFeedback", "NegotiationRoom", "OfferComparison" }
        ),
        new(
            "giao-dich",
            "Đặt cọc & giao dịch",
            "Theo dõi đặt cọc, giao dịch, hợp đồng, hoa hồng và trạng thái hồ sơ.",
            new[] { "Đặt cọc", "Giao dịch", "Hợp đồng", "Hoa hồng", "Trạng thái giao dịch" },
            new[] { new Metric("Đặt cọc", "5", "+2"), new Metric("Hợp đồng xử lý", "11", "+4"), new Metric("Hoa hồng dự kiến", "2.8 tỷ", "+15%") },
            new[] { "Ghi nhận đặt cọc", "Tạo giao dịch", "Theo dõi hợp đồng", "Tính hoa hồng" },
            new[] { "DepositTracker", "TransactionTable", "ContractChecklist", "CommissionCalculator", "DealStatusTimeline" }
        ),
        new(
            "bao-cao",
            "Báo cáo",
            "Đo phễu bán hàng, chuyển đổi, doanh số và hiệu suất môi giới.",
            new[] { "Phễu bán hàng", "Tỷ lệ chuyển đổi", "Doanh số", "Hiệu suất môi giới" },
            new[] { new Metric("Tỷ lệ chuyển đổi", "14.8%", "+2.1%"), new Metric("Doanh số", "78 tỷ", "+12%"), new Metric("Hiệu suất môi giới", "86/100", "+5") },
            new[] { "Chọn kỳ báo cáo", "Lọc nhóm/môi giới", "Xem biểu đồ phễu", "Xuất báo cáo" },
            new[] { "SalesFunnelChart", "ConversionReport", "RevenueDashboard", "BrokerPerformanceTable" }
        )
    };

    public Lead[] Leads { get; } =
    {
        new("Nguyễn Minh An", "Facebook Ads", "Căn hộ 2PN Thảo Điền", "5.2 tỷ", 91, "Linh Trần", "Mới phân công"),
        new("Trần Gia Bảo", "Website", "Nhà phố Quận 7", "12 tỷ", 84, "Hoàng Nam", "Đang chăm sóc"),
        new("Lê Phương Mai", "Zalo OA", "Đầu tư officetel", "3.8 tỷ", 73, "Minh Khang", "Cần xác minh")
    };

    public PipelineColumn[] PipelineColumns { get; } =
    {
        new("Lead đủ điều kiện", "42", "186 tỷ", new[] { "An - căn hộ 2PN", "Bảo - nhà phố", "Mai - officetel" }),
        new("Đã hẹn xem", "18", "92 tỷ", new[] { "Hải - villa", "Tú - shophouse" }),
        new("Thương lượng", "9", "51 tỷ", new[] { "Lan - The River", "Đức - Sala" }),
        new("Đặt cọc", "5", "31 tỷ", new[] { "Vy - Empire City", "Long - Palm Heights" })
    };

    public Transaction[] Transactions { get; } =
    {
        new("GD-2408-018", "Phạm Quốc Huy", "Căn hộ The River", "Soạn hợp đồng", "420 triệu"),
        new("GD-2408-017", "Vũ Ngọc Hà", "Nhà phố Him Lam", "Chờ công chứng", "610 triệu"),
        new("GD-2408-016", "Đặng Tuấn Kiệt", "Shophouse Sala", "Đã đặt cọc", "355 triệu")
    };

    public CrmTask[] Tasks { get; } =
    {
        new("09:30", "Gọi xác minh lead Facebook Ads"),
        new("11:00", "Dẫn khách xem căn hộ Thảo Điền"),
        new("14:30", "Gửi bảng so sánh giá cho khách VIP"),
        new("17:00", "Kiểm tra hồ sơ đặt cọc GD-2408-018")
    };

    public object Dashboard => new
    {
        page = GetPage(""),
        leads = Leads,
        pipelineColumns = PipelineColumns,
        tasks = Tasks,
        transactions = Transactions
    };

    public CrmPage? GetPage(string slug)
    {
        return Pages.FirstOrDefault(page => page.Slug == slug);
    }

    public NavigationItem[] GetNavigation()
    {
        return Pages.Select(page => new NavigationItem(page.Slug, page.Title)).ToArray();
    }

    public object? GetWorkspace(string slug)
    {
        var page = GetPage(slug);
        if (page is null) return null;

        return slug switch
        {
            "tai-khoan-phan-quyen" => new
            {
                page,
                kind = "accounts",
                rows = new[]
                {
                    new { name = "Nguyễn Hoàng Nam", email = "nam@realtyflow.vn", role = "Quản lý kinh doanh", team = "Riverside", status = "Đang hoạt động" },
                    new { name = "Linh Trần", email = "linh@realtyflow.vn", role = "Môi giới", team = "Thảo Điền", status = "Đang hoạt động" },
                    new { name = "Minh Khang", email = "khang@realtyflow.vn", role = "Môi giới", team = "Sala", status = "Tạm khóa" }
                },
                permissions = new[] { "Lead", "Khách hàng", "Giao dịch", "Báo cáo" },
                alerts = new[] { "3 tài khoản chưa bật MFA", "2 thay đổi quyền cần duyệt" }
            },
            "nhan-su-moi-gioi" => new
            {
                page,
                kind = "brokers",
                rows = new[]
                {
                    new { name = "Linh Trần", team = "Thảo Điền", territory = "TP. Thủ Đức", target = "18 tỷ", achieved = "14.2 tỷ", status = "Đạt 79%" },
                    new { name = "Hoàng Nam", team = "Riverside", territory = "Quận 7", target = "22 tỷ", achieved = "19.8 tỷ", status = "Đạt 90%" },
                    new { name = "Minh Khang", team = "Sala", territory = "Quận 2", target = "15 tỷ", achieved = "11.6 tỷ", status = "Cần hỗ trợ" }
                },
                teams = new[] { new { name = "Riverside", members = 12, revenue = "86 tỷ" }, new { name = "Thảo Điền", members = 9, revenue = "64 tỷ" }, new { name = "Sala", members = 8, revenue = "51 tỷ" } }
            },
            "lead-center" => new
            {
                page,
                kind = "leads",
                rows = Leads,
                sources = new[] { new { name = "Facebook Ads", count = 124, conversion = "18.4%" }, new { name = "Website", count = 86, conversion = "22.1%" }, new { name = "Zalo OA", count = 64, conversion = "15.6%" } },
                duplicates = new[] { "Trần Gia Bảo / số điện thoại trùng 2 lần", "Lê Phương Mai / email đã tồn tại" }
            },
            "khach-hang" => new
            {
                page,
                kind = "customers",
                rows = new[]
                {
                    new { name = "Phạm Quốc Huy", segment = "VIP", need = "Căn hộ ven sông", budget = "8 - 10 tỷ", owner = "Linh Trần", lastContact = "Hôm qua" },
                    new { name = "Vũ Ngọc Hà", segment = "Tiềm năng", need = "Nhà phố Quận 7", budget = "12 tỷ", owner = "Hoàng Nam", lastContact = "2 ngày trước" },
                    new { name = "Đặng Tuấn Kiệt", segment = "Mới", need = "Shophouse Sala", budget = "5 tỷ", owner = "Minh Khang", lastContact = "Hôm nay" }
                },
                timeline = new[] { "09:15 - Cập nhật ngân sách khách Phạm Quốc Huy", "10:40 - Ghi nhận nhu cầu nhà phố Quận 7", "13:20 - Gọi lại khách hàng mới từ Website" }
            },
            "hoat-dong" => new
            {
                page,
                kind = "activities",
                rows = new[]
                {
                    new { time = "09:30", type = "Cuộc gọi", subject = "Xác minh lead Facebook Ads", owner = "Linh Trần", status = "Đã lên lịch" },
                    new { time = "11:00", type = "Lịch hẹn", subject = "Xem căn hộ Thảo Điền", owner = "Hoàng Nam", status = "Đã xác nhận" },
                    new { time = "14:30", type = "Công việc", subject = "Gửi bảng so sánh giá", owner = "Minh Khang", status = "Đang chờ" }
                },
                calendar = new[] { "Thứ 2: 8 hoạt động", "Thứ 3: 12 hoạt động", "Thứ 4: 6 hoạt động", "Thứ 5: 14 hoạt động" }
            },
            "co-hoi-pipeline" => new
            {
                page,
                kind = "pipeline",
                columns = PipelineColumns,
                forecast = new[] { new { label = "Có thể chốt tháng này", value = "86 tỷ" }, new { label = "Xác suất bình quân", value = "42%" }, new { label = "Chu kỳ bán hàng", value = "31 ngày" } }
            },
            "xem-nha-thuong-luong" => new
            {
                page,
                kind = "viewings",
                rows = new[]
                {
                    new { time = "08:30", customer = "Phạm Quốc Huy", property = "The River", broker = "Linh Trần", status = "Đã xác nhận" },
                    new { time = "13:00", customer = "Vũ Ngọc Hà", property = "Him Lam", broker = "Hoàng Nam", status = "Chờ phản hồi" },
                    new { time = "15:30", customer = "Đặng Tuấn Kiệt", property = "Sala", broker = "Minh Khang", status = "Đang thương lượng" }
                },
                offers = new[] { new { property = "The River", asking = "8.4 tỷ", offer = "8.1 tỷ", status = "Chờ duyệt" }, new { property = "Him Lam", asking = "12.5 tỷ", offer = "12 tỷ", status = "Đang đàm phán" } }
            },
            "giao-dich" => new
            {
                page,
                kind = "transactions",
                rows = Transactions,
                checklist = new[] { "GD-2408-018: thiếu CCCD bên mua", "GD-2408-017: chờ lịch công chứng", "GD-2408-016: đã đủ hồ sơ" }
            },
            "bao-cao" => new
            {
                page,
                kind = "reports",
                funnel = new[] { new { label = "Lead", value = 326 }, new { label = "Đủ điều kiện", value = 118 }, new { label = "Đã xem nhà", value = 46 }, new { label = "Đặt cọc", value = 5 } },
                performance = new[] { new { broker = "Hoàng Nam", leads = 42, conversion = "24%", revenue = "19.8 tỷ" }, new { broker = "Linh Trần", leads = 38, conversion = "21%", revenue = "14.2 tỷ" }, new { broker = "Minh Khang", leads = 31, conversion = "16%", revenue = "11.6 tỷ" } }
            },
            _ => null
        };
    }
}
