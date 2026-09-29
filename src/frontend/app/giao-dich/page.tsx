import { notFound } from "next/navigation";
import { ModuleDetailPage } from "../../components/ModuleDetailPage";
import { getWorkspace } from "../../lib/crmApi";

export default async function TransactionPage() {
  const workspace = await getWorkspace("giao-dich");

  if (!workspace) {
    notFound();
  }

  return <ModuleDetailPage workspace={workspace} />;
}
