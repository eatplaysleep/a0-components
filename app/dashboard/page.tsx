import DashboardPage from "@/components/dashboard";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Dashboard() {
    return <DashboardPage />;
  },
  { returnTo: "/dashboard" }
);
