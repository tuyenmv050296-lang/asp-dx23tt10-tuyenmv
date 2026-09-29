import { notFound } from "next/navigation";
import { ModuleDetailPage } from "../../components/ModuleDetailPage";
import { getWorkspace } from "../../lib/crmApi";

export default async function CustomerPage() {
  const workspace = await getWorkspace("khach-hang");

  if (!workspace) {
    notFound();
  }

  return <ModuleDetailPage workspace={workspace} />;
}
