import { notFound } from "next/navigation";
import { ModuleDetailPage } from "../../components/ModuleDetailPage";
import { getWorkspace } from "../../lib/crmApi";

export default async function ViewingNegotiationPage() {
  const workspace = await getWorkspace("xem-nha-thuong-luong");

  if (!workspace) {
    notFound();
  }

  return <ModuleDetailPage workspace={workspace} />;
}
