# OptionWise Homepage Design Guidance

## 1. Design Goal

Create a professional B2B homepage for **OptionWise**, focused on employee stock option and warrant program management.

The site should feel:

- Professional, trustworthy, and Nordic
- Clear rather than playful
- Modern but not “AI-generated”
- Specific to employee stock options, not generic SaaS
- Useful for companies, employees, and equity advisors

The homepage should immediately answer:

> OptionWise helps companies manage, explain, and follow up employee stock option programs with less administration and better employee understanding.

## 2. Target Audience

### Primary audience

**Companies and HR/finance teams** that manage employee option or warrant programs.

They care about:

- Reducing manual administration
- Keeping program data organized
- Communicating clearly with employees
- Tracking vesting, exercise windows, documents, and value
- Making the program feel professional and transparent

### Secondary audience

**Equity advisors and legal/financial partners** who help companies design and manage option programs.

They care about:

- Supporting more clients efficiently
- Having structured overviews
- Reducing repeated explanations
- Improving client experience

### End users

**Employees** who receive options or warrants.

They care about:

- Understanding what they own
- Seeing potential value
- Knowing vesting status and key dates
- Accessing documents and explanations easily

## 3. Brand Direction

Use the existing OptionWise purple/lavender theme, but apply it in a mature B2B way.

### Visual feeling

Use:

- Soft lavender background surfaces
- Deep navy text
- Clear purple primary actions
- White cards with subtle shadows
- Minimal icons
- Thin dividers and small accent lines instead of icon-heavy cards
- Realistic product UI mockups

Avoid:

- Too many floating icons
- Generic SaaS illustrations
- Excessive gradients
- Fake 3D objects
- Overly playful colors
- Random abstract shapes
- Generic text like “make better decisions” without explaining the product

## 4. Color System

Suggested palette:

```css
:root {
  --ow-bg: #FAFAFF;
  --ow-bg-soft: #F4F1FF;
  --ow-surface: #FFFFFF;
  --ow-surface-muted: #F8F7FC;

  --ow-primary: #5B3FF4;
  --ow-primary-dark: #2D168C;
  --ow-primary-soft: #ECE8FF;

  --ow-text: #101633;
  --ow-text-muted: #5F6680;
  --ow-text-soft: #8B90A5;

  --ow-border: #E5E1F5;
  --ow-border-strong: #D4CBEF;

  --ow-positive: #22A06B;
  --ow-warning: #C47A00;
  --ow-danger: #D92D20;
}
```

### Usage rules

- Use deep navy for main text.
- Use purple mainly for CTA buttons, highlights, tabs, progress indicators, and links.
- Use lavender for section backgrounds and subtle emphasis.
- Use green only for value growth, completion, or positive status.
- Avoid using many different accent colors on the homepage.

## 5. Typography

Use a clean sans-serif font. Good options:

- Inter
- Geist
- Satoshi
- Manrope

### Typography style

Hero headline:

- Large, bold, confident
- Around `56–72px` desktop
- Around `38–44px` mobile
- Tight line height, around `1.05–1.12`

Body text:

- `16–18px`
- Muted navy/gray
- Comfortable line height, around `1.6`

Section labels:

- Small uppercase text
- Letter spacing around `0.08em–0.12em`
- Purple color
- Used sparingly

## 6. Homepage Structure

Recommended homepage sections:

1. Header/navigation
2. Hero section
3. Audience/trust positioning row
4. Problem section
5. Platform section for companies, employees, and advisors
6. Product/value section
7. Security/compliance/support section
8. Final CTA
9. Footer

## 7. Header Design

### Navigation

Use a clean desktop header with:

- Logo on the left
- Navigation in the center
- Login and “Book a demo” on the right

Suggested nav items:

- Product
- For Companies
- For Employees
- For Advisors
- Resources
- About Us

Primary CTA:

- **Book a demo**

Secondary action:

- Log in

### Header style

- White or very subtle translucent background
- No heavy border
- Optional thin bottom border only when scrolling
- Avoid large icons in navigation

## 8. Hero Section

The hero should communicate the business clearly in the first 5 seconds.

### Recommended hero label

> Employee stock options. Made clear.

### Recommended hero headline

> A clearer way to manage employee stock option programs

Alternative:

> Manage employee stock options with clarity

Alternative for a more Swedish-market-focused version:

> Built for clearer option and warrant programs in Sweden

### Recommended hero body

> OptionWise helps companies, advisors, and employees manage option and warrant programs, follow value over time, and reduce administration.

### Hero CTAs

Primary:

> Book a demo

Secondary:

> See employee app

Avoid using “Get started for free” as the primary CTA because OptionWise is mainly B2B and the employee app is an added value, not the main revenue product.

### Hero trust/support points

Use three small text points under the CTAs, separated by vertical lines:

- Built for Swedish companies
- Secure and compliant by design
- Loved by companies and employees

Do not use icons here. Simple text is more professional.

