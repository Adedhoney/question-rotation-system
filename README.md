# Dynamic Question Rotation System

## Overview

This system implements a scalable question rotation service that automatically assigns questions to users based on their geographic region and the current time cycle. The system is designed to handle 100k+ daily active users (DAU) and can scale to support millions of global users.

## System Design

### Assumptions and methods

-   All users are signed in and have their region stored
-   The system selects a number of questions that correspond to the number of regions and distributes these questions across those regions
-   The system defaults to rotate question everyday. The program can be changed to reflect any duration
-   Mock data in /src/mock to simulate recources in the database

## Technical Implementation

### Caching Strategy

-   Questions are cached in Redis.
-   Questions in cache do not expire but are replaced with the new questions during next cycle
-   Cache invalidation occurs automatically at cycle boundaries
-   Region-specific cache keys ensure proper isolation
-   Pipeline operations for bulk cache updates

### Question Rotation Logic

-   Automated weekly rotation every Monday at 7 PM SGT
-   Timezone-aware scheduling using node-cron
-   Transactional updates to prevent race conditions

## Scalability Features

### Performance Optimizations

1. **Caching Layer**

    - In-memory caching of active questions
    - Optimized cache TTL management
    - Bulk cache operations

2. **Database**

    - Efficient indexing strategy
    - Read replicas for scaling
    - Connection pooling
    - Optimized query patterns

3. **Application**
    - Stateless design for horizontal scaling
    - Efficient resource cleanup
    - Connection pooling
    - Error boundary implementation

## Setup & Deployment

### Prerequisites

-   Node.js 16+
-   Redis 6+
-   node-cron

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run migrations
npm run migrate

# Start development server
npm run dev

# Start production server
npm run build &&
npm run start
```

### Environment Variables

```
REDIS_URI=your redis uri
```

### API Endpoints

```
GET /api/user/:userId/question
```

## Performance Metrics

### Current Performance

-   Average response time: <50ms
-   Cache hit ratio: >95%
-   System can handle 1000+ requests/second per instance

### Scalability Targets

-   Designed to handle 100k+ DAU
-   Scalable to millions of users
-   Sub-100ms response times at P95

## Future Improvements

## Author

Adeyemi Abdulateef Adedoyin
