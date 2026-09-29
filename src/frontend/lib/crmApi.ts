import {
  crmPages,
  leads,
  pipelineColumns,
  tasks,
  transactions,
  type CrmPage,
  type Lead
} from "../data/crm";

export type PipelineColumn = {
  title: string;
  value: string;
  amount: string;
  items: string[];
};

export type Transaction = {
  code: string;
  customer: string;
  product: string;
  stage: string;
  commission: string;
};

export type CrmTask = {
  time: string;
  title: string;
};

export type DashboardData = {
  page: CrmPage;
  leads: Lead[];
  pipelineColumns: PipelineColumn[];
  tasks: CrmTask[];
  transactions: Transaction[];
};

export type CrmWorkspace = {
  page: CrmPage;
  kind: string;
  rows?: Array<Record<string, string | number>>;
  columns?: PipelineColumn[];
  sources?: Array<Record<string, string | number>>;
  duplicates?: string[];
  teams?: Array<Record<string, string | number>>;
  timeline?: string[];
  calendar?: string[];
  forecast?: Array<Record<string, string | number>>;
  offers?: Array<Record<string, string | number>>;
  checklist?: string[];
  funnel?: Array<Record<string, string | number>>;
  performance?: Array<Record<string, string | number>>;
  alerts?: string[];
  permissions?: string[];
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5090";

async function getJson<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${apiUrl}${path}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      return fallback;
    }

    return response.json();
  } catch {
    return fallback;
  }
}

export async function getNavigation(): Promise<Array<{ slug: string; title: string }>> {
  return getJson(
    "/api/crm/navigation",
    crmPages.map((page) => ({ slug: page.slug, title: page.title }))
  );
}

export async function getCrmPages(): Promise<CrmPage[]> {
  return getJson("/api/crm/pages", crmPages);
}

export async function getCrmPageFromApi(slug: string): Promise<CrmPage | undefined> {
  const fallback = crmPages.find((page) => page.slug === slug);
  return getJson(`/api/crm/pages/${slug}`, fallback);
}

export async function getDashboard(): Promise<DashboardData> {
  return getJson("/api/crm/dashboard", {
    page: crmPages[0],
    leads,
    pipelineColumns,
    tasks,
    transactions
  });
}

export async function getWorkspace(slug: string): Promise<CrmWorkspace | undefined> {
  const fallbackPage = crmPages.find((page) => page.slug === slug);
  if (!fallbackPage) return undefined;

  return getJson(`/api/crm/workspaces/${slug}`, {
    page: fallbackPage,
    kind: "overview",
    rows: []
  });
}
