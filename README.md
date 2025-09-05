# Carsser Assignment

Assignment:

Write a web application that gives users the ability to select car make and manufacture year of a car, and see available vehicle types and models for the selected/entered criteria. Use the below APIs to retrieve the needed data.

Push the code to a new Github repo incremeantly while building the application
The application should be dockarized
Include step by step instructions to start the application locally
Host the solution on AWS (free tier)
Write the application using .NET Core (Preferably)
APIs:
Get All Makes: <https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json>
Get Vehicle Types for Make by Id: <https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/448?format=json>
Get Models for Make Id and a combination of Year and Vehicle Type: <https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015?format=json>
