import { notFound } from "next/navigation";
import { ModuleDetailPage } from "../../components/ModuleDetailPage";
import { getWorkspace } from "../../lib/crmApi";

export default async function AccountPermissionPage() {
  const workspace = await getWorkspace("tai-khoan-phan-quyen");

  if (!workspace) {
    notFound();
  }

  return <ModuleDetailPage workspace={workspace} />;
}
