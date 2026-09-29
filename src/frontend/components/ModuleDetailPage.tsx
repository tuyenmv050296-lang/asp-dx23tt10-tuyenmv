import type { CrmWorkspace } from "../lib/crmApi";
import { CrmShell } from "./CrmShell";
import { KanbanBoard } from "./KanbanBoard";
import { MetricGrid } from "./MetricGrid";
import { PageHeader } from "./PageHeader";
import { SectionBlock } from "./SectionBlock";
import { TransactionTable } from "./TransactionTable";

type Props = { workspace: CrmWorkspace };
type Cell = string | number;

function DataTable({ rows, columns }: { rows: Array<Record<string, Cell>>; columns: Array<{ key: string; label: string }> }) {
  return <div className="data-table" role="table"><div className="data-table-row data-table-head" role="row">{columns.map((column) => <span key={column.key}>{column.label}</span>)}</div>{rows.map((row, index) => <div className="data-table-row" role="row" key={`${String(row[columns[0].key])}-${index}`}>{columns.map((column) => <span key={column.key}>{String(row[column.key] ?? "-")}</span>)}</div>)}</div>;
}

function ListPanel({ items, empty = "Chưa có dữ liệu" }: { items?: string[]; empty?: string }) {
  return <div className="list-panel">{items?.length ? items.map((item) => <div className="list-item" key={item}>{item}</div>) : <div className="empty-state">{empty}</div>}</div>;
}