## 9. Hero Product Mockup

The hero should include a realistic dashboard screenshot, not a generic analytics screen.

### Dashboard sidebar items

Use product-specific labels:

- Overview
- Programs
- Employees
- Vesting & Value
- Documents
- Reports
- Settings

### Dashboard cards

Use real OptionWise-style data, for example:

- Active programs: `3`
- Eligible employees: `152`
- Total potential value: `28,450,000 kr`
- Average vesting: `76%`

### Dashboard sections

Include:

- Vesting overview by program
- Recent activity
- Upcoming exercise window
- Program status
- Document/signing status

### Example dashboard content

**Vesting overview**

- Option Plan 2021 — 75%
- Option Plan 2022 — 60%
- Warrant Plan 2023 — 45%

**Recent activity**

- 5 employees exercised options
- 12 new employees became eligible
- Vesting updated for Option Plan 2021
- Quarterly report generated

**Upcoming exercise window**

- Option Plan 2021
- Jun 1 – Aug 31
- 45 employees

## 10. Trust / Positioning Row

Avoid showing real company logos unless they are actual customers or partners.

Instead of fake customer logos, use a positioning statement:

> Built for Swedish growth companies, listed companies, and equity advisors

If using logo-style placeholders in a design mockup, make sure the real implementation does not imply those companies are customers unless that is true.

Alternative trust row content:

- Swedish market focus
- Advisor-friendly workflows
- Employee-first communication
- Secure document handling

## 11. Problem Section

This section should explain the pain clearly.

### Section label

> The challenge

### Headline

> Option programs are valuable. But often hard to manage.

### Body

> Scattered data, manual work, and unclear communication make it difficult for companies and employees to stay updated and make informed decisions.

### Four problem blocks

Use text-only blocks or very subtle line accents, not icon cards.

#### Manual and time-consuming

Spreadsheets and emails create extra work and increase the risk of errors.

#### Unclear for employees

Employees struggle to understand their options, vesting, and potential value.

#### Hard to get a full overview

Important information is scattered across systems, documents, and advisors.

#### Difficult to communicate

Explaining programs, changes, and value takes time and often lacks consistency.

## 12. Platform Section

### Section label

> The OptionWise platform

### Headline

> Everything you need in one platform

Use three product cards for the three main audiences.

### Card 1: For companies

Headline:

> For companies

Body:

> Manage programs, employees, vesting, documents, and reports in one secure place.

CTA:

> Explore for companies

Visual:

- Admin dashboard table
- Program list
- Employee overview
- Status labels

### Card 2: For employees

Headline:

> For employees

Body:

> A simple mobile app that shows value, vesting, key dates, and important documents.

CTA:

> See the employee app

Visual:

- Mobile app mockup
- Option value card
- Vesting progress
- Key dates

### Card 3: For advisors

Headline:

> For advisors

Body:

> Support your clients more efficiently with clear overviews and professional reporting.

CTA:

> Explore for advisors

Visual:

- Advisor dashboard
- Client overview
- Reports/chart preview

## 13. Product Screenshots

The homepage should rely on product UI screenshots rather than generic illustrations.

### Recommended screenshot types

- Admin dashboard overview
- Program detail page
- Employee mobile app value screen
- Vesting and potential value visualization
- Document/signing status
- Advisor/client overview

### Screenshot style

- Clean white cards
- Rounded corners around `20–28px`
- Thin lavender borders
- Soft shadow
- Purple progress bars
- Green only for positive value/status indicators

## 14. CTA Section

Use a strong but simple final CTA near the bottom.

### Background

Use a deep purple/navy gradient block, but keep it subtle and professional.

### CTA headline

> Ready to simplify your option program management?

### CTA body

> Book a demo and see how OptionWise can help your company, employees, and advisors.

### Primary CTA

> Book a demo

### Secondary contact

> or email us at info@tangcai.se

Avoid too many buttons. One strong CTA is enough.

## 15. Footer

Footer columns:

### Product

- Overview
- For Companies
- For Employees
- For Advisors
- Security

### Resources

- Blog
- Help Center
- Guides
- Templates

### Company

- About Us
- Careers
- Contact

### Legal

- Privacy Policy
- Terms of Service

### Social

- LinkedIn

Avoid unnecessary social links if they are not actively used.

## 16. Icon Usage Rules

The design should avoid looking icon-heavy.

### Use icons only for:

- Logo
- Product UI sidebar if necessary
- Small functional UI elements inside screenshots

### Avoid icons for:

- Every feature card
- Trust points
- Problem blocks
- CTA sections
- Navigation

### Better alternatives to icons

Use:

- Small purple line accents
- Numbered steps
- Thin dividers
- Product screenshots
- Typography hierarchy
- Status pills
- Progress bars

## 17. Layout Guidelines

### Desktop

- Max content width: `1180–1280px`
- Hero: two-column layout
- Left: copy and CTA
- Right: product dashboard mockup
- Use generous vertical spacing, around `96–140px` between major sections

