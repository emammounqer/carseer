# Carsser Assignment

Assignment:

Write a web application that gives users the ability to select car make and manufacture year of a car, and see available vehicle types and models for the selected/entered criteria. Use the below APIs to retrieve the needed data.

Requirements:

- Push the code to a new Github repo incremeantly while building the application
- The application should be dockarized
- Include step by step instructions to start the application locally
- Host the solution on AWS (free tier)
- Write the application using .NET Core (Preferably)

APIs:

- Get All Makes: <https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json>
- Get Vehicle Types for Make by Id: <https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/448?format=json>
- Get Models for Make Id and a combination of Year and Vehicle Type: <https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015?format=json>

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm
- Docker (for containerized deployment)

### Local Development Setup

1. **Clone the repository**

   ```bash
   git clone git@github.com:emammounqer/carseer.git
   # or 
   git clone https://github.com/emammounqer/carseer.git
   ```

   ```bash
   cd carseer
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

5. **Build for production**

   ```bash
   pnpm build
   # or
   npm run build
   ```

6. **Preview production build**

   ```bash
   pnpm preview
   # or
   npm run preview
   ```

### Docker Setup

1. **Build the Docker image**

   ```bash
   docker build -t carseer-app .
   ```

2. **Run the container**

   ```bash
   docker run -p 8888:8888 carseer-app
   ```

3. **Access the application**
   Navigate to `http://localhost:8888`
