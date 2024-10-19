"use client";

export default function Login() {
    // popup new window, url = backend_url+/login
    window.open(process.env.BACKEND_URL + "/login", '_blank');
    // keep asking backend for token
    // if token is valid, redirect to ./
}