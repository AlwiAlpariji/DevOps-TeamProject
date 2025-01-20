# Step 1: Menggunakan Node.js sebagai base image
FROM node:16-alpine

# Step 2: Set working directory di dalam container
WORKDIR /app

# Step 3: Copy package.json dan package-lock.json ke dalam container
COPY package*.json ./


# Step 4: Copy seluruh file project ke dalam container
COPY . .

# Step 5: Install dependencies
RUN npm install


# Jalankan Node
CMD ["npm", "run", "dev"]