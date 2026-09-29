import Link from "next/link";
import type { CrmPage } from "../data/crm";

type PageMapProps = {
  pages: CrmPage[];
};

export function PageMap({ pages }: PageMapProps) {
  return (
    <div className="page-map">
      {pages.map((page, index) => (
        <article className="page-card" key={page.title}>
          <div className="page-card-head">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{page.title}</h3>
          </div>
          <p>{page.purpose}</p>
          <div className="module-tags">
            {page.modules.map((module) => (
              <span key={module}>{module}</span>
            ))}
          </div>
          <Link className="card-link" href={page.slug ? `/${page.slug}` : "/"}>
            Mở trang
          </Link>
        </article>
      ))}
    </div>
  );
}
