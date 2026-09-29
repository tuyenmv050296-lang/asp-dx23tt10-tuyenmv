export type CrmPage = {
  slug: string;
  title: string;
  purpose: string;
  modules: string[];
  metrics: Array<{ label: string; value: string; change: string }>;
  workflow: string[];
  components: string[];
};

export type Lead = {
  name: string;
  source: string;
  need: string;
  budget: string;
  score: number;
  owner: string;
  status: string;
};

export const crmPages: CrmPage[] = [
  {
    slug: "",
    title: "Tổng quan CRM",
    purpose: "Dashboard cá nhân, nhóm và cảnh báo vận hành trong ngày.",
    modules: ["Dashboard cá nhân", "Dashboard nhóm", "Nhắc việc", "Báo cáo nhanh"],
    metrics: [
      { label: "Lead mới", value: "326", change: "+18%" },
      { label: "Việc quá hạn", value: "12", change: "-6" },
      { label: "Lịch hẹn hôm nay", value: "28", change: "+9" }
    ],
    workflow: ["Nhận cảnh báo ưu tiên", "Xem KPI cá nhân", "Theo dõi KPI nhóm", "Đi tới tác vụ cần xử lý"],
    components: ["MetricGrid", "TaskPanel", "LeadTable", "KanbanBoard", "TransactionTable"]
  },
  {
    slug: "tai-khoan-phan-quyen",
    title: "Tài khoản & phân quyền",
    purpose: "Quản trị người dùng, vai trò, quyền truy cập và nhật ký bảo mật.",
    modules: ["Quản lý tài khoản", "Vai trò & quyền", "Phân quyền dữ liệu", "Nhật ký truy cập"],
    metrics: [
      { label: "Tài khoản hoạt động", value: "84", change: "+4" },
      { label: "Vai trò", value: "7", change: "ổn định" },
      { label: "Sự kiện bảo mật", value: "18", change: "-11%" }
    ],
    workflow: ["Tạo tài khoản", "Gán vai trò", "Giới hạn dữ liệu theo nhóm", "Kiểm tra lịch sử truy cập"],
    components: ["UserList", "RoleMatrix", "PermissionScopePanel", "AuditLogTable"]
  },
  {
    slug: "nhan-su-moi-gioi",
    title: "Nhân sự môi giới",
    purpose: "Quản lý hồ sơ nhân viên, năng lực, chỉ tiêu và trạng thái làm việc.",
    modules: ["Nhân viên môi giới", "Nhóm kinh doanh", "KPI môi giới", "Phân vùng phụ trách"],
    metrics: [
      { label: "Môi giới", value: "64", change: "+3" },
      { label: "Nhóm kinh doanh", value: "8", change: "ổn định" },
      { label: "Hoàn thành KPI", value: "78%", change: "+5%" }
    ],
    workflow: ["Cập nhật hồ sơ", "Xếp nhóm kinh doanh", "Gán khu vực", "Theo dõi hiệu suất"],
    components: ["BrokerDirectory", "TeamBoard", "KpiScorecard", "TerritoryAssignment"]
  },
  {
    slug: "lead-center",
    title: "Lead Center",
    purpose: "Tiếp nhận, chuẩn hóa, chống trùng, chấm điểm và phân công lead.",
    modules: ["Tiếp nhận Lead", "Nguồn Lead", "Chấm điểm Lead", "Chống trùng Lead", "Phân công Lead"],
    metrics: [
      { label: "Lead mới", value: "326", change: "+18%" },
      { label: "Lead trùng", value: "31", change: "-8%" },
      { label: "SLA phân công", value: "12 phút", change: "-3 phút" }
    ],
    workflow: ["Tiếp nhận đa nguồn", "Kiểm tra trùng", "Chấm điểm tự động", "Phân công theo năng lực"],
    components: ["LeadIntakeForm", "SourceClassifier", "DuplicateGuard", "LeadScoringPanel", "AssignmentQueue"]
  },
  {
    slug: "khach-hang",
    title: "Khách hàng",
    purpose: "Lưu hồ sơ khách hàng, nhu cầu, ngân sách và lịch sử chăm sóc.",
    modules: ["Hồ sơ khách hàng", "Nhu cầu khách hàng", "Ngân sách", "Lịch sử chăm sóc"],
    metrics: [
      { label: "Hồ sơ đang chăm sóc", value: "1,248", change: "+42" },
      { label: "Nhu cầu mới", value: "96", change: "+14%" },
      { label: "Khách VIP", value: "57", change: "+6" }
    ],
    workflow: ["Mở hồ sơ", "Ghi nhận nhu cầu", "Xác thực ngân sách", "Lưu lịch sử chăm sóc"],
    components: ["CustomerProfile", "DemandMatrix", "BudgetPanel", "CareTimeline"]
  },
  {
    slug: "hoat-dong",
    title: "Hoạt động",
    purpose: "Theo dõi cuộc gọi, tin nhắn, lịch hẹn, công việc và nhắc việc.",
    modules: ["Hoạt động liên hệ", "Lịch hẹn", "Công việc", "Nhắc việc"],
    metrics: [
      { label: "Cuộc gọi hôm nay", value: "148", change: "+21" },
      { label: "Lịch hẹn", value: "28", change: "+9" },
      { label: "Việc quá hạn", value: "12", change: "-6" }
    ],
    workflow: ["Ghi log liên hệ", "Đặt lịch hẹn", "Tạo công việc", "Nhận nhắc việc đúng hạn"],
    components: ["ContactActivityLog", "AppointmentCalendar", "TaskBoard", "ReminderCenter"]
  },
  {
    slug: "co-hoi-pipeline",
    title: "Cơ hội & Pipeline",
    purpose: "Quản lý cơ hội bán hàng theo giai đoạn bằng pipeline/kanban.",
    modules: ["Cơ hội bán hàng", "Pipeline", "Kanban", "Dự báo doanh thu"],
    metrics: [
      { label: "Cơ hội mở", value: "74", change: "+11" },
      { label: "Pipeline", value: "360 tỷ", change: "+12%" },
      { label: "Tỷ lệ thắng", value: "22%", change: "+2.4%" }
    ],
    workflow: ["Tạo cơ hội", "Kéo thả kanban", "Cập nhật xác suất", "Dự báo doanh thu"],
    components: ["OpportunityList", "PipelineKanban", "DealForecast", "StageAutomation"]
  },
  {
    slug: "xem-nha-thuong-luong",
    title: "Xem nhà & thương lượng",
    purpose: "Điều phối lịch xem nhà, ghi nhận phản hồi và quản lý thương lượng.",
    modules: ["Lịch xem nhà", "Phản hồi khách", "Thương lượng", "Đề xuất giá"],
    metrics: [
      { label: "Lượt xem nhà", value: "46", change: "+8" },
      { label: "Phản hồi tích cực", value: "61%", change: "+7%" },
      { label: "Đang thương lượng", value: "9", change: "+2" }
    ],
    workflow: ["Đặt lịch xem", "Gửi xác nhận", "Ghi phản hồi", "Mở thương lượng"],
    components: ["ViewingScheduler", "VisitFeedback", "NegotiationRoom", "OfferComparison"]
  },
  {
    slug: "giao-dich",
    title: "Đặt cọc & giao dịch",
    purpose: "Theo dõi đặt cọc, giao dịch, hợp đồng, hoa hồng và trạng thái hồ sơ.",
    modules: ["Đặt cọc", "Giao dịch", "Hợp đồng", "Hoa hồng", "Trạng thái giao dịch"],
    metrics: [
      { label: "Đặt cọc", value: "5", change: "+2" },
      { label: "Hợp đồng xử lý", value: "11", change: "+4" },
      { label: "Hoa hồng dự kiến", value: "2.8 tỷ", change: "+15%" }
    ],
    workflow: ["Ghi nhận đặt cọc", "Tạo giao dịch", "Theo dõi hợp đồng", "Tính hoa hồng"],
    components: ["DepositTracker", "TransactionTable", "ContractChecklist", "CommissionCalculator", "DealStatusTimeline"]
  },
  {
    slug: "bao-cao",
    title: "Báo cáo",
    purpose: "Đo phễu bán hàng, chuyển đổi, doanh số và hiệu suất môi giới.",
    modules: ["Phễu bán hàng", "Tỷ lệ chuyển đổi", "Doanh số", "Hiệu suất môi giới"],
    metrics: [
      { label: "Tỷ lệ chuyển đổi", value: "14.8%", change: "+2.1%" },
      { label: "Doanh số", value: "78 tỷ", change: "+12%" },
      { label: "Hiệu suất môi giới", value: "86/100", change: "+5" }
    ],
    workflow: ["Chọn kỳ báo cáo", "Lọc nhóm/môi giới", "Xem biểu đồ phễu", "Xuất báo cáo"],
    components: ["SalesFunnelChart", "ConversionReport", "RevenueDashboard", "BrokerPerformanceTable"]
  }
];

