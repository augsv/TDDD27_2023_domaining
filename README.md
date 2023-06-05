## Link to project screencast
https://liuonline-my.sharepoint.com/:v:/g/personal/augsv102_student_liu_se/EeTgEkHUaDBMqpvKHu1taaYBg58KHrI2-T0s50T2se_qBQ?e=xODTK3

## Link to code screencast
https://liuonline-my.sharepoint.com/:v:/g/personal/augsv102_student_liu_se/ESu-mw7dUuFFu2grDS0PQoMBcken_4uwnDT06fdlXBsUNA?e=wv81cR 


# TDDD27_2023_domaining

Important! This is a pull mirror of a github repository with the same name. It was needed because the CI/CD runners in gitlab.liu.se does not seem to be configured to be able to deploy to external services.

## Functional specification

The goal of this project is to create a site which helps people to come up with brandable names for their startup, like https://squadhelp.com/.
On the site, 'sellers' will be able to list and sell domain names (such as example.com) to 'buyers'.
If I have time, there will also be a function where startups get to host naming contests.

It is basically an e-commerce site specialized in buying and selling domains.

## Techonological specification

This section describes the technologies that will realize my functional specification.

For authentication, I will integrate something like Auth0.
For payments, I will integrate something like Stripe.

### Client framework: Next.js

The main reason that I chose Next.js is that I get to choose rendering type for each individual page of the application. For marketing pages, I want them to be statically generated in order to cache them easily on a CDN and get good SEO. For more dynamic pages (such as a list of domains that are currently offered), I can choose server-side rendering to build the web page on request, alternatively, build the page at the client. I also love the fact that Next.js comes with Tailwind css out-of-the-box, since I became a big fan of styling my DOM directly in the HTML from using Bootstrap in the past. I absolutely don't like creating a whole new css file and come up with pointless class names just to add a grid layout to a page. However, I like the fact of having the option to create and import separate css files when creating specialized css such as animations. I chose to use Next.js with Typescript,  a language with which features I have never worked with before.

I have never worked with Next.js before, however, I have worked with similar frameworks such as Gatsby. The plan is to deploy my frontend on Vercel. My goal is also to become better at React, a framework that I am not 100% comfortable with yet.

In the future, it is possible that I might integrate a headless CMS with the frontend, however, for this course this will not be my main priority.

### Server framework: Express.js

My first consideration was how I was going to serve information about domain listings. I wanted a high-performant small API that could be accessed by my frontend.
I was considering going for a more full-fledged framework like Ruby on rails for the backend, however, when I explained my needs to ChatGPT I found that Express.js probably is the best choice. I chose Express.js because of performance reasons, possibly sacrificing development time. I have always been sceptical to backends built on javascript, but I find the non-blocking event loop in Node.js to make up for it.

As a fun fact, I took this weekend off to deploy my backend. I did this because, due to my experience, it is easier to deploy a hello world application rather than a complex application that communicates with 100 other APIs and databases. I have worked with Google Cloud Platform in the past, but this time I wanted to learn about AWS, a service that I had never worked with before. It took me about two days. I created an account on AWS, set up a cluster, task definition, and Fargate service in ECS. I set up an image repository in ECR, and created a Dockerfile in my own repository. I set up a CI/CD pipeline in github (by all means, check out .github/workflows/docker-image.yml for some epic devops stuff), with the necessary secret environment variables stored in the Github UI. Finally, I created created a load balancer service in EC2 togther with an Elastic IP, in order to get a static IPv4 address to my backend API. When I push to my main branch in my github repo, an automatic build and deploy is triggered! I have already learnt a lot of new stuff about CI/CD in this project, which is very nice!

The service is deployed at http://13.49.9.198/, and I already owned the domain name nlu.se from before this project, so I set up a DNS server in Route 53 that points http://api.nlu.se to this IP-address. However, as of the time of writing, it seems like the DNS change has not progagated fully yet.

This is my starting point, but as my project develops I think that the backend will expand to something of a microservices architecture.
