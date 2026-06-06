# Votelive

**Free, real-time voting for African student communities.**

Live at [votelive.click](https://votelive.click)

---

## What is this?

Votelive is a web app that lets student communities run polls and elections in real time.

Built this primarily for Nigerian university students. The ability to be able to vote from the comfort of your hostel, with votes coming in live, is genuinely different from anything I'd seen before. That's what this is trying to be.

It's free. No accounts required to vote on public polls.

---

## Features

- **Real-time results** — votes reflect instantly across all connected sessions
- **Matric number enforcement** — one vote per student, verified against their matric number (no duplicate votes)
- **Double-vote prevention** — handled via Firestore transactions, not just client-side checks

---

## Tech stack

- **Frontend** — React + Tailwind CSS
- **Backend** — Firebase (Firestore + Auth)
- **Hosting** — Vercel

---

## How it works

1. Admin creates a poll from the dashboard and shares the link
2. Students open the link, enter their matric number, and vote
3. Results update live — everyone in the room sees the same numbers at the same time


## Status

This is actively being used. It ran a live department election at FUTA (Federal University of Technology Akure) with real students. Some things are still rough — there are known edge cases and v2 features I haven't shipped yet — but the core voting logic works and has been tested under real conditions.

If you run into a bug or want to suggest something, open an issue.

---

## On AI assistance

I used AI while building this, but not the way people usually mean when they say that.

The architecture, the decisions, the debugging process, that's totally me. When I hit something i don't know (Firestore security rules behaving unexpectedly, transaction logic for double-vote prevention, stuff most Firebase tutorials don't bother to explain properly) I'd use it to think through the problem. Not to write the code.

I wrote every line in this codebase myself. I told Claude not to give me any code but to guide me through it like i write the code and send it and he just approves it or tell me where i made a mistake.

I think that distinction matters.

## Why I built this

Student elections in Nigerian universities are messy. Paper ballots get lost. Google Forms don't enforce uniqueness. Results take forever. I wanted something purpose-built for this, simple to use, hard to cheat, and actually live.

This is free and will stay free. It's for students.

---

## License

MIT
