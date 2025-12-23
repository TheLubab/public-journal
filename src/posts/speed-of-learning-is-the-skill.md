---
title: Software engineering isn't about knowing every framework. It's about how fast you can master a new one.
date: 2025-12-22
tags: ["post", "programming"]
layout: post.njk
description: How I built a NestJS microservices auth system in 5 hours with zero prior NestJS experience.
---

I recently tackled a technical challenge for a role I wanted at XBorg: Build an Auth system with Google OAuth and HttpOnly cookies, with bonus points for doing it as Microservices.

The catch? The required stack was **NestJS** + **@nest/microservices** + **TypeORM**.
My experience with NestJS? **Zero**.

But I knew it can't be that hard. I've built hundreds of APIs and full-stack websites. I understand patterns—Dependency Injection, Message Brokers, Stateless Auth (JWT), and Microservice architecture.

If you understand the patterns, the framework is just an implementation detail.

I didn't waste time on tutorials. 
I didn't let AI do it for me. 
I read the docs to map their terminology to the concepts I already knew. 
I used AI to explain things where their docs was not clear.

In a few hours, I had a fully distributed architecture running in Docker: API Gateway, Auth Service, and User Service, all connected via Redis.

### The Lesson:

- Frameworks are temporary. Start learning patterns. 

- AI should sharpen you, not replace your thinking.
