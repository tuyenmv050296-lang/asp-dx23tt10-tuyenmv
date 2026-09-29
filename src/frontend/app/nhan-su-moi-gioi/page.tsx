import { notFound } from "next/navigation";
import { ModuleDetailPage } from "../../components/ModuleDetailPage";
import { getWorkspace } from "../../lib/crmApi";

export default async function BrokerStaffPage() {
  const workspace = await getWorkspace("nhan-su-moi-gioi");

  if (!workspace) {
    notFound();
  }

  return <ModuleDetailPage workspace={workspace} />;
}
