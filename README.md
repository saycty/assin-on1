# frontend_dev_assignment

Development and docker details.

See `README_DOCKER.md` for Docker commands.

# WorkerHub - Professional Workers Platform

A modern, responsive web application built with Next.js 15, TypeScript, and Tailwind CSS for connecting clients with professional workers.

## 🚀 Features

### ✨ Core Features

- **Professional Worker Directory** - Browse through verified skilled workers
- **Advanced Search & Filtering** - Search by name, service, or filter by categories
- **Dynamic Sorting** - Sort by name, price (low to high/high to low), or service type
- **Responsive Design** - Optimized for all device sizes (mobile, tablet, desktop)
- **Professional UI/UX** - Modern, clean interface with smooth animations

### 🎨 Design & Animations

- **GSAP Animations** - Smooth loading animations and interactive hover effects
- **Loading Screen** - Professional loading experience with animated brand introduction
- **Micro-interactions** - Enhanced user experience with subtle animations
- **Accessibility First** - ARIA labels, keyboard navigation, focus management
- **Performance Optimized** - Lazy loading, image optimization, and efficient rendering

### 🛠 Technical Features

- **Component-Driven Architecture** - Reusable, maintainable React components
- **Custom Hooks** - Separation of concerns with custom data management hooks
- **TypeScript** - Full type safety and developer experience
- **Modern CSS** - Tailwind CSS with custom configurations and utilities
- **Testing Ready** - Jest and React Testing Library setup
- **SEO Optimized** - Proper meta tags, semantic HTML, and performance best practices

## 🏗 Architecture

### Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Main workers page
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI components
│   │   ├── Container.tsx # Layout wrapper component
│   │   └── LoadingSpinner.tsx # Loading indicator
│   ├── WorkerCard.tsx    # Individual worker card component
│   ├── PageHeader.tsx    # Page header with title and subtitle
│   ├── WorkersGrid.tsx   # Responsive grid layout
│   ├── LoadingScreen.tsx # GSAP animated loading screen
│   ├── SearchFilter.tsx  # Search and filter functionality
│   └── index.ts          # Barrel exports for clean imports
├── hooks/                # Custom React hooks
│   ├── useWorkers.ts     # Worker data management with search/filter
│   └── useGSAPAnimations.ts # GSAP animation management
├── types/                # TypeScript type definitions
│   └── workers.ts        # Worker data types
└── __tests__/            # Jest tests
    └── WorkerCard.test.tsx # Component tests
```

### Component Architecture

- **Container Pattern** - Wrapper components for consistent layouts
- **Compound Components** - Related components that work together
- **Custom Hooks** - Business logic separated from UI components
- **Props Interface** - Strong typing for all component props
- **Forward Refs** - Proper ref forwarding for animations

## 🎯 Key Improvements Implemented

### 1. UI Polish & Responsiveness

- ✅ Modern gradient backgrounds and professional color scheme
- ✅ Responsive grid system (1-4 columns based on screen size)
- ✅ Improved typography with proper hierarchy
- ✅ Enhanced card design with hover effects
- ✅ Professional loading and error states
- ✅ Sticky search/filter bar for better UX

### 2. Advanced Tailwind Usage

- ✅ Custom Tailwind configuration with brand colors
- ✅ Custom animations and keyframes
- ✅ Responsive utilities and breakpoints
- ✅ Component-specific utility combinations
- ✅ Performance-optimized CSS classes

### 3. Accessibility Features

- ✅ Semantic HTML elements (`article`, `header`, `section`, `main`)
- ✅ ARIA labels and descriptions
- ✅ Keyboard navigation support
- ✅ Focus management and visible focus indicators
- ✅ Screen reader friendly content structure
- ✅ Color contrast compliance

### 4. Performance Optimizations

- ✅ Next.js Image component with optimization
- ✅ Lazy loading and priority loading for above-fold content
- ✅ Efficient re-rendering with React.memo patterns
- ✅ Optimized bundle size with tree shaking
- ✅ Modern image formats (WebP, AVIF) support

### 5. Interactive Features

- ✅ Real-time search functionality
- ✅ Service category filtering
- ✅ Multiple sorting options
- ✅ Clear filters functionality
- ✅ Results counter and status messages
- ✅ Contact worker functionality (placeholder)

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **GSAP** - Professional animations and interactions
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd frontend_dev_assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run Jest tests
```

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage
```

### Test Coverage

- Component rendering tests
- User interaction tests
- Accessibility compliance tests
- Data transformation tests

## 🎨 Design Decisions

### Color Palette

- **Primary**: Blue gradient (Professional, trustworthy)
- **Secondary**: Indigo (Modern, sophisticated)
- **Neutral**: Gray scale (Accessible, readable)
- **Success**: Green (Positive actions)
- **Error**: Red (Error states)

### Typography

- **Headers**: Bold, large sizes with proper hierarchy
- **Body**: Readable font sizes with good line height
- **Labels**: Uppercase, tracked for emphasis
- **Interactive**: Medium weight for buttons and links

### Layout Philosophy

- **Mobile First**: Designed for mobile, enhanced for desktop
- **Progressive Enhancement**: Core functionality works everywhere
- **Consistent Spacing**: 4px grid system throughout
- **Visual Hierarchy**: Clear information hierarchy

## 🔧 Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.js`:

- Brand colors and extended palette
- Custom animations and keyframes
- Responsive breakpoints
- Typography scale

### Next.js

Configuration in `next.config.ts`:

- Image optimization settings
- External domain allowlist
- Performance optimizations
- Build optimizations

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Accessibility**: Screen readers, keyboard navigation
- **Performance**: Optimized for 3G networks and low-end devices

## 🚀 Deployment

### Recommended Platforms

