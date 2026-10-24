# Betoneta Tours — Test Cases

**Project:** Betoneta Tours  
**Document ID:** BET-TC-001  
**Version:** 1.0  
**Status:** Draft — Pending review

## 1. Purpose

This document defines the test cases for Betoneta Tours and links each case to the applicable functional or non-functional requirements. Manual execution results and automation tracking are recorded separately.

Git tags such as `v0.1.0` may be used to identify product versions in future test records. No product version is assigned to the historical executions below because the tested version was not recorded.

## 2. Test Cases

### TC-001 — Homepage branding

**Requirement:** FR-001  
**Preconditions:** The application is available.

**Steps:**
1. Open the homepage.
2. Observe the main heading and introductory content.

**Expected result:** The page displays the Betoneta brand, its tagline, and a clear description of the proposed service.

**Manual actual result:** The brand, tagline, and service presentation appeared correctly.  
**Manual status:** Pass  
**Manual evidence:** Manual observation; no screenshot recorded.

**Automation status:** Automated  
**Last automated result:** Not Run  
**Automation reference:** `tests/betoneta.spec.ts`  
**Last tested version:** N/A

---

### TC-002 — Navigate to the route catalog

**Requirement:** FR-001, FR-006  
**Preconditions:** The homepage is open.

**Steps:**
1. Locate the link to the route catalog.
2. Click the link.
3. Observe the page or section displayed.

**Expected result:** The user is taken to the route catalog section.

**Manual actual result:** Clicking “Explorar experiencias” navigated to the route catalog and briefly highlighted its heading. Refreshing while the URL ended in `#rutas` did not trigger the highlight; navigating again repeated the effect.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Automated  
**Last automated result:** Pass (12/12 tests; TC-002 ran in Chromium, Firefox, and WebKit)  
**Automation reference:** `tests/betoneta.spec.ts` (TC-002; Chromium, Firefox, WebKit)  
**Last tested version:** N/A (not recorded)

---

### TC-003 — Display route information

**Requirement:** FR-002  
**Preconditions:** The route catalog is available.

**Steps:**
1. Open the route catalog.
2. Inspect each route card.
3. Check the route name, short description, reference distance, and total experience duration.

**Expected result:** Each route card displays the information required by the specification. Unknown durations are clearly identified as “Por determinar” or an equivalent Spanish label.

**Manual actual result:** The route cards displayed the required route names, short descriptions, reference distances, and total experience durations. Unknown durations were identified as “Por determinar”.  
**Manual status:** Pass  
**Manual evidence:** Manual observation; no screenshot recorded.

**Automation status:** Automated  
**Last automated result:** Pass (3/3 tests; TC-003 ran in Chromium, Firefox, and WebKit)  
**Automation reference:** `tests/betoneta.spec.ts` (TC-003; Chromium, Firefox, WebKit)  
**Last tested version:** N/A (not recorded)

---

### TC-004 — Display route details

**Requirement:** FR-003, FR-004  
**Preconditions:** The route catalog is open and the selected route has a details button.

**Steps:**
1. Locate a route card.
2. Click its details button.
3. Inspect the information displayed.

**Expected result:** The selected route's details become visible and correspond to that route.

**Manual actual result:** The Cañón del Combeima details opened. The other route details remained closed.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Not Planned  
**Last automated result:** Not Run  
**Automation reference:** N/A  
**Last tested version:** N/A

---

### TC-005 — Hide route details

**Requirement:** FR-004  
**Preconditions:** A route's details are visible.

**Steps:**
1. Click the details button again.
2. Observe the route card.

**Expected result:** The details are hidden.

**Manual actual result:** Clicking the open Cañón del Combeima details button again hid its details, leaving all route details closed.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Not Planned  
**Last automated result:** Not Run  
**Automation reference:** N/A  
**Last tested version:** N/A

---

### TC-006 — Keep route details independent

**Requirement:** FR-005  
**Preconditions:** At least two route cards have working details buttons and details sections.

**Steps:**
1. Open the details of Route A.
2. Open the details of Route B.
3. Observe both cards.

**Expected result:** Route B's details are visible and Route A's details are hidden.

**Manual actual result:** Opening Las Amarillas closed Cañón del Combeima. Only Las Amarillas remained open.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Automated  
**Last automated result:** Pass (3/3 tests; TC-006 ran in Chromium, Firefox, and WebKit)  
**Automation reference:** `tests/betoneta.spec.ts` (TC-006; Chromium, Firefox, WebKit)  
**Last tested version:** N/A (not recorded)

---

### TC-007 — Display the correct route details

