
# Betoneta Tours
## Software Requirements Specification (SRS)

**Document ID:** BET-SRS-001  
**Version:** 1.0  
**Status:** Draft — Pending review  
**Project type:** Web application and QA Automation portfolio project

---

# PART I — ENGLISH

## 1. Purpose

Betoneta Tours is a web application concept designed to present cycling experiences in the Tolima region of Colombia.

The application will introduce the Betoneta brand, display a catalog of cycling routes, and communicate a proposed service for transporting cyclists and their bicycles to a route's starting point and picking them up after they complete the ride.

Betoneta Tours is a concept in development. The website shall not represent the proposed transportation service as operational or available for booking.

The project will also serve as a practical learning environment for requirements engineering, manual testing, application development, and automated testing with Playwright and TypeScript.

## 2. Project Scope

### 2.1 In Scope

Version 1.0 will include:

- A homepage presenting the Betoneta brand and its value proposition.
- Navigation between the homepage content and the route catalog.
- A catalog displaying selected cycling route cards.
- Route names, descriptions, reference distances, and total experience duration.
- Expandable and collapsible route details.
- Clear communication of the concept's development status.
- Explicit handling of unknown or unverified information.
- A responsive interface for desktop and mobile devices.
- Documented requirements and manual test cases.
- Manual test execution records and defect investigation.
- Automated functional tests using Playwright and TypeScript.
- Project documentation suitable for a public GitHub portfolio.

### 2.2 Out of Scope

The following features are excluded from Version 1.0:

- Online reservations or booking management.
- Online payments.
- User registration, login, or personal accounts.
- An administrative dashboard or content management system.
- A production backend or database.
- Real-time route tracking or GPS navigation.
- Operational scheduling or guaranteed transportation availability.
- Claims that the proposed service is commercially operational.
- Claims that route conditions, distances, elevations, or transportation feasibility have been independently verified.

These features may be considered for future versions.

## 3. Intended Users

- **Website visitors:** People interested in discovering cycling routes and learning about the Betoneta concept.
- **Cyclists:** Visitors looking for route information, including distance, elevation gain, and difficulty when known.
- **Portfolio reviewers and recruiters:** People evaluating the project's requirements, testing strategy, implementation, and automation practices.

## 4. Functional Requirements

### FR-001 — Homepage Presentation

The application shall display the Betoneta brand name, the tagline "Más rutas, menos límites," and a clear explanation of the proposed transportation concept.

The homepage shall provide a visible way to access the route catalog.

**Acceptance criteria:**
- The brand name is visible.
- The tagline is displayed correctly.
- The proposed transportation concept is explained.
- A navigation link to the route catalog is available.
- The content does not imply that the proposed service is currently operational.

### FR-002 — Route Catalog and Total Experience Duration

The application shall display a catalog of cycling route cards.

Each route card shall display:
- Route name.
- Short description.
- Reference distance, when available.
- Total estimated experience duration.

Total experience duration shall account for transportation to the route starting point, the cycling activity, and pickup after the ride.

If the total duration has not been established, the interface shall display "To be determined" rather than an invented estimate.

**Acceptance criteria:**
- Each displayed route has a name and description.
- Available reference distances are presented with appropriate units.
- Duration is explicitly identified as an estimate.
- The estimated duration represents the complete experience, not cycling time alone.
- Unknown durations are clearly marked as "To be determined."
- Demonstration routes are not presented as confirmed commercial offerings.

### FR-003 — Route Details

Each route card shall provide a control to reveal additional information about that route.

When available, the additional information shall include:
- Reference distance.
- Positive elevation gain.
- Difficulty level.
- Route description or relevant characteristics.
- Information about the proposed transportation concept.

Unknown or unverified values shall not be presented as confirmed facts.

**Acceptance criteria:**
- The details control reveals the corresponding route information.
- The information belongs to the selected route.
- Unavailable values are omitted or explicitly identified as undetermined.
- The interface does not imply that unverified information is confirmed.

### FR-004 — Expand and Collapse Route Details

The user shall be able to expand and collapse route details using the corresponding control.

