# Digital Cow Hut

### Live Deployed server link

[https://digital-cow-hut.vercel.app/](https://digital-cow-hut.vercel.app/)

# Routes

### User

- Create User (Post): https://digital-cow-hut.vercel.app/api/v1/auth/signup
- Get All Users (Get) : https://digital-cow-hut.vercel.app/api/v1/users
- Get Single User by ID (Get) : https://digital-cow-hut.vercel.app/api/v1/users/648c47d56be1c468c0ca8450
- Update User by ID (Patch) : https://digital-cow-hut.vercel.app/api/v1/users/648c47d56be1c468c0ca8450
- Delete User by ID (Delete) : https://digital-cow-hut.vercel.app/api/v1/users/648c822f79923c1cf867eef2

### Cows

- Create Cow (Post) : https://digital-cow-hut.vercel.app/api/v1/cows/create-cow
- Get All Cows (Get) : https://digital-cow-hut.vercel.app/api/v1/cows
- Get Single Cow by ID (Get) : https://digital-cow-hut.vercel.app/api/v1/cows/648c44006254f0186170e02d
- Update Cow by ID (Patch) : https://digital-cow-hut.vercel.app/api/v1/cows/648c44006254f0186170e02d
- Delete Cow by ID (Delete) : https://digital-cow-hut.vercel.app/api/v1/cows/648c85f779923c1cf867ef07

### Pagination and Filtering routes of Cows

- Page and limit : https://digital-cow-hut.vercel.app/api/v1/cows/?page=1&limit=3
- sortBy and sortOrder : https://digital-cow-hut.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc
- minPrice and maxPrice : https://digital-cow-hut.vercel.app/api/v1/cows?minPrice=30000&maxPrice=70000
- location : https://digital-cow-hut.vercel.app/api/v1/cows?location=Rajshahi
- searchTerm : https://digital-cow-hut.vercel.app/api/v1/cows?searchTerm=sahi