**Requirement:** FR-003, FR-005  
**Preconditions:** At least two route cards have distinct details.

**Steps:**
1. Open Route A's details and record its identifying information.
2. Close Route A.
3. Open Route B's details.
4. Compare the displayed information with Route B's data.

**Expected result:** Each route displays its own information. No details from another route are displayed by mistake.

**Manual actual result:** Each route displayed its own unique test identifier, and the details buttons continued to work.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Not Planned  
**Last automated result:** Not Run  
**Automation reference:** N/A  
**Last tested version:** N/A

---

### TC-008 — Communicate the project's development status

**Requirement:** FR-007  
**Preconditions:** The homepage and route catalog are available.

**Steps:**
1. Inspect the homepage.
2. Inspect the route catalog and route descriptions.
3. Look for statements about the project's status and demo routes.

**Expected result:** The interface makes it clear that the project is in development and that demo routes are not confirmed operational services or guaranteed bookings.

**Manual actual result:** A visible notice communicates that the project is in development and that demo routes do not represent confirmed operational services or guaranteed bookings.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Not Planned  
**Last automated result:** Not Run  
**Automation reference:** N/A  
**Last tested version:** N/A

---

### TC-009 — Responsive layout

**Requirement:** NFR-001  
**Preconditions:** The application is available.

**Steps:**
1. Open the homepage on a desktop-sized viewport.
2. Inspect the page layout.
3. Repeat using a mobile-sized viewport.
4. Check navigation, route cards, text, and buttons.

**Expected result:** The content remains readable and usable at both viewport sizes. No important content or controls are inaccessible because of the layout.

**Manual actual result:** The desktop layout was readable. The mobile view initially appeared too small because the viewport meta tag was missing. After adding the viewport meta tag, content became readable, vertical scrolling worked as expected, and route detail buttons worked.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Not Planned  
**Last automated result:** Not Run  
**Automation reference:** N/A  
**Last tested version:** N/A

---

### TC-010 — Open external routes in a new tab

**Requirement:** FR-006  
**Preconditions:** The Betoneta Tours homepage is open.

**Steps:**
1. Locate the “Ver rutas” link.
2. Click the link.
3. Observe the browser tabs and the destination URL.

**Expected result:** Wikiloc opens in a new tab, and the original Betoneta Tours tab remains available.

**Manual actual result:** Wikiloc opened in a new tab, and the original Betoneta Tours tab remained available.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Not Planned  
**Last automated result:** Not Run  
**Automation reference:** N/A  
**Last tested version:** N/A

---

### TC-011 — Switch from Route B to Route C

**Requirement:** FR-005  
**Preconditions:** Las Amarillas details are open.

**Steps:**
1. Click the “Ver detalles” button for Chucuní–Alvarado.
2. Observe both route cards.

**Expected result:** Las Amarillas details close, and only Chucuní–Alvarado details remain open.

**Manual actual result:** Las Amarillas details closed, and Chucuní–Alvarado details remained open.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Not Planned  
**Last automated result:** Not Run  
**Automation reference:** N/A  
**Last tested version:** N/A

---

### TC-012 — Highlight the route catalog when navigating to it

**Requirement:** FR-006  
**Preconditions:** The Betoneta Tours homepage is open.

**Steps:**
1. Navigate to the route catalog using “Explorar experiencias”.
2. Observe the catalog heading.
3. Refresh the page while the URL ends in `#rutas`.
4. Return to the homepage and navigate to the catalog again.

**Expected result:** The catalog heading is briefly highlighted when the user navigates using “Explorar experiencias”. Refreshing the page while `#rutas` is present does not trigger the highlight automatically.

**Manual actual result:** The heading was highlighted during navigation. Refreshing did not trigger the highlight, and navigating again repeated the effect.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Not Planned  
**Last automated result:** Not Run  
**Automation reference:** N/A  
**Last tested version:** N/A

---

### TC-013 — Verify route card images load correctly

**Requirement:** FR-002  
**Preconditions:** The route catalog is open.

**Steps:**
1. Inspect the Cañón del Combeima, Las Amarillas, and Chucuní–Alvarado cards.
2. Confirm that each card displays its assigned image.
3. Confirm that all three images load correctly.

**Expected result:** Each route card displays its assigned image, and all three images load without errors.

**Manual actual result:** All three route cards displayed their assigned images, and the images loaded correctly.  
**Manual status:** Pass  
**Manual evidence:** Manual browser observation; no screenshot recorded.

**Automation status:** Not Planned  
**Last automated result:** Not Run  
**Automation reference:** N/A  
**Last tested version:** N/A

