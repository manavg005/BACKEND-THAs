# Deploy to AWS

  1. Create an account on https://aws.amazon.com/
  2. Configure EC2’s instance Inbound rules to accept traffic from server port.
  3. Install `nvm` and `node` in the instance
  4. Use Git to clone source code to the instance. In order to do that in the Linux instance, we need to:
  5. Generate `SSH` key in the instance and add it to GitHub settings
  6. Install Git and clone the repo
  7. Install app’s dependencies along with PM2
  8. Run the Node.js server
 
 ### HURRAY! Your instance is running a Node.js server now 😎
