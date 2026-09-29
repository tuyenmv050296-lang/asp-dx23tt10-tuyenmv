import Link from "next/link";
import { getNavigation } from "../lib/crmApi";

type CrmShellProps = {
  children: React.ReactNode;
};

export async function CrmShell({ children }: CrmShellProps) {
  const navigation = await getNavigation();

  return (
    <main className="crm-shell">
      <aside className="sidebar" aria-label="Điều hướng CRM">
        <Link className="brand" href="/">
          <span className="brand-mark">CRM</span>
          <div>
            <strong>RealtyFlow</strong>
            <small>Môi giới & giao dịch BĐS</small>
          </div>
        </Link>
        <nav className="nav-list">
          {navigation.map((page, index) => (
            <Link href={page.slug ? `/${page.slug}` : "/"} key={page.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {page.title}
            </Link>
          ))}
        </nav>
      </aside>

      <section className="workspace">{children}</section>
    </main>
  );
}