### Tablet

- Keep hero two-column if space allows
- Reduce headline size
- Dashboard mockup can become slightly smaller

### Mobile

- Single-column layout
- Hero copy first, dashboard second
- CTA buttons stacked or full width
- Product cards stacked
- Keep screenshots cropped carefully so they remain readable

## 18. Component Style Rules

### Buttons

Primary button:

```css
background: var(--ow-primary);
color: white;
border-radius: 12px;
padding: 14px 22px;
font-weight: 600;
```

Secondary button:

```css
background: white;
color: var(--ow-primary);
border: 1px solid var(--ow-border-strong);
border-radius: 12px;
padding: 14px 22px;
font-weight: 600;
```

### Cards

```css
background: white;
border: 1px solid var(--ow-border);
border-radius: 24px;
box-shadow: 0 24px 60px rgba(37, 28, 89, 0.08);
```

### Status pills

Use small rounded labels for states such as:

- Active
- Upcoming
- Exercised
- Signed
- Pending
- Vested

## 19. Copy Tone

The copy should be:

- Clear
- Specific
- Confident
- Not too salesy
- Not too technical
- Focused on reducing administration and increasing clarity

Avoid generic phrases like:

- Smarter decisions, better outcomes
- Unlock your potential
- Next-generation platform
- Transform your workflow
- AI-powered everything

Prefer specific phrases like:

- Manage employee stock option programs
- Track vesting and potential value
- Keep employees informed
- Reduce manual administration
- Support option and warrant programs
- Built for Swedish companies and advisors

## 20. Suggested Final Homepage Copy

### Hero

**Label**

Employee stock options. Made clear.

**Headline**

A clearer way to manage employee stock option programs

**Body**

OptionWise helps companies, advisors, and employees manage option and warrant programs, follow value over time, and reduce administration.

**CTA**

Book a demo

**Secondary CTA**

See employee app

### Problem section

**Label**

The challenge

**Headline**

Option programs are valuable. But often hard to manage.

**Body**

Scattered data, manual work, and unclear communication make it difficult for companies and employees to stay updated and make informed decisions.

### Platform section

**Label**

The OptionWise platform

**Headline**

Everything you need in one platform

### Final CTA

**Headline**

Ready to simplify your option program management?

**Body**

Book a demo and see how OptionWise can help your company, employees, and advisors.

## 21. Cursor Implementation Prompt

Use this prompt in Cursor to create or update the homepage:

```text
Create a professional B2B SaaS homepage for OptionWise using the existing OptionWise purple/lavender theme.

OptionWise helps companies manage employee stock option and warrant programs. The site should look mature, Nordic, trustworthy, and specific to option program management. Avoid generic SaaS messaging and avoid excessive icons.

Homepage structure:
1. Header with logo, nav items Product, For Companies, For Employees, For Advisors, Resources, About Us, Login, and primary CTA “Book a demo”.
2. Hero section with label “Employee stock options. Made clear.”, headline “A clearer way to manage employee stock option programs”, supporting text, primary CTA “Book a demo”, secondary CTA “See employee app”, and three text-only trust points.
3. Hero dashboard mockup showing product-specific metrics: Active programs, Eligible employees, Total potential value, Average vesting, Vesting overview, Recent activity, Upcoming exercise window.
4. Positioning row saying “Built for Swedish growth companies, listed companies and equity advisors”. Do not use fake customer logos in real implementation.
5. Problem section with headline “Option programs are valuable. But often hard to manage.” and four text blocks: Manual and time-consuming, Unclear for employees, Hard to get a full overview, Difficult to communicate.
6. Platform section with three cards: For companies, For employees, For advisors. Each card should include a realistic product UI preview, short body text, and a text CTA.
7. Final CTA section with deep purple/navy background: “Ready to simplify your option program management?” and primary CTA “Book a demo”.
8. Footer with Product, Resources, Company, Legal, and LinkedIn links.

Design rules:
- Use deep navy text, white surfaces, lavender backgrounds, and OptionWise purple as the primary accent.
- Use very few icons. Prefer typography, thin dividers, progress bars, status pills, and product screenshots.
- Use rounded cards, subtle shadows, and clean spacing.
- Make it fully responsive for desktop, tablet, and mobile.
- Keep the design professional and avoid anything that looks like generic AI-generated SaaS art.
```

## 22. Quality Checklist

Before shipping the homepage, check:

- Does the hero clearly say what OptionWise does?
- Does the dashboard show real option/warrant concepts?
- Are fake customer logos removed or replaced?
- Is the primary CTA “Book a demo”?
- Are there fewer icons than a typical SaaS template?
- Does the copy mention companies, employees, advisors, options, warrants, value, vesting, and administration?
- Does the page feel trustworthy enough for HR, finance, and advisors?
- Does the mobile layout still make the product understandable?
- Does it look like a real product, not a generic AI-generated landing page?