function WorkspaceContent({ workspace }: Props) {
  const { kind } = workspace;
  const rows = workspace.rows ?? [];

  switch (kind) {
    case "accounts":
      return <><SectionBlock eyebrow="Danh sách tài khoản" title="Người dùng và vai trò" badge={`${rows.length} tài khoản hiển thị`}><DataTable rows={rows} columns={[{ key: "name", label: "Người dùng" }, { key: "email", label: "Email" }, { key: "role", label: "Vai trò" }, { key: "team", label: "Nhóm" }, { key: "status", label: "Trạng thái" }]} /></SectionBlock><div className="detail-grid"><SectionBlock eyebrow="Ma trận quyền" title="Quyền theo module"><div className="permission-grid">{["Lead", "Khách hàng", "Giao dịch", "Báo cáo"].map((permission) => <div key={permission} className="permission-row"><strong>{permission}</strong><span>Quản trị</span><span>Chỉnh sửa</span><span>Xem</span></div>)}</div></SectionBlock><SectionBlock eyebrow="Cảnh báo bảo mật" title="Cần xử lý"><ListPanel items={workspace.alerts} /></SectionBlock></div></>;
    case "brokers":
      return <><SectionBlock eyebrow="Hiệu suất môi giới" title="Danh sách nhân sự và KPI"><DataTable rows={rows} columns={[{ key: "name", label: "Môi giới" }, { key: "team", label: "Nhóm" }, { key: "territory", label: "Khu vực" }, { key: "target", label: "Chỉ tiêu" }, { key: "achieved", label: "Đã đạt" }, { key: "status", label: "Đánh giá" }]} /></SectionBlock><SectionBlock eyebrow="Nhóm kinh doanh" title="Phân bổ doanh số"><div className="summary-cards">{workspace.teams?.map((team) => <article className="summary-card" key={String(team.name)}><strong>{String(team.name)}</strong><span>{String(team.members)} thành viên</span><b>{String(team.revenue)}</b></article>)}</div></SectionBlock></>;
    case "leads":
      return <><SectionBlock eyebrow="Lead inbox" title="Tiếp nhận và phân công Lead" badge="SLA 15 phút"><DataTable rows={rows} columns={[{ key: "name", label: "Khách hàng" }, { key: "source", label: "Nguồn" }, { key: "need", label: "Nhu cầu" }, { key: "budget", label: "Ngân sách" }, { key: "score", label: "Điểm" }, { key: "owner", label: "Phụ trách" }, { key: "status", label: "Trạng thái" }]} /></SectionBlock><div className="detail-grid"><SectionBlock eyebrow="Phân loại nguồn" title="Chất lượng theo nguồn"><DataTable rows={workspace.sources ?? []} columns={[{ key: "name", label: "Nguồn" }, { key: "count", label: "Số Lead" }, { key: "conversion", label: "Chuyển đổi" }]} /></SectionBlock><SectionBlock eyebrow="Chống trùng Lead" title="Hồ sơ cần xác minh"><ListPanel items={workspace.duplicates} /></SectionBlock></div></>;
    case "customers":
      return <><SectionBlock eyebrow="Customer 360" title="Hồ sơ khách hàng đang chăm sóc"><DataTable rows={rows} columns={[{ key: "name", label: "Khách hàng" }, { key: "segment", label: "Phân khúc" }, { key: "need", label: "Nhu cầu" }, { key: "budget", label: "Ngân sách" }, { key: "owner", label: "Phụ trách" }, { key: "lastContact", label: "Liên hệ gần nhất" }]} /></SectionBlock><SectionBlock eyebrow="Lịch sử chăm sóc" title="Hoạt động gần đây"><ListPanel items={workspace.timeline} /></SectionBlock></>;
    case "activities":
      return <><SectionBlock eyebrow="Activity center" title="Lịch liên hệ, lịch hẹn và công việc"><DataTable rows={rows} columns={[{ key: "time", label: "Thời gian" }, { key: "type", label: "Loại" }, { key: "subject", label: "Nội dung" }, { key: "owner", label: "Phụ trách" }, { key: "status", label: "Trạng thái" }]} /></SectionBlock><SectionBlock eyebrow="Lịch tuần" title="Mật độ hoạt động"><div className="calendar-strip">{workspace.calendar?.map((day) => <div key={day}>{day}</div>)}</div></SectionBlock></>;
    case "pipeline":
      return <><SectionBlock eyebrow="Sales pipeline" title="Cơ hội theo giai đoạn" badge="Kéo thả để cập nhật stage"><KanbanBoard columns={workspace.columns ?? []} /></SectionBlock><SectionBlock eyebrow="Dự báo" title="Forecast doanh thu"><div className="summary-cards">{workspace.forecast?.map((item) => <article className="summary-card" key={String(item.label)}><span>{String(item.label)}</span><b>{String(item.value)}</b></article>)}</div></SectionBlock></>;
    case "viewings":
      return <><SectionBlock eyebrow="Lịch xem nhà" title="Lịch hẹn trong ngày"><DataTable rows={rows} columns={[{ key: "time", label: "Giờ" }, { key: "customer", label: "Khách hàng" }, { key: "property", label: "Bất động sản" }, { key: "broker", label: "Môi giới" }, { key: "status", label: "Trạng thái" }]} /></SectionBlock><SectionBlock eyebrow="Phòng thương lượng" title="Đề xuất giá đang mở"><DataTable rows={workspace.offers ?? []} columns={[{ key: "property", label: "Bất động sản" }, { key: "asking", label: "Giá chào" }, { key: "offer", label: "Giá đề xuất" }, { key: "status", label: "Trạng thái" }]} /></SectionBlock></>;
    case "transactions":
      return <><SectionBlock eyebrow="Deal desk" title="Đặt cọc, hợp đồng và hoa hồng"><TransactionTable transactions={rows.map((row) => ({ code: String(row.code), customer: String(row.customer), product: String(row.product), stage: String(row.stage), commission: String(row.commission) }))} /></SectionBlock><SectionBlock eyebrow="Checklist hồ sơ" title="Trạng thái xử lý"><ListPanel items={workspace.checklist} /></SectionBlock></>;
    case "reports":
      return <><SectionBlock eyebrow="Sales funnel" title="Phễu chuyển đổi"><div className="funnel-list">{workspace.funnel?.map((item, index) => <div className="funnel-row" style={{ "--funnel-width": `${Math.max(24, 100 - index * 22)}%` } as React.CSSProperties} key={String(item.label)}><span>{String(item.label)}</span><strong>{String(item.value)}</strong></div>)}</div></SectionBlock><SectionBlock eyebrow="Broker performance" title="Hiệu suất môi giới"><DataTable rows={workspace.performance ?? []} columns={[{ key: "broker", label: "Môi giới" }, { key: "leads", label: "Lead" }, { key: "conversion", label: "Chuyển đổi" }, { key: "revenue", label: "Doanh số" }]} /></SectionBlock></>;
    default:
      return <SectionBlock eyebrow="Module" title="Các chức năng chính"><div className="module-board">{workspace.page.modules.map((module) => <article className="submodule-card" key={module}><h3>{module}</h3><p>Danh sách, bộ lọc, form chi tiết và quyền thao tác theo vai trò.</p></article>)}</div></SectionBlock>;
  }
}

export function ModuleDetailPage({ workspace }: Props) {
  return <CrmShell><PageHeader eyebrow="Phân hệ CRM" title={workspace.page.title} actions={workspace.page.slug === "lead-center" ? ["Tiếp nhận Lead", "Xuất dữ liệu"] : ["Tạo mới", "Xuất dữ liệu"]} /><MetricGrid metrics={workspace.page.metrics} /><section className="detail-summary"><div><p className="eyebrow">Nhiệm vụ trang</p><h2>{workspace.page.purpose}</h2></div></section><WorkspaceContent workspace={workspace} /></CrmShell>;
}