**Acceptance criteria:**
- Route details are initially hidden.
- Activating the control reveals the details.
- Activating the control again hides the details.
- The control's visible label or accessible name communicates its current action, where implemented.

### FR-005 — Independent Route Cards

Each route card shall control its own details without accidentally displaying information belonging to another route.

At most one route card shall remain expanded at a time.

**Acceptance criteria:**
- Opening a route displays its own details.
- Opening another route closes the previously expanded route.
- The second route displays its own information.
- Closing the active route hides its details.

### FR-006 — Navigation

The application shall provide navigation between the homepage content and the route catalog.

**Acceptance criteria:**
- The route catalog can be reached using the provided navigation links.
- Navigation targets correspond to the intended page sections.
- The user can return to the homepage content through the available navigation.

### FR-007 — Concept Status and Information Transparency

The application shall clearly identify Betoneta Tours as a concept in development.

The proposed transportation service shall not be represented as operational, guaranteed, or available for booking.

**Acceptance criteria:**
- The development status is communicated clearly.
- Demonstration routes are identified as conceptual or demonstrative content.
- No booking or payment functionality is implied to exist.
- Unknown information is not fabricated to make the catalog appear complete.
- Unverified route and service information is not presented as confirmed.

## 5. Non-Functional Requirements

### NFR-001 — Responsive Interface

The interface shall be usable on desktop and mobile devices.

Route cards, text, and navigation controls shall remain accessible and readable without unintended horizontal overflow at the supported viewport sizes.

### NFR-002 — Usability

Interactive controls shall have clear labels and understandable behavior.

The interface shall provide a consistent way to discover and reveal additional route information.

### NFR-003 — Maintainability

The implementation shall use a consistent structure and naming convention to support future development and test automation.

### NFR-004 — Testability

The application shall expose identifiable, stable UI elements that can be located reliably by Playwright.

Automated tests shall verify observable behavior rather than depend unnecessarily on implementation details.

### NFR-005 — Documentation

The repository shall document the product scope, requirements, manual test cases, automated tests, execution instructions, and relevant testing results.

### NFR-006 — Language

The user interface shall use Spanish as its primary language for Version 1.0.

The project documentation shall be presented in English first and Spanish second for portfolio purposes.

## 6. Initial Route Data

The initial demonstration catalog is expected to include:

| Route | Reference distance | Reference elevation gain |
|---|---|---|
| Cañón del Combeima | 30–36 km | Approximately +1,500 m |
| Las Amarillas | 4.5 km ascent | Approximately +600 m |
| Chucuní–Alvarado | Approximately 68 km | Approximately +678 m |

These figures are preliminary reference data supplied for the project. They have not been independently verified and shall not be treated as authoritative route information.

The total experience duration, including transportation to the starting point, the cycling activity, and pickup after the ride, remains to be determined.

The routes are demonstration content and do not establish that the proposed transportation service is available.

## 7. Testing and Quality Strategy

Testing shall follow a requirements-driven approach.

Each applicable requirement shall be associated with one or more test cases containing:

- Test case identifier.
- Requirement reference.
- Preconditions.
- Test steps.
- Test data, when applicable.
- Expected result.
- Actual result.
- Execution status and evidence, where available.

The initial quality workflow will include:

1. Requirements review.
2. Test case design.
3. Application implementation.
4. Manual test execution.
5. Defect identification and investigation.
6. Automated test development using Playwright and TypeScript.
7. Automated execution and result analysis.
8. Documentation and portfolio review.

Automated test results shall be interpreted as evidence of the specific behavior covered by each test, not as proof that the entire application is defect-free.

## 8. Version 1.0 Completion Criteria

Version 1.0 may be considered ready for portfolio review when:

- The in-scope functionality is implemented.
- Applicable requirements have corresponding test cases.
- Manual tests have been executed and their results documented.
- Selected functional test cases have been automated with Playwright.
- Automated tests have been executed and their results reviewed.
- Known limitations and unverified information are documented.
- The interface has been checked at supported desktop and mobile viewport sizes.
- The repository contains clear setup and execution instructions.
- English and Spanish documentation versions are available.
- The application communicates the concept's development status accurately.

Completion shall be based on documented evidence rather than the appearance of the website alone.

---