export const leads: Lead[] = [
  {
    name: "Nguyễn Minh An",
    source: "Facebook Ads",
    need: "Căn hộ 2PN Thảo Điền",
    budget: "5.2 tỷ",
    score: 91,
    owner: "Linh Trần",
    status: "Mới phân công"
  },
  {
    name: "Trần Gia Bảo",
    source: "Website",
    need: "Nhà phố Quận 7",
    budget: "12 tỷ",
    score: 84,
    owner: "Hoàng Nam",
    status: "Đang chăm sóc"
  },
  {
    name: "Lê Phương Mai",
    source: "Zalo OA",
    need: "Đầu tư officetel",
    budget: "3.8 tỷ",
    score: 73,
    owner: "Minh Khang",
    status: "Cần xác minh"
  }
];

export const pipelineColumns = [
  { title: "Lead đủ điều kiện", value: "42", amount: "186 tỷ", items: ["An - căn hộ 2PN", "Bảo - nhà phố", "Mai - officetel"] },
  { title: "Đã hẹn xem", value: "18", amount: "92 tỷ", items: ["Hải - villa", "Tú - shophouse"] },
  { title: "Thương lượng", value: "9", amount: "51 tỷ", items: ["Lan - The River", "Đức - Sala"] },
  { title: "Đặt cọc", value: "5", amount: "31 tỷ", items: ["Vy - Empire City", "Long - Palm Heights"] }
];

export const transactions = [
  { code: "GD-2408-018", customer: "Phạm Quốc Huy", product: "Căn hộ The River", stage: "Soạn hợp đồng", commission: "420 triệu" },
  { code: "GD-2408-017", customer: "Vũ Ngọc Hà", product: "Nhà phố Him Lam", stage: "Chờ công chứng", commission: "610 triệu" },
  { code: "GD-2408-016", customer: "Đặng Tuấn Kiệt", product: "Shophouse Sala", stage: "Đã đặt cọc", commission: "355 triệu" }
];

export const tasks = [
  { time: "09:30", title: "Gọi xác minh lead Facebook Ads" },
  { time: "11:00", title: "Dẫn khách xem căn hộ Thảo Điền" },
  { time: "14:30", title: "Gửi bảng so sánh giá cho khách VIP" },
  { time: "17:00", title: "Kiểm tra hồ sơ đặt cọc GD-2408-018" }
];

export function getCrmPage(slug: string) {
  return crmPages.find((page) => page.slug === slug);
}
