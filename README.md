# Storefront

[**Live Demo**](https://lorem-ipsum-storefront.netlify.app/)

_Note: Designed desktop-first. Best viewed on desktop screens._

The main goal of this project was to practice React architecture, client-side routing, and testing with **Vitest** and **React Testing Library**. I also took the opportunity to try out **styled-components**, which gave me the chance to get a feel for how CSS-in-JS compares to more traditional CSS approaches.

The testing strategy includes unit-tests for interactive components, isolated page tests with mocked router contexts and API spies, and some integration tests for key cross-component flows without mocking state. Coverage isn't 100%—since it's a personal project, I stopped once I felt comfortable with the tools and knew the core cart flows worked.

## Tech Stack

- **Framework:** React + Vite
- **Routing:** React Router (nested layout routes & outlet context)
- **Styling:** styled-components
- **Testing:** Vitest, React Testing Library, `@testing-library/user-event`
- **Data:** FakeStore API
