import { CrmShell } from "../components/CrmShell";
import { KanbanBoard } from "../components/KanbanBoard";
import { LeadTable } from "../components/LeadTable";
import { MetricGrid } from "../components/MetricGrid";
import { PageHeader } from "../components/PageHeader";
import { PageMap } from "../components/PageMap";
import { SectionBlock } from "../components/SectionBlock";
import { TaskPanel } from "../components/TaskPanel";
import { TransactionTable } from "../components/TransactionTable";
import { getCrmPages, getDashboard } from "../lib/crmApi";

export default async function Home() {
  const [pages, dashboard] = await Promise.all([getCrmPages(), getDashboard()]);

  return (
    <CrmShell>
      <PageHeader
        eyebrow="Kế hoạch frontend"
        title="CRM môi giới và giao dịch bất động sản"
        actions={["Tạo Lead", "Lên lịch hẹn"]}
      />

      <MetricGrid metrics={dashboard.page.metrics} />

      <SectionBlock eyebrow="Danh sách trang cần xây dựng" title="Sơ đồ trang và module" badge="10 trang lõi · 30+ module">
        <PageMap pages={pages} />
      </SectionBlock>

      <section className="split-layout" aria-label="Quản lý lead và hoạt động">
        <SectionBlock eyebrow="Lead Center" title="Tiếp nhận, lọc trùng, chấm điểm, phân công" badge="SLA 15 phút">
          <LeadTable leads={dashboard.leads} />
        </SectionBlock>
        <TaskPanel tasks={dashboard.tasks} />
      </section>

      <SectionBlock eyebrow="Cơ hội bán hàng" title="Pipeline / Kanban" badge="Giá trị pipeline 360 tỷ">
        <KanbanBoard columns={dashboard.pipelineColumns} />
      </SectionBlock>

      <SectionBlock eyebrow="Đặt cọc & giao dịch" title="Theo dõi hợp đồng, hoa hồng, trạng thái" badge="3 hồ sơ cần xử lý">
        <TransactionTable transactions={dashboard.transactions} />
      </SectionBlock>
    </CrmShell>
  );
}