---

## 3. Manual Execution Record

| Test Case | Manual Actual Result | Manual Status | Manual Evidence |
| --- | --- | --- | --- |
| TC-001 | The brand, tagline, and service presentation appeared correctly. | Pass | Manual observation; no screenshot recorded. |
| TC-002 | Clicking “Explorar experiencias” navigated to the route catalog and briefly highlighted its heading. Refreshing while the URL ended in `#rutas` did not trigger the highlight; navigating again repeated the effect. | Pass | Manual browser observation; no screenshot recorded. |
| TC-003 | The route cards displayed the required route names, short descriptions, reference distances, and total experience durations. Unknown durations were identified as “Por determinar”. | Pass | Manual observation; no screenshot recorded. |
| TC-004 | The Cañón del Combeima details opened. The other route details remained closed. | Pass | Manual browser observation; no screenshot recorded. |
| TC-005 | Clicking the open Cañón del Combeima details button again hid its details, leaving all route details closed. | Pass | Manual browser observation; no screenshot recorded. |
| TC-006 | Opening Las Amarillas closed Cañón del Combeima. Only Las Amarillas remained open. | Pass | Manual browser observation; no screenshot recorded. |
| TC-007 | Each route displayed its own unique test identifier, and the details buttons continued to work. | Pass | Manual browser observation; no screenshot recorded. |
| TC-008 | A visible notice communicates that the project is in development and that demo routes do not represent confirmed operational services or guaranteed bookings. | Pass | Manual browser observation; no screenshot recorded. |
| TC-009 | The desktop layout was readable. The mobile view initially appeared too small because the viewport meta tag was missing. After adding it, content became readable, vertical scrolling worked as expected, and route detail buttons worked. | Pass | Manual browser observation; no screenshot recorded. |
| TC-010 | Wikiloc opened in a new tab, and the original Betoneta Tours tab remained available. | Pass | Manual browser observation; no screenshot recorded. |
| TC-011 | Las Amarillas details closed, and Chucuní–Alvarado details remained open. | Pass | Manual browser observation; no screenshot recorded. |
| TC-012 | The heading was highlighted during navigation. Refreshing did not trigger the highlight, and navigating again repeated the effect. | Pass | Manual browser observation; no screenshot recorded. |
| TC-013 | All three route cards displayed their assigned images, and the images loaded correctly. | Pass | Manual browser observation; no screenshot recorded. |

## 4. Automation and Version Tracking

- **Manual status** records the outcome of a manual execution: `Not Run`, `Pass`, `Fail`, or `Blocked`.
- **Automation status** records implementation progress: `Not Planned`, `Planned`, `In Progress`, or `Automated`. It does not indicate the outcome of a test run.
- **Last automated result** records the latest verified automated run: `Not Run`, `Pass`, `Fail`, or `Blocked`.
- **Automation reference** identifies the Playwright test file implementing the case, or `N/A` when no implementation is confirmed.
- **Last tested version** identifies the product version used for the latest manual or automated execution. It is `N/A` when that version was not recorded.
- Git tags (for example, `v0.1.0`) can be used to associate future test runs with source revisions. A package version alone is not treated as a confirmed product release.

## 5. Review Notes

- TC-002 has a recorded manual Pass and passed in the latest reported Playwright run (12/12 tests) across Chromium, Firefox, and WebKit. The tested product version was not recorded.
- TC-002 automation verifies navigation to `#rutas` and visibility of the catalog heading in Chromium, Firefox, and WebKit. It does not verify the temporary heading highlight; that behavior and refresh/repeat-navigation behavior remain documented as manual observations in TC-012.
- TC-001 through TC-006 have Playwright implementations in `tests/betoneta.spec.ts`. TC-002, TC-003, TC-004, and TC-006 have recorded passing runs across Chromium, Firefox, and WebKit. No automated result is recorded here for TC-001 or TC-005. TC-007 through TC-013 have no confirmed Playwright implementation or execution coverage.
- TC-003 verifies the name, short description, reference distance, and total experience duration for each of the three route cards, including the “Por determinar” label. It passed in Chromium, Firefox, and WebKit (3/3). Product version was not recorded for this run.
- TC-006 verifies that opening Las Amarillas after Cañón del Combeima closes Combeima and leaves Las Amarillas open. It passed in Chromium, Firefox, and WebKit (3/3). Product version was not recorded for this run.
- Historical manual runs have no recorded product version. The package version is not used as a substitute, and no Git tag or product release was verified for those runs.
- No screenshots were recorded for the manual observations listed above.
