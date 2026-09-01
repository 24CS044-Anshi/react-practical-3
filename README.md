# Practical 3: API Integration and Data Rendering in React

## 🎯 Objective
To consume a public REST API in a React application and properly manage asynchronous data flows with explicit loading, success, and error UI states.

## 🛠️ Tech Stack & Key Concepts
*   **Library:** React 18+ (Scaffolded using Vite)
*   **Asynchronous Engine:** JavaScript Promises, `async/await`, and the Fetch API
*   **State Hooks:** `useState` (managing data arrays, load status, and errors)
*   **Lifecycle Hooks:** `useEffect` (triggering network requests exactly once on component mount)

---

## 🏗️ Architecture & Component Diagram

```text
Projects.jsx (Main View Container)
  ├── useEffect() ──► Triggers async fetch on component mount
  ├── useState: data, loading, error, searchTerm
  │
  ├── [State: loading === true]  ──► Renders <Spinner />
  ├── [State: error !== null]   ──► Renders <ErrorMessage message={error} onRetry={fetchRepositories} />
  └── [State: success === true]  ──► Renders Search Filter Input + <RepoList repos={filteredRepos} />
```

---

## 💻 Feature Implementation

### Core Requirements Covered:
*   **GitHub API Integration:** Connects dynamically to the GitHub API endpoints to pull public repositories.
*   **Loading Spinner:** A modular `<Spinner />` component with custom CSS rotation animations handles visual feedback during pending network cycles.
*   **Error Boundaries:** An `<ErrorMessage />` card gracefully intercepts non-200 responses or broken network pipelines.
*   **Dynamic Repository Rendering:** Outputs explicit elements containing repository titles, URLs, and target links.

### Supplementary Problems Solved:
1.  **🔄 Asynchronous Retry Trigger:** Implemented a contextual retry button directly inside the `<ErrorMessage />` component to safely re-execute data calls if initial pipelines drop.
2.  **🔍 Client-Side Fuzzy Search Input:** Added a real-time tracking controller input that isolates data lists on-the-fly without slamming the external server with unnecessary network loads.
3.  **⭐ Dynamic Metric Badges:** Integrated data maps to pull down live `stargazers_count` values, compiling numbers inside highly scannable status tags.

---

## 🧬 Lab Analysis & Structural Questions

### 1. Why is `useEffect` required to trigger a fetch on component mount instead of calling fetch directly in the component body?
Calling an asynchronous method natively inside the primary component body causes it to run on every single render pass. Because updating state variables (`setRepos`, `setLoading`) automatically forces a template re-render, executing the fetch open-endedly creates an infinite execution loop. This quickly triggers remote security blocks and locks up client-side memory. Passing an empty dependency array `[]` into `useEffect` signals React to execute the data payload precisely once when the component initially mounts.

### 2. What is the difference between a loading state and an error state, and why must both be handled separately?
*   **Loading State:** A temporary, fluid condition where the asynchronous promise is unresolved (pending). The client framework is awaiting server responses.
*   **Error State:** A definitive fallback stage identifying that a request has explicitly broken or failed (e.g., 404 profiles, connection interruptions).
They require isolated handling because they map to different visual outcomes. Displaying an application crash card when data is simply resolving ruins engagement, while showing an infinite spinner during backend outages locks up the application canvas without giving the user clarity.

### 3. How would the user experience change if loading and error states were not implemented?
The interface layout would stay entirely blank, broken, or locked without giving any system feedback to the user during latency intervals. If a pipeline breaks or returns an empty network value, the app could crash instantly by running mapping routines across missing data matrices.

---

## 🚀 Execution & Local Verification Steps

### 1. Setup Dependencies
```bash
npm install
```

### 2. Launch Local Environment
```bash
npm run dev
```

### 3. Simulate and Test Pipelines
*   **Happy Path (Success Case):** The page will render the spinning ring graphic before parsing clean, active project card arrays coupled with functional keyword searching and star totals.
*   **Failure Path (Error Interception):** Break the target network string inside `Projects.jsx` to test the recovery screen. The interface will terminate the loading spin, mount the fallback block, and provide an action trigger to re-evaluate data calls.