- **Vercel** (Optimal for Next.js)
- **Netlify** (Static deployment)
- **GitHub Pages** (Static export)

### Build Commands

```bash
# For static export (GitHub Pages)
npm run build && npm run export

# For server-side deployment (Vercel/Netlify)
npm run build
```

### Docker (local)

Build and run the image locally (the repo includes a multi-stage Dockerfile):

```bash
# build the image
docker build -t frontend_dev_assignment:local .

# run the container and map port 3000
docker run --rm -p 3000:3000 --name frontend_local frontend_dev_assignment:local
```

Notes:

- The Dockerfile sets `NEXT_IMAGE_UNOPTIMIZED=1` and installs CA certs in the runtime image so remote HTTPS images can be fetched from inside the container.
- The deps stage uses `npm install --legacy-peer-deps` to avoid peer-dependency resolution errors seen with some testing/dev tools and React 19.

### Release publishing (GHCR)

This repo includes a GitHub Actions workflow to build and publish the container image on release. Key points:

- The workflow logs into GitHub Container Registry (GHCR) using the built-in `GITHUB_TOKEN` and pushes the image; no extra secrets are required when publishing from the same repository.
- Make sure the workflow has `packages: write` permission (the workflow file already sets this).
- To publish: create a GitHub Release (UI or `gh release create`) — the `release-publish.yml` workflow triggers on published releases and pushes the image tagged with the release tag and `latest`.

If you need to publish to a different repository or organization, you'll need a PAT with appropriate scopes instead of `GITHUB_TOKEN`.

### Image optimizer & container notes

- In containerized runs you may observe `/_next/image` requests returning `400 "url" parameter is not allowed` if the image optimizer is enabled but the runtime environment constrains requests. To work around this the Dockerfile and runtime environment set `NEXT_IMAGE_UNOPTIMIZED=1` which disables Next's built-in optimizer and causes `next/image` to render the original remote URLs instead of proxying through the Next server.
- To re-enable the optimizer inside your environment:
  1.  Remove `NEXT_IMAGE_UNOPTIMIZED` from the runtime environment (or set it to an empty value).
  2.  Ensure `next.config.ts` has `remotePatterns` that allow the remote hosts you need (for example `randomuser.me`, `images.unsplash.com`).
  3.  Ensure the runtime environment can fetch remote TLS resources (CA certs installed, outbound network access).

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## 📄 Assignment Completion

This project was completed as part of a frontend developer assignment with the following requirements:

### ✅ Completed Features:

- **Component-driven structure** with reusable components
- **Advanced Tailwind CSS** usage with custom configuration
- **GSAP animations** for enhanced user experience
- **Responsive design** optimized for all devices
- **Accessibility improvements** with ARIA labels and semantic HTML
- **Performance optimizations** with Next.js best practices
- **Testing setup** with Jest and React Testing Library
- **Professional UI polish** with modern design principles

### 🎯 Technical Highlights:

- Modern React patterns with hooks and context
- TypeScript for type safety and better DX
- Custom animations with GSAP and ScrollTrigger
- Advanced search and filtering functionality
- Optimized image loading and performance
- Comprehensive error handling and loading states

---

**Built with ❤️ using modern web technologies for SolveEase**

## Tasks

### 1. Fix Cards Layout & Responsiveness

- Correct the existing card grid layout.
- Improve the overall card design (UI/UX sensibility expected).
- Ensure the page is fully responsive across devices (desktop, tablet, mobile).

### 2. Add Navbar (Sticky)

- Implement a navigation bar that remains fixed at the top while scrolling.
- Design should be clean and responsive.

### 3. Optimize Page Load & Performance

- Implement optimizations such as:
  - **Lazy loading** for images and non-critical components.
  - **Memoization** to avoid unnecessary re-renders.
  - **Skeleton loading screens** for better UX during data fetch.

### 4. Implement Pagination

- Add pagination for the workers listing page.
- Each page should load a suitable number of items (e.g., 9–12 cards per page).

### 5. Service Filters

- Implement filters for workers based on **price/day** and **type of service**.
- Filters should work seamlessly with pagination.

### 6. Bug Fixes

- Identify and fix any existing issues in `page.tsx` or configuration files.
- Resolve console warnings or errors.
- Ensure clean and maintainable code following best practices.

### 7. API Integration

- Currently, the workers’ data is being imported directly from `workers.json`.
- Your task is to **serve this data via /api/wprkers API route**.
- Update the frontend page to fetch this data using `fetch` (or any modern method such as `useEffect`, `useSWR`, or React Query).
- Donot delete the existing data loading logic, comment it out.
- Implement:
  - **Loading state** (use skeleton screens).
  - **Error handling** (show a friendly error message if API fails).
  - **Basic caching or memoization** to prevent redundant calls.

---

## Expectations

- Use **TypeScript** and **Tailwind CSS** consistently.
- Follow **component-driven development** principles.
- Write **clean, readable, and reusable code**.
- Optimize for **performance and accessibility**.
- Maintain **Git commit history** (no single "final commit").

---

## Deliverables

1. Fork the assignment repo, make changes there.
2. Fill in the Goggle Form with your details for submission.

---

## Evaluation Criteria

- Code quality, readability, and structure.
- UI/UX improvements and responsiveness.
- Correctness of functionality (filters, pagination, sticky navbar, optimizations).
- Debugging and problem-solving approach.
- Git usage and commit practices.
- Handling of API calls, loading states, and error cases.

---

## Notes

- You are free to use libraries like **SWR** or **React Query**, but keep the implementation clean.
- Focus on **real-world production quality code**, not just quick fixes.
- Add comment for any **bug fix or optimization.**
- Document any **extra improvements** you make in your submission.

Good luck 🚀
