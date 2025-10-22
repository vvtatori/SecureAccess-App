import Navbar from "../components/layout/Navbar";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <main className="dashboard-main">
        <h1>Welcome to SecureVault</h1>
        <p>Your passwords are protected and encrypted.</p>
      </main>
    </div>
  );
}
