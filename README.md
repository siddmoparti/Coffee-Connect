# AWS Coffee Shop Project

A full-stack web application built with React frontend and AWS backend services.

## Features

- User authentication with AWS Cognito
- Coffee shop item management
- Responsive web interface
- Serverless backend with AWS Lambda

## Tech Stack

- **Frontend**: React, Vite, React Router
- **Authentication**: AWS Cognito
- **Backend**: AWS Lambda
- **Storage**: AWS S3
- **CDN**: AWS CloudFront
- **Database**: AWS DynamoDB

## Project Structure

```
├── frontend/          # React application
├── lambda/           # Lambda functions
└── LambdaWithLayer/  # Lambda functions with layers
```

## Getting Started

### Prerequisites

- Node.js
- AWS Account
- AWS CLI configured

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Configure AWS services (Cognito, Lambda, S3, CloudFront)

4. Update configuration in `frontend/src/main.jsx` with your AWS settings

5. Run locally:
   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## Deployment

1. Build the frontend: `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure CloudFront distribution
4. Invalidate CloudFront cache

## License

This project is open source and available under the [MIT License](LICENSE). 