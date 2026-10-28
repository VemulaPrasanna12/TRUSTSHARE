// import { useState } from 'react'

// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
      
      
//     </>
//   )
// }

// export default App


import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState("");
  const [files, setFiles] = useState([]);

  function logout() {
    setUser("");
    setPage("home");
  }

  return (
    <>
      {page !== "dashboard" && (
        <header className="navbar">
          <a className="logo" href="#" onClick={() => setPage("home")}>
            🛡️ Trust<span>Share</span>
          </a>

          <nav>
            <a href="#home" onClick={() => setPage("home")}>Home</a>
            <a href="#features" onClick={() => setPage("home")}>Features</a>
            <a href="#how" onClick={() => setPage("home")}>How It Works</a>
            <a href="#about" onClick={() => setPage("home")}>About</a>
          </nav>

          {user ? (
            <button onClick={() => setPage("dashboard")}>Dashboard</button>
          ) : (
            <div className="nav-buttons">
              <button className="outline" onClick={() => setPage("login")}>
                Sign In
              </button>
              <button onClick={() => setPage("signup")}>Get Started</button>
            </div>
          )}
        </header>
      )}

      {page === "home" && (
        <>
          <section className="hero" id="home">
            <div className="hero-content">
              <span className="tag">🔒 Secure · Private · Reliable</span>

              <h1>
                Secure File Sharing
                <br />
                for a <span>Safer Tomorrow</span>
              </h1>

              <p>
                Upload, store, and share your important files with security,
                encryption, and complete control. Designed for individuals,
                teams, and organizations.
              </p>

              <div className="hero-buttons">
                <button onClick={() => setPage("signup")}>
                  Get Started →
                </button>
                <a className="outline button-link" href="#how">
                  ▶ Watch Demo
                </a>
              </div>

              <div className="points">
                <span>✓ AES-256 Encryption</span>
                <span>✓ Controlled Sharing</span>
                <span>✓ Audit Logs</span>
              </div>
            </div>

            <div className="illustration">
              <div className="cloud">☁️</div>
              <div className="lock">🔒</div>

              <div className="file-card">
                <h3>Your Files <span>＋ Upload</span></h3>
                <p>📕 Project_Report.pdf <small>2.4 MB</small></p>
                <p>🖼️ Design_Assets.png <small>860 KB</small></p>
                <p>📝 Team_Plan.docx <small>1.1 MB</small></p>
                <p>📗 Budget_Sheet.xlsx <small>720 KB</small></p>
              </div>
            </div>
          </section>

          <section className="stats">
            <div><h2>100%</h2><p>Secure Encryption*</p></div>
            <div><h2>10K+</h2><p>Active Users*</p></div>
            <div><h2>1M+</h2><p>Files Shared*</p></div>
            <div><h2>99.9%</h2><p>Reliability*</p></div>
          </section>

          <section className="features section" id="features">
            <span className="tag">WHY TRUSTSHARE</span>
            <h2>Powerful Features for <span>Secure Collaboration</span></h2>
            <p>Manage, protect, and share your files in one place.</p>

            <div className="feature-grid">
              <article>
                <div className="feature-icon">🔒</div>
                <h3>AES-256 Encryption</h3>
                <p>Protect important documents with encryption.</p>
              </article>

              <article>
                <div className="feature-icon">🔗</div>
                <h3>Controlled Sharing</h3>
                <p>Plan file permissions and access restrictions.</p>
              </article>

              <article>
                <div className="feature-icon">📈</div>
                <h3>Activity Monitoring</h3>
                <p>Track file activity and maintain audit records.</p>
              </article>

              <article>
                <div className="feature-icon">👥</div>
                <h3>Role-Based Access</h3>
                <p>Manage team members and their permissions.</p>
              </article>

              <article>
                <div className="feature-icon">🛡️</div>
                <h3>Secure & Reliable</h3>
                <p>Build a reliable file management platform.</p>
              </article>
            </div>
            <small>*Sample design figures, not verified statistics.</small>
          </section>

          <section className="section how" id="how">
            <h2>How TrustShare Works</h2>
            <div className="steps">
              <article><h3>01. Create Account</h3><p>Register your account.</p></article>
              <article><h3>02. Upload Files</h3><p>Select your documents.</p></article>
              <article><h3>03. Manage Files</h3><p>Organize and manage your files.</p></article>
            </div>
          </section>

          <section className="cta" id="about">
            <div>
              <h2>Your files deserve a safer home.</h2>
              <p>Start building your TrustShare workspace today.</p>
            </div>
            <button onClick={() => setPage("signup")}>Get Started →</button>
          </section>

          <footer>
            <h2>🛡️ Trust<span>Share</span></h2>
            <p>Secure file sharing for a safer tomorrow.</p>
          </footer>
        </>
      )}

      {(page === "login" || page === "signup") && (
        <section className="auth-page">
          <div className="auth-banner">
            <h1>🛡️ Trust<span>Share</span></h1>
            <h2>Secure File Sharing for a Safer Tomorrow</h2>
            <p>Upload, organize, and manage your important documents.</p>
          </div>

          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              const name = page === "signup"
                ? e.target.fullname.value
                : email.split("@")[0];

              setUser(name);
              localStorage.setItem("trustshare_demo_user", name);
              setPage("dashboard");
            }}
          >
            <h1>{page === "login" ? "Welcome Back" : "Create Account"}</h1>
            <p>
              {page === "login"
                ? "Sign in to your TrustShare account"
                : "Create your TrustShare account"}
            </p>

            {page === "signup" && (
              <>
                <label>Full Name</label>
                <input name="fullname" placeholder="Your full name" required />
              </>
            )}

            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              minLength="8"
              required
            />

            <button className="submit" type="submit">
              {page === "login" ? "Sign In →" : "Sign Up →"}
            </button>

            <p className="switch">
              {page === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
              <button
                type="button"
                className="text-button"
                onClick={() =>
                  setPage(page === "login" ? "signup" : "login")
                }
              >
                {page === "login" ? "Sign up" : "Sign in"}
              </button>
            </p>

            <button
              type="button"
              className="text-button"
              onClick={() => setPage("home")}
            >
              ← Back to Home
            </button>

            <small>Demo only: connect a backend for real authentication.</small>
          </form>
        </section>
      )}

      {page === "dashboard" && (
        <div className="dashboard">
          <aside className="sidebar">
            <h2>🛡️ Trust<span>Share</span></h2>
            <button className="selected">▦ My Files</button>
            <label className="upload-button">
              ＋ Upload Files
              <input
                type="file"
                multiple
                hidden
                onChange={(e) => {
                  const selected = Array.from(e.target.files || []);
                  setFiles((old) => [
                    ...old,
                    ...selected.map((file) => ({
                      id: `${Date.now()}-${Math.random()}`,
                      name: file.name,
                      size: file.size,
                    })),
                  ]);
                  e.target.value = "";
                }}
              />
            </label>
            <div className="sidebar-bottom">
              <p>{user}</p>
              <button className="outline" onClick={logout}>Sign Out</button>
            </div>
          </aside>

          <main className="dashboard-main">
            <h1>My Files</h1>
            <p>Welcome, {user}. Manage your documents below.</p>

            <div className="dashboard-stats">
              <article><p>Total Files</p><h2>{files.length}</h2></article>
              <article>
                <p>Storage Used</p>
                <h2>
                  {(files.reduce((total, file) => total + file.size, 0) /
                    1024 /
                    1024).toFixed(2)} MB
                </h2>
              </article>
            </div>

            <section className="inventory">
              <h2>File Inventory</h2>

              {files.length === 0 ? (
                <div className="empty">
                  <h2>📂</h2>
                  <h3>No files uploaded yet</h3>
                  <p>Choose Upload Files to select documents.</p>
                </div>
              ) : (
                files.map((file) => (
                  <div className="uploaded-file" key={file.id}>
                    <span>📄 {file.name}</span>
                    <small>{(file.size / 1024).toFixed(1)} KB</small>
                    <button
                      className="delete"
                      onClick={() =>
                        setFiles((old) => old.filter((f) => f.id !== file.id))
                      }
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
              <small>
                Demo only: selected files are not uploaded to a server.
              </small>
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export default App;