import type { Lead } from "../data/crm";

type LeadTableProps = {
  leads: Lead[];
};

export function LeadTable({ leads }: LeadTableProps) {
  return (
    <div className="lead-list">
      {leads.map((lead) => (
        <article className="lead-row" key={lead.name}>
          <div>
            <strong>{lead.name}</strong>
            <span>{lead.need}</span>
          </div>
          <div>
            <small>Nguồn</small>
            <span>{lead.source}</span>
          </div>
          <div>
            <small>Ngân sách</small>
            <span>{lead.budget}</span>
          </div>
          <div>
            <small>Điểm</small>
            <span className="score">{lead.score}</span>
          </div>
          <div>
            <small>Phụ trách</small>
            <span>{lead.owner}</span>
          </div>
          <span className="status">{lead.status}</span>
        </article>
      ))}
    </div>
  );
}
